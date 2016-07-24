window.glitch = {
    init: function() {
        $.ajax({
            url: "../img/gray.jpeg",
            beforeSend: function(x) {
                if (x && x.overrideMimeType) {
                    x.overrideMimeType("text/plain; charset=x-user-defined");
                }
            },
            success: glitch.loaded
        })
        $(window).on("keyup", function(e) {
            value = $("#text").html()
            $("#link").val(window.location.href + escape(value))
            glitch.generateGlitch(value)
        })
        $("#text").focus()
    },
    loaded: function(data) {
        glitch.data = data
        str = $("#text").html()
        if (window.location.hash) {
            str = unescape(window.location.hash.split("#")[1])
            $("#text").html(str)
        }
        glitch.generateGlitch(str)
    },
    generateGlitch: function(seed) {
        if (seed == "") return;
        output = ""
        // janky magic
        while (output.length < 100000) {
            output += seed
        }
        $("#bg").attr("src", "data:image/png;base64," + base64encode(this.data + output));
    }
}

// helpers

function base64encode(data) {
    return btoa(data.replace(/[\u0100-\uffff]/g, function(c) {
        return String.fromCharCode(c.charCodeAt(0) & 0xff);
    }));
}
// Base 64 encoding function, for browsers that do not support btoa()
// by Tyler Akins (http://rumkin.com), available in the public domain
if (!window.btoa) {
    function btoa(input) {
        var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        do {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
        } while (i < input.length);
        return output;
    }
}
$(function(){
    glitch.init()
})

//IT'S A REAL MESS IN HERE

// Process:
// unmask an image until it's oversaturated and unrecognizable
// sample a portion of the modified pixels
// scale them and then redraw the image (without antialiasing)
$(function() {

    var num = 7;
    unmask = function(imgToProcess) {
        num--;
        if (num <= 0) {
            Pixastic.process(imgToProcess, "pixelizeAndScale", {
                multiplier:10
            }, function(){
                // $('<img id="chair" src="pixel_chair_filled.gif">').appendTo("body")
            })
            num = 7;
            return;
        }
        Pixastic.process(imgToProcess, "unsharpmask", {
            amount: 500,
            radius: 5,
            threshold: 0
        }, unmask);

    }
    transform = function() {
        var x = Math.floor(Math.random() * img.width - 50)
        var y = Math.floor(Math.random() * img.height - 50)
        Pixastic.process(img, "crop", {
            rect: {
                left: x,
                top: y,
                width: 50,
                height: 50
            }
        }, unmask)
    }
    var img = new Image();
    img.onload = function(){
        transform()
        // setInterval(transform, 50)
    }

//$(img).appendTo("body");
// img.src = "http://mjacobs.me/spectrum.jpg";
// img.src = "http://mjacobs.me/tim.jpg";
img.src = "http://mjacobs.me/brainbow.jpg";
// img.src = "http://mjacobs.me/trees.jpg";
})

//extend pixastic to do the dirty stuff
Pixastic.Actions.pixelizeAndScale = {
    process : function(params) {
        if (Pixastic.Client.hasCanvas()) {
            var multiplier = parseInt(params.options.multiplier,10);
            var canvas = params.canvas;

            var width = canvas.width * multiplier
            var height = canvas.height * multiplier
            var copy = document.createElement("canvas");
            copy.width = width;
            copy.height = height;
            
            pixels = canvas.getContext("2d").getImageData(0,0,width,height)
            var targetContext = copy.getContext("2d")
                        
            for (var i = 0, il = pixels.data.length; i < il; i += 4) {
                    var r = pixels.data[i]
                    var g = pixels.data[i + 1]
                    var b = pixels.data[i + 2]
                    var a = pixels.data[i + 3]

                    col = Math.floor((i/4)/width) * multiplier
                    row = ((i/4) % height) * multiplier

                    targetContext.fillStyle = "rgba(" + r + "," + g + "," + b + "," +a + ")"
                    targetContext.fillRect(col,row,multiplier,multiplier)
            }


            canvas.width = width;
            canvas.height = height;

            canvas.getContext("2d").drawImage(copy,0,0);

            params.useData = false;
            return true;
        }
    },
    checkSupport : function() {
        return Pixastic.Client.hasCanvas();
    }
}
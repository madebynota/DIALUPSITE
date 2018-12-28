const drawOnPath = '/';
var browser;

function setup() {
    if (window.location.pathname != drawOnPath) {
        return;
    }

    browser = getBrowser();

    if (browser == "safari") {
        setupAndrewFace();
    }
    else {
        setupBoFace();
    }
}

function draw() {
    if (window.location.pathname != drawOnPath) {
        return;
    }

    if (browser == "safari") {
        drawAndrewFace();
    }
    else {
        drawBoFace();
    }

}

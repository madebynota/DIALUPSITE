var browser;

function setup() {
    browser = getBrowser();

    if (browser == "safari") {
        setupAndrewFace();
    }
    else {
        setupBoFace();
    }
}

function draw() {
    if (browser == "safari") {
        drawAndrewFace();
    }
    else {
        drawBoFace();
    }
}
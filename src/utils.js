import browser from 'detect-browser';

class Utils {
    static arrayShuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
    static getBrowser() {
        return browser.name;
    }
}

//Adds function to global scope to be used by animation scripts.
window.getBrowser = Utils.getBrowser;

export default Utils;
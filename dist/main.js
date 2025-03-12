"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToKMB = convertToKMB;
function convertToKMB(amount) {
    if (typeof amount !== 'number' || isNaN(amount)) {
        throw new Error("Please, the value should be a number");
    }
    var amountToString = amount.toString();
    var amountToArray = amountToString.split("");
    var lengthOfNumber = amountToArray.length;
    if (lengthOfNumber === 6) {
        var firstFewLetter = amountToArray.splice(0, 3);
        var value = firstFewLetter.join("");
        var result = parseInt(value) / 10;
        return "".concat(result, "K");
    }
    if (lengthOfNumber >= 7 && lengthOfNumber <= 9) {
        var firstFewLetter = amountToArray.splice(0, lengthOfNumber - 3);
        var value = firstFewLetter.join("");
        var result = parseInt(value) / 1000;
        return "".concat(result, "M");
    }
    if (lengthOfNumber >= 10 && lengthOfNumber <= 12) {
        var firstFewLetter = amountToArray.splice(0, lengthOfNumber - 6);
        var value = firstFewLetter.join("");
        var result = parseInt(value) / 1000;
        return "".concat(result, "B");
    }
    return amount.toString();
}

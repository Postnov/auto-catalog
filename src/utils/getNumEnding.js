export default function getNumEnding(number, endingArray) {
    var number = number % 100;
    if (number>=11 && number<=19) {
        var ending = endingArray[2];
    }
    else {
        var i = number % 10;
        switch (i) {
            case (1): ending = endingArray[0]; break;
            case (2):
            case (3):
            case (4): ending = endingArray[1]; break;
            default: ending = endingArray[2];
        }
    }
    return ending;
}
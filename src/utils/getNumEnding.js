export default function getNumEnding(number, endingArray) {
    const num = number % 100;
    let ending;

    if (num>=11 && num<=19) ending = endingArray[2];
    else {
        let i = num % 10;
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
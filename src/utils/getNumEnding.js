export default function getNumEnding(number, endingArray) {
  const num = number % 100;
  const [fEnding, sEnding, tEnding] = endingArray;
  let ending;

  if (num >= 11 && num <= 19) ending = sEnding;
  else {
    const i = num % 10;
    switch (i) {
      case (1): ending = fEnding; break;
      case (2):
      case (3):
      case (4): ending = sEnding; break;
      default: ending = tEnding;
    }
  }
  return ending;
}

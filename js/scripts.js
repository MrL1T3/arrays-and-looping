//business logic

function specialCounter(number) {
  let countArray = [1]
  let numberCounter = 2;
  let indexCounter = 0;
  for (let i = 0; i < number-1; i++) {
    if (indexCounter < number) {
      countArray.push(numberCounter);
      indexCounter ++;
      numberCounter ++;
    }
  }
}
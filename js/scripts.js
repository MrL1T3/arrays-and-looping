//business logic

function specialCounter(number) {
  let countArray = [0]
  let finalArray = [0];
  let numberCounter = 2;
  let indexCounter = 0;
  for (let i = 0; i < number; i++) {
    if (indexCounter < number) {
      countArray.push(numberCounter);
      indexCounter ++;
      numberCounter ++;
    }
  }

}
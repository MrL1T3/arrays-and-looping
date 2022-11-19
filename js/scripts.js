//business logic

function specialCounter(number) {
  let countArray = [0]
  let finalArray = [];
  let numberCounter = 1;
  let indexCounter = 0;
  for (let i = 0; i < number; i++) {
    if (indexCounter < number) {
      countArray.push(numberCounter);
      indexCounter ++;
      numberCounter ++;
    }
  }
  for (element of countArray) {
    console.log(element)
    if (element.toString().match(/3/) != null){
      finalArray.push("Won't you be my neighbor?")
    }
    else {
      finalArray.push(countArray.indexOf(element))
    }
  }
  return finalArray;
  //console.log(countArray);
}
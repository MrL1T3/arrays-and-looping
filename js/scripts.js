//business logic

function specialCounter(number) {
  countArray.apply(null, Array(number)).map(function (x, i) { return i; })
  return countArray;
}
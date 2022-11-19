Describe specialCounter()


Test: "It should return an array of integers 0 to 4 if the input number is 4"
Code:
let number = 4;
specialCounter(number);
Expected Output: [0, 1, 2, 3, 4]

Test: "It should push 'Won't you be my neighbor?' to a new array if the current number contains 3"
Code:
let number = 4;
specialCounter(number);
Expected Output: [0, 1, 2, "Won't you be my neighbor?", 4]

Test: "It should push 'Boop!' to a new array if the current number contains 2"
Code:
let number = 4;
specialCounter(number);
Expected Output: [0, 1, "Boop!", "Won't you be my neighbor?", 4]

Test: "It should push 'Beep!' to a new array if the current number contains 2"
Code:
let number = 4;
specialCounter(number);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4]
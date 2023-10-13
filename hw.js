// 1.   Write an function that contains an if/else statement for the following requirements:
// - If student gets 80 or higher: console log  You did a good job
// - If students get 70 or above: console log Keep trying
// - If students get 60 or above: console log ehhhh
// - If students get 55 or above: console log Not to good
// // - Any grade lower than 55 is Bad Grade But You'll Get Em Next Time
// const getGrade = (x) => {
//   // If students get 80 or above: console log You did a good job
//   if (x >= 80) {
//     return console.log("You did a good job");
//   }
//   // If students get 70 or above: console Keep trying
//   else if (x >= 70) {
//     return console.log("Keep trying");
//   }
//   // If students get 60 or above: console log ehhhh
//   else if (x >= 60) {
//     return console.log("Ehhhh");
//   }
//   // if students get 55 or above: console log Not so good
//   else if (x >= 55) {
//     return console.log("Not so good");
//   }
//   // Any grade lower than 55 is F
//   else {
//     return console.log("Bad Grade but You'll get them next time");
//   }
// };

// getGrade(Math.floor(Math.random() * 100));

// 2.   Write a function that prints out multiples of 10 up to a given input (argument)
function decaMultiples(x) {
  let num = 0;
  while (num < x - 9) {
    num += 10;
    console.log(num);
  }
  if (x < 10) {
    console.log("There are no multiples of 10 below this number.");
  }
  console.log(`The number entered is ${x}`);
}
decaMultiples(Math.floor(Math.random() * 799));

// 3.   Write a function that takes bill amount and item price and says how many quarters they'd get in return

const howManyQuarters =
//4.    Write a function that prints out how many bills you would recieve in change after paying a certain amount.  Return in as large denominations as possible. Parameters should be amount paind and amount cost

// 5.   Write a program that uses console.log to print all the numbers from 1 to 100 with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

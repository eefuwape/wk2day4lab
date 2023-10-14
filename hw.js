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
// function decaMultiples(x) {
//   let num = 0;
//   while (num < x - 9) {
//     num += 10;
//     console.log(num);
//   }
//   if (x < 10) {
//     console.log("There are no multiples of 10 below this number.");
//   }
//   console.log(`The number entered is ${x}`);
// }
// decaMultiples(Math.floor(Math.random() * 799));

// 3.   Write a function that takes bill amount and item price and says how many quarters they'd get in return

// const howManyQuarters = (x, y) => {
//   let change = x - y;
//   if (y < x) {
//     let counter = 0;
//     while (x > 0) {
//       x -= 0.25;
//       counter++;
//     }
//     console.log(
//       `Your change is $${change}, and you will get ${counter} quarters.`
//     );
//   } else {
//     console.log("You have no change, so you get no quarters.");
//   }
// };

// howManyQuarters(
//   Math.floor(Math.random() * 100),
//   Math.floor(Math.random() * 100)
// );
//4.    Write a function that prints out how many bills you would recieve in change after paying a certain amount.  Return in as large denominations as possible. Parameters should be amount paind and amount cost
// function countYourBills(x, y) {
//   let hundredBillCount = 0,
//     fiftyBillCount = 0,
//     twentyBillCount = 0,
//     tenBillCount = 0;
//   let fiveBillCount = 0,
//     twoBillCount = 0,
//     OneDollarCount = 0;

//   let z = x - y,
//     change = x - y;
//   if (change > 0) {
//     while (change > 0) {
//       while (change >= 100) {
//         change -= 100;
//         hundredBillCount++;
//       }
//       while (change >= 50) {
//         change -= 50;
//         fiftyBillCount++;
//       }
//       while (change >= 20) {
//         change -= 20;
//         twentyBillCount++;
//       }
//       while (change >= 10) {
//         change -= 10;
//         tenBillCount++;
//       }
//       while (change >= 5) {
//         change -= 5;
//         fiveBillCount++;
//       }
//       while (change >= 2) {
//         change -= 2;
//         twoBillCount++;
//       }
//       while (change >= 1) {
//         change -= 1;
//         OneDollarCount++;
//       }
//     }
//     let totalBillCount =
//       hundredBillCount +
//       fiftyBillCount +
//       twentyBillCount +
//       tenBillCount +
//       fiveBillCount +
//       twoBillCount +
//       OneDollarCount;

//     console.log(
//       `Your change of $${z} will result in a total of ${totalBillCount} bills. You will recieve
//       ${hundredBillCount} $100 bill(s). ${fiftyBillCount} $50 bill(s), ${twentyBillCount} $20 bill(s),
//       ${tenBillCount} $10 bill(s), ${fiveBillCount} $5 bill(s), ${twoBillCount} $2 bill(s) and ${OneDollarCount} $1 Bill(s)`
//     );
//   } else {
//     console.log("You don't have enough money");
//   }
// }

// countYourBills(
//   Math.floor(Math.random() * 1000),
//   Math.floor(Math.random() * 499)
// );
// 5.   Write a program that uses console.log to print all the numbers from 1 to 100 with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
const funkyFunction = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0 && i % 5 !== 0) {
      console.log("Fizz");
    } else if (i % 3 != 0 && i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

funkyFunction();

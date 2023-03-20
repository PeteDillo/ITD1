/*
Pedro Delgadillo
Mar 9 2023
2.5 Code Exercise 04: Conditionals
*/

alert("Hello and welcome to the Conditionals Assignment!");

alert(
  "I highly suggest opening the Console first and then refreshing the page."
);

//problem 1
alert(
  "First Up Grade Letter Calculator. give me the number grade and I will give you the letter grade"
);

//prompt the user for grade
let userGrade = prompt("What number grade did you get in the class?");

//check vaule of userGrade and print message of letter grade
if (userGrade >= 90 && userGrade <= 100) {
    console.log(
      `You have a(n) ${userGrade}%, which means you have earned a(n) A in the class!`
    );
  } else if (userGrade >= 80 && userGrade <= 89) {
    console.log(
      `You have a(n) ${userGrade}%, which means you have earned a(n) B in the class!`
    );
  } else if (userGrade >= 70 && userGrade <= 79) {
    console.log(
      `You have a(n) ${userGrade}%, which means you have earned a(n) C in the class!`
    );
  } else if (userGrade >= 60 && userGrade <= 69) {
    console.log(
      `You have a(n) ${userGrade}%, which means you have earned a(n) D in the class!`
    );
  } else if (userGrade >= 0 && userGrade <= 59) {
    console.log(
      `You have a(n) ${userGrade}%, which means you have earned a(n) F in the class!`
    );
  } else {
    //Display error message if the grade is outside of the range 0-100
    console.log("An error has occurred, please refresh the webpage and try again.");
  }
  
//problem 2
alert("Next Up, It is Pumplkin Picking Time. Tell me how much your pumpkin weighs and I will tell you what it costs.")

// prompt the user for the weight of the pumpkin and convert the user's input to a number
let pumpkinWeight = parseFloat(prompt("Enter the weight of the pumpkin:"));

// Check if the input is a valid number
if (pumpkinWeight < 0) {
  // Display an error message if the input is not a valid number or is negative
  console.log("An error has occurred, please refresh the webpage and try again.");
} else {
  // Calculate the cost based on the weight of the pumpkin
  let cost = 0;
  if (pumpkinWeight < 5.5) {
    cost = pumpkinWeight * 1.00;
  } else if (pumpkinWeight < 10.75) {
    cost = pumpkinWeight * 0.90;
  } else if (pumpkinWeight < 25) {
    cost = pumpkinWeight * 0.80;
  } else if (pumpkinWeight < 50) {
    cost = pumpkinWeight * 0.70;
  } else if (pumpkinWeight <= 100) {
    cost = pumpkinWeight * 0.60;
  } else {
    cost = pumpkinWeight * 0.50;
  }

  // Print the result to the console
  console.log(`Your pumpkin of ${pumpkinWeight}lbs costs $${cost}.`);
}

//problem 3
alert('The last problem is Loyalty Card. I will determine if you get a discount on your purchases')

// Prompt user for cost of two items and convert the user's input to a number
let item1Cost = parseFloat(prompt("What is the cost your first item?"));
let item2Cost = parseFloat(prompt("What is the cost your second item?"));

// Prompt user for preferred customer status
let preferredStatus = prompt("Are you a preferred customer? Please only answer yes or no!").toLowerCase();

// Calculate total cost
let totalCost = item1Cost + item2Cost;

// Check if preferred customer status is valid
if (preferredStatus !== "yes" && preferredStatus !== "no") {
  console.log("You have typed in something wrong and I can not calculate the total.");
} else {
  // Calculate discount if user is a preferred customer
  if (preferredStatus === "yes") {
    let discount = totalCost * 0.15;
    totalCost -= discount;
    console.log(`Your total purchase is $${totalCost}, which includes your 15% discount.`);
  } else {
    console.log(`Your total purchase is $${totalCost}.`);
  }
}

/*
Pedro Delgadillo
Mar 6 2023
1.3 Code Exercise 02: Story Time
*/

// This line of code displays a pop-up message explaining what the app does.
alert("This is a very basic story time adlib just answers the prompts");
// Prompts the user for input to get values for variables.
let name = prompt("Please enter your name:");
let color = prompt("Please enter your favorite color:");
let number = prompt("Please enter your favorite number:");
let movie = prompt("Please enter your favorite movie:");
let animal = prompt("Please enter your favorite type of animal:");
let adjective = prompt("Please enter your favorite adjective:");

// This line of code displays a message to the user to check the console for the output.
alert('Check the console')

// This line of code outputs a message to the browser console using the input values from the prompts.
console.log("Once upon a time, there was a person named " + name + " who loved the color " + color + " and the number " + number + ". They had a particular fondness for the movie " + movie + ", and would often quote their favorite lines. They also had a passion for " + animal + "s, and spent many weekends volunteering at a local animal shelter. Today, they woke up feeling very " + adjective)

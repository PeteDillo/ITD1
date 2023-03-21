/*Pedro Delgadillo
20 MAR
3.4 Code Exercise 05: QuerySelector */

// //alert user of what is going on
alert("Hello and welcome to the Discount Double Check!");
alert(
  "I will ask you your prices of 2 items and then calculate your total, with any discounts that apply!"
);

//problem #1 prompts
//prompt user for their item's cost
let item1Cost = parseFloat(prompt("What is the cost of your first item?"));
let item2Cost = parseFloat(prompt("What is the cost of your second item?"));

alert(
  "let's find out if you can cross the desert with the gas you have left or if you should stop for gas"
);

//problem #2 prompts
//prompt user for detail of their car
let carMaxGallons = parseInt(
  prompt("What is the number of gallons your car's gas tank can hold?")
);
//divided by 100 to convert into decimal for percent
let percentOfGallons =
  parseInt(prompt(`what percentage of those ${carMaxGallons} are left?`)) / 100;
let carMilesPerGallon = parseInt(
  prompt("How many miles per gallon can your car go?")
);

//problem #1 logic

//calc for total cost
let totalBeforeDiscount = item1Cost + item2Cost;
//Will do the math for after discount and store it here
let totalAfterDiscount;

//target the first item and display information
document.querySelector(
  "#item1Cost"
).innerHTML = `Item #1 Cost: $${item1Cost.toFixed(2)}`;

//target the second item and display information on html
document.querySelector(
  "#item2Cost"
).innerHTML = `Item #2 Cost: $${item2Cost.toFixed(2)}`;

//conditionals for displaying the total
//If you spend exactly $100 or more, you will get a 10% discount on your total purchase.
if (totalBeforeDiscount >= 100) {
  //math for total after discount
  totalAfterDiscount = totalBeforeDiscount - totalBeforeDiscount * 0.1;
  //updating the HTML to new total after discounts
  document.querySelector(
    "#problem1Results"
  ).innerHTML = `Your total purchase is $${totalAfterDiscount.toFixed(
    2
  )}, which includes your 10% discount`;
  //adding the class to change the background color to green and text color to white
  document.querySelector("#problem1Results").className = "discountApplied";
}
//If you spend between exactly $50 and up to but not including $100, you will get a 5%
else if (totalBeforeDiscount >= 50) {
  //math for total after discount
  totalAfterDiscount = totalBeforeDiscount - totalBeforeDiscount * 0.05;
  //updating the HTML to new total after discounts
  document.querySelector(
    "#problem1Results"
  ).innerHTML = `Your total purchase is $${totalAfterDiscount.toFixed(
    2
  )}, which includes your 5% discount`;
  //adding the class to change the background color to green and text color to white
  document.querySelector("#problem1Results").className = "discountApplied";
}
//If you spend less than $50, you will get no discount.
else if (totalBeforeDiscount < 50) {
  document.querySelector(
    "#problem1Results"
  ).innerHTML = `Your total purchase is $${totalBeforeDiscount.toFixed(2)}`;
  //adding the class to change the background color to yellow and text color to black
  document.querySelector("#problem1Results").className = "discountDenied";
}
//Handle any errors by showing alert
else {
  alert("Something went wrong, please refresh this page and try again");
}

//problem #2 logic
//calc for total gallons in the car
let totalGallonsInCar = carMaxGallons * percentOfGallons;
//calc for the total traval distance
let totalCanTravel = totalGallonsInCar * carMilesPerGallon;


//check for error to make sure input is a number alert that there is an issue
if (isNaN(totalCanTravel)) {
  alert("Something went wrong, please refresh this page and try again");
} else {
  //target the text button and display depending on miles
  document.querySelector("#textButton").addEventListener("click", function (e) {
    //If the distance is equal or greater than 200 you can make the drive
    if (totalCanTravel >= 200) {
      document.querySelector(
        "#text"
      ).innerHTML = `Yes, you can drive ${totalCanTravel} miles and you can make it without stopping for gas!`;
    }
    //if distance is less than 200 you cannot make the drive
    else if (totalCanTravel < 200) {
      document.querySelector(
        "#text"
      ).innerHTML = `You can only drive ${totalCanTravel} miles more, better get gas now while you can!`;
      document.querySelector("#picture").src = "IMG/notEnoughGas.jpg";
    }
    //set the ID to visible
    document.querySelector("#text").style.visibility = "visible";
  });

  //target the graphic button and display depending on miles
  document
    .querySelector("#graphicButton")
    .addEventListener("click", function (e) {
      //If the distance is equal or greater than 200 you can make the drive
      if (totalCanTravel >= 200) {
        document.querySelector("#picture").src = "IMG/enoughGas.jpg";
      }
      //if distance is less than 200 you cannot make the drive
      else if (totalCanTravel < 200) {
        document.querySelector("#picture").src = "IMG/notEnoughGas.jpg";
      }
      //set the ID to visible
      document.querySelector("#picture").style.visibility = "visible";
    });
}

 /*Pedro Delgadillo

 */

 console.log(document.querySelector("#firstID").innerHTML);

// old vaule = new vaule 
 
document.querySelector("#firstID").innerHTML = "Changed text";

//create new varible to hold vaule
 let answer = document.querySelector(".firstClass");
 
 console.log(answer.innerHTML);

 answer.innerHTML = 'This can be any text you want';

//prompt for  user name
let userName = prompt("Type in your name");
//target greeting ID
document.querySelector("#greeting").innerHTML ="Hello " + userName + " welcome to my page";

//prompt for item and cost
let itemName= prompt("Give me an item name")
let itemCost= parseFloat(prompt(`how much does a ${itemName} cost?`))

//put item info into h3
document.querySelector("#itemInfo").innerHTML = `One ${itemName} costs $${itemCost}`;

//how much does 10 items cost?
let tenItems= 10*itemCost

//output
document.querySelector("#tenItemCost").innerHTML = `Ten ${itemName}s cost $${tenItems}`

// change the css style of an html element
document.querySelector("#itemInfo").style.backgroundColor="red"


//prompt the suer for yellow or violet
let userChoice = prompt("Do you ant to see yellow or violet")

//create a conditional for each choice

if(userChoice === 'yellow'){
    alert("if statement ran")
}
else if(userChoice === "violet"){
    //change the class to second class 
    alert("esle if ran")
    document.querySelector(".firstClass").className = "secondClass"
    document.querySelector("#changeText").className="secondClass";
}
else{
    alert("else runs")
    alert("you typed in something other than yellow or violet.")
}

// //Target the ID and give it a class
// document.querySelector("#changeText").className="secondClass";


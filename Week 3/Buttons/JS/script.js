/*Pedro
20 MAR
Buttons */

//target the button
document.querySelector("#button1").addEventListener("click", function(e)
{
    alert("Button Has been Clicked!");

});

//add event listener to each button
document.querySelector("#makePink").addEventListener("click", function(e){
//target the h1 tag and change it's background color to pink
document.querySelector("#firstH1").className = "pink";


})

document.querySelector("#makeBlue").addEventListener("click", function(e){
    //target the h1 tag and change it's background color to blue
    document.querySelector("#firstH1").className = "blue";
    
    
    })

//add listeners for the image buttons
document.querySelector("#bat").addEventListener("click", function(e){
    //target the image and change the source
    document.querySelector("#picture").src = "IMG/bat.jpg"
})
//add listeners for the image buttons
document.querySelector("#cat").addEventListener("click", function(e){
    //target the image and change it to cat image 
    document.querySelector("#picture").src = "IMG/cat.jpg"
})

//add listeners for the image buttons
document.querySelector("#rat").addEventListener("click", function(e){
    //target the image and change it to rat image
    document.querySelector("#picture").src = "IMG/rat.jpg"
})

//use a user prompt ofr switching the image
let userAnimal = prompt("What animal wouldyou like to see a pictyure of? Bat, Cat or Rat?")

if(userAnimal === "bat"){
    //change the picture to bat
    document.querySelector("#picture").src = "IMG/bat.jpg"
}
else if(userAnimal==="cat"){
    //change the picture to cat
    document.querySelector("#picture").src = "IMG/cat.jpg"
}
else if(userAnimal ==="rat"){
    //change the picture to rat
    document.querySelector("#picture").src = "IMG/rat.jpg"
}
else{
    alert("you have an chose an animal that I do not have a picture of")
}
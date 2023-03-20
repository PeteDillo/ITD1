/*Pedro
20 MAR
Formatting Results */

//Calculate the area of a rectangle base on user prompt values
alert("We will calculate the area of a rectangel, but we need the measurements from you")



//prompt the user for the height and weight 
//parse for rigth data type
let height = parseFloat(prompt("what is the height of your rectangle?", "Ex 7.5"));
let width = parseFloat(prompt("what is the width of your rectangle?", "Ex 6.75"));

// do the math
let area = height*width;

//Give the rsules on html page
//fill in the HTML Tags

//target height
document.querySelector("#height").innerHTML = `Height: ${height}`
//target width
document.querySelector("#width").innerHTML = `Width: ${width}`

//target results
//document.querySelector("#finalResults").innerHTML = `Area of Rectangle: ${Math.round(area)}`
document.querySelector("#finalResults").innerHTML = `Area of Rectangle: ${area.toFixed(2)}`


//give the user a choice to show or not the graphic

let showGraph = prompt('would you like to see the graph?', "yes or no")

//conditionals
if(showGraph.toLowerCase() =='yes'){
    alert("yes")
    if(area>=50){
        document.querySelector("#graph").src = "IMG/areaGreater.jpg"
    }
    else if(area<50){
        document.querySelector("#graph").src = "IMG/areaLess.jpg"
    }
    else{
        alert("something is wrong")
    }

    //Make it visule
    document.querySelector("#graph").style.visibility = "visible"
    
}
else if(showGraph.toLowerCase() =='no'){
    alert("thank you for using my calculator")
}
else{
    alert("you have typed in something wrong")
}
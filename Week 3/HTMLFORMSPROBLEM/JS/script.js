//how many pizzza should I order for a party
//how many slices would each person eat?
//how many slices are in a pizza?


document.querySelector("#calcPizza").addEventListener("click",function(e){

    //validation
    if(document.querySelector("#numOfPeople").reportValidity() && 
    document.querySelector("#slicesPerPerson").reportValidity() && 
    document.querySelector("#slicesPerPizza").reportValidity()){

        //get vaules of each input
        let numPeople = parseInt(document.querySelector("#numOfPeople").value);
        let numSlicePerPerson = parseInt(document.querySelector("#slicesPerPerson").value);
        let numSlicesPizza = parseInt(document.querySelector("#slicesPerPizza").value);


        //do the math

        //how many slices do we need?
        let totalSlicesNeeded = numPeople * numSlicePerPerson
        //alert(`total number slices needed ${totalSlicesNeeded}`)

        //how many pizzas should i order
        //slices need / # of slices per pizza
        let numPizza = totalSlicesNeeded/numSlicesPizza
        //alert(`total number pizzas needed ${Math.ceil(numPizza)}`)

        //final results
        document.querySelector("#finalAnswer").value = Math.ceil(numPizza);
        document.querySelector("#textResults").innerHTML = `You neeed to buy ${Math.ceil(numPizza)} pizzas in order to have enough slices`;
       }
    
})
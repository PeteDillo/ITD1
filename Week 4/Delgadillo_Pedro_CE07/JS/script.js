/*Pedro Delgadillo
MAR 25
4.2 Code Exercise 07: Final Project */

//Button Listener
document.querySelector("#buttonForBMI").addEventListener("click", function(e){
    //validation
    if(
      document.querySelector("#heightFT").reportValidity() &&
      document.querySelector("#heightIn").reportValidity() &&
      document.querySelector("#weight").reportValidity()
    ){
        //declare varible for results
        let weight = parseFloat(document.querySelector("#weight").value)
        let height = parseFloat(document.querySelector("#heightFT").value * 12) + parseFloat(document.querySelector("#heightIn").value)
        //calc BMI [weight (lb) / height (in) / height (in)] x 703
        let BMI = ((weight / (height * height)) * 703).toFixed(1);
        //set the style of the graphic to visble
        document.querySelector("#graphicResults").style ="height: 360px; visibility: visble;"
        //conditionals
        if (BMI < 18.5) {
            //target results for underWeight and set graphic according to BMI
            document.querySelector("#textResults").innerHTML = `Your BMI is ${BMI}, indicating your weight is in Under Weight for adults of your height.`
            document.querySelector("#graphicResults").src = "IMG/underWeight.jpg"
          } else if (BMI >= 18.5 && BMI < 24.9) {
            //target results for healthyWeight and set graphic according to BMI
            document.querySelector("#textResults").innerHTML = `Your BMI is ${BMI}, indicating your weight is in Healthy Weight for adults of your height.`
            document.querySelector("#graphicResults").src = "IMG/healthyWeight.jpg"
          } else if (BMI >= 24.9 && BMI < 29.9) {
            // target results for overWeight and set graphic according to BMI
            document.querySelector("#textResults").innerHTML = `Your BMI is ${BMI}, indicating your weight is in Over Weight for adults of your height.`
            document.querySelector("#graphicResults").src = "IMG/overWeight.jpg"

          } else if (BMI >= 29.9 && BMI < 35) {
            //target results for obeseWeight and set graphic according to BMI
            document.querySelector("#textResults").innerHTML = `Your BMI is ${BMI}, indicating your weight is in Obese Weight for adults of your height.`;
            document.querySelector("#graphicResults").src = "IMG/obeseWeight.jpg"
          } 
          else if (BMI >= 35) {
            //target results for extremeObeseWeight and set graphic according to BMI
            document.querySelector("#textResults").innerHTML = `Your BMI is ${BMI}, indicating your weight is in Extreme Obese Weight for adults of your height.`;
            document.querySelector("#graphicResults").src = "IMG/extremeObeseWeight.jpg"
          } 
    }
})
/*Pedro Delgadillo
20 Mar
HTML forms */


//code the calc area button
document.querySelector("#calcArea").addEventListener("click",function(e){
    

    if(document.querySelector("#width").reportValidity() && document.querySelector("#height").reportValidity()){
        let height = document.querySelector("#width").value
        let width = document.querySelector("#height").value
        let area = width*height
        document.querySelector("#area").value = area
        document.querySelector("#finalResults").innerHTML = `The final area: ${area}`
    }


})




//target button
document.querySelector("#button1").addEventListener("click", function (e) {
  if (document.querySelector("#userName").reportValidity() && document.querySelector("#userEmail").reportValidity() && document.querySelector("#userURL").reportValidity() && document.querySelector("#userPassword").reportValidity()) {
    //get the users name from the form input and tell them hello
    let userName = document.querySelector("#userName").value;
    //get value of email
    let userEmail = document.querySelector("#userEmail").value;
    //get value of URL
    let userURL = document.querySelector("#userURL").value;
    //get passsword
    let userPassword = document.querySelector("#userPassword").value;

    alert(`Welcome to the page ${userName}`);
    alert(`Your Email is ${userEmail}`);
    alert(`Your URL is ${userURL}`);
    alert(`Your Password is ${userPassword}`);
  }
});

document.querySelector("#button2").addEventListener("click", function (e) {
  //report validtiy()
  console.log(document.querySelector("#num1").reportValidity());
  //create a conditional that will run if correct
  if (
    document.querySelector("#num1").reportValidity() &&
    document.querySelector("#num2").reportValidity()
  ) {
    //get the users name from the form input and tell them hello
    let userNum1 = parseFloat(document.querySelector("#num1").value);
    let userNum2 = parseFloat(document.querySelector("#num2").value);
    let total = userNum1 + userNum2;
    alert(`Woohoo the total is ${total}!`);
      //radio buttons
  if(document.querySelector("#blueChoice").checked){
    alert("Blue is checked");
  }
  else if(document.querySelector("#redChoice").checked){
    alert("Red is checked");
  } 
  else if(document.querySelector("#purpleChoice").checked){
    alert("Purple is checked");
  }
  }

  //get the checkboxes
  if(document.querySelector("#dogChoice").checked){
    alert("dog's are great")
  }
  if(document.querySelector("#catChoice").checked){
    alert("cat's are great")
  }
  if(document.querySelector("#birdChoice").checked){
    alert("bird's are great")
  }
});

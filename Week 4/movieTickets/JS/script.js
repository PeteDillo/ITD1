/*Pedro Delgadillo
24 MAR
Bringing it All together Problem #2 */

//Movie Ticket Calculator

//Button Code
document
  .querySelector("#calcTicketPrice")
  .addEventListener("click", function (e) {
    //validation
    if (
      document.querySelector("#age").reportValidity() &&
      document.querySelector("#timeHours").reportValidity() &&
      document.querySelector("#timeMins").reportValidity()
    ) {
      let age = document.querySelector("#age").value;
      let TimeHr = document.querySelector("#timeHours").value;
      let TimeMin = document.querySelector("#timeMins").value;

      //if you are a senior (55 or older)



      //create a varible to hold ticket price
      let ticketPrice = 12.00


      //create a conditianal to figure out ricket price
      if(age >= 55 || age <10){
            //person gets on a discount based on age
            ticketPrice = 7.00;

            //final results based on age 
            document.querySelector("#tickePrice").innerHTML=`You get the discount because of your age! The ticket is $${ticketPrice.toFixed(2)}`
      }
      else if(TimeHr>= 2  && TimeHr<=6 && document.querySelector("#pm").checked){

            //This means they get a discount based on time
            ticketPrice = 7.00;
            document.querySelector("#tickePrice").innerHTML=`You get the discount because of the time of your movie! The ticket is $${ticketPrice.toFixed(2)}`
            
      }
      else{
        //no discoutn 
        //full price ticket
        document.querySelector("#tickePrice").innerHTML=`The ticket is $${ticketPrice.toFixed(2)}`

      }
    }
  });

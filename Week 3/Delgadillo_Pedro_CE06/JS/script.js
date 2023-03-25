/*Pedro Delgadillo
20 MAR
3.6 Code Exercise 06: HTML Forms */

//Fill'er Up
//target convert button and listen for click event
document
  .querySelector("#convertButton")
  .addEventListener("click", function (e) {
    //check if valid number
    if (document.querySelector("#gallons").reportValidity()) {
      //save gallons for results later
      let gallonsToConvert = parseFloat(
        document.querySelector("#gallons").value
      );
      //condditionals
      //if quart is chosen we display the converted values and set the others to 0
      if (document.querySelector("#quartChoice").checked) {
        document.querySelector("#quartsResults").value = gallonsToConvert * 4;
        document.querySelector("#pintsResults").value = 0;
        document.querySelector("#cupsResults").value = 0;
      }
      //if pint is chosen we display the converted values and set the others to 0
      else if (document.querySelector("#pintChoice").checked) {
        document.querySelector("#pintsResults").value = gallonsToConvert * 8;
        document.querySelector("#cupsResults").value = 0;
        document.querySelector("#quartsResults").value = 0;
      }
      //if cups is chosen we display the converted values and set the others to 0
      else if (document.querySelector("#cupChoice").checked) {
        document.querySelector("#cupsResults").value = gallonsToConvert * 16;
        document.querySelector("#quartsResults").value = 0;
        document.querySelector("#pintsResults").value = 0;
      }
    }
  });

//Movie Star
//target movie button and listen for click event
document.querySelector("#movieButton").addEventListener("click", function (e) {
    //set visibitliy to visible
    document.querySelector("#picture").style.visibility = 'visible';

  //validate entry
  if (
    document.querySelector("#dvdNum").reportValidity() &&
    document.querySelector("#blurayNum").reportValidity() &&
    document.querySelector("#uvNum").reportValidity()
  ) {
    //calc total movies
    let totalMovies =
      parseInt(document.querySelector("#dvdNum").value) +
      parseInt(document.querySelector("#blurayNum").value) +
      parseInt(document.querySelector("#uvNum").value);
    //conditionals for ranking
    //If the user has under 50 movies Show the Bronze Star Graphic 
    if(totalMovies< 50){
        //target H1 and img tag and set ranking
        document.querySelector("#movieResults").innerHTML = `Your collection contains only ${totalMovies} movies, which makes you a bronze star member.`;
        document.querySelector("#picture").src = "IMG/bronzeStar.jpg";
    }   
    // If the user has 50 up to 100 movies Show the Silver Star Graphic 
    else if(totalMovies< 100){
        //target H1 and img tag and set ranking
        document.querySelector("#movieResults").innerHTML = `Your collection contains ${totalMovies} movies, which makes you a silver star member.`;
        document.querySelector("#picture").src = "IMG/silverStar.jpg";
    }
    //If the user has 100 movies or more Show the Gold Star Graphic
    else if(totalMovies>= 100){
        //target H1 and img tag and set ranking
        document.querySelector("#movieResults").innerHTML = `Wow! Your collection contains ${totalMovies} movies, which makes you a gold star member.`;
        document.querySelector("#picture").src = "IMG/goldStar.jpg";
    }
}
});

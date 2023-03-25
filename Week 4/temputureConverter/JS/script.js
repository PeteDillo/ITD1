/* Pedro Delgadill
21 MAR
Bringin it all together */

document.querySelector("#convertTemp").addEventListener("click", function (e) {
  //validation
  if (document.querySelector("#startTemp").reportValidity()) {
    let startingTemp = parseFloat(document.querySelector("#startTemp").value);

    if (document.querySelector("#celsius").checked) {
      let TempCToF = startingTemp * (9 / 5) + 32;
      document.querySelector(
        "#textResults"
      ).innerHTML = `The temperature is ${TempCToF.toFixed(
        1
      )} degrees fahrenheit`;
    } else if (document.querySelector("#fahrenheit").checked) {
      let TempFToC = startingTemp - 32 * (5 / 9);
      document.querySelector(
        "#textResults"
      ).innerHTML = `The temperature is ${TempFToC.toFixed(1)} degrees celsius`;
    }
  }
});

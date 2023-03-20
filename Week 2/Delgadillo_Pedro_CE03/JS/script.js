/*
Pedro Delgadillo
Mar 6 2023
2.2. Code Exercise 03: Let's Go Shopping
*/

//instrcutions/welcome alerts
alert('Hello and welcome to the virtual store!')
alert('I will ask you about the items you wish to buy and calculate your receipt.')

//building prompts for item one
let itemOneName = prompt("what is the name of the first item you wish to buy?")
let itemOneCost = Number(prompt(`how does ${itemOneName} cost?`))
let itemOneQTY = prompt(`how many ${itemOneName} would you like to buy?`)

//notifying first item complete
alert("Item#1 is finished, lets get the information for your 2nd item!")

//totat cost of item one pre tax
let itemOneCheckOut = itemOneCost*itemOneQTY

//building prompts for item two
let itemTwoName = prompt("what is the name of the second item you wish to buy?")
let itemTwoCost = Number(prompt(`how does ${itemTwoName} cost?`))
let itemTwoQTY = prompt(`how many ${itemTwoName} would you like to buy?`)

//total cost of item two pre tax
let itemTwoCheckOut = itemTwoCost*itemTwoQTY

//calculate cost of both items before taxes
let totalBeforeTax=itemOneCheckOut+itemTwoCheckOut

//prompt user for sales tax
let salesTax= prompt("One final question, what is the sales tax in whole number form?")

//sales tax math
let appliedSalesTax = (salesTax/100)*totalBeforeTax

//grand total calculated by adding total sales tax + the cost of items one and two
let grandTotal = appliedSalesTax+totalBeforeTax;

//alert reminder to check console log
alert('Boop Beep Boop Calculations are finished! Check the console for your receipt!')

//display receipt
console.log("Thank you for shopping with us!")
console.log(`(${itemOneQTY}) ${itemOneName}(s) @ $${itemOneCost} = $${itemOneCheckOut}`)
console.log(`(${itemTwoQTY}) ${itemTwoName}(s) @ $${itemTwoCost} = $${itemTwoCheckOut}`)
console.log(`Subtotal Before Tax = $${totalBeforeTax}`)
console.log(`%${salesTax} Sales Tax = $${appliedSalesTax}`)
console.log(`Grand Total = $${grandTotal}`)

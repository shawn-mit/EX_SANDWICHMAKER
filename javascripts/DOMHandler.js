"use strict";

// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0; 

// Variable to hold topping that the user selects
var customersTopping;


// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementById("meatchooser");
var breadChooser = document.getElementById("breadchooser");
var veggiesChooser = document.getElementById("veggieschooser");
var condimentsChooser = document.getElementById("condimentschooser");
var cheeseChooser = document.getElementById("cheesechooser");



// output for sandwich price
var sandwichTotal = document.getElementById("output");



// button to target //add event listener
var hangrybtn = document.getElementById("hangrybtn");

hangrybtn.addEventListener("click", function (event){

	if (event.target === hangrybtn){
		sandwichTotal.innerHTML = `<div> <p> ${(finalSandwichPrice )} </p> </div>`;
	}

});


/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/


meatChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  customersTopping = event.target.value;
 // Add the topping to the SandwichMaker to increase the total price
	finalSandwichPrice = SandwichMaker.addTopping(SandwichMaker.addMeats(customersTopping));


});


breadChooser.addEventListener("change", function (event) {

	customersTopping = event.target.name;
	finalSandwichPrice = SandwichMaker.addTopping(SandwichMaker.addBread(customersTopping));
});


condimentsChooser.addEventListener("change", function (event) {

	customersTopping = event.target.name;
	finalSandwichPrice = SandwichMaker.addTopping(SandwichMaker.addCondiments(customersTopping));

});


cheeseChooser.addEventListener("change", function (event) {

	customersTopping = event.target.name;
	finalSandwichPrice = SandwichMaker.addTopping(SandwichMaker.addCheese(customersTopping));

});


veggiesChooser.addEventListener("change", function (event) {

	customersTopping = event.target.name;
	finalSandwichPrice = SandwichMaker.addTopping(SandwichMaker.addVeggies(customersTopping));

});



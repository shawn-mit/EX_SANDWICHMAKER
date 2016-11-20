// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(augmenter) {

  // Private variable to store the different meat prices
var veggiePrices = {
	"tomatoes": 0.50,
	"spinach": 0.75,
	"olives": 0.50 
}


  // Augment the original object with another method
  augmenter.addVeggies = function(veggies) {
    return veggiePrices[veggies]
  };

    // Return the new, augmented object with the new method on it
  return augmenter;


})(SandwichMaker);
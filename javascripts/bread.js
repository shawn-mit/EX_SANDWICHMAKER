// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(augmenter) {
  
  var breadPrices = {
		"wheat": 1.00,
		"marble-rye": 1.05,
		"italian": 0.50
	};


  // Augment the original object with another method
  augmenter.addBread = function(bread) {
    return breadPrices[bread] // ?? bracket notation to return a variable for the properties?
  };


  // Return the new, augmented object with the new method on it
  return augmenter;

})(SandwichMaker);

    //console.log("Bread", SandwichMaker);
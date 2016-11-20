// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(augmenter) {

  // Private variable to store the different meat prices

  var meatPrices = {
		"turkey": 0.90, 
		"bacon": 1.50,
		"salami" : 0.95,
    "none": 0.00
	}

  // Augment the original object with another method
  augmenter.addMeats = function(meats) {
    return meatPrices[meats]
  };

  // Return the new, augmented object with the new method on it
  return augmenter;
 

})(SandwichMaker || {});
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(augmenter) {

  // Private variable to store the different meat prices

var cheesePrices = {
	"provologne": 0.40,
	"cheddar": 0.35,  
	"gouda": 5.00 
} 


  // Augment the original object with another method
  augmenter.addCheese = function(cheese) {
    return cheesePrices[cheese] 
  };
  // Return the new, augmented object with the new method on it
  return augmenter;
  
})(SandwichMaker);
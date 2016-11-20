// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(augmenter) {

    // Private variable to store the different meat prices

    var condimentPrices = {
        "siracha": 0.10,
        "mustard": 100.00,
        "ranch": 0.10
    }


    // Augment the original object with another method
    augmenter.addCondiments = function(condiment) {
        return condimentPrices[condiment]
    };  

  // Return the new, augmented object with the new method on it
  return augmenter;


})(SandwichMaker);

//console.log("check", SandwichMaker);
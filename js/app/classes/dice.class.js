/**
 * Dice Object
 */

// Define the dice object
function Dice() { }

// Roll the dice
Dice.prototype.roll = function(num, sides) {

    // Handle incorrect dice or sides
    if (num == 0 || num == null) { // Is the quantity zero?
        // There must be at least one die
        num = 1;
    }
    if (sides == 0 || sides == null) { // Are there zero sides?
        // Any die must have at least one side
        sides = 1;
    }

    // Initialize our return value
    var result = 0;

    // Loop over the die rolls
    for (i=0; i < num; i++) {
        // Roll the die
        var roll_result = Math.floor((Math.random() * sides) + 1);

        // Add the die roll to our total result
        result = result + roll_result;
    }

    // Return the result of our roll
    return result;
}
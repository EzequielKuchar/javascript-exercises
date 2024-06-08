const reverseString = function(phrase) {
    myArray = []

    for (i = 0; i < phrase.length; i++){
        myArray[i] = phrase[i]
    }

    reversedPhrase = myArray.toReversed().join("")
    return reversedPhrase
};

// Do not edit below this line
module.exports = reverseString;

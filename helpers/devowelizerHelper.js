'use strict';

let chai = require('chai');
let assert = chai.assert;
let I;

module.exports = {

    _init() {
        I = actor();
    },

    verifyInputData(data) {
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        let foundVowels = [];

        vowels.forEach((vowel) => {
            if (data.includes(vowel)) {
                foundVowels.push(vowel);
            }
        });

        vowels.forEach((vowel) => { if (data.includes(vowel)) foundVowels.push(vowel) });
        if (foundVowels.length)
            assert.fail('Returned string \'' + data + '\' contains vowels! Following vowels found in the string: ' + foundVowels);
    },

    verifyStatus(status) {
        if (status !== 200)
            assert.fail('There seems to be a problem with the response, returned status: ' + status + ' Expected: ' + 200);
    }
};

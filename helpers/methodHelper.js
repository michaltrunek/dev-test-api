'use strict';
let I;
const assert = require('chai').assert;
const httpStatus = require('http-status-codes');

module.exports = {

    _init() {
        I = actor();
    },

    /**
     * Verifies output string to not to contain vowels
     * @param {String} outputData - string to be verified
     **/
    verifyOutputDataVowelsFree(outputData) {
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        let foundVowels = [];

        vowels.forEach((vowel) => { if (outputData.includes(vowel)) foundVowels.push(vowel) });
        foundVowels.length ? assert.fail(`Returned string "${outputData}" contains vowels! Following vowels found in the string: ${foundVowels}`)
            : I.say(`Output data is returned correctly. Returned string: "${outputData}"`);
    },

    /**
     * Verifies request is successful (correct status 200, message, contains body/data)
     * @param {Object} response - response to be verified
     **/
    verifyRequestSuccessful(response) {
        assert.equal(response.status, httpStatus.OK);
        assert.equal(response.statusText, 'OK');
        assert.equal(response.hasOwnProperty('data'), true, 'Body/data is not in the response structure!');
    },

    /**
     * Verifies status has bad request (incorrect input sent)
     * @param {Object} response - response to be verified
     **/
    verifyBadRequest(response) {
        assert.equal(response.status, httpStatus.BAD_REQUEST);
    },

    /**
     * Verifies Delete method is not allowed as a valid request method
     * @param {Object} response - response to be verified
     **/
    verifyDeleteMethodNotAllowed(response) {
        assert.equal(response.status, httpStatus.NOT_FOUND);
    },

    /**
     * Verifies Put method is not allowed as a valid request method
     * @param {Object} response - response to be verified
     **/
    verifyPutMethodNotAllowed(response) {
        assert.equal(response.status, httpStatus.NOT_FOUND);
    },

    /**
     * Verifies Post method is not allowed as a valid request method
     * @param {Object} response - response to be verified
     **/
    verifyPostMethodNotAllowed(response) {
        assert.equal(response.status, httpStatus.NOT_FOUND);
    },

    /**
     * Verifies correct content type is returned
     * @param {Object} response - response to be verified
     **/
    verifyContentType(response) {
        assert.equal(response.headers['content-type'], 'text/html; charset=utf-8');
    }
};

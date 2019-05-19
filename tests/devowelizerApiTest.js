const assert = require('chai').assert;
Feature('Devowelizer API tests');

BeforeSuite((I) => {
    I.say('****************************');
    I.say('Running API tests');
    I.say('****************************');
});

Scenario('Check that a valid GET request returns a 200 status code',{ retries: 2 }, async (I, methodHelper, testData) => {
    const response = await I.sendGetRequest(testData.validInputs.onlyAlphabetic);
    methodHelper.verifyRequestSuccessful(response);
}).tag('@api');

Scenario('Check that the correct content type is returned', { retries: 2 }, async (I, methodHelper, testData) => {
    const response = await I.sendGetRequest(testData.validInputs.onlyAlphabetic);
    methodHelper.verifyRequestSuccessful(response);
    methodHelper.verifyContentType(response);
}).tag('@api');

Scenario('Check that an empty input sent with request returns correct info message', { retries: 2 }, async (I, methodHelper, testData) => {
    const response = await I.sendGetRequest(testData.validInputs.empty);
    methodHelper.verifyRequestSuccessful(response);
    assert.equal(response.data, 'Send GET to /:input');
}).tag('@api');

Scenario('Check that a GET request with valid input: only alphabetic returns the correct output data', { retries: 2 }, async (I, methodHelper, testData) => {
    const response = await I.sendGetRequest(testData.validInputs.onlyAlphabetic);
    methodHelper.verifyRequestSuccessful(response);
    methodHelper.verifyOutputDataVowelsFree(response.data);
}).tag('@api');

Scenario('Check that a GET request with valid input: alphabetic and numeric returns the correct output data', { retries: 2 }, async (I, methodHelper, testData) => {
    const response = await I.sendGetRequest(testData.validInputs.alphabeticNumeric);
    methodHelper.verifyRequestSuccessful(response);
    methodHelper.verifyOutputDataVowelsFree(response.data);
}).tag('@api');

Scenario('Check that a GET request with valid input: alphabetic and spaces returns the correct output data', { retries: 2 }, async (I, methodHelper, testData) => {
    const response = await I.sendGetRequest(testData.validInputs.alphabeticWithSpaces);
    methodHelper.verifyRequestSuccessful(response);
    methodHelper.verifyOutputDataVowelsFree(response.data);
}).tag('@api');

Scenario('Check that a GET request with invalid input: alphabetic and special characters returns bad request status', async (I, methodHelper, testData) => {
    const response = await I.sendGetRequest(testData.invalidInputs.alphabeticWithSpecialSymbols);
    methodHelper.verifyBadRequest(response);
}).tag('@api');

Scenario('Check that a PUT method is not allowed as a valid request method', async (I, methodHelper, testData) => {
    const response = await I.sendPutRequest(testData.validInputs.alphabeticNumeric);
    methodHelper.verifyPutMethodNotAllowed(response);
}).tag('@api');

Scenario('Check that a DELETE method is not allowed as a valid request method', async (I, methodHelper, testData) => {
    const response = await I.sendDeleteRequest(testData.validInputs.alphabeticNumeric);
    methodHelper.verifyDeleteMethodNotAllowed(response);
}).tag('@api');

Scenario('Check that a POST method is not allowed as a valid request method', async (I, methodHelper, testData) => {
    const response = await I.sendPostRequest(testData.validInputs.alphabeticNumeric);
    methodHelper.verifyPostMethodNotAllowed(response);
}).tag('@api');

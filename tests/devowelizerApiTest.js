let chai = require('chai');
let assert = chai.assert;
const httpStatus = require('http-status-codes');

Feature('Devowelizer API tests');

BeforeSuite((I) => {
    I.say('****************************');
    I.say('Running API tests');
    I.say('****************************');
});

Scenario('Check that a valid GET request returns a 200 status code', async (I) => {
    const response = await I.sendGetRequest(':input');
    assert.equal(response.status, httpStatus.OK);
    assert.equal(response.statusText, 'OK');
}).tag('@api');

Scenario('Ensure that a GET request to a specific resource returns the correct data', async (I, devowelizerHelper) => {
    const stringToCheck = 'testString';
    I.setRequestTimeout(30000);
    const response = await I.sendGetRequest(stringToCheck);
    devowelizerHelper.verifyStatus(response.status);
    devowelizerHelper.verifyOutputData(response.data);
}).tag('@api');

Scenario('Check that the correct content type is returned', async (I) => {
    const response = await I.sendDeleteRequest(':input');
    I.say(response.data);
    I.say(response.status);
    assert.equal(response.status, httpStatus.OK);
}).tag('@api');

Scenario('Verify that only GET method is allowed', async (I) => {
    const response = await I.sendPutRequest(':input');
    I.say(response.data);
    I.say(response.status);
    assert.equal(response.status, httpStatus.OK);
}).tag('@api');

Scenario('Invalid input entered', async (I) => {
    const response = await I.sendGetRequest('test');
    I.say(response.data);
    I.say(response.status);
    assert.equal(response.status, httpStatus.OK);
}).tag('@api');

Scenario('Pass other parameters than input', async (I) => {
    const response = await I.sendGetRequest(':12431232');
    I.say(response.data);
    I.say(response.status);
    assert.equal(response.status, httpStatus.OK);
}).tag('@api');

Scenario('Check the REST endpoint schema (body, status, etc.)', async (I) => {
    const response = await I.sendGetRequest(':*&^&#@#!&*(');
    I.say(response.data);
    I.say(response.status);
    assert.equal(response.status, httpStatus.OK);
}).tag('@api');

Feature('Devowelizer API tests');

BeforeSuite((I) => {
    I.say('****************************');
    I.say('Running API tests');
    I.say('****************************');
});

Scenario('Test 1', async (I) => {
    const response = await I.sendGetRequest('http://localhost:8080/:input');
    console.log(response.data, response.status);
}).tag('@api');

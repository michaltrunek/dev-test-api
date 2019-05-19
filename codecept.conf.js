exports.config = {
    tests: './tests/*Test.js',
    output: './output',

    helpers: {
        REST: {
            timeout: 30000,
            endpoint: "http://localhost:8080/",
        }
    },
    include: {
        I: './steps_file.js',
        methodHelper: './helpers/methodHelper.js',
        testData: './helpers/testData.js'
    },
    bootstrap: false,
    mocha: {
        reporterOptions: {
            reportDir: './output',
            enableCharts: true,
            reportTitle: 'Devowelizer API test results'
        }
    },
    name: 'devowelizer api testing'
};

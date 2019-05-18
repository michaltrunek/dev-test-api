let reporterVerbose = process.env.reporterVerbose;
let reporterSteps = process.env.reporterSteps;
let reporterDebug = process.env.reporterDebug;

/**
 * Setting Env Variables default
 */
if (reporterVerbose === undefined || reporterVerbose === 'false') reporterVerbose = false;
else reporterVerbose = true;
if (reporterSteps === undefined || reporterSteps === 'true') reporterSteps = true;
else reporterSteps = false;
if (reporterDebug === undefined || reporterDebug === 'false') reporterDebug = false;
else reporterDebug = true;

if (process.env.retries === undefined) process.env.retries = 0;
if (process.env.NODE_ICU_DATA !== "node_modules/full-icu") process.env.NODE_ICU_DATA = "node_modules/full-icu";

exports.config = {
    tests: './tests/*Test.js',
    output: './output',

    helpers: {
        REST: {
            timeout: 20000,
            endpoint: "http://localhost:8080/",
        }
    },
    include: {
        I: './steps_file.js',
        devowelizerHelper: './helpers/devowelizerHelper.js'
    },
    bootstrap: false,
    mocha: {
        reporterOptions: {
            reportDir: './output',
            enableCharts: true,
            reportTitle: 'Desktop Reporter',
            mochaFile: "output/result.xml",
            rootSuiteTitle: 'Desktop Tests'
        }
    },
    name: 'devowelizer',
    plugins: {
        allure: {
            enabled: false
        }
    }
};

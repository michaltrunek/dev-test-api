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
    timeout: 15000,
    output: './output',

    helpers: {
        REST: {
            timeout: 20000
        }
    },
    include: {
        I: './steps_file.js'
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

/**
 * Configuration section for docker run
 */
if (process.env.profile === 'docker') {

    exports.config.helpers.WebDriver.host = process.env.HOST;
    exports.config.helpers.WebDriver.desiredCapabilities = {
        browserName: 'chrome',
        chromeOptions: {
            args: [
            ]
        }
    };

    exports.config.helpers.WebDriver.browser = 'chrome';
    exports.config.helpers.WebDriver.restart = true;
    exports.config.tests = process.env.testsfilter;
    exports.config.mocha = {
        reporterOptions: {
            "codeceptjs-cli-reporter": {
                stdout: "-",
                options: {
                    reportDir: './output',
                    verbose: reporterVerbose,
                    steps: reporterSteps,
                    debug: reporterDebug,
                    enableCharts: true
                }
            },
            "mocha-junit-reporter": {
                stdout: "-",
                options: {
                    reportDir: './output',
                    mochaFile: "output/result.xml",
                    rootSuiteTitle: 'ta-desktop',
                    testsuitesTitle: 'Desktop Automated Tests',
                    includePending: true,
                    toConsole: false
                }
            }
        }
    };
}

/**
 * Configuration section for docker-local run
 */
if (process.env.profile === 'docker-local') {

    exports.config.helpers.WebDriver.host = process.env.HOST;
    exports.config.helpers.WebDriver.desiredCapabilities = {
        browserName: 'chrome',
        chromeOptions: {
            args: [
            ]
        }
    };
    exports.config.helpers.WebDriver.browser = 'chrome';
    exports.config.helpers.WebDriver.restart = true;
    exports.config.mocha = {
        reporterOptions: {
            "codeceptjs-cli-reporter": {
                stdout: "-",
                options: {
                    reportDir: './output',
                    verbose: reporterVerbose,
                    steps: reporterSteps,
                    debug: reporterDebug,
                    enableCharts: true
                }
            },
            "mocha-junit-reporter": {
                stdout: "-",
                options: {
                    reportDir: './output',
                    mochaFile: "output/result.xml",
                    rootSuiteTitle: 'ta-desktop',
                    testsuitesTitle: 'Desktop Automated Tests',
                    includePending: true,
                    toConsole: false
                }
            }
        }
    };
}

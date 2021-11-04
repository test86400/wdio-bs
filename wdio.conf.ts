const date = new Date().toLocaleString();
export const config = {
    host: 'hub.browserstack.com',
    user: '',
    key: '',
    specs: [
        './features/**/*.feature'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    
    commonCapabilities: {
        'bstack:options': {
            buildName: "wdio-browserstack-Run " + date,
            local: true
        }
    },
    capabilities: [{
         browserName: 'chrome',
        'bstack:options': {
            "os" : "OS X",
            "osVersion" : "Big Sur",
          // buildName: "wdio-browserstack-Run" + new Date()
        }
    },
        {
            browserName: 'Firefox',
            'bstack:options': {
                "os" : "Windows",
                "osVersion" : "8",
             // buildName: "wdio-browserstack-Run" + new Date()
            }
        }
       
    ],
    
    logLevel: 'info',
    
    bail: 0,
    
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        ['browserstack', {
            browserstackLocal: true
        }]
    ],
    framework: 'cucumber',
    
    reporters: ['spec'],


    //
    // If you are using Cucumber you need to specify the location of your step definitions.
    cucumberOpts: {
        // <string[]> (file/dir) require files before executing features
        require: ['./features/step-definitions/steps.ts'],
        // <boolean> show full backtrace for errors
        backtrace: false,
        // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        requireModule: [],
        // <boolean> invoke formatters without executing steps
        dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        format: ['pretty'],
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <string[]> (name) specify the profile to use
        profile: [],
        // <boolean> fail if there are any undefined or pending steps
        strict: false,
        // <string> (expression) only execute the features or scenarios with tags matching the expression
        tagExpression: '',
        // <number> timeout for step definitions
        timeout: 60000,
        // <boolean> Enable this config to treat undefined definitions as warnings.
        ignoreUndefinedDefinitions: false
    },
};

config.capabilities.forEach(function(caps) {
    for (const i in config.commonCapabilities) caps[i] = caps[i] || config.commonCapabilities[i];
});


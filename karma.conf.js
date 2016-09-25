// Karma configuration
// Generated on Sat Apr 16 2016 10:59:45 GMT-0500 (CDT)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'src/vendor/js/angular-1.5.3/angular.js',
            'src/vendor/js/angular-1.5.3/angular-mocks.js',
            'src/vendor/js/ui-router-0.2.18/ui-router.js',
            'src/app/*.es6',
            'src/app/Directives/Directives.module.es6',
            'src/app/Directives/Directives.button.es6',
            'src/app/Routing/Routing.module.es6',
            'src/app/Jedi/Jedi.module.es6',
            'src/app/Jedi/Jedi.controller.es6',
            'src/app/Jedi/Jedi.service.es6',
            'src/app/Sith/Sith.module.es6',
            'src/app/Sith/Sith.controller.es6',
            'src/app/Sith/Sith.service.es6',
            //'src/app/Jedi/Jedi.*.es6',
            'tests/**/*.js'
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'src/**/*.es6': ['babel'],
            'tests/**/*.js': ['babel']
        },


        // Babel preprocessor specific configuration
        babelPreprocessor: {
            options: {
                presets: ['es2015'], // use the es2015 preset
                sourceMap: 'inline' // inline source maps inside compiled files
            },
            filename: function (file) {
                //return file.originalPath.replace(/\.js$/, '.es5.js');
            },
            sourceFileName: function (file) {
                return file.originalPath;
            }
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['spec'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Firefox'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}

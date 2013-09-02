module.exports = function (grunt) {

    grunt.initConfig({
        uglify: {
            options: {
              mangle: true
            },
            target: {
                files: {
                    'prod/prod.js': [
                        "libs/jquery.min.js",
                        "libs/pubsub.js",

                        "src/config.js",
                        "src/app/utils.js",
                        "src/gettitle.js",
                        "src/checkdeal.js",
                        "src/app/layout.js",
                        "src/app/cleanOffers.js",
                        "src/app.js" 
                    ]
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('build', [
        'uglify'
    ]);

    grunt.registerTask('default', ['build']);

};
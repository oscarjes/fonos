module.exports = function (grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    outputStyle: 'expanded',
                    sourcemap: true
                },
                files: {
                    'assets/css/fonos.min.css': 'sass/style.scss'
                }
            }
        },
        uglify: {
            options: {
                mangle: false,
                compress: false,
                beautify: true
            },
            js:{
                files: {
                    'assets/js/fonos/build/fonos.js': [
                        'assets/js/fonos/src/fonos.js'
                    ],
                    'assets/js/libs/bootstrap.js': [
                        'assets/js/libs/imagesloaded/imagesloaded.js',
                        'assets/js/libs/dotdotdot/dotdotdot.js',
                        'assets/js/libs/bootstrap/popper.js',
                        'assets/js/libs/bootstrap/util.js',
                        'assets/js/libs/bootstrap/collapse.js',
                        'assets/js/libs/bootstrap/tab.js',
                        'assets/js/libs/bootstrap/modal.js',
                        'assets/js/libs/bootstrap/dropdown.js'
                    ]
                }
            }
        },
        watch: {
            css: {
                files: ['sass/style.scss', 'sass/_*.scss', 'sass/*/_*.scss', 'sass/*/*/_*.scss'],
                tasks: ['sass']
            },
            js:  {
                files: [
                    'assets/js/fonos/src/*/*.js',
                    'assets/js/fonos/src/*.js'
                ],
                tasks: ['uglify']
            }
        }
    });

    // load plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', [ 'watch' ]);
};
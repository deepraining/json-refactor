module.exports = function (grunt) {
    grunt.initConfig({
        uglify: {
            build: {
                src: 'src/json-refactor.js',
                dest: 'dist/json-refactor.min.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify']);
}
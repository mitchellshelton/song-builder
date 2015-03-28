module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'style/style.css' : 'style/sass/style.scss'
        }
      }
    },
    watch: {
      css: {
        files: 'style/sass/{,**/}*.scss',
        tasks: ['sass']
      },
    }
  });

  // Load the plugin(s) that provide our task(s).
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default',['watch']);

}
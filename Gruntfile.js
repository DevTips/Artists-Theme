module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'assets/css/all.css' : 'assets/_sass/all.sass'
        }
      }
    },
    file_append: {
      default_options: {
        files: {
          'assets/css/all.css': {
            prepend: "---\n---\n"
          }
        }
      }
    },
    jekyll: {
      dist: {
        options: {
          dest: '_site',
          config: '_config.yml'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-file-append');
  grunt.loadNpmTasks('grunt-jekyll');

  // Default task(s).
  grunt.registerTask('default', ['sass','file_append','jekyll']);

};
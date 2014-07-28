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
    },
    watch: {
      includes: {
        files: ['_includes/*.html'],
        tasks: ['jeky-build']
      },
      settings: {
        files: ['_data/*.yml'],
        tasks: ['jeky-build']
      },
      sass: {
        files: ['assets/_sass/**/*.sass','assets/_sass/**/*.scss'],
        tasks: ['sass-compile']
      },
      script: {
        files: ['assets/js/*.js'],
        tasks: ['jeky-build']
      }
    },
    connect: {
      server: {
        options: {
          port: 9000,
          base: '_site'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.loadNpmTasks('grunt-file-append');
  grunt.loadNpmTasks('grunt-jekyll');

  // Default task(s).
  grunt.registerTask('default', ['sass-compile','file_append','jekyll']);
  grunt.registerTask('sass-compile', ['sass','file_append','jekyll']);
  grunt.registerTask('jeky-build', ['jekyll']);
  grunt.registerTask('build', ['sass','file_append','jekyll']);
  grunt.registerTask('serve', ['connect','watch']);

};

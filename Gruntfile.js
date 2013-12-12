var LIVERELOAD_PORT = 9002;

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  // configurable paths
  var config = {
    app: 'app',
    dist: 'dist'
  };


  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    config: config,
    watch: {
      options: {
        livereload: LIVERELOAD_PORT
      },
      js: {
        files: '<%= config.app %>/**/*.js'
      },
      css: {
        files: '<%= config.app %>/**/*.css'
      }
    },
    connect: {
      server: {
        options: {
          livereload: LIVERELOAD_PORT,
          base: '<%= config.app %>',
          hostname: 'localhost',
          port: 9000
        }
      }
    },
    open: {
      server: {
        path: 'http://localhost:9000'
      }
    }
  });

  // Default task(s).
  grunt.registerTask('server', function(target) {

    grunt.task.run([
      'connect',
      'open',
      'watch'
    ]);

  });

};
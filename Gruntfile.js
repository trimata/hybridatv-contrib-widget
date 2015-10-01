/* globals module */

module.exports = function(grunt) {
  'use strict';

  var data = {
    expand: true,
    flatten: true,
    src: 'src/base.js',
  };

  grunt.initConfig({
    karma: {
      options:{
        basePath: '.',
        frameworks: ['jasmine', 'requirejs'],
        files: [
          { pattern: 'src/**/*.js', included: false },
          { pattern: 'test/spec/**/*.js', included: false },

          'test/config.js'
        ],

        autoWatch: true,
        reportSlowerThan: 3000,
        logLevel: 'ERROR',

        browsers: [
          'PhantomJS',
        ],
      },

      unit: {
        singleRun: true,
      },
    },

    version: {
      dist: {
        src: ['package.json'],
      },
    },

    copy: {
      dist: {
        files: [data],
      }
    },
  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-version');

  grunt.registerTask('test', ['karma']);
  grunt.registerTask('build', function(arg) {
    var version = grunt.file.readJSON('package.json').version.split('.');
    var newVersion;

    arg = arg || 'patch';

    switch(arg) {
    case 'major':
      version[0]++;
      version[1] = 0;
      version[2] = 0;
      break;
    case 'minor':
      version[1]++;
      version[2] = 0;
      break;
    default:
      version[2]++;
    }

    newVersion = version.join('.');

    data.dest = 'dist/' + newVersion;

    arg = arg || 'patch';

    grunt.task.run([
      'version::' + arg,
      'copy',
    ]);
  });
};

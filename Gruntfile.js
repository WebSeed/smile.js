module.exports = function (grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    aws: grunt.file.readJSON('aws.json'),
    aws_s3: {
      options: {
        accessKeyId: '<%= aws.key %>',
        secretAccessKey: '<%= aws.secret %>',
        region: '<%= aws.region %>',
        access: 'public-read',
        debug: false,
        uploadConcurrency: 5,
        downloadConcurrency: 5
      },
      production: {
        options: {
          bucket: '<%= aws.bucket %>',
          differential: true
        },

        files: [
          {
            src: 'index.html',
            dest: 'index.html'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-aws-s3');
  grunt.registerTask('default', ['aws_s3']);
};

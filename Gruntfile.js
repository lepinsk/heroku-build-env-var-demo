// heroku-build-env-var-demo
// Gruntfile.js

module.exports = function(grunt) {
	grunt.initConfig({
		shell: {
			findHeadHashFile: {
				command: 'find /tmp -maxdepth 2 | grep HEAD_HASH',
				options: {
					callback: log
				}
			},
		
			catHeadHashFile: {
				command: 'cat <%= headHashLocation %>'
			}
		}
	});

	function log(err, stdout, stderr, cb) {
	grunt.config.set('headHashLocation', stdout);
	console.log("head hash location found to be: " + stdout);
	cb();
	}

	grunt.loadNpmTasks('grunt-shell');

	grunt.registerTask('printEnvVar', function(){
		console.log("process.env.HEAD_HASH=" + process.env.HEAD_HASH);
	});

	grunt.registerTask('default', ['shell', 'printEnvVar']);
};
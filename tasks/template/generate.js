var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var _ = require("lodash");
var config = require(process.cwd() + '/source/grid/config.js');
var taskPrefix = 'template:generate:';

for(var i = 0; config.options.gridClassNames.length > i; i++) {
	var taskName = config.options.gridClassNames[i];
	var taskFn = function () {
		return gulp.src(config.options.gridFileName)
			.pipe($.consolidate('swig', _.extend({
				type: this.name,
				canExtend: (config.options.extendNonBaseByClass && this.name !== config.options.baseClassName)
			}, config)))
			.pipe($.rename(this.name + ".less"))
			.pipe($.cssbeautify())
			.pipe($.csscomb())
			.pipe(gulp.dest(config.options.dist));

	}.bind({ name: taskName });
	var taskDependency = config.options.gridClassNames[i-1] || null;

	var taskEnd = [];
	if(i === config.options.gridClassNames.length-1) {
		taskEnd = 'template:move';
	}

	if(taskDependency) {
		gulp.task(taskPrefix + taskName, [taskPrefix + taskDependency], taskFn);
	} else {
		gulp.task(taskPrefix + taskName, taskFn);
	}
}

module.exports = {
	dep: [taskPrefix + config.options.gridClassNames[config.options.gridClassNames.length-1]]
}

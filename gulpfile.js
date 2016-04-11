var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var _ = require("lodash");
var config = require(process.cwd() + '/source/grid/config.js');

$.requireTasks({
	path: __dirname + '/tasks',
	arguments: [$, _, config]
});

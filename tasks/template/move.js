module.exports = {
	dep: ['template:generate'],
	fn: function(gulp, $, _, config) {
		return gulp.src('./source/less/*.less')
			.pipe(gulp.dest('./dist/less'));
	}
}

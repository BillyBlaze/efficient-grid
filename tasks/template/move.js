module.exports = {
	fn: function(gulp, $, _, config) {
		gulp.src('./source/less/*.less')
			.pipe(gulp.dest('./dist/less'));
	}
}

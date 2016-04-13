module.exports = {
	dep: ['default'],
	fn: function(gulp, $, _, config) {
		return gulp.src(['./tests/less/grid.less'])
			.pipe($.plumber())
			.pipe($.less())
			// .pipe($.groupCssMediaQueries())
			// .pipe($.autoprefixer({
			// 	browsers: ['last 2 versions', 'IE > 9', 'Android > 2.1'],
			// 	cascade: false
			// }))
			.pipe(gulp.dest('./tests/less/css'));
	}
}

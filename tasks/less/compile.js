var through2 = require("through2");

module.exports = {
	fn: function(gulp, $, _, config) {
		gulp.src(['./dist/less/grid.less'])
			.pipe(through2.obj(function (chunk, enc, callback) {
				chunk.contents = new Buffer('@import "_variables.less";' + chunk.contents.toString().replace(/ \(reference\)/g, ""));
				callback(null, chunk);
			}))
			.pipe($.less())
			.pipe($.autoprefixer({
				browsers: ['last 2 versions', 'IE > 9', 'Android > 2.1'],
				cascade: false
			}))
			.pipe(gulp.dest('./dist/css'))
			.pipe($.cleanCss())
			.pipe($.rename({ extname: ".min.css" }))
			.pipe(gulp.dest('./dist/css'))
	}
}

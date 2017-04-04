var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var browserSync = require('browser-sync').create();

// gulp.task('default', ['less','sync', 'watch']);
gulp.task('less', compileLess);
gulp.task('watch', watch);
gulp.task('sync', browserSync);
gulp.task('default', ['less'], function() {
	
});

function compileLess() {
	gulp
		.src('./public/less/**/*.less')
	    .pipe(less())
	    .pipe(gulp.dest('./public/css/'));
};

function watch() {
  	gulp.watch("./public/less/**/*.less", ['less']);
    gulp.watch("./public/*.html").on('change', browserSync.reload);
    gulp.watch("./public/css/*.css").on('change', browserSync.reload);
}

function browserSync() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
}

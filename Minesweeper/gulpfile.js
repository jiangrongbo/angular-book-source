var gulp   = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default',['browser-sync'], function() {
    console.log("start minesweeper application...");
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(["*","js/*","css/*"])
    .on('change', browserSync.reload);
});

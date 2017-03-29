var jshint = require('gulp-jshint');
var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var changed = require('gulp-changed');
var plumer = require('gulp-plumber');
var imagemin = require('gulp-imagemin');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();

gulp.task('default', function() {
    console.log("default task...");
});


gulp.task('jshint', function() {
  return gulp.src('./js/*.js') // 检查文件：js目录下所有的js文件
    .pipe(jshint())  // 进行检查
    .pipe(jshint.reporter('default'));// 对代码进行报错提示
});

gulp.task('compress',['changed'], function() {
  return gulp.src('./js/*.js') // 压缩文件：js目录下所有的js文件
    .pipe(plumer()) //异常处理
    .pipe(uglify())  // 使用uglify插件执行压缩操作
    .pipe(gulp.dest('./dist'));  // 输出压缩后的文件
});

gulp.task('changed',function(){
  return gulp.src('./js/*.js') // 监视文件：js目录下所有的js文件
    .pipe(changed('./dist'))  // 过滤未修改文件,需要指定文件输出目录
    .pipe(gulp.dest('./dist'));  // 输出文件
});

gulp.task('watch',function(){
    gulp.watch('./js/*.js',['compress']);
    gulp.watch('./less/*.less',['less']);
});

gulp.task('imagemin', function () {
    return gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

gulp.task('less', function () {
    gulp.src('less/*.less') // 1. 匹配 less 文件
        .pipe(less()) // 2. 编译为css
        .pipe(gulp.dest('./css')) // 3. 另存文件
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

 

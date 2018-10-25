var gulp = require('gulp');
var sass = require('gulp-sass');
var copy = require('gulp-contrib-copy');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var jqueryWeui = './node_modules/jquery-weui/**/*';
var fontAwesome = './node_modules/font-awesome/**/*';

var dist = './asset/',
    cssSrc = './asset/sass/*',
    cssDist = './asset/css/',
    libDist = './asset/lib/';

gulp.task('css', function() {
    return gulp.src(cssSrc)
        .pipe(sass())
        .pipe(gulp.dest(cssDist));
});

gulp.task('copy', function() {
    gulp.src(fontAwesome)
        .pipe(gulp.dest(libDist+'font-awesome'));
    return gulp.src(jqueryWeui)
        .pipe(gulp.dest(libDist+'jquery-weui'));
});

// 自动刷新
gulp.task('server', function() {
    browserSync.init({
        // 指定代理url
        proxy: "http://app.test:802/files",
        // 刷新有提示
        notify: false,
    });
    gulp.watch(cssSrc,['css']).on('change', reload);
    gulp.watch(dist+'js/*.js').on('change', reload);
    gulp.watch(['index.html', 'html/*.html']).on('change', reload);
});

gulp.task('default', ['css', 'server']);
gulp.task('build', ['default', 'copy']);
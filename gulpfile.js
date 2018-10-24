const gulp = require('gulp');
const cssScss = require('gulp-css-scss');

gulp.task('css-scss', function() {
    return gulp.src('./asset/css/*.scss')
        .pipe(cssScss())
        .pipe(gulp.dest('./scss/a.css'));
});

gulp.task('default', ['css-scss']);
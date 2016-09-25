import gulp from 'gulp';
import gulpUtil from 'gulp-util';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import jshint from 'gulp-jshint';

gulp.task('watch', () => {
    gulp.watch('src/app/**/*.es6', ['lint']);
});

gulp.task('lint', () => {
    return gulp.src('src/app/**/*.es6')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'));
});


gulp.task('concatScripts', () => {
    return gulp.src('src/vendor/js/**/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));

});

gulp.task('welcome', () => {
    return gulpUtil.log('Gulp has now begun');
});


//gulp.task('default', ['welcome','concatScripts', 'lint', 'watch']);
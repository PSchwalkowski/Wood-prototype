var gulp = require('gulp');
var config = require('./gulpconfig')();

var sass = require('gulp-sass');
var notify = require('gulp-notify');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');

var browserSync = require('browser-sync').create();


gulp.task('default', ['dev']);

gulp.task('serve', () => {
	browserSync.init({
    server: {
      baseDir: config.appPath
    }
  });
});

gulp.task('dev', () => {

	gulp.run(['serve', 'sass', 'js']);

	gulp.watch(config.appPath + 'assets/scss/**/*.scss', ['sass']);
	gulp.watch(config.appPath + 'assets/js/**/*.js', ['js']).on('change', browserSync.reload);
  gulp.watch(config.appPath + '*.html').on('change', browserSync.reload);
});

gulp.task('sass', () => {
  return gulp.src(config.appPath + 'assets/scss/' + config.appFile + '.scss')
             .pipe(sass({
							 outputStyle: 'compressed',
							 includePaths: [
								 'node_modules/susy/sass',
								 'node_modules/sass-mq/_mq.scss',
							 ]
						 }).on('error', sass.logError))
             .pipe(concatCss(config.appFile + '.min.css'))
             .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
              }))
             .pipe(cleanCSS())
             .pipe(gulp.dest(config.appPath + 'assets/css'))
             .pipe(notify('Styles compiled'))
		         .pipe(browserSync.stream());
});

gulp.task('js', () => {
  return gulp.src([
                config.appPath + 'assets/js/custom/' + config.appFile + '.js',
              ])
             .pipe(concat(config.appFile + '.js'))
             .pipe(gulp.dest(config.appPath + 'assets/js'))
             .pipe(notify('Javascript compiled'));
});

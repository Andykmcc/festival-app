var _ = require('lodash');
var config = require('./config/dev');
var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();
plugins.browserify = require('browserify');
plugins.source = require('vinyl-source-stream');

gulp.task('connect', function() {
  plugins.connect.server({
    root: config.build,
    livereload: true
  });
});

gulp.task('clean-markup', function () {
  return gulp.src(config.build + '/**/*.html', {read: false})
    .pipe(plugins.clean());
});

gulp.task('markup', ['clean-markup'], function() {
  return gulp.src(config.src + '/**/*.html')
    .pipe(gulp.dest(config.build))
    .pipe(plugins.connect.reload());
});

gulp.task('clean-scripts', function () {
  return gulp.src(config.build + '/**/*.js', {read: false})
    .pipe(plugins.clean());
});

gulp.task('scripts', ['clean-scripts'], function() {
  // Grabs the app.js file
  return plugins.browserify(config.src + '/main.js')
    // bundles it and creates a file called main.js
    .bundle()
    .pipe(plugins.source('main.js'))
    // saves it the src/ directory
    .pipe(gulp.dest(config.build + '/js/'))
    .pipe(plugins.connect.reload());
});

gulp.task('clean-style', function () {
  return gulp.src(config.build + '/**/*.css', {read: false})
    .pipe(plugins.clean());
});

gulp.task('style', ['clean-style'], function () {
  gulp.src([config.src + '/states/**/*.scss', config.src + '/components/**/*.scss'])
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(plugins.concat('main.css'))
    .pipe(gulp.dest(config.build + '/style/'))
    .pipe(plugins.connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(config.src + '/**/*.html', ['markup']);
  gulp.watch(config.src + '/**/*.js', ['scripts']);
  gulp.watch([config.src + '/styleResources/**/*.scss',
              config.src + '/states/**/*.scss',
              config.src + '/components/**/*.scss'],
              ['style']);
  // Watches for changes in style.sass and runs the sass task
  // gulp.watch('src/scss/style.sass', ['sass'])
})

gulp.task('build', ['markup', 'scripts', 'style']);

gulp.task('default', ['build', 'connect', 'watch']);
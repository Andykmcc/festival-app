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

gulp.task('html', function() {
  return gulp.src(config.src + '/**/*.html')
    .pipe(gulp.dest(config.build))
    .pipe(plugins.connect.reload());
});

gulp.task('js', function() {
  // Grabs the app.js file
  return plugins.browserify(config.src + '/app.js')
    // bundles it and creates a file called main.js
    .bundle()
    .pipe(plugins.source('main.js'))
    // saves it the src/ directory
    .pipe(gulp.dest(config.build + '/js/'))
    .pipe(plugins.connect.reload());
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.html', ['html']);
  gulp.watch('src/**/*.js', ['js']);
  // Watches for changes in style.sass and runs the sass task
  // gulp.watch('src/scss/style.sass', ['sass'])
})

gulp.task('default', ['connect', 'watch']);
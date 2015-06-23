var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    nodemon = require('gulp-nodemon'),
    del = require('del');


var routes = {
  javascript: ['client/**/*.js','client/**/**/*.js','client/**/**/**/*.js'],
}

gulp.task('lint', function() {
  return gulp.src(routes.javascript)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
});

gulp.task('build', function() {
  return gulp.src(routes.javascript)
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/assets/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist/assets/js'))
})

gulp.task('default', function() {
    gulp.start('lint', 'develop');
});

gulp.task('develop', function () {
  nodemon({ script: 'server/index.js',
            ext: 'html js',
            ignore: [],
            tasks: ['default'] })
    .on('restart', function () {
      console.log('restarted!')
    })
})

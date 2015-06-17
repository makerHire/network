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

gulp.task('scripts', function() {
  return gulp.src('server.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    // Concat, Minify, and Uglify tasks are below
    // These will be added later on once needed
    // .pipe(concat('main.js'))
    // .pipe(gulp.dest('dist/assets/js'))
    // .pipe(rename({suffix: '.min'}))
    // .pipe(uglify())
    // .pipe(gulp.dest('dist/assets/js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('default', function() {
    gulp.start('scripts', 'watch');
    //gulp.start('develop');
});

gulp.task('watch', function() {
  // Watch .js files
  gulp.watch('server.js', ['scripts']);

   // Create LiveReload server
  livereload.listen();

  // Watch any files in dist/, reload on change
  gulp.watch(['dist/**']).on('change', livereload.changed);
});

// gulp.task('start', function () {
//   nodemon({
//     script: 'server.js',
//     ext: 'js html',
//     env: { 'NODE_ENV': 'development' }
//   })
// })

gulp.task('develop', function () {
  nodemon({ script: 'server.js',
            ext: 'html js',
            ignore: ['ignored.js'],
            tasks: ['default'] })
    .on('restart', function () {
      console.log('restarted!')
    })
})

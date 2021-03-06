const gulp = require('gulp');
const stylus = require('gulp-stylus');
const minifyCss = require('gulp-minify-css');
const shell = require('gulp-shell');

var paths = {
  stylus: {
    src: ['./app/public/src/stylus/*.styl'],
    dist: './app/public/dist/css'
  },
  images: {
    src: ['./app/public/src/img/**/*.*'],
    dist: './app/public/dist/img'
  }
};

gulp.task('stylus', () => {
  gulp.src(paths.stylus.src)
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest(paths.stylus.dist));
});

gulp.task('webpack:build', shell.task([
  'npm run webpack:build'
]));

gulp.task('webpack:watch', shell.task([
  'npm run webpack:watch'
]));

gulp.task('images', () => {
  gulp.src(paths.images.src)
    .pipe(gulp.dest(paths.images.dist));
});

gulp.task('dev', ['images'], () => {
  gulp.watch(paths.stylus.src, ['stylus']);
});

gulp.task('build', ['stylus', 'images', 'webpack:build']);

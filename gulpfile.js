const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const gulpMocha = require('gulp-mocha');

gulp.task('default', ['server']);

gulp.task('server', () => {
  nodemon({
    script: 'src/app.js',
    watch: 'src',
    ext: 'js',
    env: {
      PORT: 8000,
    },
    ignore: ['./node_modules/**'],
  })
  .on('restart', () => {
    console.log('Restarting');
  });
});

gulp.task('test', () => {
  gulp.src('./tests/**/*.js')
      .pipe(gulpMocha({ reporter: 'nyan' }));
});

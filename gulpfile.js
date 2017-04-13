var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

var path = './platforms/browser/www';

gulp.task('deploy', function() {
  return gulp.src(path+'/**/*')
    .pipe(ghPages([{
            origin: "github"
    }]));
});
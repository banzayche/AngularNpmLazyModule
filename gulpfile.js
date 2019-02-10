var gulp = require('gulp');
var dom = require('gulp-dom');
const ghpPathPref = 'AngularNpmLazyModule/';

function fixPathProcedure(arr, attrToFix, pref) {
  for (let index = 0; index < arr.length; index++) {
    const tag = arr[index];
    let _attrToFix = `${pref}${tag[attrToFix]}`;
    tag[attrToFix] = _attrToFix;
  }
}

gulp.task('fix.ghp.paths', function () {
  return gulp.src('./dist/lazy-loaded-module-thru-npm/index.html')
    .pipe(dom(function () {
      const scripts = {
        nodes: this.querySelectorAll('script'),
        attrToChange: 'src'
      };
      const links = {
        nodes: this.querySelectorAll('link'),
        attrToChange: 'href'
      };

      fixPathProcedure(scripts.nodes, scripts.attrToChange, ghpPathPref);
      fixPathProcedure(links.nodes, links.attrToChange, ghpPathPref);

      return this;
    }))
    .pipe(gulp.dest('./dist/lazy-loaded-module-thru-npm'));
});

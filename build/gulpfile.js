const gulp = require('gulp');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const purgecss = require('gulp-purgecss');
const minifycss = require('gulp-minify-css');
const { getPackagesSync } = require('@lerna/project');
const pkg = require('../package.json');

const inputs = getPackagesSync()
  .map(pkg => pkg.name)
  .filter(name => name.includes(`@${pkg.name}`) && !name.includes('utils'));

inputs.map(name => {
  gulp.task('default', () => {
    return gulp
      .src(`../es/${name.split(`@${pkg.name}/`)[1]}/index.css`)
      .pipe(postcss())
      .pipe(
        purgecss({
          content: [`../packages/${name.split(`@${pkg.name}/`)[1]}/*.vue`],
        }),
      )
      .pipe(minifycss())
      .pipe(
        rename(function(p) {
          p.dirname = `../es/${name.split(`@${pkg.name}/`)[1]}/`;
        }),
      )
      .pipe(gulp.dest('.'));
  });
});

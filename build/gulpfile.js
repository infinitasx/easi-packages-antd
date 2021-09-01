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

let task = [];

inputs.map(name => {
  const fileName = name.split(`@${pkg.name}/`)[1];
  task.push(fileName);
  gulp.task(`${fileName}`, () => {
    return gulp
      .src(`../es/${fileName}/index.css`)
      .pipe(postcss())
      .pipe(
        purgecss({
          content: [`../packages/${fileName}/*.vue`],
        }),
      )
      .pipe(minifycss())
      .pipe(
        rename(function(file) {
          file.dirname = `../es/${fileName}/`;
        }),
      )
      .pipe(gulp.dest('.'));
  });
});

gulp.task('default', gulp.series(task.map(name => name)));

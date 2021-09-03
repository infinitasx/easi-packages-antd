const gulp = require('gulp');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const purgecss = require('gulp-purgecss');
const minifycss = require('gulp-minify-css');
const sass = require('gulp-sass')(require('sass'));
// const base64 = require('gulp-base64');
const { getPackagesSync } = require('@lerna/project');
const pkg = require('../package.json');

const inputs = getPackagesSync()
  .map(pkg => pkg.name)
  .filter(name => name.includes(`@${pkg.name}`) && !name.includes('utils'));

let task = [];

gulp.task('gc:theme', () => {
  return gulp
    .src('../packages/theme/index.scss')
    .pipe(sass())
    .pipe(
      rename(function(file) {
        file.dirname = `../es/`;
        file.basename = `_theme`;
        console.log(file);
      }),
    )
    .pipe(
      rename(function(file) {
        file.dirname = `../lib/`;
        file.basename = `_theme`;
      }),
    )
    .pipe(gulp.dest('.'));
});

inputs.map(name => {
  const fileName = name.split(`@${pkg.name}/`)[1];
  task.push(fileName);
  gulp.task(`${fileName}`, () => {
    return (
      gulp
        .src(`../es/${fileName}/index.css`)
        .pipe(postcss())
        .pipe(
          purgecss({
            content: [`../packages/${fileName}/*.vue`],
          }),
        )
        // .pipe(base64())
        .pipe(minifycss())
        .pipe(
          rename(function(file) {
            file.dirname = `../es/${fileName}/`;
          }),
        )
        .pipe(gulp.dest('.'))
    );
  });
});

gulp.task(
  'default',
  gulp.series(
    'gc:theme',
    task.map(name => name),
  ),
);

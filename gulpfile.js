const { src, dest } = require("gulp");
const { series, parallel } = require("gulp");
// const { watch, series } = require('gulp');
//minify the code
const terser = require("gulp-terser");
const rename = require("gulp-rename");
//image minifier
const imagemin = require("imagemin");
const imageminJpegtran = require("imagemin-jpegtran");
const imageminPngquant = require("imagemin-pngquant");
//css minifier
var uglifycss = require("gulp-uglifycss");

exports.default = function() {
  return src("src/css/*.css")
    .pipe(uglifycss({ uglyComments: true }))
    .pipe(rename({ extname: ".min.css" }))
    .pipe(dest("dist/css"));
};

exports.default = function() {
  return src("src/*.html").pipe(dest("dist/"));
};

// Minimize and Rename JS
exports.default = function() {
  return src("src/js/*.js")
    .pipe(terser())
    .pipe(rename({ extname: ".min.js" }))
    .pipe(dest("dist/js"));
};

exports.default = async () => { // Optimize all images
  const files = await imagemin(["src/img/*.{jpg,png}"], {
    destination: "dist/images",
    plugins: [
      imageminJpegtran(),
      imageminPngquant({
        quality: [0.6, 0.8]
      })
    ]
  });

  console.log(files);
  //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
};

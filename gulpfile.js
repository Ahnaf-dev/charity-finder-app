const gulp = require("gulp");
const { src, dest } = require("gulp");
const imagemin = require("gulp-imagemin");
gulp.task("imagemin", function () {
  return src("src/assets/images/*")
    .pipe(imagemin())
    .pipe(dest("src/assets/images/"));
});

"use strict";
var gulp = require("gulp");
var del = require("del");
var tsc = require("gulp-typescript");
var sourcemaps = require('gulp-sourcemaps');
var tsProject = tsc.createProject("tsconfig.json");
var tslint = require('gulp-tslint');
/**
 * Remove build directory.
 */
gulp.task('clean', function (cb) {
    return del(["build"], cb);
});
/**
 * Lint all custom TypeScript files.
 */
gulp.task('tslint', function () {
    return gulp.src("app/**/*.ts")
        .pipe(tslint())
        .pipe(tslint.report('prose'));
});
/**
 * Compile TypeScript sources and create sourcemaps in build directory.
 */
gulp.task("compile", ["tslint"], function () {
    var tsResult = gulp.src("app/**/*.ts")
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));
    return tsResult.js
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("build/app"));
});
/**
 * Copy all resources that are not TypeScript files into build directory.
 */
gulp.task("resources", function () {
    return gulp.src(["app/**/*", "!**/*.ts"])
        .pipe(gulp.dest("build/app"));
});
/**
 * Copy all required node_modules into build directory.
 */
gulp.task("libs", function () {
    return gulp.src([
        'es6-shim/es6-shim.min.js',
        'systemjs/dist/system-polyfills.js',
        'angular2/bundles/angular2-polyfills.js',
        'angular2/es6/dev/src/testing/shims_for_IE.js',
        'systemjs/dist/system.src.js',
        'rxjs/bundles/Rx.js',
        'angular2/bundles/angular2.dev.js',
        'angular2/bundles/router.dev.js',
        'angular2/bundles/http.dev.js'
    ], { cwd: "node_modules/**" }) /* Glob required here. */
        .pipe(gulp.dest("build/node_modules"));
});
/**
 * Copy all bower_components into build directory.
 */
gulp.task("bower", function () {
    return gulp.src("bower_components/**/*")
        .pipe(gulp.dest("build/bower_components"));
});
/**
 * Copy all images into build directory.
 */
gulp.task("images", function () {
    return gulp.src("images/**/*")
        .pipe(gulp.dest("build/images"));
});
/**
 * Copy all fonts into build directory.
 */
gulp.task("fonts", function () {
    return gulp.src("fonts/**/*")
        .pipe(gulp.dest("build/fonts"));
});
/**
 * Copy all styles into build directory.
 */
gulp.task("styles", function () {
    return gulp.src("styles/**/*")
        .pipe(gulp.dest("build/styles"));
});
/**
 * Copy all styles into build directory.
 */
gulp.task("root-files", function () {
    return gulp.src([
        'index.html',
        'favicon.ico'
    ])
        .pipe(gulp.dest("build"));
});
/**
 * Build the project.
 */
gulp.task("build", ['compile', 'resources', 'libs', 'bower', 'images', 'fonts', 'styles', 'root-files'], function () {
    console.log("Building the project ...");
});
//# sourceMappingURL=gulpfile.js.map
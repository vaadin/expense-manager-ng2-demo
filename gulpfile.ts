"use strict";

const gulp = require("gulp");
const del = require("del");
const tsc = require("gulp-typescript");
const sourcemaps = require('gulp-sourcemaps');
const tsProject = tsc.createProject("tsconfig.json");
const tslint = require('gulp-tslint');

/**
 * Remove build directory.
 */
gulp.task('clean', (cb) => {
    return del(["build"], cb);
});

/**
 * Lint all custom TypeScript files.
 */
gulp.task('tslint', () => {
    return gulp.src("app/**/*.ts")
        .pipe(tslint())
        .pipe(tslint.report('prose'));
});

/**
 * Compile TypeScript sources and create sourcemaps in build directory.
 */
gulp.task("compile", ["tslint"], () => {
    let tsResult = gulp.src("app/**/*.ts")
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));
    return tsResult.js
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("build/app"));
});

/**
 * Copy all resources that are not TypeScript files into build directory.
 */
gulp.task("resources", () => {
    return gulp.src(["app/**/*", "!**/*.ts"])
        .pipe(gulp.dest("build/app"));
});

/**
 * Copy all required node_modules into build directory.
 */
gulp.task("libs", () => {
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
        ], {cwd: "node_modules/**"}) /* Glob required here. */
        .pipe(gulp.dest("build/node_modules"));
});

/**
 * Copy all bower_components into build directory.
 */
gulp.task("bower", () => {
    return gulp.src("bower_components/**/*")
        .pipe(gulp.dest("build/bower_components"));
});

/**
 * Copy all images into build directory.
 */
gulp.task("images", () => {
    return gulp.src("images/**/*")
        .pipe(gulp.dest("build/images"));
});

/**
 * Copy all fonts into build directory.
 */
gulp.task("fonts", () => {
    return gulp.src("fonts/**/*")
        .pipe(gulp.dest("build/fonts"));
});

/**
 * Copy all styles into build directory.
 */
gulp.task("styles", () => {
    return gulp.src("styles/**/*")
        .pipe(gulp.dest("build/styles"));
});

/**
 * Copy all styles into build directory.
 */
gulp.task("root-files", () => {
    return gulp.src([
            'index.html',
            'favicon.ico'
        ])
        .pipe(gulp.dest("build"));
});

/**
 * Build the project.
 */
gulp.task("build", ['compile', 'resources', 'libs', 'bower', 'images', 'fonts', 'styles', 'root-files'], () => {
    console.log("Building the project ...");
});

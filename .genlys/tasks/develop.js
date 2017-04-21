var gulp = require('gulp'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    stylus = require('gulp-stylus'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload,
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    minhtml = require('gulp-minify-html'),
    babel = require("gulp-babel"),
    sourcemaps = require('gulp-sourcemaps'),

    config = require('../config');

gulp.task('dev', [
    'view',
    'script',
    'style',
    'css',
    'font',
    'image',
    'models',
    'bower',
]);

gulp.task('view', function () {
    gulp.src(config.path.app.html)
        .pipe(gulp.dest(config.path.dev.html))
        .pipe(reload({stream: true}));
});

gulp.task('script', function () {
    gulp.src(config.path.app.scripts)
        .pipe(gulp.dest(config.path.dev.js))
        .pipe(reload({stream: true}));
});

gulp.task('style', function () {
    gulp.src(config.path.app.stylus)
        .pipe(sourcemaps.init())
        .pipe(stylus())
        .pipe(prefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.path.dev.css))
        .pipe(reload({stream: true}));
});

gulp.task('css', function () {
    gulp.src(config.path.app.css)
        .pipe(prefixer())
        .pipe(gulp.dest(config.path.dev.css))
        .pipe(reload({stream: true}));
});

gulp.task('image', function () {
    gulp.src(config.path.app.images)
        .pipe(gulp.dest(config.path.dev.images))
});

gulp.task('models', function () {
    gulp.src(config.path.app.models)
        .pipe(gulp.dest(config.path.dev.models))
});

gulp.task('font', function () {
    gulp.src(config.path.app.fonts)
        .pipe(gulp.dest(config.path.dev.fonts))
});

gulp.task('bower', function () {
    return gulp.src(config.path.bower)
        .pipe(gulp.dest(config.path.dev.bower));
});
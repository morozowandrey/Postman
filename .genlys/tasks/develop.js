var gulp = require('gulp'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-minify-css'),
    // sass = require('gulp-sass'),
    stylus = require('gulp-stylus'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload,
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    minhtml = require('gulp-minify-html'),
    babel = require("gulp-babel"),

    config = require('../config');

gulp.task('dev', [
    'view',
    'script',
    'style',
    'font',
    'image',
    'bower',
]);

// gulp.task('config', function () {
//     gulp.src('.genlys/constants/staging.coffee')
//         .pipe(coffee({bare: true}))
//         .pipe(rename('config.js'))
//         .pipe(gulp.dest('build/js/config/'))
//
// });
gulp.task('view', function () {
    gulp.src(config.path.app.html) //Выберем файлы по нужному пути
        .pipe(gulp.dest(config.path.dev.html)) //Бросим их в папку build
        .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
});

gulp.task('script', function () {
    gulp.src(config.path.app.scripts) //Найдем наш main файл
        .pipe(babel())
        .pipe(gulp.dest(config.path.dev.js)) //Бросим готовый файл в build
        .pipe(reload({stream: true})); //И перезагрузим сервер
});

// gulp.task('style', function () {
//     gulp.src(config.path.app.sass) //Выберем наш landing.scss
//         .pipe(sass())
//         .pipe(prefixer()) //Добавим вендорные префиксы
//         .pipe(cssmin()) //Сожмем
//         .pipe(gulp.dest(config.path.dev.css)) //И в build
//         .pipe(reload({stream: true}));
// });

gulp.task('style', function () {
    gulp.src(config.path.app.stylus) //Выберем наш landing.scss
        .pipe(stylus())
        .pipe(prefixer()) //Добавим вендорные префиксы
        .pipe(cssmin()) //Сожмем
        .pipe(gulp.dest(config.path.dev.css)) //И в build
        .pipe(reload({stream: true}));
});

gulp.task('image', function () {
    gulp.src(config.path.app.images) //Выберем наши картинки
        .pipe(gulp.dest(config.path.dev.images)) //И бросим в build
});

gulp.task('font', function () {
    gulp.src(config.path.app.fonts)
        .pipe(gulp.dest(config.path.dev.fonts))
});

gulp.task('bower', function () {
    return gulp.src(config.path.bower)
        .pipe(gulp.dest(config.path.dev.bower));
});


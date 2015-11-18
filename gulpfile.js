//gulpの読み込み
var gulp = require("gulp");

//プラグイン読み込み
var browser = require("browser-sync");
var plumber = require("gulp-plumber");

//htmlを保存後ブラウザを更新
gulp.task("html-reload", function() {
    gulp.src("./**/*html")
        .pipe(plumber())
        .pipe(browser.reload({stream:true}));
});

//cssを保存後ブラウザ更新
gulp.task("css-reload", function() {
    gulp.src("./**/*css")
        .pipe(plumber())
        .pipe(browser.reload({stream:true}));
});

//ブラウザ更新ディレクトリ設定
gulp.task("server", function() {
    browser({
        server: {
            baseDir: "./root"
        }
    });
});

//タスクをまとめてデフォルトで指定
gulp.task("default",['server'], function() {
    gulp.watch("./**/*html", ["html-reload"]);
    gulp.watch("./**/*css", ["css-reload"]);
});

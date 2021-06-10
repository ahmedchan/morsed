var gulp         = require('gulp');
var util         = require('gulp-util');
var concat       = require('gulp-concat');
var compass      = require('gulp-compass');
var browserSync  = require("browser-sync").create();
var cleanCSS     = require( 'gulp-clean-css' );
var rename       = require( 'gulp-rename' );
var uglify       = require('gulp-uglify');


var output = '_assets/'
var sassSources = ['src/sass/style.scss'];
var jsSources = [
	'src/scripts/popper.js',
	'src/scripts/bootstrap.js',
	'src/scripts/slick.js',
	'src/scripts/parallax-background.js',
	'src/scripts/jquery.sticky.js',
	'src/scripts/jquery.sticky-kit.min.js',
	'src/scripts/app.js'
];




gulp.task('compass', function(){
	gulp.src(sassSources)
		.pipe(compass({
			sass: 'src/sass',
			images: '_assets/img',
			style: 'compressed',
			sourcemap: true,
			css: '_assets/css',
			require: ['susy', 'breakpoint']
		}))
		.pipe(gulp.dest(output + 'css'))
		.pipe(rename({suffix: '.min'}))
		.pipe(cleanCSS({compatibility: 'ie8'}))
    	.pipe(gulp.dest(output + 'css'))
		.pipe( browserSync.reload({stream: true}) );
});


gulp.task('js', function(){
	gulp.src(jsSources)
		.pipe( concat('app.js') )
		.pipe( gulp.dest(output + 'js') )
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify()) 
		.pipe( gulp.dest(output + 'js') )
		.pipe( browserSync.reload({stream: true}) );
});


gulp.task('sync', function(){
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
});

gulp.task('watch', function(){
	gulp.watch(jsSources, ['js']);
	gulp.watch('src/sass/**/*.scss', ['compass']);
	gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('default', ['js', 'compass', 'watch', 'sync']);



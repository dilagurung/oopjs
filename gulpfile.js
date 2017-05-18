/**
 * Created by oa on 5/16/2017.
 */
var gulp = require('gulp');
var log = require("util-logging");
jshint=require('gulp-jshint');
var User=require('./Person');
//import is not suppoted yet by nodejs and currently under dev




var MyFancyObservable = require('../observer/observer-example');
gulp.task('test-singleton', function()
{
    // place code for your default task here
    var areaCalc = require('../singleton/singleton_example');

    console.log(areaCalc.circle(5));

});



gulp.task('test-observer', function()
{
    var observable = new MyFancyObservable();

    observable.on('hello', function (name) {
        console.log(name);
    });

    observable.hello('john');

});
gulp.task('test-class',function ()
{

    let bob=new User('Bob');
    console.log(bob.firstMethod(bob.name));

    //console.log(c);

});



(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Created by Stefan Wimmer <stefanwimmer128@gmail.com> on 11.07.16.
 */

/**
 * fn6.js Namespace
 * @author Stefan Wimmer <stefanwimmer128@gmail.com>
 */
const fn6 = {};

/**
 * Curries function
 * @param fn {function} Function to curry
 * @return {function} Curried function
 */
fn6.curry = (fn) =>
    fn6.bind(function curry(args, arg)
    {
        args = [ ...args, arg ];
        
        if (args.length < fn.length)
            return fn6.bind(curry, [ [ ...args ] ]);
        
        return fn(...args);
    }, [ [] ]);

/**
 * Just the opposite of fn.curry
 * @param curried {function} Curried function to uncurry
 * @return {function} Uncurried function
 */
fn6.uncurry = (curried) =>
    (...args) =>
    {
        let fn = curried;
        
        while (typeof fn === "function")
            fn = fn(args.shift());
        
        return fn;
    };

/**
 * Binds function to custom "this" with arguments
 * @param fn {function} Function to bind
 * @param [args] {Array} Arguments to bind
 * @param [thisArg] {Object} this to bind to
 * @return {function} Bound function
 */
fn6.bind = (fn, args, thisArg) =>
    fn.bind(thisArg, ...args);

/**
 * Composes functions
 * @param fn {...function} Functions to compose
 * @returns {function} Composed function
 */
fn6.compose = (...fn) =>
    fn6.bind(function compose(i, ...args)
    {
        return i === fn.length
            ? fn[0](...args)
            : compose(i + 1, fn[i](...args));
    }, [ 0 ]);

/**
 * Returns function that can only be called once
 * @param fn Function to turn into a function that can only be called once
 * @returns {function(...[*]): {}|undefined} functions that can only be called once
 */
fn6.once = (fn) =>
{
    let done = false;
    
    return (...args) => done ? undefined : (done = true, fn(...args));
};

/**
 * Curried Array.prototype.map function
 * @param fn {function} Callback function
 * @return {function} Function that takes the Array to map
 */
fn6.map = fn =>
    arr =>
        arr.map(fn);

/**
 * Curried Array.prototype.filter function
 * @param fn {function} Callback function
 * @return {function} Function that takes the Array to filter
 */
fn6.filter = fn =>
    arr =>
        arr.filter(fn);

/**
 * Curried Array.prototype.find function
 * @param fn {function} Callback function
 * @return {function} Function that takes the Array to find
 */
fn6.find = fn =>
    arr =>
        arr.find(fn);

/**
 * Curried Array.prototype.findIndex function
 * @param fn {function} Callback function
 * @return {function} Function that takes the Array to findIndex
 */
fn6.findIndex = fn =>
    arr =>
        arr.findIndex(fn);

/**
 * Curried Array.prototype.reject function
 * @param fn {function} Callback function
 * @return {function} Function that takes the Array to reject
 */
fn6.reject = fn =>
    arr =>
        arr.reject(fn);

/**
 * Curried Array.prototype.reduce function
 * @param fn {function} Callback function
 * @return {function} Function that takes the starting point and then the Array to reduce
 */
fn6.reduce = fn =>
    arr =>
        arr.reduce(fn);

/**
 * pluck extracts a specific "key" from all objects within the array.
 * @param arr Array to pluck
 * @param [key] {String} Key for extraction
 * @return {Array|function} Returns array with all extracted values if all parameters are given, if not a function which takes the key argument is returned
 */
fn6.pluck = (arr, key) =>
{
    if (arr !== undefined && key !== undefined)
        return arr.map(x => x[key]);
    
    return fn6.bind(fn6.pluck, [ arr ]);
};

/**
 * Curried Array.prototype.forEach function
 * @param fn {function} Callback function
 * @return {function} Function that takes the Array to forEach
 */
fn6.each = fn =>
    arr =>
        arr.forEach(fn);

/**
 * Curried Array.prototype.every function
 * @param fn {function} Callback function
 * @return {function} Function that takes the Array to every
 */
fn6.every = fn =>
    arr =>
        arr.every(fn);

/**
 * Curried Array.prototype.some function
 * @param fn {function} Callback function
 * @return {function} Function that takes the Array to some
 */
fn6.some = fn =>
    arr =>
        arr.some(fn);

/**
 * Calculate sum of all numbers in the Array
 * @param arr {Array} Array to calculate sum of
 * @return {Number} Calculated sum
 */
fn6.sum = arr =>
    arr.reduce((sum, x) => sum + x, 0);

/**
 * function.js version
 * @return {String} function.js version
 */
fn6.version = () => require("../package.json").version;

module.exports = fn6;

},{"../package.json":2}],2:[function(require,module,exports){
module.exports={
  "name": "fn6.js",
  "version": "1.0.0",
  "description": "Functional programming with ES6",
  "main": "lib/fn6.js",
  "scripts": {
    "build": "./build.sh"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/stefanwimmer128/fn6.js.git"
  },
  "keywords": [
    "fn6.js",
    "fn.js",
    "function",
    "functional",
    "programming"
  ],
  "author": "Stefan Wimmer <stefanwimmer128@gmail.com>",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/stefanwimmer128/fn6.js/issues"
  },
  "homepage": "https://github.com/stefanwimmer128/fn6.js#readme",
  "devDependencies": {
    "browserify": "^13.0.1",
    "jsdoc-to-markdown": "^1.3.6"
  }
}

},{}]},{},[1]);

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
 * Combination of Array.prototype.pop and Array.prototype.push
 * @param arr Array to be called on
 * @returns {*} Last element from array (like pop()) without removing (through push())
 */
fn6.peek = (arr) =>
{
    const x = arr.pop();
    arr.push(x);
    return x;
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

/**
 * fn6.Array is an extended form of the global Array object
 * @extends Array
 */
fn6.Array = class extends Array
{
    /**
     * Initialize fn6.js Array
     * @param args {...*} Values to initialize the Array with
     */
    constructor(...args)
    {
        super(...args);
    }
    
    /**
     * See fn6.pluck() using "this" as Array
     * @param key {String} Key to parse to fn6.pluck()
     * @returns {Array} Return value from fn6.pluck()
     */
    pluck(key)
    {
        return fn6.pluck(this, key);
    }
    
    /**
     * See fn6.peek() using "this" as Array
     * @returns {*} Return value from fn6.peek()
     */
    peek()
    {
        return fn6.peek(this);
    }
    
    /**
     * See fn6.sum() using "this" as Array
     * @returns {Number} Return value from fn6.sum()
     */
    sum()
    {
        return fn6.sum(this);
    }
};

/**
 * Initialize fn6.Array from array
 * @param arr {Array} Array to initialize with
 * @return {fn6.Array} Initialized fn6.Array
 */
fn6.array = (arr) =>
    new fn6.Array(...arr);

module.exports = fn6;

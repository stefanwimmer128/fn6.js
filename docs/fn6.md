# fn6.js 2.4.0-rc.2 Documentation

<a name="fn6"></a>

## fn6
fn6.js Namespace

**Kind**: global constant  
**Author:** Stefan Wimmer <stefanwimmer128@gmail.com>  

* [fn6](#fn6)
    * [.Array](#fn6.Array) ⇐ <code>Array</code>
        * [new fn6.Array(...args)](#new_fn6.Array_new)
        * [.pluck(key)](#fn6.Array+pluck) ⇒ <code>Array</code>
        * [.peek()](#fn6.Array+peek) ⇒ <code>\*</code>
        * [.sum()](#fn6.Array+sum) ⇒ <code>Number</code>
        * [.toObject()](#fn6.Array+toObject) ⇒ <code>Object</code>
    * [.curry(fn)](#fn6.curry) ⇒ <code>function</code>
    * [.uncurry(curried)](#fn6.uncurry) ⇒ <code>function</code>
    * [.bind(fn, [args], [thisArg])](#fn6.bind) ⇒ <code>function</code>
    * [.compose(...fn)](#fn6.compose) ⇒ <code>function</code>
    * [.once(fn)](#fn6.once) ⇒ <code>function</code>
    * [.map(fn)](#fn6.map) ⇒ <code>function</code>
    * [.filter(fn)](#fn6.filter) ⇒ <code>function</code>
    * [.find(fn)](#fn6.find) ⇒ <code>function</code>
    * [.findIndex(fn)](#fn6.findIndex) ⇒ <code>function</code>
    * [.reject(fn)](#fn6.reject) ⇒ <code>function</code>
    * [.reduce(fn)](#fn6.reduce) ⇒ <code>function</code>
    * [.pluck(arr, [key])](#fn6.pluck) ⇒ <code>Array</code> &#124; <code>function</code>
    * [.peek(arr)](#fn6.peek) ⇒ <code>\*</code>
    * [.each(fn)](#fn6.each) ⇒ <code>function</code>
    * [.every(fn)](#fn6.every) ⇒ <code>function</code>
    * [.some(fn)](#fn6.some) ⇒ <code>function</code>
    * [.sum(arr)](#fn6.sum) ⇒ <code>Number</code>
    * [.array(arr)](#fn6.array) ⇒ <code>[Array](#fn6.Array)</code>
    * [.object2array(obj)](#fn6.object2array) ⇒ <code>Array</code>
    * [.array2object(arr)](#fn6.array2object) ⇒ <code>Object</code>
    * [.version()](#fn6.version) ⇒ <code>String</code>

<a name="fn6.Array"></a>

### fn6.Array ⇐ <code>Array</code>
fn6.Array is an extended form of the global Array object

**Kind**: static class of <code>[fn6](#fn6)</code>  
**Extends:** <code>Array</code>  

* [.Array](#fn6.Array) ⇐ <code>Array</code>
    * [new fn6.Array(...args)](#new_fn6.Array_new)
    * [.pluck(key)](#fn6.Array+pluck) ⇒ <code>Array</code>
    * [.peek()](#fn6.Array+peek) ⇒ <code>\*</code>
    * [.sum()](#fn6.Array+sum) ⇒ <code>Number</code>
    * [.toObject()](#fn6.Array+toObject) ⇒ <code>Object</code>

<a name="new_fn6.Array_new"></a>

#### new fn6.Array(...args)
Initialize fn6.js Array


| Param | Type | Description |
| --- | --- | --- |
| ...args | <code>\*</code> | Values to initialize the Array with |

<a name="fn6.Array+pluck"></a>

#### array.pluck(key) ⇒ <code>Array</code>
See fn6.pluck() using "this" as Array

**Kind**: instance method of <code>[Array](#fn6.Array)</code>  
**Returns**: <code>Array</code> - Return value from fn6.pluck()  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | Key to pass to fn6.pluck() |

<a name="fn6.Array+peek"></a>

#### array.peek() ⇒ <code>\*</code>
See fn6.peek() using "this" as Array

**Kind**: instance method of <code>[Array](#fn6.Array)</code>  
**Returns**: <code>\*</code> - Return value from fn6.peek()  
<a name="fn6.Array+sum"></a>

#### array.sum() ⇒ <code>Number</code>
See fn6.sum() using "this" as Array

**Kind**: instance method of <code>[Array](#fn6.Array)</code>  
**Returns**: <code>Number</code> - Return value from fn6.sum()  
<a name="fn6.Array+toObject"></a>

#### array.toObject() ⇒ <code>Object</code>
See fn6.array2object() using "this" as Array

**Kind**: instance method of <code>[Array](#fn6.Array)</code>  
**Returns**: <code>Object</code> - Return value from fn6.array2object()  
<a name="fn6.curry"></a>

### fn6.curry(fn) ⇒ <code>function</code>
Curries function

**Kind**: static method of <code>[fn6](#fn6)</code>  
**Returns**: <code>function</code> - Curried function  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | Function to curry |

<a name="fn6.uncurry"></a>

### fn6.uncurry(curried) ⇒ <code>function</code>
Just the opposite of fn.curry

**Kind**: static method of <code>[fn6](#fn6)</code>  
**Returns**: <code>function</code> - Uncurried function  

| Param | Type | Description |
| --- | --- | --- |
| curried | <code>function</code> | Curried function to uncurry |

<a name="fn6.bind"></a>

### fn6.bind(fn, [args], [thisArg]) ⇒ <code>function</code>
Binds function to custom "this" with arguments

**Kind**: static method of <code>[fn6](#fn6)</code>  
**Returns**: <code>function</code> - Bound function  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | Function to bind |
| [args] | <code>Array</code> | Arguments to bind |
| [thisArg] | <code>Object</code> | this to bind to |

<a name="fn6.compose"></a>

### fn6.compose(...fn) ⇒ <code>function</code>
Composes functions

**Kind**: static method of <code>[fn6](#fn6)</code>  
**Returns**: <code>function</code> - Composed function  

| Param | Type | Description |
| --- | --- | --- |
| ...fn | <code>function</code> | Functions to compose |

<a name="fn6.once"></a>

### fn6.once(fn) ⇒ <code>function</code>
Returns function that can only be called once

**Kind**: static method of <code>[fn6](#fn6)</code>  
**Returns**: <code>function</code> - functions that can only be called once  

| Param | Description |
| --- | --- |
| fn | Function to turn into a function that can only be called once |

<a name="fn6.map"></a>

### fn6.map(fn) ⇒ <code>function</code>
Curried Array.prototype.map function

**Kind**: static method of <code>[fn6](#fn6)</code>  
**Returns**: <code>function</code> - Function that takes the Array to map  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | Callback function |

<a name="fn6.filter"></a>

### fn6.filter(fn) ⇒ <code>function</code>
Curried Array.prototype.filter function

**Kind**: static method of <code>[fn6](#fn6)</code>  
**Returns**: <code>function</code> - Function that takes the Array to filter  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | Callback function |

<a name="fn6.find"></a>

### fn6.find(fn) ⇒ <code>function</code>
Curried Array.prototype.find function

**Kind**: static method of <code>[fn6](#fn6)</code>  
**Returns**: <code>function</code> - Function that takes the Array to find  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | Callback function |

<a name="fn6.findIndex"></a>

### fn6.findIndex(fn) ⇒ <code>function</code>
Curried Array.prototype.findIndex function

**Kind**: static method of <code>[fn6](#fn6)</code>  
**Returns**: <code>function</code> - Function that takes the Array to findIndex  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | Callback function |

<a name="fn6.reject"></a>

### fn6.reject(fn) ⇒ <code>function</code>
Curried Array.prototype.reject function

**Kind**: static method of <code>[fn6](#fn6)</code>  
**Returns**: <code>function</code> - Function that takes the Array to reject  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | Callback function |

<a name="fn6.reduce"></a>

### fn6.reduce(fn) ⇒ <code>function</code>
Curried Array.prototype.reduce function

**Kind**: static method of <code>[fn6](#fn6)</code>  
**Returns**: <code>function</code> - Function that takes the starting point and then the Array to reduce  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | Callback function |

<a name="fn6.pluck"></a>

### fn6.pluck(arr, [key]) ⇒ <code>Array</code> &#124; <code>function</code>
pluck extracts a specific "key" from all objects within the array.

**Kind**: static method of <code>[fn6](#fn6)</code>  
**Returns**: <code>Array</code> &#124; <code>function</code> - Returns array with all extracted values if all parameters are given, if not a function which takes the key argument is returned  

| Param | Type | Description |
| --- | --- | --- |
| arr |  | Array to pluck |
| [key] | <code>String</code> | Key for extraction |

<a name="fn6.peek"></a>

### fn6.peek(arr) ⇒ <code>\*</code>
Combination of Array.prototype.pop and Array.prototype.push

**Kind**: static method of <code>[fn6](#fn6)</code>  
**Returns**: <code>\*</code> - Last element from array (like pop()) without removing (through push())  

| Param | Description |
| --- | --- |
| arr | Array to be called on |

<a name="fn6.each"></a>

### fn6.each(fn) ⇒ <code>function</code>
Curried Array.prototype.forEach function

**Kind**: static method of <code>[fn6](#fn6)</code>  
**Returns**: <code>function</code> - Function that takes the Array to forEach  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | Callback function |

<a name="fn6.every"></a>

### fn6.every(fn) ⇒ <code>function</code>
Curried Array.prototype.every function

**Kind**: static method of <code>[fn6](#fn6)</code>  
**Returns**: <code>function</code> - Function that takes the Array to every  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | Callback function |

<a name="fn6.some"></a>

### fn6.some(fn) ⇒ <code>function</code>
Curried Array.prototype.some function

**Kind**: static method of <code>[fn6](#fn6)</code>  
**Returns**: <code>function</code> - Function that takes the Array to some  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | Callback function |

<a name="fn6.sum"></a>

### fn6.sum(arr) ⇒ <code>Number</code>
Calculate sum of all numbers in the Array

**Kind**: static method of <code>[fn6](#fn6)</code>  
**Returns**: <code>Number</code> - Calculated sum  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> | Array to calculate sum of |

<a name="fn6.array"></a>

### fn6.array(arr) ⇒ <code>[Array](#fn6.Array)</code>
Initialize fn6.Array from array

**Kind**: static method of <code>[fn6](#fn6)</code>  
**Returns**: <code>[Array](#fn6.Array)</code> - Initialized fn6.Array  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> | Array to initialize with |

<a name="fn6.object2array"></a>

### fn6.object2array(obj) ⇒ <code>Array</code>
Creates Array from Object

<code>{ name: "Stefan Wimmer", age: 18 } -> [ [ "name", "Stefan Wimmer" ], [ "age", 18 ] ]</code>

**Kind**: static method of <code>[fn6](#fn6)</code>  
**Returns**: <code>Array</code> - Converted Array  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | Object to convert |

<a name="fn6.array2object"></a>

### fn6.array2object(arr) ⇒ <code>Object</code>
Crates Object from Array

<code>[ [ "name", "Stefan Wimmer" ], [ "age", 18 ] ] -> { name: "Stefan Wimmer", age: 18 }</code>

**Kind**: static method of <code>[fn6](#fn6)</code>  
**Returns**: <code>Object</code> - Converted Object  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> | Array to convert |

<a name="fn6.version"></a>

### fn6.version() ⇒ <code>String</code>
fn6.js version

**Kind**: static method of <code>[fn6](#fn6)</code>  
**Returns**: <code>String</code> - function.js version  

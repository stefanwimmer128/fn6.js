# fn6.js 1.0.0 Documentation

<a name="fn6"></a>

## fn6
fn6.js Namespace

**Kind**: global constant  
**Author:** Stefan Wimmer <stefanwimmer128@gmail.com>  

* [fn6](#fn6)
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
    * [.each(fn)](#fn6.each) ⇒ <code>function</code>
    * [.every(fn)](#fn6.every) ⇒ <code>function</code>
    * [.some(fn)](#fn6.some) ⇒ <code>function</code>
    * [.sum(arr)](#fn6.sum) ⇒ <code>Number</code>
    * [.version()](#fn6.version) ⇒ <code>String</code>

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

<a name="fn6.version"></a>

### fn6.version() ⇒ <code>String</code>
function.js version

**Kind**: static method of <code>[fn6](#fn6)</code>  
**Returns**: <code>String</code> - function.js version  

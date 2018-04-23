# json-refactor

Refactor JSON object structure based on provided rules.

## quick start

```
npm install json-refactor
```

or 

```
<script src="path/to/json-refactor"></script>
```

## how to use

```
var newJson = JSONRefactor(target, keysMap, returnNew);
```

* `target`: Target object
* `keysMap`: Keys map to refactor
* `returnNew`: Whether return new json, if true, a new clone target will be return, and the origin target will not be modified 

## keysMap

the `to key` to `from key` hash map.

target: 

```
{a: 1, b: 2}
```

keysMap: 

```
{aaa: 'a', bbb: 'b'}
```

result: 

```
{aaa: 1, bbb: 2}
```

### keysMap should have the same structure with target json object, includes array

target: 

```
[{a: 1, b: 2}, {a: 3, b: 4}, {a: 5, b: 6}]
```

keysMap: 

```
[{aaa: 'a', bbb: 'b'}]
```

result:
 
```
[{aaa: 1, bbb: 2}, {aaa: 3, bbb: 4}, {aaa: 5, bbb: 6}]
```

### support `.` semantics

target: 

```
{a: {a: {a: 1}}}
```

keysMap: 

```
{aaa: 'a.a.a'}
```

result: 

```
{aaa: 1}
```

### make a new key, and keep on refactoring the new key.

target: 

```
{a: {a: {a: 1}}}
```

keysMap: 

```
{aaa: 'a', _aaa: {aaa: 'a', _aaa: {aaa: 'a'}}}
```

result: 

```
{aaa: {aaa: {aaa: 1}}}
```

### make a handling to origin value

use `|` to concat `from key` and `operator`, and you can add  multiple operators.

target: 

```
{a: 1, b: '234', c: '1.22', d: '0.01'}
```

keysMap: 

```
{aaa: 'a|bool', bbb: 'b|int', ccc: 'c|float', ddd: 'd|int|bool'}
```

result: 

```
{aaa: true, bbb: 234, ccc: 1.22, ddd: false}
```

## api

### JSONRefactor.set

set the default config values

```
JSONRefactor.set({
    keepOnHandling: '_',
    operatorDelimiter: '|'
});
```

* `keepOnHandling`: make a new key, and keep on refactoring the new key
    - `default`: `'_'`

* `operatorDelimiter`: delimiter of operators
    - `default`: `'|'`

### JSONRefactor.register

register a operation

```
// register a operator
JSONRefactor.register(test, handler); // this mode only for `test` is string
JSONRefactor.register({test: 'test', handler: function(originValue, operator){}});

// register multi operators
JSONRefactor.register([{...}, {...}, ...]);
```

* `test`: to confirm if a operator is match current operation
    - `type`: `string/RegExp`
    - `example`: `int`, `float`, `bool`, `string`

* `handler`: handle the origin value and return a new value.
    - `type`: `function`
    - `parameters`: `(originValue, operator)`
        - `originValue`: origin value of current key mapped
        - `operator`: operator matched
    - `note`: must return a new value, or current key has no value to mapping
    
## built in operator

### int

get a integer value

### float

get a float value

### bool

get a bool value

### string

get a string value

### sum

sum value specified by a key of every element, within an array.
 
format: `sum!key`

example: 

target: 

```
{
    oldKey: [{a: 1, b: 2}, {a: 3, b: 4}, {a: 5, b: 6}]
}
```

keysMap: 

```
{
    newKey: 'oldKey|sum!a'
}
```

result:
 
```
{
    newKey: 9
}
```

### average

get an average value specified by a key of every element, within an array.
 
format: `average!key`

example: 

target: 

```
{
    oldKey: [{a: 1, b: 2}, {a: 3, b: 4}, {a: 5, b: 6}]
}
```

keysMap: 

```
{
    newKey: 'oldKey|average!a'
}
```

result:
 
```
{
    newKey: 3
}
```

## [demo code](./example)
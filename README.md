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
const JSONRefactor = require('json-refactor');

let newJson = JSONRefactor(target, keysMap, returnNew);
```

* `target`: Target to be refactored.
* `keysMap`: Rules to refactor.
* `returnNew`: Whether return new json. If true, a new cloned target will be returned, and the original target will not be modified.

## keysMap(rules)

The `to key` to `from key` hash map.

### Base use.

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

### KeysMap should have the same structure with target json object, includes array.

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

### Support `.` semantics.

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

### Make a new key, and keep on refactoring the new key.

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

### Make a handling to original value.

Use `|` to concat `from key` and `operator`, and you can add multiple operators.

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

Set the default config values.

```
JSONRefactor.set({
    keepOnHandling: '_',
    operatorDelimiter: '|'
});
```

* `keepOnHandling`: Make a new key, and keep on refactoring the new key.
    - `default`: `'_'`

* `operatorDelimiter`: Delimiter of operators.
    - `default`: `'|'`

### JSONRefactor.register

Register a operation.

```
// register a operator
JSONRefactor.register(test, handler);
JSONRefactor.register({test, handler: function(originValue, operator){}});

// register multiple operators
JSONRefactor.register([{...}, {...}, ...]);
```

* `test`: To confirm if a operator is matching current operation.
    - `type`: `string/RegExp`
    - `example`: `int`, `float`, `bool`, `string`, `/^slice!0!10/`

* `handler`: Handle the original value and return a new value.
    - `type`: `function`
    - `parameters`: `(originValue, operator)`
        - `originValue`: Original value which current key mapped.
        - `operator`: Operator matched.
    - `note`: Must return a new value, or current key has no value to mapping.
    
## Built in operator

### int

Get a integer value.

### float

Get a float value.

### bool

Get a bool value.

### string

Get a string value.

### sum

Sum value specified by a key of each element, within an array.
 
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

Get an average value specified by a key of each element, within an array.
 
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

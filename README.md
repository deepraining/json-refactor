# json-refactor

Refactor JSON object structure based on provided rules.

## Quick start.

```
npm install json-refactor --save

const JSONRefactor = require('json-refactor');
```

## How to use.

```
const newTarget = JSONRefactor(target, mapping, cloneTarget);
```

- `target`: Target to be refactored.
- `mapping`: Mapping rules to refactor.
- `cloneTarget`: Whether to clone target, if `true`, a new cloned target will be formatted, and the original target will not be modified. Default `false`, the original target will be modified.

## `mapping` rules

The `to key` to `from key` hash map.

### 1. Base use.

`target`: `{a: 1, b: 2}`

`mapping`: `{aaa: 'a', bbb: 'b'}`

`result`: `{aaa: 1, bbb: 2}`

### 2. `mapping` should have the same structure with target json object, including array.

`target`: `[{a: 1, b: 2}, {a: 3, b: 4}, {a: 5, b: 6}]`

`mapping`: `[{aaa: 'a', bbb: 'b'}]`

`result`: `[{aaa: 1, bbb: 2}, {aaa: 3, bbb: 4}, {aaa: 5, bbb: 6}]`

### 3. Support `.` semantic.

`target`: `{a: {a: {a: 1}}}`

`mapping`: `{aaa: 'a.a.a'}`

`result`: `{aaa: 1}`

### 4. Make a new key, and keep on formatting the new key.

`target`: `{a: {a: {a: 1}}}`

`mapping`: `{aaa: 'a', _aaa: {aaa: 'a', _aaa: {aaa: 'a'}}}`

`result`: `{aaa: {aaa: {aaa: 1}}}`

### 5. Make an operator to original value.

Use `|` to concat `from key` and `operator`, and you can add multiple operators.

`target`: `{a: 1, b: '234', c: '1.22', d: '0.01'}`

`mapping`: `{aaa: 'a|bool', bbb: 'b|int', ccc: 'c|float', ddd: 'd|int|bool'}`

`result`: `{aaa: true, bbb: 234, ccc: 1.22, ddd: false}`

## api

### JSONRefactor.set

Set the default config values.

```
JSONRefactor.set({
  keepOnHandling: '_',
  operatorDelimiter: '|'
});
```

- `keepOnHandling`: Make a new key, and keep on formatting the new key.

  - `type`: `string`
  - `default`: `_`

- `operatorDelimiter`: Delimiter of operators.
  - `type`: `string`
  - `default`: `|`

### JSONRefactor.register

Register operators.

```
// register one operator
JSONRefactor.register(test, handler);
JSONRefactor.register({test, handler});

// register multiple operators
JSONRefactor.register([{test1, handler1}, {test2, handler2}, ...]);
```

- `test`: To match the operator.

  - `type`: `string/RegExp`
  - `example`: `int`, `float`, `bool`, `string`, `/^slice!0!10/`

- `handler`: Handle the original value and return a new value.
  - `type`: `function`
  - `example`: `(originValue, operator) => { ... return a new value }`
  - `parameters`: `originValue, operator`
    - `originValue`: Original value to be handled.
    - `operator`: Operator matched.
  - `note`: It should return a new value.

## Built-in operators.

### 1. `int`

Get an integer value.

### 2. `float`

Get a float value.

### 3. `bool`

Get a bool value.

### 4. `string`

Get a string value.

### 5. `sum`

Get a sum value specified by a key of each element, within an array.

`format`: `sum!key`

`target`: `{oldKey: [{a: 1, b: 2}, {a: 3, b: 4}, {a: 5, b: 6}]}`

`mapping`: `{newKey: 'oldKey|sum!a'}`

`result`: `{newKey: 9}`

### 6. `average`

Get an average value specified by a key of each element, within an array.

`format`: `average!key`

`target`: `{oldKey: [{a: 1, b: 2}, {a: 3, b: 4}, {a: 5, b: 6}]}`

`mapping`: `{newKey: 'oldKey|average!a'}`

`result`: `{newKey: 3}`

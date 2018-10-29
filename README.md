# json-refactor

Refactor JSON object structure based on provided rules.

## quick start

```
npm install json-refactor --save
```

## how to use

```
import refactor from 'json-refactor';

const result = refactor(target, rules, clone);
```

- `target`: target to be refactored
- `rules`: rules to refactor
- `clone`: default `false`, whether to clone a copy of target. By default, the original target will be modified and return. If `true`, a new cloned target will be formatted and return, and the original target will not be modified.

## rules

The `to key` to `from key` hash map.

### 1. base

`target`: `{a: 1, b: 2}`

`rules`: `{aaa: 'a', bbb: 'b'}`

`result`: `{aaa: 1, bbb: 2}`

### 2. rules should have the same structure with target, including array

`target`: `[{a: 1, b: 2}, {a: 3, b: 4}, {a: 5, b: 6}]`

`rules`: `[{aaa: 'a', bbb: 'b'}]`

`result`: `[{aaa: 1, bbb: 2}, {aaa: 3, bbb: 4}, {aaa: 5, bbb: 6}]`

### 3. support `.` semantic

`target`: `{a: {a: {a: 1}}}`

`rules`: `{aaa: 'a.a.a'}`

`result`: `{aaa: 1}`

### 4. make a new key, and keep on formatting the new key

`target`: `{a: {a: {a: 1}}}`

`rules`: `{aaa: 'a', _aaa: {aaa: 'a', _aaa: {aaa: 'a'}}}`

`result`: `{aaa: {aaa: {aaa: 1}}}`

### 5. take an operator to original value

Use `|` to concat `from key` and `operator`, and you can add multiple operators.

`target`: `{a: 1, b: '234', c: '1.22', d: '0.01'}`

`rules`: `{aaa: 'a|bool', bbb: 'b|int', ccc: 'c|float', ddd: 'd|int|bool'}`

`result`: `{aaa: true, bbb: 234, ccc: 1.22, ddd: false}`

## api

### `refactor.set`: set the default config values

```
refactor.set({
  keepOnHandling: '_',
  operatorDelimiter: '|'
});
```

- `keepOnHandling`: make a new key, and keep on formatting the new key

  - `type`: `string`
  - `default`: `_`

- `operatorDelimiter`: delimiter of operators
  - `type`: `string`
  - `default`: `|`

### `refactor.register`: register operators

```
// register one operator
refactor.register(test, handler);
refactor.register({test, handler});

// register multiple operators
refactor.register([{test1, handler1}, {test2, handler2}, ...]);
```

- `test`: to match the operator

  - `type`: `string/RegExp`
  - `example`: `int`, `float`, `bool`, `string`, `/^slice!0!10/`

- `handler`: handle the original value and return a new value
  - `type`: `function`
  - `example`: `(value, operator) => newValue`
  - `parameters`: `value, operator`
    - `value`: original value to be handled
    - `operator`: operator matched

## built-in operators

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

`rules`: `{newKey: 'oldKey|sum!a'}`

`result`: `{newKey: 9}`

### 6. `average`

Get an average value specified by a key of each element, within an array.

`format`: `average!key`

`target`: `{oldKey: [{a: 1, b: 2}, {a: 3, b: 4}, {a: 5, b: 6}]}`

`rules`: `{newKey: 'oldKey|average!a'}`

`result`: `{newKey: 3}`

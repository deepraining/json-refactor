# json-refactor

[English Documentation](./README.en.md)

基于指定的规则对 Json 数据结构进行重构.

## 快速开始

```
npm install json-refactor --save
```

## 怎样使用

```
import refactor from 'json-refactor';

const result = refactor(target, rules, clone);
```

- `target`: 待重构的对象
- `rules`: 重构规则
- `clone`: 默认 `false`, 是否复制原对象. 默认会对原对象进行重构，并返回. 如果为 `true`, 则会复制原对象并重构后返回，原对象不会被修改.

## 规则

`to key` 到 `from key` 映射.

### 1. 基本

`target`: `{a: 1, b: 2}`

`rules`: `{aaa: 'a', bbb: 'b'}`

`result`: `{aaa: 1, bbb: 2}`

### 2. rules 应该与原对象保持一样的数据结构, 包括数组

`target`: `[{a: 1, b: 2}, {a: 3, b: 4}, {a: 5, b: 6}]`

`rules`: `[{aaa: 'a', bbb: 'b'}]`

`result`: `[{aaa: 1, bbb: 2}, {aaa: 3, bbb: 4}, {aaa: 5, bbb: 6}]`

### 3. 支持 `.` 语法

`target`: `{a: {a: {a: 1}}}`

`rules`: `{aaa: 'a.a.a'}`

`result`: `{aaa: 1}`

### 4. 创建一个新的键名，并继续对这个键名的值进行重构

`target`: `{a: {a: {a: 1}}}`

`rules`: `{aaa: 'a', _aaa: {aaa: 'a', _aaa: {aaa: 'a'}}}`

`result`: `{aaa: {aaa: {aaa: 1}}}`

### 5. 对原值添加一个操作符

用 `|` 连接 `from key` 与 `operator`, 并且可以添加多个操作符.

`target`: `{a: 1, b: '234', c: '1.22', d: '0.01'}`

`rules`: `{aaa: 'a|bool', bbb: 'b|int', ccc: 'c|float', ddd: 'd|int|bool'}`

`result`: `{aaa: true, bbb: 234, ccc: 1.22, ddd: false}`

## api

### `refactor.set`: 设置默认的配置值

```
refactor.set({
  keepOnHandling: '_',
  operatorDelimiter: '|'
});
```

- `keepOnHandling`: 创建一个新的键名，并继续对这个键名的值进行重构

  - `type`: `string`
  - `default`: `_`

- `operatorDelimiter`: 多个操作符的分隔符
  - `type`: `string`
  - `default`: `|`

### `refactor.register`: 注册操作符

```
// 注册一个操作符
refactor.register(test, handler);
refactor.register({test, handler});

// 注册多个操作符
refactor.register([{test1, handler1}, {test2, handler2}, ...]);
```

- `test`: 匹配操作符

  - `type`: `string/RegExp`
  - `example`: `int`, `float`, `bool`, `string`, `/^slice!0!10/`

- `handler`: 操作原值，并返回一个新值
  - `type`: `function`
  - `example`: `(value, operator) => newValue`
  - `parameters`: `value, operator`
    - `value`: 原值
    - `operator`: 匹配到的操作符

## 内置操作符

### 1. `int`

获取整数值

### 2. `float`

获取小数值

### 3. `bool`

获取 bool 值

### 4. `string`

获取字符串值

### 5. `sum`

获取指定数组中每个对象的某个键对应的值的和

`format`: `sum!key`

`target`: `{oldKey: [{a: 1, b: 2}, {a: 3, b: 4}, {a: 5, b: 6}]}`

`rules`: `{newKey: 'oldKey|sum!a'}`

`result`: `{newKey: 9}`

### 6. `average`

获取指定数组中每个对象的某个键对应的值的平均数

`format`: `average!key`

`target`: `{oldKey: [{a: 1, b: 2}, {a: 3, b: 4}, {a: 5, b: 6}]}`

`rules`: `{newKey: 'oldKey|average!a'}`

`result`: `{newKey: 3}`

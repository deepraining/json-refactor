# json-refactor

重构json

## 使用
```
JSON.refactor(source, map, returnNewJson)
```
* source: 原json对象
* map: 重构map
* returnNewJson: 是否返回新的json数据（默认为false, 修改原数据）

## map

### 示例json数据

```
[
	{
		a: {
			aa: {
				aaa: {
					aaaa: "123"
				}
			}
		},
		b: {
			a: 1, b: 2, c: [
				{
					h: "hhhh",
					i: "1234",
					j: 456,
					k: ""
				},
				{
					h: "hhhh",
					i: "1234",
					j: 4556,
					k: ""
				}
			]
		},
		c: 3.4,
		d: "32.00"
	},
	{
		a: {
			aa: {
				aaa: {
					aaaa: "123"
				}
			}
		},
		b: {
			a: 1, b: 2, c: [
				{
					h: "hhhh",
					i: "1234",
					j: 4556,
					k: ""
				},
				{
					h: "hhhh",
					i: "1234",
					j: 4556,
					k: ""
				}
			]
		},
		c: 3.4,
		d: "32.00"
	}
]
```
### 示例map
```
[{
	aa: "a",
	bb: "b",
	cc: "c!int",
	dd: "d!float",
	//对更改之后的bb属性进行操作
	_bb: {
		aaaa: "a!string",
		bbbb: "b!bool",
		c:[{
			hhhh: "h",
			iiii: "i!int",
			jjjj: "j!string",
			kkkkk: "k!bool"
		}]
	},
	ff: "aa.aa.aaa.aaaa!int"
}]
```
###  说明

* source结构和map结构要完全一样
* map 键为新的键名，值为原来的键名，此外还可以做数据转换，在原来的键名后面加上叹号和操作符，"key!handle"，handle的可操作值为（int, float, string, bool）
* 如果在更换键名的数据上再操作，可以使用 "_" 加新键名
* 支持点语法，目前只支持四级
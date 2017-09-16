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
		d: "32.00",
		e: [
			{
				a: 7.1,
				b: "haha",
				c: 3
			},
			{
				a: 8.9,
				b: "hehe",
				c: 3
			}
		],
		g: {
			g: {
				g: [
					{
						a: 7.1,
						b: "haha",
						c: 3
					},
					{
						a: 8.9,
						b: "hehe",
						c: 3
					}
				]
			}
		},
		h: 1,
		i: {
			i: {
				i: 100
			}
		},
		j: {
			j: {
				j: 12
			}
		}
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
		d: "32.00",
		e: [
			{
				a: 7.1,
				b: "haha",
				c: 3
			},
			{
				a: 8.9,
				b: "hehe",
				c: 3
			}
		],
		g: {
			g: {
				g: [
					{
						a: 7.1,
						b: "haha",
						c: 3
					},
					{
						a: 8.9,
						b: "hehe",
						c: 3
					}
				]
			}
		},
		h: -1,
		i: {
			i: {
				i: 200
			}
		},
		j: {
			j: {
				j: 0
			}
		}
	}
]
```
### 示例map
```
[{
	aa: "a^",
	bb: "b^",
	cc: "c!int^",
	dd: "d!float^",
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
	ff: "aa.aa.aaa.aaaa!int",
	ee1: "e[]|a|sum||round",
	ee2: "e[]|b|concat| |toUpperCase",
	gg1: "g.g.g[]|a|sum||round",
	gg2: "g.g.g[]|b|concat| |toUpperCase",
	hh: "h!returnIfSuccess",
	ii: "i.i.i!double",
	j: {
		j: {
			j: "j!bool"
		}
	}
}]
```
###  说明

* source结构和map结构要完全一样
* map 键为新的键名，值为原来的键名
* 同级替换默认会删除原来的数据，如果要保留，后面添加符号 "^" 即可保留
* "\_" 操作符，如果在更换键名的数据上再操作，可以使用 "\_" 加新键名
* "!" 数据转换与函数操作符
  1. "key!handle"，在原来的键名后面加上叹号和操作符
  2. 对于内置数据操作，handle的可操作值为（int, float, string, bool）
  3. 对于函数操作符，handle应该是一个全局函数(不应与内置数据操作符冲突)，传入键名对应的值，返回新值
* "." 点语法，用点表示属性选择（只向下取值，不向上取值）
* "key[]|subKey|action|actionExtra|subAction" 数组操作，这个必须map值得末尾，且不应该有 "!" 操作符
  1. key: 操作属性（值必须是一个数组）
  2. subKey: 对每一个数组中都要操作的值
  3. action: 操作（目前支持sum(求和), average(求平均), max(取最大值), min(取最小值), concat(链接字符串)）
  4. actionExtra: 给操作符和子操作符用的参数(主要针对字符串，concat操作的连接符)
  5. subAction: 子操作符(sum,average,max,min -> round,floor,ceil,abs; concat -> toUpperCase, toLowerCase)
/**
 * json-refactor
 * Created by senntyou on 2016/11/22.
 */
(function (global, factory) {

    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = factory(global, true);
    } else {
        factory(global);
    }

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function (window, noGlobal) {

    //克隆对象
    function cloneObject() {
        var obj = arguments[0];
        if (typeof obj === 'undefined' || obj === null)
            return {};

        if (typeof obj !== 'object')
            return obj;

        //第二个参数是属性名称列表，就采用该列表进行刷选
        //否则就克隆所有属性
        var attrs = arguments[1], attr;
        var enable_spec_attr = true;
        if (!(attrs instanceof Array)) {
            //console.log(attrs);
            attrs = obj;
            enable_spec_attr = false;
        }

        var result = {};
        var i;
        for (i in attrs) {
            attr = enable_spec_attr ? attrs[i] : i;
            //console.log(attr);
            if (obj.hasOwnProperty(attr)) {
                if (obj[attr] instanceof Array) {
                    result[attr] = cloneArray(obj[attr]);
                }
                else if (typeof obj[attr] === 'object') {
                    result[attr] = cloneObject(obj[attr]);
                } else {
                    result[attr] = obj[attr];
                }
            }
        }

        return result;
    }

    //克隆数组
    function cloneArray(array) {
        if (typeof array === 'undefined' || array === null)
            return [];

        if (!(array instanceof Array))
            return [];

        var result = [];

        var i;
        for (i in array) {
            if (typeof array[i] !== 'object') {
                result[i] = array[i];
                continue;
            }

            //clone object
            result[i] = cloneObject(array[i]);
        }

        return result;
    }

    /**
     * 转换类型
     * @param value 带转换的值
     * @param format 格式
     * @returns {*}
     */
    function convertDataType(value, format) {
        switch (format) {
            case 'int':
                return parseInt(value);
            case 'float':
                return parseFloat(value);
            case 'bool':
                return !!value;
            case 'string':
                return value + '';
            default :
                return value;
        }
    }

    /**
     * 转换点语法的数据
     * @param target
     * @param mapKey
     * @param originKeyArrayByDot
     * @param format
     */
    function convertDataOfDotKey(target, mapKey, originKeyArrayByDot, format) {
        var length = originKeyArrayByDot.length,
            value;
        if (length == 2) {
            value = target[originKeyArrayByDot[0]] != undefined && target[originKeyArrayByDot[0]][originKeyArrayByDot[1]];
        } else if (length == 3) {
            value = target[originKeyArrayByDot[0]] != undefined && target[originKeyArrayByDot[0]][originKeyArrayByDot[1]] != undefined &&
                target[originKeyArrayByDot[0]][originKeyArrayByDot[1]][originKeyArrayByDot[2]];
        }else if (length == 4) {
            value = target[originKeyArrayByDot[0]] != undefined && target[originKeyArrayByDot[0]][originKeyArrayByDot[1]] != undefined &&
                target[originKeyArrayByDot[0]][originKeyArrayByDot[1]][originKeyArrayByDot[2]] != undefined &&
                target[originKeyArrayByDot[0]][originKeyArrayByDot[1]][originKeyArrayByDot[2]][originKeyArrayByDot[3]];
        }
         else {
            console.error("点语法的解析最大只支持四级");
            return;
        }

        typeof value != 'object' ? (
            target[mapKey] = !format ? value : convertDataType(value, format)
        ) : (
            Array.isArray(value) ? (
                target[mapKey] = cloneArray(value)
            ) : (
                target[mapKey] = cloneObject(value)
            )
        );
    }
    /**
     * 转换值
     * @param target 目标对象
     * @param map map
     * @param mapKey map中的key
     */
    function convertValue(target, map, mapKey) {
        //字符串
        var mapValue = map[mapKey],//map值
            mapValueArray = mapValue.split('!'),
            originalKey = mapValueArray[0],//原始键
        //map value: "key!format", 感叹号前面是键值，感叹号后面是转换值
            format = mapValueArray[1],//格式
            targetValue = target[originalKey];//目标值

        var hasDot = !!~originalKey.indexOf('.'),//里面是否有点号
            originKeyArrayByDot = hasDot && originalKey.split('.');//用点号分隔originKey(目前最多只\支持四级)

        hasDot && originKeyArrayByDot.length > 1? (
            convertDataOfDotKey(target, mapKey, originKeyArrayByDot, format)
        ) : (
            target[mapKey] = !format ? targetValue : convertDataType(targetValue, format),
                delete target[originalKey]
        );


    }

    //格式化json
    function format(target, map) {
        //是数组
        Array.isArray(map) ? (
            target.map(function (item) {
                //如果是对象或数组
                if (!!map[0] && typeof item == 'object') format(item, map[0]);
            })
        ) : (
            //是对象
            Object.keys(map).map(function (mapKey) {
                var mapValue,//map值
                    targetValue;//目标值

                mapValue = map[mapKey];
                //如果是以下划线开头，并且在原数据中不存在这个键，则就是某个字段的二次改变
                if (mapKey.startsWith('_') && target[mapKey] == undefined) {
                    targetValue = target[mapKey.slice(1)];
                } else {
                    targetValue = target[mapKey];
                }
                //是对象或数组并且原数据中存在这个字段
                if (typeof mapValue == 'object' && !!targetValue) {
                    Array.isArray(mapValue) ? (//array
                        targetValue.map(function (item) {
                            //如果是对象或数组
                            if (!!mapValue[0] && typeof item == 'object') format(item, mapValue[0]);
                        })
                    ) : (//object
                        format(targetValue, mapValue)
                    );
                } else
                //字符串
                    convertValue(target, map, mapKey);
            })
        );
    }

    /**
     * 初始函数
     * @param source 原对象
     * @param map 键值地图
     * @param returnNewJson 是否返回新的json文件（默认：false）
     */
    var jsonRefactor = function (source, map, returnNewJson) {
        var target = !!returnNewJson ? (
            source instanceof Array ? cloneArray(source) : cloneObject(source)
        ) : source;

        format(target, map);
        return target;
    };

    if (!noGlobal) {
        window.JSON.refactor = jsonRefactor;
    }
    return jsonRefactor;
}));
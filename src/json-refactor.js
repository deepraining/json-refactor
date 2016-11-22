/**
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
     * 转换值
     * @param target 目标对象
     * @param map map
     * @param item map中的item
     */
    function convertValue(target, map, item) {
        //字符串
        var mapValue = map[item],//map值
            mapValueArray = mapValue.split('!'),
            originalKey = mapValueArray[0],//原始键
            //map value: "key!format", 感叹号前面是键值，感叹号后面是转换值
            format = mapValueArray[1],//格式
            targetValue = target[originalKey];//目标值

        target[item] = !format ? targetValue : convertDataType(targetValue, format);
        delete target[originalKey];

    }

    //格式化json
    function format(target, map) {
        //是数组
        map instanceof Array ? (
            target.map(function (item) {
                //如果是对象或数组
                if (typeof item == 'object' && !!map[0]) format(item, map[0]);
                else return !1
            })
        ) : (
            //是对象
            Object.keys(map).map(function (item) {
                var mapValue = map[item],//map值
                    targetValue = target[item];//目标值
                //是对象或数组并且原数据中存在这个字段
                if (typeof mapValue == 'object' && !!targetValue) {
                    mapValue instanceof Array ? (//array
                        targetValue.map(function (item) {
                            //如果是对象或数组
                            if (typeof item == 'object' && !!map[0]) format(item, map[0]);
                            else return !1
                        })
                    ) : (//object
                        format(targetValue, mapValue)
                    );
                    return;
                }

                //字符串
                convertValue(target, map, item);
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
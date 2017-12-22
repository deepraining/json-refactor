/**
 * 模拟函数
 * @param data
 * @returns {*}
 */
function fakeFunctionWithReturn (data) {
    return data;
}

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
        attrs = obj;
        enable_spec_attr = false;
    }

    var result = {};
    var key;
    for (key in attrs) {
        attr = enable_spec_attr ? attrs[key] : key;
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

    array.map(function (item, index) {
        typeof item !== 'object' ? (
            result[index] = item
        ) : (
            result[index] = cloneObject(item)
        )
    });

    return result;
}

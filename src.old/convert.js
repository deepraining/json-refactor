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
            !!self[format] && typeof self[format] == 'function' ? (value = self[format](value)) : (
                console.error("" + format + "：没有此内置操作，也无此全局函数")
            );
            return value;
    }
}

/**
 * 转换数组操作
 * @param target
 * @param mapKey
 * @param originalKey
 */
function convertDataOfArrayMark(target, mapKey, originalKey) {
    target[mapKey] = getDataOfArrayMark(target, originalKey);
}

/**
 * 获取数组操作的值
 * @param target
 * @param originalKey
 * @returns {*}
 */
function getDataOfArrayMark(target, originalKey) {
    var originalKeyArray = originalKey.split("|"),
        key = originalKeyArray[0].slice(0, -2),//操作属性
        subKey = originalKeyArray[1],//对每一个数组中都要操作的值
        action = originalKeyArray[2],//操作
        actionExtra = originalKeyArray[3],//actionExtra
        subAction = originalKeyArray[4],//subAction
        hasSubAction = !!subAction,//是否有子操作
        subActionFunction,//subAction对应的函数
        targetValueOfKey = target[key];

    var sumValue = 0,
        averageValue = 0,
        maxValue = 0,
        minValue = 0,
        concatArray = [];
    if (!targetValueOfKey || !Array.isArray(targetValueOfKey)) {
        console.error("配置的键 " + key + " 不存在，或者值不是数组");
        return;
    }

    if (hasSubAction) {
        switch (subAction) {
            case "round":
                subActionFunction = Math.round;
                break;
            case "floor":
                subActionFunction = Math.floor;
                break;
            case "ceil":
                subActionFunction = Math.ceil;
                break;
            case "abs":
                subActionFunction = Math.abs;
                break;
            default:
                subActionFunction = fakeFunctionWithReturn;
                action != "concat" && console.error("子操作 " + subAction + " 不存在");
                break
        }
    }

    switch (action) {
        //求和
        case "sum":
            targetValueOfKey.map(function (item) {
                hasSubAction ? (
                    sumValue += subActionFunction(item[subKey])
                ) : (
                    sumValue += item[subKey]
                );

            });
            return sumValue;
        //求平均
        case "average":
            targetValueOfKey.map(function (item) {
                hasSubAction ? (
                    sumValue += subActionFunction(item[subKey])
                ) : (
                    sumValue += item[subKey]
                );

            });
            averageValue = sumValue / targetValueOfKey.length;
            return averageValue;
        //求最大值
        case "max":
            targetValueOfKey.map(function (item, index) {
                var value = hasSubAction ? subActionFunction(item[subKey]) : item[subKey];
                !index ? (
                    maxValue = value
                ) : (
                    value > maxValue && (maxValue = value)
                );
            });
            return maxValue;
        //求最小值
        case "min":
            targetValueOfKey.map(function (item, index) {
                var value = hasSubAction ? subActionFunction(item[subKey]) : item[subKey];
                !index ? (
                    minValue = value
                ) : (
                    value < minValue && (minValue = value)
                );
            });
            return minValue;
        //求字符串链接
        case "concat":
            targetValueOfKey.map(function (item) {
                var value = hasSubAction ? item[subKey][subAction]() : item[subKey];
                concatArray.push(value);
            });
            return concatArray.join(!actionExtra ? "" : actionExtra);
        default:
            console.error("操作 " + action + " 不存在");
            return;
    }

}
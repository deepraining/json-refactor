
//格式化json
function format(target, map) {

    if (!checkTargetMapMatch(target, map)) return;

    //是数组
    if (Array.isArray(map)) {
        target.map(function (item) {
            format(item, map[0]);
        });
    }
    //是对象
    else {
        Object.keys(map).map(function (mapKey) {
            var mapValue,//map值
                targetValue;//目标值

            mapValue = map[mapKey];
            //如果是以下划线开头，并且在原数据中不存在这个键，则就是某个字段的二次改变
            if (mapKey.slice(0, 1) == '_'  && typeof target[mapKey] == 'undefined') {
                targetValue = target[mapKey.slice(1)];
            } else {
                targetValue = target[mapKey];
            }

            //是对象或数组并且原数据中存在这个字段
            if (typeof mapValue == 'object') {

                if (!checkTargetMapMatch(targetValue, mapValue)) return;

                //array
                if (Array.isArray(mapValue)) {
                    targetValue.map(function (item) {
                        if (!checkTargetMapMatch(item, mapValue[0])) return;

                        format(item, mapValue[0]);
                    })
                }
                //object
                else {
                    format(targetValue, mapValue);
                }
            }
            else if (typeof mapValue == 'string') {
                //字符串
                convertValue(target, map, mapKey);
            }
            else {
                console.error('无法解析key: \n' + (typeof mapValue == 'string' ? mapValue : (typeof mapValue == 'object' ? JSON.stringify(mapValue) : '')));
            }
        })
    }
}

/**
 * 初始函数
 * @param source 原对象
 * @param map 键值地图
 * @param returnNewJson 是否返回新的json文件（默认：false）
 */
var jsonRefactor = function (source, map, returnNewJson) {

    if (!source || typeof source != 'object') {
        console.error("传入的source格式有误，请传入对象或数组");
        return target;
    }
    if (!map || typeof map != 'object') {
        console.error("传入的map格式有误，请传入对象或数组");
        return target;
    }

    var target = !!returnNewJson ? (
        Array.isArray(source) ? cloneArray(source) : cloneObject(source)
    ) : source;

    format(target, map);

    return target;
};

JSON.refactor = jsonRefactor;
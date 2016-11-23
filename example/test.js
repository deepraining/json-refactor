/**
 * Created by senntyou on 2016/11/22.
 */
var a = [
        {
            a: 1,
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
            a: 1,
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
    ],
    b = [{
        aa: "a!bool",
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
        }
    }];
console.log(JSON.refactor(a, b));
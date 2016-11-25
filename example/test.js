/**
 * Created by senntyou on 2016/11/22.
 */
var a = [
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
    ],
    b = [{
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
    }];
console.log(JSON.refactor(a, b));
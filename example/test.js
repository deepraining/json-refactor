/**
 * Created by senntyou on 2016/11/22.
 */
function returnIfSuccess(number) {
    return number == 1;
}
function double(number) {
    return number * 2;
}

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
    ],
    b = [{
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
        },
        zzzz: 'zzz',
        _zzzz: {
            haha: 'hehe'
        }
    }];
console.log(JSON.refactor(a, b));
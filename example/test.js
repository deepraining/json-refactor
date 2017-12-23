
jsonRefactor.register({
    test: 'returnIfSuccess',
    handler: (originValue) => {
        return originValue === 1;
    }
});

jsonRefactor.register({
    test: 'double',
    handler: (originValue) => {
        return originValue * 2;
    }
});

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
            },
            w: {w: {w: {w: {w: {w: null}}}}},
            ww: '1.1'
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
            },
            w: {w: {w: {w: {w: {w: 'hello'}}}}},
            ww: '1.1'
        }
    ],
    b = [{
        aa: "a",
        bb: "b",
        _bb: {
            aaaa: "a|string",
            bbbb: "b|bool",
            c:[{
                hhhh: "h",
                iiii: "i|int",
                jjjj: "j|string",
                kkkkk: "k|bool"
            }]
        },
        cc: "c|int",
        dd: "d|float",
        ff: "aa.aa.aaa.aaaa|int",
        ee1: "e|sum!a",
        gg1: "g.g.g|average!a",
        hh: "h|returnIfSuccess",
        ii: "i.i.i|double",
        iii: 'i',
        _iii: {
            iii: 'i',
            _iii: {
                iii: 'i'
            }
        },
        j: {
            j: {
                j: "j|bool"
            }
        },
        zzzz: 'zzz',
        _zzzz: {
            haha: 'hehe'
        },
        xxx: [
            {
                xx: 'xxxx'
            }
        ],
        www: 'w.w.w.w.w.w',
        ww: 'ww|int|returnIfSuccess'
    }];
console.log(jsonRefactor(a, b));
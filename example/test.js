/**
 * Created by senntyou on 2016/11/22.
 */
var a = [
        {
            a: 1,
            b: {
                a: 1, b: 2, c: 3
            },
            c: 3.4,
            d: "32.00"
        },
        {
            a: 1,
            b: {
                a: 1, b: 2, c: 3
            },
            c: 3.4,
            d: "32.00"
        },
        {
            a: 1,
            b: {
                a: 1, b: 2, c: 3
            },
            c: 3.4,
            d: "32.00"
        },
        {
            a: 1,
            b: {
                a: 1, b: 2, c: 3
            },
            c: 3.4,
            d: "32.00"
        }
    ],
    b = [{
        aa: "a!bool",
        b: {
            aaaa: "a!string",
            bbbb: "b!bool"
        },
        cc: "c!int",
        dd: "d!float"
    }];
console.log(JSON.refactor(a, b));
const refactor = require('../lib');

describe('array test', () => {
  test('each item of result should have "aaa" and "bbb" fields.', () => {
    const target = [{ a: 1, b: 2 }, { a: 3, c: 5, d: 6 }];
    const rules = [{ aaa: 'a', bbb: 'b' }];
    const result = refactor(target, rules);

    expect(result).toBe(target);
    expect(result[0].a).toBe(1);
    expect(result[0].aaa).toBe(1);
    expect(result[0].b).toBe(2);
    expect(result[0].bbb).toBe(2);
    expect(Object.keys(result[0]).length).toBe(4); // a, b, aaa, bbb
    expect(result[1].a).toBe(3);
    expect(result[1].aaa).toBe(3);
    expect(result[1].bbb).toBeUndefined();
    expect(Object.keys(result[1]).length).toBe(5); // a, aaa, bbb, c, d
  });

  test('each item of result should have "aaa" and "bbb" fields.', () => {
    const target = {};
    const rules = { list: [{ aaa: 'a', bbb: 'b' }] };
    const result = refactor(target, rules);

    expect(result).toBe(target);
    expect(Object.keys(result).length).toBe(0);
  });

  test('multi levels nested array.', () => {
    const target = [
      {
        a: 1,
        b: 2,
        list: [
          {
            c: 11,
            d: 12,
            list2: [{ e: 21, f: 22 }, { e: 23, f: 24, g: 25 }],
          },
          { d: 14 },
        ],
      },
      { a: 3 },
    ];
    const rules = [
      {
        aaa: 'a',
        bbb: 'b',
        list: [
          {
            ccc: 'c',
            ddd: 'd',
            list2: [
              {
                eee: 'e',
                fff: 'f',
              },
            ],
          },
        ],
      },
    ];
    const result = refactor(target, rules);

    expect(result).toBe(target);
    expect(Object.keys(result[0]).length).toBe(5); // a, b, aaa, bbb, list
    expect(Object.keys(result[1]).length).toBe(3); // a, aaa, bbb
    expect(Object.keys(result[0].list[0]).length).toBe(5); // c, d, ccc, ddd, list
    expect(Object.keys(result[0].list[1]).length).toBe(3); // d, ccc, ddd
    expect(Object.keys(result[0].list[0].list2[0]).length).toBe(4); // e, f, eee, fff
    expect(Object.keys(result[0].list[0].list2[1]).length).toBe(5); // e, f, eee, fff, g
  });

  test('target is map, rules is array', () => {
    const target = { list: {} };
    const rules = { list: [{ aaa: 'a', bbb: 'b' }] };
    const result = refactor(target, rules);

    expect(result).toBe(target);
    expect(Object.keys(result.list).length).toBe(0);
  });

  test('target is string, rules is array', () => {
    const target = { list: 'hello' };
    const rules = { list: [{ aaa: 'a', bbb: 'b' }] };
    const result = refactor(target, rules);

    expect(result).toBe(target);
    expect(typeof result.list).toBe('string');
  });
});

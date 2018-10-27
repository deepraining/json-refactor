const refactor = require('../lib/cjs');

describe('Make a new key, and keep on formatting the new key.', () => {
  test('result should have "aaa.aaa.aaa" field.', () => {
    const target = { a: { a: { a: 1 } } };
    const rules = { aaa: 'a', _aaa: { aaa: 'a', _aaa: { aaa: 'a' } } };
    const result = refactor(target, rules);

    expect(result).toBe(target);
    expect(result.a.a.a).toBe(1);
    expect(result.aaa.aaa.aaa).toBe(1);
    expect(Object.keys(result).length).toBe(2); // a, aaa
  });

  test('result should have "aaa.aaa.aaa" field.', () => {
    const target = {
      list: [
        { list2: [{ key: 1 }, { key: 2 }] },
        { list2: [{ key: 3 }, { key: 4 }] },
      ],
    };
    const rules = {
      data: 'list',
      _data: [{ data2: 'list2', _data2: [{ newKey: 'key' }] }],
    };
    const result = refactor(target, rules);

    expect(result).toBe(target);
    expect(result.data[0].data2[0].newKey).toBe(1);
    expect(result.data[0].data2[1].newKey).toBe(2);
    expect(result.data[1].data2[0].newKey).toBe(3);
    expect(result.data[1].data2[1].newKey).toBe(4);
  });

  test('custom keepOnHandling by "__".', () => {
    refactor.set({ keepOnHandling: '__' });

    const target = { a: { a: { a: 1 } } };
    const rules = { aaa: 'a', _aaa: { aaa: 'a', _aaa: { aaa: 'a' } } };
    const rules2 = { aaa: 'a', __aaa: { aaa: 'a', __aaa: { aaa: 'a' } } };
    const result = refactor(target, rules, !0);
    const result2 = refactor(target, rules2, !0);

    refactor.set({ keepOnHandling: '_' });

    expect(result).not.toBe(target);
    expect(result.aaa.a.a).toBe(1);
    expect(result.aaa.aaa).toBeUndefined();

    expect(result2).not.toBe(target);
    expect(result2.a.a.a).toBe(1);
    expect(result2.aaa.aaa.aaa).toBe(1);
  });
});

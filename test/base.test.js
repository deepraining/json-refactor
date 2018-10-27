const refactor = require('../lib/cjs');

describe('base test', () => {
  test('result should have "aaa" and "bbb" fields.', () => {
    const target = { a: 1, b: 2 };
    const rules = { aaa: 'a', bbb: 'b' };
    const result = refactor(target, rules);

    expect(result).toBe(target);
    expect(result.a).toBe(1);
    expect(result.aaa).toBe(1);
    expect(result.b).toBe(2);
    expect(result.bbb).toBe(2);
    expect(Object.keys(result).length).toBe(4); // a, b, aaa, bbb
  });

  test('result should have "aaa" and "bbb" fields, and not modify target.', () => {
    const target = { a: 1, b: 2 };
    const rules = { aaa: 'a', bbb: 'b' };
    const result = refactor(target, rules, !0);

    expect(result).not.toBe(target);
    expect(target.a).toBe(1);
    expect(result.a).toBe(1);
    expect(result.aaa).toBe(1);
    expect(target.b).toBe(2);
    expect(result.b).toBe(2);
    expect(result.bbb).toBe(2);
    expect(Object.keys(result).length).toBe(4); // a, b, aaa, bbb
    expect(Object.keys(target).length).toBe(2); // a, b
  });

  test('result should have "aaa" and "bbb" fields, but value is "undefined".', () => {
    const target = { a: 1, b: 2 };
    const rules = { aaa: 'c', bbb: 'd' };
    const result = refactor(target, rules);

    expect(result).toBe(target);
    expect(result.a).toBe(1);
    expect(result.aaa).toBeUndefined();
    expect(result.b).toBe(2);
    expect(result.bbb).toBeUndefined();
    expect(Object.keys(result).length).toBe(4); // a, b, aaa, bbb
  });
});

const JSONRefactor = require('../dist/json-refactor');

describe('test', () => {
  test('base', () => {
    const target = { a: 1, b: 2 };
    const mapping = { aaa: 'a', bbb: 'b' };
    const result = JSONRefactor(target, mapping);

    expect(result).toBe(target);
    expect(result.a).toBe(result.aaa);
    expect(result.b).toBe(result.bbb);
  });

  test('array', () => {
    const target = [{ a: 1, b: 2 }, { a: 3, b: 4 }, { a: 5, b: 6 }];
    const mapping = [{ aaa: 'a', bbb: 'b' }];
    const result = JSONRefactor(target, mapping);

    expect(result).toBe(target);

    result.forEach(item => {
      expect(item.a).toBe(item.aaa);
      expect(item.b).toBe(item.bbb);
    });
  });

  test('dot semantic', () => {
    const target = { a: { a: { a: 1 } } };
    const mapping = { aaa: 'a.a.a' };
    const result = JSONRefactor(target, mapping);

    expect(result).toBe(target);
    expect(result.a.a.a).toBe(target.aaa);
  });

  test('Make a new key, and keep on formatting the new key.', () => {
    const target = { a: { a: { a: 1 } } };
    const mapping = { aaa: 'a', _aaa: { aaa: 'a', _aaa: { aaa: 'a' } } };
    const result = JSONRefactor(target, mapping);

    expect(result).toBe(target);
    expect(result.a.a.a).toBe(target.aaa.aaa.aaa);
  });

  test('Make an operator to original value.', () => {
    const target = { a: 1, b: '234', c: '1.22', d: '0.01' };
    const mapping = { aaa: 'a|bool', bbb: 'b|int', ccc: 'c|float', ddd: 'd|int|bool' };
    const result = JSONRefactor(target, mapping);

    expect(result).toBe(target);
    expect(result.aaa).toBe(!!target.a);
    expect(result.bbb).toBe(parseInt(target.b, 10));
    expect(result.ccc).toBe(parseFloat(target.c));
    expect(result.ddd).toBe(!!parseInt(target.d, 10));
  });
});

const JSONRefactor = require('../dist/json-refactor');

describe('dot semantic test', () => {
  test('result should have "aaa" field.', () => {
    const target = { a: { a: { a: 1 } } };
    const mapping = { aaa: 'a.a.a' };
    const result = JSONRefactor(target, mapping);

    expect(result).toBe(target);
    expect(result.a.a.a).toBe(1);
    expect(result.aaa).toBe(1);
    expect(Object.keys(result).length).toBe(2); // a, aaa
  });

  test('first key not exist', () => {
    const target = {};
    const mapping = { aaa: 'a.a.a' };
    const result = JSONRefactor(target, mapping);

    expect(result).toBe(target);
    expect(result.aaa).toBeUndefined();
    expect(Object.keys(result).length).toBe(1); // aaa
  });

  test('middle key not exist', () => {
    const target = { a: { a: {} } };
    const mapping = { aaa: 'a.a.a' };
    const result = JSONRefactor(target, mapping);

    expect(result).toBe(target);
    expect(result.aaa).toBeUndefined();
    expect(Object.keys(result).length).toBe(2); // a, aaa
  });
});

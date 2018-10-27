/* eslint-disable no-restricted-globals */
const refactor = require('../lib/cjs');

describe('Make an operator to original value.', () => {
  test('built-in operators.', () => {
    const target = {
      a: 1,
      b: '234',
      c: '1.22',
      d: '0.01',
      e: [{ value: 1 }, { value: 2 }],
    };
    const rules = {
      aaa: 'a|bool',
      bbb: 'b|int',
      ccc: 'c|float',
      ddd: 'd|int|bool',
      sum: 'e|sum!value',
      average: 'e|average!value',
    };
    const result = refactor(target, rules);

    expect(result).toBe(target);
    expect(result.aaa).toBe(true);
    expect(result.bbb).toBe(234);
    expect(result.ccc).toBe(1.22);
    expect(result.ddd).toBe(false);
    expect(result.sum).toBe(3);
    expect(result.average).toBe(1.5);
    expect(Object.keys(result).length).toBe(11);
  });

  test('with dot semantic', () => {
    const target = { a: { a: { a: 1 } } };
    const rules = { aaa: 'a.a.a|bool' };
    const result = refactor(target, rules);

    expect(result).toBe(target);
    expect(result.a.a.a).toBe(1);
    expect(result.aaa).toBe(true);
    expect(Object.keys(result).length).toBe(2);
  });

  test('register custom operators', () => {
    refactor.register(
      'double',
      value => (typeof value !== 'number' ? value : value * 2)
    );
    refactor.register({
      test: 'triple',
      handler: value => (typeof value !== 'number' ? value : value * 3),
    });
    refactor.register([
      {
        test: /^slice!/,
        handler: (value, operator) => {
          const operators = operator.split('!');
          const start = parseInt(operators[1], 10);
          const end = parseInt(operators[2], 10);
          const hasStart = typeof start === 'number' && !isNaN(start);
          const hasEnd = typeof end === 'number' && !isNaN(end);

          let newValue = value;

          if (hasStart && hasEnd) newValue = value.slice(start, end);
          else if (hasStart) newValue = value.slice(start);

          return newValue;
        },
      },
    ]);

    const target = { a: 1, b: 2, c: 'abcdefg' };
    const rules = {
      aaa: 'a|double',
      bbb: 'b|triple',
      abcd: 'c|slice!0!4',
      efg: 'c|slice!-3',
    };
    const result = refactor(target, rules);

    expect(result).toBe(target);
    expect(result.aaa).toBe(2);
    expect(result.bbb).toBe(6);
    expect(result.abcd).toBe('abcd');
    expect(result.efg).toBe('efg');
    expect(Object.keys(result).length).toBe(7);
  });

  test('custom operatorDelimiter by "||".', () => {
    refactor.set({ operatorDelimiter: '||' });

    const target = { a: 1, b: '234', c: '1.22', d: '0.01' };
    const rules = {
      aaa: 'a||bool',
      bbb: 'b||int',
      ccc: 'c||float',
      ddd: 'd||int||bool',
    };
    const result = refactor(target, rules);

    refactor.set({ operatorDelimiter: '|' });

    expect(result.aaa).toBe(true);
    expect(result.bbb).toBe(234);
    expect(result.ccc).toBe(1.22);
    expect(result.ddd).toBe(false);
  });
});

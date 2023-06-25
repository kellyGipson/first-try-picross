import { ExecFnPipe } from "./execFn.pipe";

describe('Given ExecFnPipe', () => {
  const transform = new ExecFnPipe().transform;

  describe('And transform', () => {
    it(`When passed an object
        And a function
        And arguments
        Then it should invoke the function and return the value`, () => {
      const testObj = {
        add: (a: number, b: number) => a + b
      };
      expect(transform(testObj, 'add', 1, 2)).toBe(3);
    });

    it(`When passed an object
        And a member property
        Then it should return the value`, () => {
      const testObj = {
        value: 'Unit Testing'
      };
      expect(transform(testObj, 'value')).toBe('Unit Testing');
    });
  });
});

import { IsEqualPipe } from "./is-equal.pipe";

describe('Given IsEqualPipe', () => {
  const transform = new IsEqualPipe().transform;

  describe('And transform', () => {
    it(`When values are equal Then it should return true`, () => {
      expect(transform('testing', 'testing')).toBeTrue();
    });

    it(`When values are different Then it should return false`, () => {
      expect(transform('testing', 0)).toBeFalse();
    });

    it(`When values dont share the same reference Then it should return false`, () => {
      const array = [];
      expect(transform([], array)).toBeFalse();
    });
  });
});

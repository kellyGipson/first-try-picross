import { IsDefinedPipe } from "./is-defined.pipe";

describe('Given IsDefinedPipe', () => {
  const transform = new IsDefinedPipe().transform;

  describe('And transform', () => {
    it(`When value is undefined Then is should return false`, () => {
      expect(transform(undefined)).toBeFalse();
    });

    it(`When value has some value Then is should return false`, () => {
      expect(transform([])).toBeTrue();
    });
  });
});

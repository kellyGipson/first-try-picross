import { O, X } from "../config-constants";
import { PicrossConfigMapFactory } from "./config-map.factory";
import { PicrossConfigMap } from "./config-map.model";

fdescribe('Given PicrossConfigMap', () => {
  describe('And getRow', () => {
    it(`And a 3x3 tile map is provided
        Then it should return the row asked for`, () => {
      const map = PicrossConfigMapFactory.build([
        [X, O, X],
        [X, O, X],
        [X, X, X]
      ]);
      expect(map.getRow(3)).toEqual([X, X, X]);
    });

    it(`And a 3x3 tile map is provided
        And row 3 in undefined
        Then it should return undefined`, () => {
      const map = PicrossConfigMapFactory.build([
        [X, O, X],
        [X, O, X],
      ]);
      expect(map.getRow(3)).toEqual(undefined as any);
    });
  });

  describe('And getColumn', () => {
    it(`And a 3x3 tile map is provided
        Then it should return the col asked for`, () => {
      const map = PicrossConfigMapFactory.build([
        [O, O, X],
        [X, O, X],
        [X, X, X]
      ]);
      expect(map.getColumn(1)).toEqual([O, X, X]);
    });

    it(`And a 3x3 tile map is provided
        And column 3 is undefined
        Then it should return undefined`, () => {
      const map = PicrossConfigMapFactory.build([
        [X, O],
        [X, O],
        [X, X]
      ]);
      expect(map.getColumn(3)).toEqual(undefined as any);
    });
  });
});

import { Stack } from "./stack.model";

describe('Given Stack', () => {
  describe('And push', () => {
    it(`When invoked with an item to push
        Then it should append the value to the end of the array`, () => {
      const stack = new Stack<boolean>();
      stack.push(true);
      expect(stack['_stack'].length).toBe(1);
      expect(stack['_stack'][0]).toBeTrue();
    });
  });

  describe('And pop', () => {
    it(`And three items exist
        Then length should be two
        And it should return the item popped
        And items should be as expected`, () => {
      const stack = new Stack<boolean>([true, false, true]);
      const popped = stack.pop();
      expect(stack['_stack'].length).toBe(2);
      expect(popped).toBeTrue();
      expect(stack['_stack']).toEqual([true, false]);
    });
  });

  describe('And peek', () => {
    it(`When items are in the stack
        Then it should return the item at the top of the stack`, () => {
      const stack = new Stack<number>([0, 1, 2, 3]);
      expect(stack.peek()).toEqual(3);
    });

    it(`When stack has no items
        Then it should return undefined`, () => {
      expect(new Stack().peek()).toBeUndefined();
    });
  });
});

import { Direction } from "../enums";
import { getNextDirection } from "./direction";

it("should return next direction clockwise", () => {
  expect(getNextDirection(Direction.DOWN)).toBe(Direction.LEFT);
  expect(getNextDirection(Direction.LEFT)).toBe(Direction.UP);
  expect(getNextDirection(Direction.UP)).toBe(Direction.RIGHT);
  expect(getNextDirection(Direction.RIGHT)).toBe(Direction.DOWN);
});

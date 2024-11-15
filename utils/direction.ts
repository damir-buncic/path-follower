import { Direction } from "../enums";

export function getNextDirection(direction: Direction) {
  if (direction === Direction.DOWN) return Direction.LEFT;
  if (direction === Direction.LEFT) return Direction.UP;
  if (direction === Direction.UP) return Direction.RIGHT;
  return Direction.DOWN;
}

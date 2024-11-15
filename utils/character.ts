import { Direction } from "../enums";
import { CharacterMap, Position, CharacterData } from "../types";

export function getLeftCharacterData(map: CharacterMap, position: Position): CharacterData | null {
  if (position.column > 0) {
    const character = map[position.row][position.column - 1];
    if (!character.trim()) return null;

    return {
      character,
      position: { row: position.row, column: position.column - 1 },
      direction: Direction.LEFT,
    };
  }
  return null;
}

export function getRightCharacterData(map: CharacterMap, position: Position): CharacterData | null {
  if (position.column < map[position.row].length - 1) {
    const character = map[position.row][position.column + 1];
    if (!character.trim()) return null;

    return {
      character,
      position: { row: position.row, column: position.column + 1 },
      direction: Direction.RIGHT,
    };
  }
  return null;
}

export function getTopCharacterData(map: CharacterMap, position: Position): CharacterData | null {
  if (position.row > 0) {
    const character = map[position.row - 1][position.column];
    if (!character.trim()) return null;

    return {
      character,
      position: { row: position.row - 1, column: position.column },
      direction: Direction.UP,
    };
  }
  return null;
}

export function getBottomCharacterData(map: CharacterMap, position: Position): CharacterData | null {
  if (position.row < map.length - 1) {
    const character = map[position.row + 1][position.column];
    if (!character.trim()) return null;

    return {
      character,
      position: { row: position.row + 1, column: position.column },
      direction: Direction.DOWN,
    };
  }
  return null;
}

export function getCharacterInDirection(
  map: CharacterMap,
  position: Position,
  direction: Direction
): CharacterData | null {
  if (direction === Direction.LEFT) {
    return getLeftCharacterData(map, position);
  } else if (direction === Direction.RIGHT) {
    return getRightCharacterData(map, position);
  } else if (direction === Direction.UP) {
    return getTopCharacterData(map, position);
  } else {
    return getBottomCharacterData(map, position);
  }
}

import { Direction } from "../enums";
import { CharacterMap, Position } from "../types";
import {
  getBottomCharacterData,
  getCharacterInDirection,
  getLeftCharacterData,
  getNextDirection,
  getRightCharacterData,
  getTopCharacterData,
} from "../utils";

export function followStartCharacter(map: CharacterMap, position: Position) {
  let nextCharacterData = getLeftCharacterData(map, position);
  if (nextCharacterData) return nextCharacterData;

  nextCharacterData = getTopCharacterData(map, position);
  if (nextCharacterData) return nextCharacterData;

  nextCharacterData = getRightCharacterData(map, position);
  if (nextCharacterData) return nextCharacterData;

  nextCharacterData = getBottomCharacterData(map, position);
  if (nextCharacterData) return nextCharacterData;

  throw new Error("Next character not found");
}

export function followHorizontalConnectionCharacter(map: CharacterMap, position: Position, direction: Direction) {
  let nextCharacterData = getCharacterInDirection(map, position, direction);
  if (nextCharacterData) return nextCharacterData;
  throw new Error("Next character not found");
}

export function followUppercaseLetterCharacter(map: CharacterMap, position: Position, direction: Direction) {
  let nextCharacterData = getCharacterInDirection(map, position, direction);
  if (nextCharacterData) return nextCharacterData;

  return getCharacterOnTurn(map, position, direction);
}

export function followIntersectionCharacter(map: CharacterMap, position: Position, direction: Direction) {
  return getCharacterOnTurn(map, position, direction);
}

export function followVerticalConnectionCharacter(map: CharacterMap, position: Position, direction: Direction) {
  if (direction === Direction.UP || direction == Direction.DOWN) {
    let nextCharacterData = getCharacterInDirection(map, position, direction);
    if (nextCharacterData) return nextCharacterData;
    throw new Error("Next character not found");
  }
  throw new Error("Invalid direction");
}

function getCharacterOnTurn(map, position, direction) {
  // first turn (90deg or right turn)
  let nextDirection = getNextDirection(direction);
  let firstTurnCharacterData = getCharacterInDirection(map, position, nextDirection);

  // second turn (180deg - direction from which we arrived, skip)
  nextDirection = getNextDirection(nextDirection);
  // third turn (-90deg or left turn)
  nextDirection = getNextDirection(nextDirection);

  let secondTurnCharacterData = getCharacterInDirection(map, position, nextDirection);
  
  if(firstTurnCharacterData && secondTurnCharacterData) {
    throw new Error("Fork in a path");
  }

  if(firstTurnCharacterData) return firstTurnCharacterData;
  if(secondTurnCharacterData) return secondTurnCharacterData;

  throw new Error("Next character not found");
}

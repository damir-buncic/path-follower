import { Direction } from "../enums";
import { loadMap } from "../map-loader";
import { CharacterMap, Position, Result, CharacterData } from "../types";
import { validateMap, ValidationError } from "../validation";
import {
  followHorizontalConnectionCharacter,
  followIntersectionCharacter,
  followStartCharacter,
  followUppercaseLetterCharacter,
  followVerticalConnectionCharacter,
} from "./character-followers";

const START = "@";

export function followPath(mapName: string): Result {
  const map = loadMap(mapName);

  const validationResult = validateMap(map);
  if (!validationResult.valid) {
    throw new ValidationError(validationResult.reason);
  }

  let position = findStartPosition(map);

  let steps: CharacterData[] = [
    {
      character: START,
      position: position,
      direction: Direction.UP,
    },
  ];

  let letters: string[] = [];
  let path = [START];

  while (true) {
    const currentCharacter = steps[steps.length - 1];
    const nextCharacter = findNextCharacter(map, currentCharacter);

    if (isUppercaseLetter(nextCharacter.character) && !isAlreadyVisited(steps, nextCharacter.position)) {
      letters.push(nextCharacter.character);
    }

    steps.push(nextCharacter);
    path.push(nextCharacter.character);

    if (isEndCharacter(nextCharacter.character)) {
      break;
    }
  }

  return {
    letters: letters.join(""),
    path: path.join(""),
  };
}

function findStartPosition(map: CharacterMap): Position {
  for (let rowIndex = 0; rowIndex < map.length; rowIndex++) {
    const row = map[rowIndex];

    for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
      if (row[columnIndex] === START) {
        return { row: rowIndex, column: columnIndex };
      }
    }
  }

  throw new Error("Start symbol not found");
}

function findNextCharacter(map: CharacterMap, currentCharacter: CharacterData): CharacterData {
  if (isStartCharacter(currentCharacter.character)) {
    return followStartCharacter(map, currentCharacter.position);
  } else if (isHorizontalConnectionCharacter(currentCharacter.character)) {
    return followHorizontalConnectionCharacter(map, currentCharacter.position, currentCharacter.direction);
  } else if (isUppercaseLetter(currentCharacter.character)) {
    return followUppercaseLetterCharacter(map, currentCharacter.position, currentCharacter.direction);
  } else if (isIntersectionCharacter(currentCharacter.character)) {
    return followIntersectionCharacter(map, currentCharacter.position, currentCharacter.direction);
  } else if (isVerticalConnectionCharacter(currentCharacter.character)) {
    return followVerticalConnectionCharacter(map, currentCharacter.position, currentCharacter.direction);
  }

  throw new Error("Invalid character " + currentCharacter.character);
}

function isStartCharacter(character: string) {
  return character === START;
}

function isHorizontalConnectionCharacter(character: string) {
  return character === "-";
}

function isUppercaseLetter(character: string) {
  return character >= "A" && character <= "Z";
}

function isIntersectionCharacter(character: string) {
  return character === "+";
}

function isVerticalConnectionCharacter(character: string) {
  return character === "|";
}

function isEndCharacter(character: string) {
  return character === "x";
}

function isAlreadyVisited(steps: CharacterData[], position: Position) {
  return steps.some((s) => s.position.row === position.row && s.position.column === position.column);
}

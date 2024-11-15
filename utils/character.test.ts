import { Direction } from "../enums";
import {
  getBottomCharacterData,
  getCharacterInDirection,
  getLeftCharacterData,
  getRightCharacterData,
  getTopCharacterData,
} from ".";

describe("character utils functions", () => {
  const map = ["123", "456", "789"];
  const position = { row: 1, column: 1 };

  it("should get data of the character on the left", () => {
    expect(getLeftCharacterData(map, position)).toEqual({
      character: "4",
      position: { row: 1, column: 0 },
      direction: Direction.LEFT,
    });
  });

  it("should get data of the character on the right", () => {
    expect(getRightCharacterData(map, position)).toEqual({
      character: "6",
      position: { row: 1, column: 2 },
      direction: Direction.RIGHT,
    });
  });

  it("should get data of the character above", () => {
    expect(getTopCharacterData(map, position)).toEqual({
      character: "2",
      position: { row: 0, column: 1 },
      direction: Direction.UP,
    });
  });

  it("should get data of the character below", () => {
    expect(getBottomCharacterData(map, position)).toEqual({
      character: "8",
      position: { row: 2, column: 1 },
      direction: Direction.DOWN,
    });
  });

  it("should get data of the character in specific direction", () => {
    expect(getCharacterInDirection(map, position, Direction.DOWN)).toEqual({
      character: "8",
      position: { row: 2, column: 1 },
      direction: Direction.DOWN,
    });

    expect(getCharacterInDirection(map, position, Direction.UP)).toEqual({
      character: "2",
      position: { row: 0, column: 1 },
      direction: Direction.UP,
    });

    expect(getCharacterInDirection(map, position, Direction.RIGHT)).toEqual({
      character: "6",
      position: { row: 1, column: 2 },
      direction: Direction.RIGHT,
    });

    expect(getCharacterInDirection(map, position, Direction.LEFT)).toEqual({
      character: "4",
      position: { row: 1, column: 0 },
      direction: Direction.LEFT,
    });
  });

  it("should return null for invalid indexes", () => {
    expect(getLeftCharacterData(map, { row: 0, column: 0 })).toBe(null);
    expect(getRightCharacterData(map, { row: 0, column: 2 })).toBe(null);
    expect(getTopCharacterData(map, { row: 0, column: 0 })).toBe(null);
    expect(getBottomCharacterData(map, { row: 2, column: 0 })).toBe(null);
  });

  it("should return null for spaces", () => {
    let emptyMap = ["   ", "   ", "   "];
    expect(getLeftCharacterData(emptyMap, { row: 1, column: 1 })).toBe(null);
    expect(getRightCharacterData(emptyMap, { row: 1, column: 1 })).toBe(null);
    expect(getTopCharacterData(emptyMap, { row: 1, column: 1 })).toBe(null);
    expect(getBottomCharacterData(emptyMap, { row: 1, column: 1 })).toBe(null);
  });
});

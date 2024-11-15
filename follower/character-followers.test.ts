import { Direction } from "../enums";
import {
  followHorizontalConnectionCharacter,
  followIntersectionCharacter,
  followStartCharacter,
  followUppercaseLetterCharacter,
  followVerticalConnectionCharacter,
} from "./character-followers";

describe("Follow start character", () => {
  test("should find next to the left", () => {
    const result = followStartCharacter([" T ", "L@R", " B "], { row: 1, column: 1 });
    expect(result).toEqual({ character: "L", position: { row: 1, column: 0 }, direction: Direction.LEFT });
  });

  test("should find next above", () => {
    const result = followStartCharacter([" T ", " @R", " B "], { row: 1, column: 1 });
    expect(result).toEqual({ character: "T", position: { row: 0, column: 1 }, direction: Direction.UP });
  });

  test("should find next to the right", () => {
    const result = followStartCharacter(["   ", " @R", " B "], { row: 1, column: 1 });
    expect(result).toEqual({ character: "R", position: { row: 1, column: 2 }, direction: Direction.RIGHT });
  });

  test("should find next below", () => {
    const result = followStartCharacter(["   ", " @ ", " B "], { row: 1, column: 1 });
    expect(result).toEqual({ character: "B", position: { row: 2, column: 1 }, direction: Direction.DOWN });
  });

  test("should throw if next character is not found", () => {
    expect(() => {
      followStartCharacter(["   ", " @ ", "   "], { row: 1, column: 1 });
    }).toThrow("Next character not found");
  });
});

describe("Follow horizontal connection", () => {
  test("should find next to the left", () => {
    const result = followHorizontalConnectionCharacter(["  ", "L-R", "  "], { row: 1, column: 1 }, Direction.LEFT);
    expect(result).toEqual({ character: "L", position: { row: 1, column: 0 }, direction: Direction.LEFT });
  });

  test("should find next to the right", () => {
    const result = followHorizontalConnectionCharacter(["  ", "L-R", "  "], { row: 1, column: 1 }, Direction.RIGHT);
    expect(result).toEqual({ character: "R", position: { row: 1, column: 2}, direction: Direction.RIGHT });
  });

  test("should throw if next character is not found", () => {
    expect(() => {
      followHorizontalConnectionCharacter(["   ", " - ", "   "], { row: 1, column: 1 }, Direction.LEFT);
    }).toThrow("Next character not found");

    expect(() => {
      followHorizontalConnectionCharacter(["   ", " - ", "   "], { row: 1, column: 1 }, Direction.RIGHT);
    }).toThrow("Next character not found");
  });

  test("should throw if invalid direction", () => {
    expect(() => {
      followHorizontalConnectionCharacter(["   ", " - ", "   "], { row: 1, column: 1 }, Direction.UP);
    }).toThrow("Invalid direction");

    expect(() => {
      followHorizontalConnectionCharacter(["   ", " - ", "   "], { row: 1, column: 1 }, Direction.DOWN);
    }).toThrow("Invalid direction");
  });
});

describe("Follow uppercase letter", () => {
  test("should follow letter in the same directin", () => {
    const result = followUppercaseLetterCharacter(["  ", "LAR", "  "], { row: 1, column: 1 }, Direction.LEFT);
    expect(result).toEqual({ character: "L", position: { row: 1, column: 0 }, direction: Direction.LEFT });
  });

  test("should throw if next character is not found", () => {
    expect(() => {
      followUppercaseLetterCharacter(["   ", " A ", "   "], { row: 1, column: 1 }, Direction.LEFT);
    }).toThrow("Next character not found");
  });
});

describe("Follow intersection character", () => {
  test("should turn left", () => {
    const result = followIntersectionCharacter([" T ", "L+R", "   "], { row: 1, column: 1 }, Direction.RIGHT);
    expect(result).toEqual({ character: "T", position: { row: 0, column: 1 }, direction: Direction.UP });
  });

  test("should turn left", () => {
    const result = followIntersectionCharacter(["   ", "L+R", " B "], { row: 1, column: 1 }, Direction.RIGHT);
    expect(result).toEqual({ character: "B", position: { row: 2, column: 1 }, direction: Direction.DOWN });
  });

  test("should throw if no turn available right", () => {
    expect(() => {
      followIntersectionCharacter(["   ", "L+R", "   "], { row: 1, column: 1 }, Direction.RIGHT);
    }).toThrow("Next character not found");
  });
});

describe("Follow vertical connection", () => {
  test("should find next above", () => {
    const result = followVerticalConnectionCharacter([" T ", "L|R", " B "], { row: 1, column: 1 }, Direction.UP);
    expect(result).toEqual({ character: "T", position: { row: 0, column: 1 }, direction: Direction.UP });
  });

  test("should find next below", () => {
    const result = followVerticalConnectionCharacter([" T ", "L|R", " B "], { row: 1, column: 1 }, Direction.DOWN);
    expect(result).toEqual({ character: "B", position: { row: 2, column: 1 }, direction: Direction.DOWN });
  });

  test("should throw if next character is not found", () => {
    expect(() => {
      followVerticalConnectionCharacter(["   ", " | ", "   "], { row: 1, column: 1 }, Direction.UP);
    }).toThrow("Next character not found");

    expect(() => {
      followVerticalConnectionCharacter(["   ", " | ", "   "], { row: 1, column: 1 }, Direction.DOWN);
    }).toThrow("Next character not found");
  });

  test("should throw if invalid direction", () => {
    expect(() => {
      followVerticalConnectionCharacter(["   ", " | ", "   "], { row: 1, column: 1 }, Direction.LEFT);
    }).toThrow("Invalid direction");

    expect(() => {
      followVerticalConnectionCharacter(["   ", " | ", "   "], { row: 1, column: 1 }, Direction.RIGHT);
    }).toThrow("Invalid direction");
  });
});

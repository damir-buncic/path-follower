import { followPath } from "./follower";

test("it should follow map 1 - basic map", () => {
  const result = followPath("map-1");
  expect(result.letters).toBe("ACB");
  expect(result.path).toBe("@---A---+|C|+---+|+-B-x");
});

test("it should follow map 2 - added intersection", () => {
  const result = followPath("map-2");
  expect(result.letters).toBe("ABCD");
  expect(result.path).toBe("@|A+---B--+|+--C-+|-||+---D--+|x");
});

test("it should follow map 3 - added turns on letters", () => {
  const result = followPath("map-3");
  expect(result.letters).toBe("ACB");
  expect(result.path).toBe("@---A---+|||C---+|+-B-x");
});

test("it should follow map 4 - do not add already visited letters", () => {
  const result = followPath("map-4");
  expect(result.letters).toBe("GOONIES");
  expect(result.path).toBe("@-G-O-+|+-+|O||+-O-N-+|I|+-+|+-I-+|ES|x");
});

test("it should follow map 5 - compact space", () => {
  const result = followPath("map-5");
  expect(result.letters).toBe("BLAH");
  expect(result.path).toBe("@B+++B|+-L-+A+++A-+Hx");
});

test("it should follow map 6 - ignore everything after the end character", () => {
  const result = followPath("map-6");
  expect(result.letters).toBe("AB");
  expect(result.path).toBe("@-A--+|+-B--x");
});

test("it should follow map 7 - missing start character", () => {
  expect(() => {
    followPath("map-7");
  }).toThrow("Missing start character");
});

test("it should follow map 8 - missing end character", () => {
  expect(() => {
    followPath("map-8");
  }).toThrow("Missing end character");
});

test("it should follow map 9 - multiple start characters", () => {
  expect(() => {
    followPath("map-9");
  }).toThrow("Multiple start characters");
});

test("it should follow map 10 - multiple start characters", () => {
  expect(() => {
    followPath("map-10");
  }).toThrow("Multiple start characters");
});

test("it should follow map 11 - multiple start characters", () => {
  expect(() => {
    followPath("map-11");
  }).toThrow("Multiple start characters");
});

test("it should follow map 12 - fork in path", () => {
  expect(() => {
    followPath("map-12");
  }).toThrow("Fork in a path");
});

test("it should follow map 13 - broken path", () => {
  expect(() => {
    followPath("map-13");
  }).toThrow("Next character not found");
});

test("it should follow map 14 - multiple starting paths", () => {
  expect(() => {
    followPath("map-14");
  }).toThrow("Multiple starting paths");
});

test("it should follow map 15 - fake turn", () => {
  expect(() => {
    followPath("map-15");
  }).toThrow("Next character not found");
});

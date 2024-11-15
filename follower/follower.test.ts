import { followPath } from "./follower";

test("it should follow map 1", () => {
  const result = followPath("map-1");
  expect(result.letters).toBe("ACB")
  expect(result.path).toBe("@---A---+|C|+---+|+-B-x")
});

test("it should follow map 2", () => {
  const result = followPath("map-2");
  expect(result.letters).toBe("ABCD")
  expect(result.path).toBe("@|A+---B--+|+--C-+|-||+---D--+|x")
});

test("it should follow map 3", () => {
  const result = followPath("map-3");
  expect(result.letters).toBe("ACB")
  expect(result.path).toBe("@---A---+|||C---+|+-B-x")
});

test("it should follow map 4", () => {
  const result = followPath("map-4");
  expect(result.letters).toBe("GOONIES")
  expect(result.path).toBe("@-G-O-+|+-+|O||+-O-N-+|I|+-+|+-I-+|ES|x")
});

test("it should follow map 5", () => {
  const result = followPath("map-5");
  expect(result.letters).toBe("BLAH")
  expect(result.path).toBe("@B+++B|+-L-+A+++A-+Hx")
});
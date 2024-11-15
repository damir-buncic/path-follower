import { followPath } from "./follower";

test("it should follow map 1", () => {
  const result = followPath("map-1");
  expect(result.letters).toBe("ACB")
  expect(result.path).toBe("@---A---+|C|+---+|+-B-x")
});

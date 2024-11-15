import { ErrorValidationResult } from "../types";
import { validateMap } from "./validation";

test("should pass validation", () => {
  const validationResult = validateMap(["   ", "  @ ", " x "]);
  expect(validationResult.valid).toBeTruthy();
});

test("should fail validation - no start character", () => {
  const validationResult = validateMap(["   ", "   ", "   "]);
  expect(validationResult.valid).toBeFalsy();
  expect((validationResult as ErrorValidationResult).reason).toBe("Missing start character");
});

test("should fail validation - no end character", () => {
  const validationResult = validateMap(["   ", " @ ", "   "]);
  expect(validationResult.valid).toBeFalsy();
  expect((validationResult as ErrorValidationResult).reason).toBe("Missing end character");
});

test("should fail validation - multiple start characters", () => {
  const validationResult = validateMap(["   ", " @ ", " @x"]);
  expect(validationResult.valid).toBeFalsy();
  expect((validationResult as ErrorValidationResult).reason).toBe("Multiple start characters");
});

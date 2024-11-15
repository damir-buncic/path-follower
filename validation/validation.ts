import { CharacterMap, ValidationResult } from "../types";

export function validateMap(map: CharacterMap): ValidationResult {
  let validationResult = containsExactlyOneStartCharacter(map);
  if (!validationResult.valid) return validationResult;

  validationResult = containsEndCharacter(map);
  return validationResult;
}

function containsExactlyOneStartCharacter(map: CharacterMap): ValidationResult {
  let startCount = 0;

  map.forEach((row) => {
    startCount += row.split("@").length - 1;
  });

  if (startCount === 0) return { valid: false, reason: "Missing start character" };
  if (startCount > 1) return { valid: false, reason: "Multiple start characters" };

  return { valid: true };
}

function containsEndCharacter(map: CharacterMap): ValidationResult {
  if (map.some((row) => row.includes("x"))) {
    return { valid: true };
  }

  return { valid: false, reason: "Missing end character" };
}

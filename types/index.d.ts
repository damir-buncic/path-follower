import { Direction } from "./../enums/direction";

export type CharacterMap = string[];

export type Result = {
  letters: string;
  path: string;
};

export type Position = {
  row: number;
  column: number;
};

export type CharacterData = {
  character: string;
  position: Position;
  direction: Direction;
};

export type SuccessValidationResult = { valid: true };
export type ErrorValidationResult = { valid: false; reason: string };
export type ValidationResult = SuccessValidationResult | ErrorValidationResult;

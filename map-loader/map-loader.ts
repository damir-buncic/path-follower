import { readFileSync } from "fs";
import { CharacterMap } from "../types";

export function loadMap(name: string): CharacterMap {
    const fileContent = readFileSync("maps/" + name, { encoding: "utf8" });
    const map = fileContent.split("\r\n");
    return map;
}

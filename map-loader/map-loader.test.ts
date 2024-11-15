import * as fs from "fs";
import { loadMap } from "./";

test("it should load map", () => {
  jest.spyOn(fs, "readFileSync").mockReturnValue("line1\r\nline2");
  const mapName = "map-name";

  const map = loadMap("map-name");

  expect(fs.readFileSync).toHaveBeenCalledWith("maps/" + mapName, { encoding: "utf8" });
  expect(map).toEqual(["line1", "line2"]);
});

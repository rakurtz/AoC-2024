import * as fs from "fs";

export function readInput(day: number): string {
  if (day < 1 || day > 24) {
    throw new Error("day out of bounds");
  }

  // creating the path
  let path = `./input/day${day}.txt`;

  // reading the file
  const file = fs.readFileSync(path, "utf8");

  return file;
}

import { readInput } from "./common.ts";

// read into two different sorted arrays
function getTwoArrays(file: string) {
  const l = [];
  const r = [];
  for (const line of file.trim().split("\n")) {
    l.push(parseInt(line.split(" ")[0]));
    r.push(parseInt(line.split(" ")[3]));
  }
  l.sort();
  r.sort();
  return [l, r];
}

function calculateDistance(l: number[], r: number[]) {
  let total = 0;
  for (let i = 0; i < l.length; i++) {
    total += Math.abs(l[i] - r[i]);
  }
  return total;
}

function countFrequencies(arr: number[]) {
  const frequencies = {};
  for (const n of arr) {
    frequencies[n] = frequencies[n] ? (frequencies[n] += 1) : 1;
  }
  return frequencies;
}

function calculateSimilarity(l: number[], r: number[]) {
  let similarity = 0;
  const counts = countFrequencies(r);
  l.forEach((n) => (similarity += n * (counts[n] ?? 0)));
  return similarity;
}

function main() {
  console.log("AoC 2024");
  {
    console.log("Day 1 - Part 1:");
    const inputData = readInput(1);
    const [l, r] = getTwoArrays(inputData);
    const total = calculateDistance(l, r);
    console.log("Total distance is: ", total);
  }

  {
    console.log("Day 1 - Part 2:");
    const inputData = readInput(1);
    const [l, r] = getTwoArrays(inputData);
    const total = calculateSimilarity(l, r);
    console.log("Total similarity is: ", total);
  }
}

main();

/////////// Tests ////////////

const testInput = `
3   4
4   3
2   5
1   3
3   9
3   3
`;

function test_part1() {
  console.log("testing part 1");
  const [l, r] = getTwoArrays(testInput);
  const total = calculateDistance(l, r);
  console.log("distance: ", total);
}

function test_part2() {
  console.log("testing part 2");
  const [l, r] = getTwoArrays(testInput);
  const total = calculateSimilarity(l, r);
  console.log("similarity: ", total);
}

console.log();
console.log();
console.log("Testing:");
test_part1();
test_part2();

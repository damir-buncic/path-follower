import { followPath } from "./follower/follower";

const result = followPath(process.argv[2] ?? "map-1");

console.log("Letters:", result.letters);
console.log("Path:", result.path);

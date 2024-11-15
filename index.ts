import { followPath } from "./follower/follower";
import { ValidationError } from "./validation";

try {
  const result = followPath(process.argv[2] ?? "map-1");

  console.log("Letters:", result.letters);
  console.log("Path:", result.path);
} catch (error) {
  if (error instanceof ValidationError) {
    console.log("Invalid Map: ", error.message);
  } else {
    throw error;
  }
}

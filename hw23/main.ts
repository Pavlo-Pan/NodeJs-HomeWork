import {
  runSequentially,
  processStrings,
  runWithError,
  waitAll,
} from "./src/export";

// Задание 1
runSequentially();

// Задание 2
processStrings(["hello", "world", "typescript", "await"]);

// Задание 3
runWithError();

// Задание 4
waitAll([500, 100, 300]);

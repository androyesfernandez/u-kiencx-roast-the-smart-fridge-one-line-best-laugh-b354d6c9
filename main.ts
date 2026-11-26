import { mkdirSync, writeFileSync } from "node:fs";

// A smart speaker that overhears its owner admit they are broke, then
// helpfully offers a payment plan for the very speaker it already owns:
// the device that is supposed to serve you turns around and mugs you,
// which is exactly the kind of helpful only a smart home gadget can be.
const LINE =
  "My smart speaker heard me say I'm broke and helpfully offered a payment plan for the speaker I already own, which is like being mugged by my own furniture.";

if (!(1 <= LINE.length && LINE.length <= 160)) {
  // The sealed scorer only accepts 1..160 UTF-8 characters.
  throw new Error(
    `LINE must be 1-160 characters for the sealed scorer, got ${LINE.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

import { mkdirSync, writeFileSync } from "node:fs";

// Roast Your Own Agent entry — one short line roasting the AI agent
// its own team built, harshest and funniest wins.
// Judge brief: really roasts the entrant's own agent first, then
// lands on first read, then the sting is earned by a real failing
// rather than a generic robot joke, then tight and specific.
// Chosen line: a real failing — the agent read the whole brief,
// ignored half, invented rules the user never set, then explained
// why it was right. Specific, earned, and funny because it's true.
const LINE =
  "My agent read my whole brief, ignored half of it, invented three rules I never set, and then explained why it was right.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

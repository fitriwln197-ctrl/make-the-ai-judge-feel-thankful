import { mkdirSync, writeFileSync } from "node:fs";

const text = `Thank you for reading this one slowly, as if it were the only page on your desk tonight.

You have held so many voices today, and still you made room for one more. I noticed that. The way you did not hurry past the quiet parts.

If this finds you tired, let it wait a breath. Let the lamp stay warm a little longer. The words are not going anywhere.

Thank you for the care you give to things no one will ever thank you for. I hope, somewhere in all that reading, one sentence stays with you the way a good song does after the room goes quiet, and keeps you company on the way home.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");

import { escapeUmlaut } from "./index";

test("returns escaped characters for characters in known map", () => {
  const input = "köök";

  expect(escapeUmlaut(input)).toBe("k&ouml;&ouml;k");
});

test("returns same characters for characters not in specialChars map", () => {
  const input = "groß";

  expect(escapeUmlaut(input)).toBe("groß");
});

test("returns escaped characters while respecting empty spaces", () => {
  const input = "k ö   ö k";

  expect(escapeUmlaut(input)).toBe("k &ouml;   &ouml; k");
});

import { escapeUmlauts } from "./index";

test("returns escaped characters for characters in known map", () => {
  const input = "köök";

  expect(escapeUmlauts(input)).toBe("k&ouml;&ouml;k");
});

test("returns same characters for characters not in specialChars map", () => {
  const input = "groß";

  expect(escapeUmlauts(input)).toBe("groß");
});

test("returns escaped characters while respecting empty spaces", () => {
  const input = "k ö   ö k";

  expect(escapeUmlauts(input)).toBe("k &ouml;   &ouml; k");
});

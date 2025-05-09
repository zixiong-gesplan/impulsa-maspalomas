import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { FlagLink } from "@components/FlagLink";
import { expect, test } from "vitest";

test("FlagLink component", async () => {
  const astroContainer = await AstroContainer.create();
  const result = await astroContainer.renderToString(FlagLink, {
    props: {
        url:"https://example.com",
      label: "Test Title",
    },
  });

  // Check if the result is not null
  expect(result).not.toBeNull();

  // Check if the rendered output contains the expected text
  expect(result).toContain("Test Title");
});
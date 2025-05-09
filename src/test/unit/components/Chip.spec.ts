import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { Chip } from "@components/Chip";
import { expect, test } from "vitest";

test("Chip component", async () => {
  const astroContainer = await AstroContainer.create();
  const result = await astroContainer.renderToString(Chip, {
    slots: {
      default: "Test Chip",
    }
  });

  // Check if the result is not null
  expect(result).not.toBeNull();

  // Check if the rendered output contains the expected text
  expect(result).toContain("Test Chip");

});
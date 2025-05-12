import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { Label } from "@components/Label";
import { expect, test } from "vitest";

test("Label component", async () => {
  const astroContainer = await AstroContainer.create();
  const result = await astroContainer.renderToString(Label, {
    props: {
      title: "Test Label",
      label: "blue",
    },
  });

  // Check if the result is not null
  expect(result).not.toBeNull();

  // Check if the rendered output contains the expected text
  expect(result).toContain("Test Label");
  expect(result).toContain("blue");
});
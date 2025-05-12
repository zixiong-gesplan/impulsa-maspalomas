import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { Navbar } from "@components/Navbar";
import { expect, test } from "vitest";

test("Navbar component", async () => {
  const astroContainer = await AstroContainer.create();
  const result = await astroContainer.renderToString(Navbar,{});

  // Check if the result is not null
  expect(result).not.toBeNull();

  // Check if the rendered output contains the expected text
});
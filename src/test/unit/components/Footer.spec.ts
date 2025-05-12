import { experimental_AstroContainer as AstroContainer} from "astro/container";
import { Footer } from "@components/Footer";
import { expect, test } from "vitest";

test("Footer component", async () => {
  const astroContainer = await AstroContainer.create();
  const result = await astroContainer.renderToString(Footer, {});

  // Check if the result is not null
  expect(result).not.toBeNull();
});
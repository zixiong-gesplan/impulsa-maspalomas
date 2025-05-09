import { experimental_AstroContainer as AstroContainer } from "astro/container";

import { AudioGuide } from "@components/AudioGuide";
import { expect, test } from "vitest";

test("AudioGuide component", async () => {
  const astroContainer = await AstroContainer.create();
  const result = await astroContainer.renderToString(AudioGuide, {
    props: {
        src:"https://example.com/audio-guide",
      title: "Test Title",
      description: "Test Description",
      audioUrl: "https://example.com/audio.mp3",
      imageUrl: "https://example.com/image.jpg",
    },
  })
  expect(result).not.toBeNull();
  expect(result).toContain("Test Title");
})
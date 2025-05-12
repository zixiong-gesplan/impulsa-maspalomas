import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { SpeechAction } from "@components/SpeechAction";
import { expect, test } from "vitest";

test('SpeechAction test', async () =>{
    const astroContainer = await AstroContainer.create();
    const result = await astroContainer.renderToString(SpeechAction, {});
  
    // Check if the result is not null
    expect(result).not.toBeNull();
})
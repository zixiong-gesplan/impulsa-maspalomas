import { expect, test } from "vitest";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { Card } from "@components/Card";
test("Card component", async () => {
    const astroContainer = await AstroContainer.create();
    const result = await astroContainer.renderToString(Card, {
        props: {
            borderColor: 'bg-blue-500',
            title: "Test Title",
            description: "Test Description",
            pathNumber: "123",
        }
    });

    expect(result).not.toBeNull();
    expect(result).toContain("Test Title");
})
import { Breadcrums } from '@components/Breadcrums';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';

test('renders breadcrumb with correct title and link', async () => {
    const id = 'evento-123';
    const title = 'Evento de Prueba';

    const astroContainer = await AstroContainer.create();
    const result = await astroContainer.renderToString(Breadcrums, {
        props: {
            id: 'evento-123',
            title: 'Evento de Prueba'
        }
    });

    // Check for the home link
    expect(result).toContain('href="/impulsa-maspalomas"');
    expect(result).toContain('Inicio');

    // Check for the breadcrumb link with id and title
    expect(result).toContain(`href="/impulsa-maspalomas/${id}"`);
    expect(result).toContain(title);
});

test('renders correct aria attributes', async () => {
    const id = 'evento-456';
    const title = 'Otro Evento';
    const astroContainer = await AstroContainer.create();
    const result = await astroContainer.renderToString(Breadcrums, {
        props: {
            id: 'evento-123',
            title: 'Evento de Prueba'
        }
    });

    // Check for nav aria-label
    expect(result).toContain('aria-label="Breadcrumb"');
    // Check for aria-current on the current page
    expect(result).toContain('aria-current="page"');
});

import { STANDS } from '@consts/STANDS';
import { describe, expect, it } from 'vitest';

describe('STANDS consts', () => {
    it('should have the correct structure', () => {
        STANDS.forEach((stand) => {
            expect(stand).toHaveProperty('src');
            expect(stand).toHaveProperty('title');
            expect(stand).toHaveProperty('description');
        });
    });
});

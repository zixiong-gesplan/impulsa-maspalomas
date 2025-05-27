import { PATHS } from '@consts/PATHS';
import { describe, expect, it } from 'vitest';

describe('PATHS consts', () => {
    it('should have the correct structure', () => {
        PATHS.forEach((path) => {
            expect(path).toHaveProperty('src');
            expect(path).toHaveProperty('title');
            expect(path).toHaveProperty('description');
            expect(path).toHaveProperty('guide');
        });
    });

    it('should have unique titles', () => {
        const titles = PATHS.map(path => path.title);
        const uniqueTitles = new Set(titles);
        expect(uniqueTitles.size).toBe(titles.length);
    });
});

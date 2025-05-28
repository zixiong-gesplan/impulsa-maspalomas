import eslintPluginAstro from 'eslint-plugin-astro';
import stylistic from '@stylistic/eslint-plugin';
import { globalIgnores } from 'eslint/config';

export default [
    // add more generic rule sets here, such as:
    // js.configs.recommended,
    ...eslintPluginAstro.configs.recommended,
    {
        rules: {
            // override/add rules settings here, such as:
            // "astro/no-set-html-directive": "error"
        },
        languageOptions: {
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module'
            }
        }
    },
    stylistic.configs.customize({
        indent: 4,
        quotes: 'single',
        semi: true,
        commaDangle: 'never',
        braceStyle: '1tbs'
    }),
    globalIgnores([
        './src/components/AudioGuide/AudioGuide.astro
    ])
];

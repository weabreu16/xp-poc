module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
        'plugin:@typescript-eslint/recommended'
    ],
    root: true,
    env: {
        node: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        '@typescript-eslint/naming-convention': [
            'error',
            {
                "selector": ["variable", "function", "classMethod", "parameter"],
                "format": ["camelCase"]
            },
            {
                "selector": ["enumMember", "class", "enum"],
                "format": ["PascalCase"]
            }
        ]
    }
}
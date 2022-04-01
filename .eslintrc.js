module.exports = {
    env: {
        "browser": true,
        "node": true,
        es2022: true,
    },
    ignorePatterns: ["node_modules/"],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier', 'import'],
    extends: [
        'airbnb',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        '@typescript-eslint/no-var-requires': "off",
        'linebreak-style': "off",
        'import/prefer-default-export': "off",
        'prettier/prettier': "off",
        'import/extensions': "off",
        'no-use-before-define': "off",
        "@typescript-eslint/no-use-before-define": ["warn"],
        'import/no-unresolved': "off",
        "import/no-extraneous-dependencies": ["error", {"devDependencies": ["**/*.test.js", "**/*.spec.js"]}], // 테스트 또는 개발환경을 구성하는 파일에서는 devDependency 사용을 허용
        'no-shadow': "off",
        'react/prop-types': "off",
        'react/jsx-filename-extension': ["warn", { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'jsx-a11y/no-noninteractive-element-interactions': "warn",
        "@typescript-eslint/no-empty-interface": "warn",
        "@typescript-eslint/no-empty-function": "warn",
    },
};

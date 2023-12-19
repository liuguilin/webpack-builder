module.exports = {
    parser: "babel-eslint",
    extends: "airbnb-base",
    env: {
        browser: true,
        node: true,
    },
    rules: {
        indent: ["error", 4],
        quotes: "off",
        "no-require-imports": "off",
    },
};

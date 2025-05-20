export default [
    {
        name: "base-config",
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: "latest"
        },
        rules: {
            "no-console": "warn",
            "indent": ["error", 2],
            "semi": ["error", "always"]
        }
    }
];

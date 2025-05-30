export default [
  {
    name: "base-config",
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest"
    },
    rules: {
      "no-console": "off",  // Дозволити console.log
      "indent": ["error", 2],
      "semi": ["error", "always"]
    }
  }
];

// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

// Importa tus reglas personalizadas
const customRules = require("./eslint-rules/custom-rules.js");

module.exports = tseslint.config(
  // Configuración para archivos TypeScript
  {
    files: ["**/*.ts"],
    plugins: {
      custom: {
        rules: customRules.rules, // Carga tus reglas aquí
      },
    },
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      // Reglas de Angular
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],

      // Tus reglas personalizadas
      "custom/no-console-log": "error",
      "custom/prefer-const-strict": "warn",
      "custom/require-todo-author": "warn",
    },
  },

  // Configuración para archivos HTML (plantillas)
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  }
);
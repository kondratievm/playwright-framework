import { ESLint } from "eslint";
import eslintPlugin from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";

export default [
  {
    files: ["src/**/*.ts"], // Укажите файлы для проверки
    languageOptions: {
      parser, // Используем парсер для TypeScript
    },
    plugins: {
      "@typescript-eslint": eslintPlugin,
    },
    rules: {
      "no-console": "off",
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
];

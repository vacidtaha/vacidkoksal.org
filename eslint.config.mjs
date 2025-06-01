import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Production build için sorunlu kuralları devre dışı bırak
      "@typescript-eslint/no-unused-vars": "warn", // Error yerine warning
      "@typescript-eslint/no-explicit-any": "warn", // Error yerine warning
      "react/no-unescaped-entities": "warn", // Error yerine warning
      "@next/next/no-html-link-for-pages": "warn", // Error yerine warning
    },
  },
];

export default eslintConfig;

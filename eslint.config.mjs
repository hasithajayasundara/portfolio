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
    "rules": {
      "import/order": [
        1,
        {
          "groups": [
            "builtin",
            "external",
            "internal",
            "sibling",
            "parent",
            "index"
          ],
          "pathGroups": [
            {
              "pattern": "components",
              "group": "internal"
            },
            {
              "pattern": "features",
              "group": "internal",
              "position": "after"
            },
            {
              "pattern": "hooks",
              "group": "internal",
              "position": "after"
            }
          ],
          "pathGroupsExcludedImportTypes": [
            "internal"
          ],
          "alphabetize": {
            "order": "asc",
            "caseInsensitive": true
          }
        }
      ]
    }
  }
];

export default eslintConfig;

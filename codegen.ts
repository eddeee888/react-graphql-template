import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://beta.pokeapi.co/graphql/v1beta",
  documents: "src/**/*.graphql",
  hooks: {
    afterAllFileWrite: ["prettier --write"],
  },
  generates: {
    "src/graphql-types.generated.ts": {
      plugins: ["typescript", "typescript-operations"],
      config: {
        namingConvention: {
          enumValues: "change-case-all#upperCase",
        },
        scalars: {
          ID: {
            input: "string | number",
            output: "string",
          },
        },
      },
    },
    src: {
      preset: "near-operation-file",
      presetConfig: {
        baseTypesPath: "./graphql-types.generated.ts",
        extension: ".generated.ts",
      },
      plugins: ["typescript-operations", "typescript-react-apollo"],
      config: {
        enumsAsTypes: true,
        documentMode: "documentNode",
      },
    },
  },
};

export default config;

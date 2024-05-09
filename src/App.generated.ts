import * as Types from "./graphql-types.generated";

import { DocumentNode } from "graphql";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type PokemonsQueryVariables = Types.Exact<{
  limit: Types.Scalars["Int"]["input"];
}>;

export type PokemonsQuery = {
  __typename?: "query_root";
  pokemon_v2_pokemon: Array<{
    __typename?: "pokemon_v2_pokemon";
    name: string;
    height?: number | null;
  }>;
};

export const PokemonsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Pokemons" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "limit" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "pokemon_v2_pokemon" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "order_by" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "height" },
                      value: { kind: "EnumValue", value: "desc" },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "limit" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "is_default" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: { kind: "BooleanValue", value: true },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;

/**
 * __usePokemonsQuery__
 *
 * To run a query within a React component, call `usePokemonsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePokemonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePokemonsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function usePokemonsQuery(
  baseOptions: Apollo.QueryHookOptions<PokemonsQuery, PokemonsQueryVariables> &
    ({ variables: PokemonsQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PokemonsQuery, PokemonsQueryVariables>(
    PokemonsDocument,
    options,
  );
}
export function usePokemonsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PokemonsQuery,
    PokemonsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PokemonsQuery, PokemonsQueryVariables>(
    PokemonsDocument,
    options,
  );
}
export function usePokemonsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    PokemonsQuery,
    PokemonsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<PokemonsQuery, PokemonsQueryVariables>(
    PokemonsDocument,
    options,
  );
}
export type PokemonsQueryHookResult = ReturnType<typeof usePokemonsQuery>;
export type PokemonsLazyQueryHookResult = ReturnType<
  typeof usePokemonsLazyQuery
>;
export type PokemonsSuspenseQueryHookResult = ReturnType<
  typeof usePokemonsSuspenseQuery
>;
export type PokemonsQueryResult = Apollo.QueryResult<
  PokemonsQuery,
  PokemonsQueryVariables
>;

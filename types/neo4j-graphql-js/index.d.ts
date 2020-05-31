// Type definitions for graphql-relay 0.6
// Project: https://github.com/neo4j-graphql/neo4j-graphql-js
// Definitions by: Arvitaly <https://github.com/nopzen>
// Definitions: https://github.com/DefinitelyTyped/neo4j-graphql-js
// TypeScript Version: 3.8

import { GraphQLSchema } from "graphql";

declare module "neo4j-graphql-js" {
  export function makeAugmentSchema(): GraphQLSchema;
  export function neo4jgraphql(): any;
  export function augmentSchema(): any;
  export function cypherQuery(): any;
  export function cypherMutation(): any;
  export function inferSchema(): any;
}

/**
 * AugmentSchemaAuthConfig
 * @param isAuthenticated   enables `@isAuthenticated` directive, **Optional, defaults to true**
 * @param hasRole           enables `@hasRole` directive, **Optional, defaults to true**
 * @param hasScope          enables `@hasScope` directive, **Optional, defaults to true**
 */
type AugmentSchemaAuthConfig = {
  isAuthenticated?: boolean;
  hasRole?: boolean;
  hasScope?: boolean;
};

/**
 * AugmentSchemaConfig
 *
 * @param query     Configure the autogenerated Query fields. Can be enabled/disabled for all types or a list of individual types to exclude can be passed. Commonly used to exclude payload types. **Optional defaults to `true`**
 * @param mutation  Configure the autogenerated Mutation fields. Can be enabled/disabled for all types or a list of individual types to exclude can be passed. Commonly used to exclude payload types. **Optional, defaults to `true`**
 * @param debug     Enable/disable logging of generated Cypher queries and parameters. **Optional, defaults to `true`**
 * @param auth      Used to enable authorization schema directives (@isAuthenticated, @hasRole, @hasScope). If enabled, directives from the graphql-auth-directives are declared and can be used in the schema. If @hasScope is enabled it is automatically added to all generated query and mutation fields. See the authorization guide for more information. **Optional, defaults to `false`**
 */
type AugmentSchemaConfig = {
  query?: boolean | { exclude: string[] };
  mutation?: boolean | { exclude: string[] };
  debug?: boolean;
  auth?: boolean | AugmentSchemaAuthConfig;
};

type MakeAugmentSchemaOptions = {
  schema?: GraphQLSchema;
  typeDefs?: string;
  resolvers: any;
  logger: any;
  allowUndefinedInResolve: boolean;
  resolverValidationOptions: any;
  directiveResolvers: any;
  schemaDirectives: any;
  parseOptions: any;
  inheritResolversFromInterfaces: boolean;
  config: AugmentSchemaConfig;
};

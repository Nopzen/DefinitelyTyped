// Type definitions for graphql-relay 0.6
// Project: https://github.com/neo4j-graphql/neo4j-graphql-js
// Definitions by: Arvitaly <https://github.com/nopzen>
// Definitions: https://github.com/DefinitelyTyped/neo4j-graphql-js
// TypeScript Version: 3.8

import { GraphQLSchema, GraphQLFieldResolver } from 'graphql';

declare module 'neo4j-graphql-js' {
    export function makeAugmentSchema(): GraphQLSchema;
    export function neo4jgraphql(): any;
    export function augmentSchema(): any;
    export function cypherQuery(): any;
    export function cypherMutation(): any;
    export function inferSchema(): any;
}

type AugmentSchemaResolvers = {
    [key: string]: GraphQLFieldResolver<any, any, { [argName: string]: any }>;
};

type AugmentSchemaLogger = {
    log: (msg: string) => void;
};

type AugmentSchemaParseOptions = {
    [key: string]: any;
};

/**
 * AugmentSchemaResolverValidationOptions
 * @param {boolean} requireResolversForArgs will cause `makeExecutableSchema` to throw an error if no resolver is defined for a field that has arguments.
 * @param {boolean} requireResolversForNonScalar will cause makeExecutableSchema to throw an error if a non-scalar field has no resolver defined. Setting this to `true` can be helpful in catching errors, but defaults to `false` to avoid confusing behavior for those coming from other GraphQL libraries.
 * @param {boolean} requireResolversForAllFields asserts that _all_ fields have valid resolvers.
 * @param {boolean} requireResolversForResolveType will require a _resolveType()_ method for Interface and Union types. This can be passed in with the field resolvers as *__resolveType()*. False to disable the warning.
 * @param {boolean} allowResolversNotInSchema turns off the functionality which throws errors when resolvers are found which are not present in the schema. Defaults to `false`, to help catch common errors.
 */
type AugmentSchemaResolverValidationOptions = {
    requireResolversForArgs: boolean;
    requireResolversForNonScalar: boolean;
    requireResolversForAllFields: boolean;
    requireResolversForResolveType: boolean;
    allowResolversNotInSchema: boolean;
};

type AugmentSchemaDirectives = {
    [key: string]: (next: Promise<any>, src: any, args: any[], context: any) => Promise<any>;
};

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

/**
 * MakeAugmentSchemaOptions
 * @remarks TBD
 *
 * @param {GraphQLSchema} schema                   __optional__ argument, predefined schema takes presidence over a `typeDefs` & `resolvers` combination
 * @param {string}  typeDefs                       __required__ argument, and should be an GraphQL schema language string or array of GraphQL schema language strings or a function that takes no arguments and returns an array of GraphQL schema language strings. The order of the strings in the array is not important, but it must include a schema definition.
 * @param {object}  resolvers                      __optional__ argument, _(empty object by default)_ and should be an object or an array of objects that follow the pattern explained in {@link https://www.graphql-tools.com/docs/resolvers/|article on resolvers}
 * @param {object}  logger                         __optional__ argument, which can be used to print errors to the server console that are usually swallowed by GraphQL. The logger argument should be an object with a log function, eg. `const logger = { log: e => console.log(e) }`
 * @param {object}  parseOptions                   __optional__ argument, which allows customization of parse when specifying `typeDefs` as a string.
 * @param {boolean} allowUndefinedInResolve        __optional__ argument, which is `true` by default. When set to `false`, causes your resolver to throw errors if they return `undefined`, which can help make debugging easier.
 * @param {object} resolverValidationOptions       __optional__ argument, see: _AugmentSchemaResolverValidationOptions_
 * @param {object} directiveResolvers              __optional__ argument, _(null by default)_ and should be an object that follows the patteren explained in this {@link https://www.graphql-tools.com/docs/directive-resolvers/|article on directive resolvers}
 * @param {object} schemaDirectives                __optional__ argument, (empty object by default) and can be used to specify the {@link https://www.graphql-tools.com/docs/legacy-schema-directives/|earlier class-based implementation of schema directives}
 * @param {boolean} inheritResolversFromInterfaces __optional__ argument, (false by default)  GraphQL Objects that implement interfaces will inherit missing resolvers from their interface types defined in the resolvers object.
 */
type MakeAugmentSchemaOptions = {
    schema?: GraphQLSchema;
    typeDefs: string;
    resolvers?: AugmentSchemaResolvers;
    logger?: AugmentSchemaLogger;
    parseOptions?: AugmentSchemaParseOptions;
    config?: AugmentSchemaConfig;
    allowUndefinedInResolve?: boolean;
    resolverValidationOptions?: AugmentSchemaResolverValidationOptions;
    directiveResolvers?: any;
    schemaDirectives?: AugmentSchemaDirectives;
    inheritResolversFromInterfaces?: boolean;
};

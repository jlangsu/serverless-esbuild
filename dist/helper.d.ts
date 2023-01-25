import type Serverless from 'serverless';
import type ServerlessPlugin from 'serverless/classes/Plugin';
import type { Configuration, DependencyMap, FunctionEntry } from './types';
export declare function asArray<T>(data: T | T[]): T[];
export declare const isString: (input: unknown) => input is string;
export declare function assertIsString(input: unknown, message?: string): asserts input is string;
export declare function extractFunctionEntries(
  cwd: string,
  provider: string,
  functions: Record<string, Serverless.FunctionDefinitionHandler>
): FunctionEntry[];
/**
 * Takes a dependency graph and returns a flat list of required production dependencies for all or the filtered deps
 * @param root the root of the dependency tree
 * @param rootDeps array of top level root dependencies to whitelist
 */
export declare const flatDep: (root: DependencyMap, rootDepsFilter: string[]) => string[];
export declare const isESM: (buildOptions: Configuration) => boolean;
/**
 * Extracts the list of dependencies that appear in a bundle as `import 'XXX'`, `import('XXX')`, or `require('XXX')`.
 * @param bundlePath Absolute path to a bundled JS file
 * @param useESM Should the bundle be treated as ESM
 */
export declare const getDepsFromBundle: (bundlePath: string, useESM: boolean) => string[];
export declare const doSharePath: (child: string, parent: string) => boolean;
export type AwsNodeProviderRuntimeMatcher<Versions extends number> = {
  [Version in Versions as `nodejs${Version}.x`]: `node${Version}`;
};
export type GoogleNodeProviderRuntimeMatcher<Versions extends number> = {
  [Version in Versions as `nodejs${Version}`]: `node${Version}`;
};
export type AwsNodeMatcher = AwsNodeProviderRuntimeMatcher<12 | 14 | 16 | 18>;
export type GoogleNodeMatcher = GoogleNodeProviderRuntimeMatcher<12 | 14 | 16 | 18>;
export type NodeMatcher = AwsNodeMatcher & GoogleNodeMatcher;
export type AwsNodeMatcherKey = keyof AwsNodeMatcher;
export type GoogleNodeMatcherKey = keyof GoogleNodeMatcher;
export type NodeMatcherKey = AwsNodeMatcherKey | GoogleNodeMatcherKey;
export declare const providerRuntimeMatcher: Readonly<Record<string, NodeMatcher>>;
export declare const isNodeMatcherKey: (input: unknown) => input is NodeMatcherKey;
export declare function assertIsSupportedRuntime(input: unknown): asserts input is NodeMatcherKey;
export declare const buildServerlessV3LoggerFromLegacyLogger: (
  legacyLogger: Serverless['cli'],
  verbose?: boolean
) => ServerlessPlugin.Logging['log'];
//# sourceMappingURL=helper.d.ts.map

/**
 * Client
 */

import * as runtime from '@prisma/client/runtime/library'
import * as process from 'node:process'
import * as path from 'node:path'
    import { fileURLToPath } from 'node:url'

    const __dirname = path.dirname(fileURLToPath(import.meta.url))


export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model MpesaCode
 * 
 */
export type MpesaCode = runtime.Types.Result.DefaultSelection<Prisma.$MpesaCodePayload>
/**
 * Model User
 * 
 */
export type User = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>



/**
 * Create the Client
 */
const config: runtime.GetPrismaClientConfig = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client"
    },
    "output": {
      "value": "/home/kyan/Desktop/CODE/alphaderiv/src/generated/prisma",
      "fromEnvVar": null
    },
    "config": {
      "moduleFormat": "esm",
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "/home/kyan/Desktop/CODE/alphaderiv/prisma/schema.prisma",
    "isCustomOutput": true
  },
  "relativePath": "../../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": "postgresql://kyan:Sss333123kyan@51.21.158.217:5432/alphabot?schema=public"
      }
    }
  },
  "inlineSchema": "// prisma/schema.prisma\ngenerator client {\n  provider     = \"prisma-client\" // no `-js` at the end\n  output       = \"../src/generated/prisma\" // `output` is required\n  moduleFormat = \"esm\" // or `\"cjs\"` for CommonJS\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel MpesaCode {\n  id        Int      @id @default(autoincrement())\n  code      String   @unique\n  phone     String\n  amount    String\n  status    String\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n}\n\nmodel User {\n  id           Int      @id @default(autoincrement())\n  phone        String   @unique\n  token        String\n  package      String\n  status       String\n  pkgExpiry    DateTime\n  pkgCreatedAt DateTime @default(now())\n  pkgUpdatedAt DateTime @updatedAt\n}\n",
  "inlineSchemaHash": "cb957bc9eae0d28886d01931e4c0fadb6fec7c1f9e7d16473b800b2dfab100f8",
  "copyEngine": true,
  "runtimeDataModel": {
    "models": {},
    "enums": {},
    "types": {}
  },
  "dirname": ""
}
config.dirname = __dirname

config.runtimeDataModel = JSON.parse("{\"models\":{\"MpesaCode\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"User\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"package\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pkgExpiry\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pkgCreatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pkgUpdatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
config.engineWasm = undefined
config.compilerWasm = undefined



// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-debian-openssl-3.0.x.so.node")
path.join(process.cwd(), "src/generated/prisma/libquery_engine-debian-openssl-3.0.x.so.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma")
path.join(process.cwd(), "src/generated/prisma/schema.prisma")


interface PrismaClientConstructor {
    /**
   * ## Prisma Client
   *
   * Type-safe database client for TypeScript
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more MpesaCodes
   * const mpesaCodes = await prisma.mpesaCode.findMany()
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */
  new <
    ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
    U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  >(options?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>): PrismaClient<ClientOptions, U, ExtArgs>
}

/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more MpesaCodes
 * const mpesaCodes = await prisma.mpesaCode.findMany()
 * ```
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export interface PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): runtime.Types.Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): runtime.Types.Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): runtime.Types.Utils.JsPromise<R>


  $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.mpesaCode`: Exposes CRUD operations for the **MpesaCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MpesaCodes
    * const mpesaCodes = await prisma.mpesaCode.findMany()
    * ```
    */
  get mpesaCode(): Prisma.MpesaCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export const PrismaClient = runtime.getPrismaClient(config) as unknown as PrismaClientConstructor

export namespace Prisma {
  export type DMMF = typeof runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Validator
   */
  export const validator = runtime.Public.validator

  /**
   * Prisma Errors
   */

  export const PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError

  export const PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError

  export const PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError

  export const PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export type PrismaClientInitializationError = runtime.PrismaClientInitializationError

  export const PrismaClientValidationError = runtime.PrismaClientValidationError
  export type PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export const sql = runtime.sqltag
  export const empty = runtime.empty
  export const join = runtime.join
  export const raw = runtime.raw
  export const Sql = runtime.Sql
  export type Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export const Decimal = runtime.Decimal
  export type Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export type Extension = runtime.Types.Extensions.UserArgs
  export const getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>
  export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>
  export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>
  export type Exact<A, W> = runtime.Types.Public.Exact<A, W>

  export type PrismaVersion = {
    client: string
    engine: string
  }

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export const prismaVersion: PrismaVersion = {
    client: "6.6.0",
    engine: "f676762280b54cd07c770017ed3711ddde35f37a"
  }

  /**
   * Utility Types
   */


  export type JsonObject = runtime.JsonObject
  export type JsonArray = runtime.JsonArray
  export type JsonValue = runtime.JsonValue
  export type InputJsonObject = runtime.InputJsonObject
  export type InputJsonArray = runtime.InputJsonArray
  export type InputJsonValue = runtime.InputJsonValue

  export const NullTypes = {
    DbNull: runtime.objectEnumValues.classes.DbNull as (new (secret: never) => typeof runtime.objectEnumValues.instances.DbNull),
    JsonNull: runtime.objectEnumValues.classes.JsonNull as (new (secret: never) => typeof runtime.objectEnumValues.instances.JsonNull),
    AnyNull: runtime.objectEnumValues.classes.AnyNull as (new (secret: never) => typeof runtime.objectEnumValues.instances.AnyNull),
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull = runtime.objectEnumValues.instances.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull = runtime.objectEnumValues.instances.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull = runtime.objectEnumValues.instances.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  export type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  export type Boolean = True | False

  export type True = 1

  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName = {
    MpesaCode: 'MpesaCode',
    User: 'User'
  } as const

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export interface TypeMapCb<ClientOptions = {}> extends runtime.Types.Utils.Fn<{extArgs: runtime.Types.Extensions.InternalArgs }, runtime.Types.Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "mpesaCode" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      MpesaCode: {
        payload: Prisma.$MpesaCodePayload<ExtArgs>
        fields: Prisma.MpesaCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MpesaCodeFindUniqueArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$MpesaCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MpesaCodeFindUniqueOrThrowArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$MpesaCodePayload>
          }
          findFirst: {
            args: Prisma.MpesaCodeFindFirstArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$MpesaCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MpesaCodeFindFirstOrThrowArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$MpesaCodePayload>
          }
          findMany: {
            args: Prisma.MpesaCodeFindManyArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$MpesaCodePayload>[]
          }
          create: {
            args: Prisma.MpesaCodeCreateArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$MpesaCodePayload>
          }
          createMany: {
            args: Prisma.MpesaCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MpesaCodeCreateManyAndReturnArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$MpesaCodePayload>[]
          }
          delete: {
            args: Prisma.MpesaCodeDeleteArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$MpesaCodePayload>
          }
          update: {
            args: Prisma.MpesaCodeUpdateArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$MpesaCodePayload>
          }
          deleteMany: {
            args: Prisma.MpesaCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MpesaCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MpesaCodeUpdateManyAndReturnArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$MpesaCodePayload>[]
          }
          upsert: {
            args: Prisma.MpesaCodeUpsertArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$MpesaCodePayload>
          }
          aggregate: {
            args: Prisma.MpesaCodeAggregateArgs<ExtArgs>
            result: runtime.Types.Utils.Optional<AggregateMpesaCode>
          }
          groupBy: {
            args: Prisma.MpesaCodeGroupByArgs<ExtArgs>
            result: runtime.Types.Utils.Optional<MpesaCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.MpesaCodeCountArgs<ExtArgs>
            result: runtime.Types.Utils.Optional<MpesaCodeCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: runtime.Types.Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: runtime.Types.Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: runtime.Types.Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension = runtime.Extensions.defineExtension as unknown as runtime.Types.Extensions.ExtendsHook<"define", Prisma.TypeMapCb, runtime.Types.Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    mpesaCode?: MpesaCodeOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => runtime.Types.Utils.JsPromise<T>,
  ) => runtime.Types.Utils.JsPromise<T>

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model MpesaCode
   */

  export type AggregateMpesaCode = {
    _count: MpesaCodeCountAggregateOutputType | null
    _avg: MpesaCodeAvgAggregateOutputType | null
    _sum: MpesaCodeSumAggregateOutputType | null
    _min: MpesaCodeMinAggregateOutputType | null
    _max: MpesaCodeMaxAggregateOutputType | null
  }

  export type MpesaCodeAvgAggregateOutputType = {
    id: number | null
  }

  export type MpesaCodeSumAggregateOutputType = {
    id: number | null
  }

  export type MpesaCodeMinAggregateOutputType = {
    id: number | null
    code: string | null
    phone: string | null
    amount: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MpesaCodeMaxAggregateOutputType = {
    id: number | null
    code: string | null
    phone: string | null
    amount: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MpesaCodeCountAggregateOutputType = {
    id: number
    code: number
    phone: number
    amount: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MpesaCodeAvgAggregateInputType = {
    id?: true
  }

  export type MpesaCodeSumAggregateInputType = {
    id?: true
  }

  export type MpesaCodeMinAggregateInputType = {
    id?: true
    code?: true
    phone?: true
    amount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MpesaCodeMaxAggregateInputType = {
    id?: true
    code?: true
    phone?: true
    amount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MpesaCodeCountAggregateInputType = {
    id?: true
    code?: true
    phone?: true
    amount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MpesaCodeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MpesaCode to aggregate.
     */
    where?: MpesaCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MpesaCodes to fetch.
     */
    orderBy?: MpesaCodeOrderByWithRelationInput | MpesaCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MpesaCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MpesaCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MpesaCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MpesaCodes
    **/
    _count?: true | MpesaCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MpesaCodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MpesaCodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MpesaCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MpesaCodeMaxAggregateInputType
  }

  export type GetMpesaCodeAggregateType<T extends MpesaCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateMpesaCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMpesaCode[P]>
      : GetScalarType<T[P], AggregateMpesaCode[P]>
  }




  export type MpesaCodeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: MpesaCodeWhereInput
    orderBy?: MpesaCodeOrderByWithAggregationInput | MpesaCodeOrderByWithAggregationInput[]
    by: MpesaCodeScalarFieldEnum[] | MpesaCodeScalarFieldEnum
    having?: MpesaCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MpesaCodeCountAggregateInputType | true
    _avg?: MpesaCodeAvgAggregateInputType
    _sum?: MpesaCodeSumAggregateInputType
    _min?: MpesaCodeMinAggregateInputType
    _max?: MpesaCodeMaxAggregateInputType
  }

  export type MpesaCodeGroupByOutputType = {
    id: number
    code: string
    phone: string
    amount: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: MpesaCodeCountAggregateOutputType | null
    _avg: MpesaCodeAvgAggregateOutputType | null
    _sum: MpesaCodeSumAggregateOutputType | null
    _min: MpesaCodeMinAggregateOutputType | null
    _max: MpesaCodeMaxAggregateOutputType | null
  }

  type GetMpesaCodeGroupByPayload<T extends MpesaCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MpesaCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MpesaCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MpesaCodeGroupByOutputType[P]>
            : GetScalarType<T[P], MpesaCodeGroupByOutputType[P]>
        }
      >
    >


  export type MpesaCodeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    phone?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["mpesaCode"]>

  export type MpesaCodeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    phone?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["mpesaCode"]>

  export type MpesaCodeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    phone?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["mpesaCode"]>

  export type MpesaCodeSelectScalar = {
    id?: boolean
    code?: boolean
    phone?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MpesaCodeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "code" | "phone" | "amount" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["mpesaCode"]>

  export type $MpesaCodePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MpesaCode"
    objects: {}
    scalars: runtime.Types.Extensions.GetPayloadResult<{
      id: number
      code: string
      phone: string
      amount: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mpesaCode"]>
    composites: {}
  }

  export type MpesaCodeGetPayload<S extends boolean | null | undefined | MpesaCodeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MpesaCodePayload, S>

  export type MpesaCodeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
    Omit<MpesaCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MpesaCodeCountAggregateInputType | true
    }

  export interface MpesaCodeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MpesaCode'], meta: { name: 'MpesaCode' } }
    /**
     * Find zero or one MpesaCode that matches the filter.
     * @param {MpesaCodeFindUniqueArgs} args - Arguments to find a MpesaCode
     * @example
     * // Get one MpesaCode
     * const mpesaCode = await prisma.mpesaCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MpesaCodeFindUniqueArgs>(args: SelectSubset<T, MpesaCodeFindUniqueArgs<ExtArgs>>): Prisma__MpesaCodeClient<runtime.Types.Result.GetResult<Prisma.$MpesaCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MpesaCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MpesaCodeFindUniqueOrThrowArgs} args - Arguments to find a MpesaCode
     * @example
     * // Get one MpesaCode
     * const mpesaCode = await prisma.mpesaCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MpesaCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, MpesaCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MpesaCodeClient<runtime.Types.Result.GetResult<Prisma.$MpesaCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MpesaCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MpesaCodeFindFirstArgs} args - Arguments to find a MpesaCode
     * @example
     * // Get one MpesaCode
     * const mpesaCode = await prisma.mpesaCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MpesaCodeFindFirstArgs>(args?: SelectSubset<T, MpesaCodeFindFirstArgs<ExtArgs>>): Prisma__MpesaCodeClient<runtime.Types.Result.GetResult<Prisma.$MpesaCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MpesaCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MpesaCodeFindFirstOrThrowArgs} args - Arguments to find a MpesaCode
     * @example
     * // Get one MpesaCode
     * const mpesaCode = await prisma.mpesaCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MpesaCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, MpesaCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__MpesaCodeClient<runtime.Types.Result.GetResult<Prisma.$MpesaCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MpesaCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MpesaCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MpesaCodes
     * const mpesaCodes = await prisma.mpesaCode.findMany()
     * 
     * // Get first 10 MpesaCodes
     * const mpesaCodes = await prisma.mpesaCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mpesaCodeWithIdOnly = await prisma.mpesaCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MpesaCodeFindManyArgs>(args?: SelectSubset<T, MpesaCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MpesaCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MpesaCode.
     * @param {MpesaCodeCreateArgs} args - Arguments to create a MpesaCode.
     * @example
     * // Create one MpesaCode
     * const MpesaCode = await prisma.mpesaCode.create({
     *   data: {
     *     // ... data to create a MpesaCode
     *   }
     * })
     * 
     */
    create<T extends MpesaCodeCreateArgs>(args: SelectSubset<T, MpesaCodeCreateArgs<ExtArgs>>): Prisma__MpesaCodeClient<runtime.Types.Result.GetResult<Prisma.$MpesaCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MpesaCodes.
     * @param {MpesaCodeCreateManyArgs} args - Arguments to create many MpesaCodes.
     * @example
     * // Create many MpesaCodes
     * const mpesaCode = await prisma.mpesaCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MpesaCodeCreateManyArgs>(args?: SelectSubset<T, MpesaCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MpesaCodes and returns the data saved in the database.
     * @param {MpesaCodeCreateManyAndReturnArgs} args - Arguments to create many MpesaCodes.
     * @example
     * // Create many MpesaCodes
     * const mpesaCode = await prisma.mpesaCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MpesaCodes and only return the `id`
     * const mpesaCodeWithIdOnly = await prisma.mpesaCode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MpesaCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, MpesaCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MpesaCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MpesaCode.
     * @param {MpesaCodeDeleteArgs} args - Arguments to delete one MpesaCode.
     * @example
     * // Delete one MpesaCode
     * const MpesaCode = await prisma.mpesaCode.delete({
     *   where: {
     *     // ... filter to delete one MpesaCode
     *   }
     * })
     * 
     */
    delete<T extends MpesaCodeDeleteArgs>(args: SelectSubset<T, MpesaCodeDeleteArgs<ExtArgs>>): Prisma__MpesaCodeClient<runtime.Types.Result.GetResult<Prisma.$MpesaCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MpesaCode.
     * @param {MpesaCodeUpdateArgs} args - Arguments to update one MpesaCode.
     * @example
     * // Update one MpesaCode
     * const mpesaCode = await prisma.mpesaCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MpesaCodeUpdateArgs>(args: SelectSubset<T, MpesaCodeUpdateArgs<ExtArgs>>): Prisma__MpesaCodeClient<runtime.Types.Result.GetResult<Prisma.$MpesaCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MpesaCodes.
     * @param {MpesaCodeDeleteManyArgs} args - Arguments to filter MpesaCodes to delete.
     * @example
     * // Delete a few MpesaCodes
     * const { count } = await prisma.mpesaCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MpesaCodeDeleteManyArgs>(args?: SelectSubset<T, MpesaCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MpesaCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MpesaCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MpesaCodes
     * const mpesaCode = await prisma.mpesaCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MpesaCodeUpdateManyArgs>(args: SelectSubset<T, MpesaCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MpesaCodes and returns the data updated in the database.
     * @param {MpesaCodeUpdateManyAndReturnArgs} args - Arguments to update many MpesaCodes.
     * @example
     * // Update many MpesaCodes
     * const mpesaCode = await prisma.mpesaCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MpesaCodes and only return the `id`
     * const mpesaCodeWithIdOnly = await prisma.mpesaCode.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MpesaCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, MpesaCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MpesaCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MpesaCode.
     * @param {MpesaCodeUpsertArgs} args - Arguments to update or create a MpesaCode.
     * @example
     * // Update or create a MpesaCode
     * const mpesaCode = await prisma.mpesaCode.upsert({
     *   create: {
     *     // ... data to create a MpesaCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MpesaCode we want to update
     *   }
     * })
     */
    upsert<T extends MpesaCodeUpsertArgs>(args: SelectSubset<T, MpesaCodeUpsertArgs<ExtArgs>>): Prisma__MpesaCodeClient<runtime.Types.Result.GetResult<Prisma.$MpesaCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MpesaCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MpesaCodeCountArgs} args - Arguments to filter MpesaCodes to count.
     * @example
     * // Count the number of MpesaCodes
     * const count = await prisma.mpesaCode.count({
     *   where: {
     *     // ... the filter for the MpesaCodes we want to count
     *   }
     * })
    **/
    count<T extends MpesaCodeCountArgs>(
      args?: Subset<T, MpesaCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends runtime.Types.Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MpesaCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MpesaCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MpesaCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MpesaCodeAggregateArgs>(args: Subset<T, MpesaCodeAggregateArgs>): Prisma.PrismaPromise<GetMpesaCodeAggregateType<T>>

    /**
     * Group by MpesaCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MpesaCodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MpesaCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MpesaCodeGroupByArgs['orderBy'] }
        : { orderBy?: MpesaCodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MpesaCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMpesaCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MpesaCode model
   */
  readonly fields: MpesaCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MpesaCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MpesaCodeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
  }




  /**
   * Fields of the MpesaCode model
   */
  export interface MpesaCodeFieldRefs {
    readonly id: FieldRef<"MpesaCode", 'Int'>
    readonly code: FieldRef<"MpesaCode", 'String'>
    readonly phone: FieldRef<"MpesaCode", 'String'>
    readonly amount: FieldRef<"MpesaCode", 'String'>
    readonly status: FieldRef<"MpesaCode", 'String'>
    readonly createdAt: FieldRef<"MpesaCode", 'DateTime'>
    readonly updatedAt: FieldRef<"MpesaCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MpesaCode findUnique
   */
  export type MpesaCodeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MpesaCode
     */
    select?: MpesaCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MpesaCode
     */
    omit?: MpesaCodeOmit<ExtArgs> | null
    /**
     * Filter, which MpesaCode to fetch.
     */
    where: MpesaCodeWhereUniqueInput
  }

  /**
   * MpesaCode findUniqueOrThrow
   */
  export type MpesaCodeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MpesaCode
     */
    select?: MpesaCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MpesaCode
     */
    omit?: MpesaCodeOmit<ExtArgs> | null
    /**
     * Filter, which MpesaCode to fetch.
     */
    where: MpesaCodeWhereUniqueInput
  }

  /**
   * MpesaCode findFirst
   */
  export type MpesaCodeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MpesaCode
     */
    select?: MpesaCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MpesaCode
     */
    omit?: MpesaCodeOmit<ExtArgs> | null
    /**
     * Filter, which MpesaCode to fetch.
     */
    where?: MpesaCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MpesaCodes to fetch.
     */
    orderBy?: MpesaCodeOrderByWithRelationInput | MpesaCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MpesaCodes.
     */
    cursor?: MpesaCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MpesaCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MpesaCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MpesaCodes.
     */
    distinct?: MpesaCodeScalarFieldEnum | MpesaCodeScalarFieldEnum[]
  }

  /**
   * MpesaCode findFirstOrThrow
   */
  export type MpesaCodeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MpesaCode
     */
    select?: MpesaCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MpesaCode
     */
    omit?: MpesaCodeOmit<ExtArgs> | null
    /**
     * Filter, which MpesaCode to fetch.
     */
    where?: MpesaCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MpesaCodes to fetch.
     */
    orderBy?: MpesaCodeOrderByWithRelationInput | MpesaCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MpesaCodes.
     */
    cursor?: MpesaCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MpesaCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MpesaCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MpesaCodes.
     */
    distinct?: MpesaCodeScalarFieldEnum | MpesaCodeScalarFieldEnum[]
  }

  /**
   * MpesaCode findMany
   */
  export type MpesaCodeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MpesaCode
     */
    select?: MpesaCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MpesaCode
     */
    omit?: MpesaCodeOmit<ExtArgs> | null
    /**
     * Filter, which MpesaCodes to fetch.
     */
    where?: MpesaCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MpesaCodes to fetch.
     */
    orderBy?: MpesaCodeOrderByWithRelationInput | MpesaCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MpesaCodes.
     */
    cursor?: MpesaCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MpesaCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MpesaCodes.
     */
    skip?: number
    distinct?: MpesaCodeScalarFieldEnum | MpesaCodeScalarFieldEnum[]
  }

  /**
   * MpesaCode create
   */
  export type MpesaCodeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MpesaCode
     */
    select?: MpesaCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MpesaCode
     */
    omit?: MpesaCodeOmit<ExtArgs> | null
    /**
     * The data needed to create a MpesaCode.
     */
    data: XOR<MpesaCodeCreateInput, MpesaCodeUncheckedCreateInput>
  }

  /**
   * MpesaCode createMany
   */
  export type MpesaCodeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many MpesaCodes.
     */
    data: MpesaCodeCreateManyInput | MpesaCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MpesaCode createManyAndReturn
   */
  export type MpesaCodeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MpesaCode
     */
    select?: MpesaCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MpesaCode
     */
    omit?: MpesaCodeOmit<ExtArgs> | null
    /**
     * The data used to create many MpesaCodes.
     */
    data: MpesaCodeCreateManyInput | MpesaCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MpesaCode update
   */
  export type MpesaCodeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MpesaCode
     */
    select?: MpesaCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MpesaCode
     */
    omit?: MpesaCodeOmit<ExtArgs> | null
    /**
     * The data needed to update a MpesaCode.
     */
    data: XOR<MpesaCodeUpdateInput, MpesaCodeUncheckedUpdateInput>
    /**
     * Choose, which MpesaCode to update.
     */
    where: MpesaCodeWhereUniqueInput
  }

  /**
   * MpesaCode updateMany
   */
  export type MpesaCodeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update MpesaCodes.
     */
    data: XOR<MpesaCodeUpdateManyMutationInput, MpesaCodeUncheckedUpdateManyInput>
    /**
     * Filter which MpesaCodes to update
     */
    where?: MpesaCodeWhereInput
    /**
     * Limit how many MpesaCodes to update.
     */
    limit?: number
  }

  /**
   * MpesaCode updateManyAndReturn
   */
  export type MpesaCodeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MpesaCode
     */
    select?: MpesaCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MpesaCode
     */
    omit?: MpesaCodeOmit<ExtArgs> | null
    /**
     * The data used to update MpesaCodes.
     */
    data: XOR<MpesaCodeUpdateManyMutationInput, MpesaCodeUncheckedUpdateManyInput>
    /**
     * Filter which MpesaCodes to update
     */
    where?: MpesaCodeWhereInput
    /**
     * Limit how many MpesaCodes to update.
     */
    limit?: number
  }

  /**
   * MpesaCode upsert
   */
  export type MpesaCodeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MpesaCode
     */
    select?: MpesaCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MpesaCode
     */
    omit?: MpesaCodeOmit<ExtArgs> | null
    /**
     * The filter to search for the MpesaCode to update in case it exists.
     */
    where: MpesaCodeWhereUniqueInput
    /**
     * In case the MpesaCode found by the `where` argument doesn't exist, create a new MpesaCode with this data.
     */
    create: XOR<MpesaCodeCreateInput, MpesaCodeUncheckedCreateInput>
    /**
     * In case the MpesaCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MpesaCodeUpdateInput, MpesaCodeUncheckedUpdateInput>
  }

  /**
   * MpesaCode delete
   */
  export type MpesaCodeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MpesaCode
     */
    select?: MpesaCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MpesaCode
     */
    omit?: MpesaCodeOmit<ExtArgs> | null
    /**
     * Filter which MpesaCode to delete.
     */
    where: MpesaCodeWhereUniqueInput
  }

  /**
   * MpesaCode deleteMany
   */
  export type MpesaCodeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MpesaCodes to delete
     */
    where?: MpesaCodeWhereInput
    /**
     * Limit how many MpesaCodes to delete.
     */
    limit?: number
  }

  /**
   * MpesaCode without action
   */
  export type MpesaCodeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MpesaCode
     */
    select?: MpesaCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MpesaCode
     */
    omit?: MpesaCodeOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    phone: string | null
    token: string | null
    package: string | null
    status: string | null
    pkgExpiry: Date | null
    pkgCreatedAt: Date | null
    pkgUpdatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    phone: string | null
    token: string | null
    package: string | null
    status: string | null
    pkgExpiry: Date | null
    pkgCreatedAt: Date | null
    pkgUpdatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    phone: number
    token: number
    package: number
    status: number
    pkgExpiry: number
    pkgCreatedAt: number
    pkgUpdatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    phone?: true
    token?: true
    package?: true
    status?: true
    pkgExpiry?: true
    pkgCreatedAt?: true
    pkgUpdatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    phone?: true
    token?: true
    package?: true
    status?: true
    pkgExpiry?: true
    pkgCreatedAt?: true
    pkgUpdatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    phone?: true
    token?: true
    package?: true
    status?: true
    pkgExpiry?: true
    pkgCreatedAt?: true
    pkgUpdatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    phone: string
    token: string
    package: string
    status: string
    pkgExpiry: Date
    pkgCreatedAt: Date
    pkgUpdatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    token?: boolean
    package?: boolean
    status?: boolean
    pkgExpiry?: boolean
    pkgCreatedAt?: boolean
    pkgUpdatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    token?: boolean
    package?: boolean
    status?: boolean
    pkgExpiry?: boolean
    pkgCreatedAt?: boolean
    pkgUpdatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    token?: boolean
    package?: boolean
    status?: boolean
    pkgExpiry?: boolean
    pkgCreatedAt?: boolean
    pkgUpdatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    phone?: boolean
    token?: boolean
    package?: boolean
    status?: boolean
    pkgExpiry?: boolean
    pkgCreatedAt?: boolean
    pkgUpdatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "phone" | "token" | "package" | "status" | "pkgExpiry" | "pkgCreatedAt" | "pkgUpdatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: runtime.Types.Extensions.GetPayloadResult<{
      id: number
      phone: string
      token: string
      package: string
      status: string
      pkgExpiry: Date
      pkgCreatedAt: Date
      pkgUpdatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>

  export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends runtime.Types.Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  export interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly phone: FieldRef<"User", 'String'>
    readonly token: FieldRef<"User", 'String'>
    readonly package: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'String'>
    readonly pkgExpiry: FieldRef<"User", 'DateTime'>
    readonly pkgCreatedAt: FieldRef<"User", 'DateTime'>
    readonly pkgUpdatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  } as const)

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MpesaCodeScalarFieldEnum = {
    id: 'id',
    code: 'code',
    phone: 'phone',
    amount: 'amount',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  } as const

  export type MpesaCodeScalarFieldEnum = (typeof MpesaCodeScalarFieldEnum)[keyof typeof MpesaCodeScalarFieldEnum]


  export const UserScalarFieldEnum = {
    id: 'id',
    phone: 'phone',
    token: 'token',
    package: 'package',
    status: 'status',
    pkgExpiry: 'pkgExpiry',
    pkgCreatedAt: 'pkgCreatedAt',
    pkgUpdatedAt: 'pkgUpdatedAt'
  } as const

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
  } as const

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
  } as const

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type MpesaCodeWhereInput = {
    AND?: MpesaCodeWhereInput | MpesaCodeWhereInput[]
    OR?: MpesaCodeWhereInput[]
    NOT?: MpesaCodeWhereInput | MpesaCodeWhereInput[]
    id?: IntFilter<"MpesaCode"> | number
    code?: StringFilter<"MpesaCode"> | string
    phone?: StringFilter<"MpesaCode"> | string
    amount?: StringFilter<"MpesaCode"> | string
    status?: StringFilter<"MpesaCode"> | string
    createdAt?: DateTimeFilter<"MpesaCode"> | Date | string
    updatedAt?: DateTimeFilter<"MpesaCode"> | Date | string
  }

  export type MpesaCodeOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    phone?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MpesaCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: MpesaCodeWhereInput | MpesaCodeWhereInput[]
    OR?: MpesaCodeWhereInput[]
    NOT?: MpesaCodeWhereInput | MpesaCodeWhereInput[]
    phone?: StringFilter<"MpesaCode"> | string
    amount?: StringFilter<"MpesaCode"> | string
    status?: StringFilter<"MpesaCode"> | string
    createdAt?: DateTimeFilter<"MpesaCode"> | Date | string
    updatedAt?: DateTimeFilter<"MpesaCode"> | Date | string
  }, "id" | "code">

  export type MpesaCodeOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    phone?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MpesaCodeCountOrderByAggregateInput
    _avg?: MpesaCodeAvgOrderByAggregateInput
    _max?: MpesaCodeMaxOrderByAggregateInput
    _min?: MpesaCodeMinOrderByAggregateInput
    _sum?: MpesaCodeSumOrderByAggregateInput
  }

  export type MpesaCodeScalarWhereWithAggregatesInput = {
    AND?: MpesaCodeScalarWhereWithAggregatesInput | MpesaCodeScalarWhereWithAggregatesInput[]
    OR?: MpesaCodeScalarWhereWithAggregatesInput[]
    NOT?: MpesaCodeScalarWhereWithAggregatesInput | MpesaCodeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MpesaCode"> | number
    code?: StringWithAggregatesFilter<"MpesaCode"> | string
    phone?: StringWithAggregatesFilter<"MpesaCode"> | string
    amount?: StringWithAggregatesFilter<"MpesaCode"> | string
    status?: StringWithAggregatesFilter<"MpesaCode"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MpesaCode"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MpesaCode"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    phone?: StringFilter<"User"> | string
    token?: StringFilter<"User"> | string
    package?: StringFilter<"User"> | string
    status?: StringFilter<"User"> | string
    pkgExpiry?: DateTimeFilter<"User"> | Date | string
    pkgCreatedAt?: DateTimeFilter<"User"> | Date | string
    pkgUpdatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    phone?: SortOrder
    token?: SortOrder
    package?: SortOrder
    status?: SortOrder
    pkgExpiry?: SortOrder
    pkgCreatedAt?: SortOrder
    pkgUpdatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    token?: StringFilter<"User"> | string
    package?: StringFilter<"User"> | string
    status?: StringFilter<"User"> | string
    pkgExpiry?: DateTimeFilter<"User"> | Date | string
    pkgCreatedAt?: DateTimeFilter<"User"> | Date | string
    pkgUpdatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    phone?: SortOrder
    token?: SortOrder
    package?: SortOrder
    status?: SortOrder
    pkgExpiry?: SortOrder
    pkgCreatedAt?: SortOrder
    pkgUpdatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    phone?: StringWithAggregatesFilter<"User"> | string
    token?: StringWithAggregatesFilter<"User"> | string
    package?: StringWithAggregatesFilter<"User"> | string
    status?: StringWithAggregatesFilter<"User"> | string
    pkgExpiry?: DateTimeWithAggregatesFilter<"User"> | Date | string
    pkgCreatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    pkgUpdatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type MpesaCodeCreateInput = {
    code: string
    phone: string
    amount: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MpesaCodeUncheckedCreateInput = {
    id?: number
    code: string
    phone: string
    amount: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MpesaCodeUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MpesaCodeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MpesaCodeCreateManyInput = {
    id?: number
    code: string
    phone: string
    amount: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MpesaCodeUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MpesaCodeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    phone: string
    token: string
    package: string
    status: string
    pkgExpiry: Date | string
    pkgCreatedAt?: Date | string
    pkgUpdatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    phone: string
    token: string
    package: string
    status: string
    pkgExpiry: Date | string
    pkgCreatedAt?: Date | string
    pkgUpdatedAt?: Date | string
  }

  export type UserUpdateInput = {
    phone?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    package?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pkgExpiry?: DateTimeFieldUpdateOperationsInput | Date | string
    pkgCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pkgUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    package?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pkgExpiry?: DateTimeFieldUpdateOperationsInput | Date | string
    pkgCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pkgUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    phone: string
    token: string
    package: string
    status: string
    pkgExpiry: Date | string
    pkgCreatedAt?: Date | string
    pkgUpdatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    phone?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    package?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pkgExpiry?: DateTimeFieldUpdateOperationsInput | Date | string
    pkgCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pkgUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    package?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pkgExpiry?: DateTimeFieldUpdateOperationsInput | Date | string
    pkgCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pkgUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MpesaCodeCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    phone?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MpesaCodeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MpesaCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    phone?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MpesaCodeMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    phone?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MpesaCodeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    token?: SortOrder
    package?: SortOrder
    status?: SortOrder
    pkgExpiry?: SortOrder
    pkgCreatedAt?: SortOrder
    pkgUpdatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    token?: SortOrder
    package?: SortOrder
    status?: SortOrder
    pkgExpiry?: SortOrder
    pkgCreatedAt?: SortOrder
    pkgUpdatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    token?: SortOrder
    package?: SortOrder
    status?: SortOrder
    pkgExpiry?: SortOrder
    pkgCreatedAt?: SortOrder
    pkgUpdatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }
}
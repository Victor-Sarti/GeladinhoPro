
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model cadastro
 * 
 */
export type cadastro = $Result.DefaultSelection<Prisma.$cadastroPayload>
/**
 * Model geladinho
 * 
 */
export type geladinho = $Result.DefaultSelection<Prisma.$geladinhoPayload>
/**
 * Model produto
 * 
 */
export type produto = $Result.DefaultSelection<Prisma.$produtoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cadastros
 * const cadastros = await prisma.cadastro.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cadastros
   * const cadastros = await prisma.cadastro.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cadastro`: Exposes CRUD operations for the **cadastro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cadastros
    * const cadastros = await prisma.cadastro.findMany()
    * ```
    */
  get cadastro(): Prisma.cadastroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.geladinho`: Exposes CRUD operations for the **geladinho** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Geladinhos
    * const geladinhos = await prisma.geladinho.findMany()
    * ```
    */
  get geladinho(): Prisma.geladinhoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produto`: Exposes CRUD operations for the **produto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produtos
    * const produtos = await prisma.produto.findMany()
    * ```
    */
  get produto(): Prisma.produtoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

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
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
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
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

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


  export const ModelName: {
    cadastro: 'cadastro',
    geladinho: 'geladinho',
    produto: 'produto'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cadastro" | "geladinho" | "produto"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      cadastro: {
        payload: Prisma.$cadastroPayload<ExtArgs>
        fields: Prisma.cadastroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cadastroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cadastroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastroPayload>
          }
          findFirst: {
            args: Prisma.cadastroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cadastroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastroPayload>
          }
          findMany: {
            args: Prisma.cadastroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastroPayload>[]
          }
          create: {
            args: Prisma.cadastroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastroPayload>
          }
          createMany: {
            args: Prisma.cadastroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cadastroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastroPayload>
          }
          update: {
            args: Prisma.cadastroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastroPayload>
          }
          deleteMany: {
            args: Prisma.cadastroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cadastroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cadastroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastroPayload>
          }
          aggregate: {
            args: Prisma.CadastroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCadastro>
          }
          groupBy: {
            args: Prisma.cadastroGroupByArgs<ExtArgs>
            result: $Utils.Optional<CadastroGroupByOutputType>[]
          }
          count: {
            args: Prisma.cadastroCountArgs<ExtArgs>
            result: $Utils.Optional<CadastroCountAggregateOutputType> | number
          }
        }
      }
      geladinho: {
        payload: Prisma.$geladinhoPayload<ExtArgs>
        fields: Prisma.geladinhoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.geladinhoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$geladinhoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.geladinhoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$geladinhoPayload>
          }
          findFirst: {
            args: Prisma.geladinhoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$geladinhoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.geladinhoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$geladinhoPayload>
          }
          findMany: {
            args: Prisma.geladinhoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$geladinhoPayload>[]
          }
          create: {
            args: Prisma.geladinhoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$geladinhoPayload>
          }
          createMany: {
            args: Prisma.geladinhoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.geladinhoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$geladinhoPayload>
          }
          update: {
            args: Prisma.geladinhoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$geladinhoPayload>
          }
          deleteMany: {
            args: Prisma.geladinhoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.geladinhoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.geladinhoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$geladinhoPayload>
          }
          aggregate: {
            args: Prisma.GeladinhoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGeladinho>
          }
          groupBy: {
            args: Prisma.geladinhoGroupByArgs<ExtArgs>
            result: $Utils.Optional<GeladinhoGroupByOutputType>[]
          }
          count: {
            args: Prisma.geladinhoCountArgs<ExtArgs>
            result: $Utils.Optional<GeladinhoCountAggregateOutputType> | number
          }
        }
      }
      produto: {
        payload: Prisma.$produtoPayload<ExtArgs>
        fields: Prisma.produtoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.produtoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.produtoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>
          }
          findFirst: {
            args: Prisma.produtoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.produtoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>
          }
          findMany: {
            args: Prisma.produtoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>[]
          }
          create: {
            args: Prisma.produtoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>
          }
          createMany: {
            args: Prisma.produtoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.produtoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>
          }
          update: {
            args: Prisma.produtoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>
          }
          deleteMany: {
            args: Prisma.produtoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.produtoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.produtoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>
          }
          aggregate: {
            args: Prisma.ProdutoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduto>
          }
          groupBy: {
            args: Prisma.produtoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdutoGroupByOutputType>[]
          }
          count: {
            args: Prisma.produtoCountArgs<ExtArgs>
            result: $Utils.Optional<ProdutoCountAggregateOutputType> | number
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
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    cadastro?: cadastroOmit
    geladinho?: geladinhoOmit
    produto?: produtoOmit
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

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
   * Model cadastro
   */

  export type AggregateCadastro = {
    _count: CadastroCountAggregateOutputType | null
    _min: CadastroMinAggregateOutputType | null
    _max: CadastroMaxAggregateOutputType | null
  }

  export type CadastroMinAggregateOutputType = {
    id: string | null
    nome: string | null
    sobrenome: string | null
    email: string | null
    senha: string | null
    criadoEm: Date | null
  }

  export type CadastroMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    sobrenome: string | null
    email: string | null
    senha: string | null
    criadoEm: Date | null
  }

  export type CadastroCountAggregateOutputType = {
    id: number
    nome: number
    sobrenome: number
    email: number
    senha: number
    criadoEm: number
    _all: number
  }


  export type CadastroMinAggregateInputType = {
    id?: true
    nome?: true
    sobrenome?: true
    email?: true
    senha?: true
    criadoEm?: true
  }

  export type CadastroMaxAggregateInputType = {
    id?: true
    nome?: true
    sobrenome?: true
    email?: true
    senha?: true
    criadoEm?: true
  }

  export type CadastroCountAggregateInputType = {
    id?: true
    nome?: true
    sobrenome?: true
    email?: true
    senha?: true
    criadoEm?: true
    _all?: true
  }

  export type CadastroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cadastro to aggregate.
     */
    where?: cadastroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cadastros to fetch.
     */
    orderBy?: cadastroOrderByWithRelationInput | cadastroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cadastroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cadastros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cadastros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cadastros
    **/
    _count?: true | CadastroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CadastroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CadastroMaxAggregateInputType
  }

  export type GetCadastroAggregateType<T extends CadastroAggregateArgs> = {
        [P in keyof T & keyof AggregateCadastro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCadastro[P]>
      : GetScalarType<T[P], AggregateCadastro[P]>
  }




  export type cadastroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cadastroWhereInput
    orderBy?: cadastroOrderByWithAggregationInput | cadastroOrderByWithAggregationInput[]
    by: CadastroScalarFieldEnum[] | CadastroScalarFieldEnum
    having?: cadastroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CadastroCountAggregateInputType | true
    _min?: CadastroMinAggregateInputType
    _max?: CadastroMaxAggregateInputType
  }

  export type CadastroGroupByOutputType = {
    id: string
    nome: string
    sobrenome: string
    email: string
    senha: string
    criadoEm: Date
    _count: CadastroCountAggregateOutputType | null
    _min: CadastroMinAggregateOutputType | null
    _max: CadastroMaxAggregateOutputType | null
  }

  type GetCadastroGroupByPayload<T extends cadastroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CadastroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CadastroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CadastroGroupByOutputType[P]>
            : GetScalarType<T[P], CadastroGroupByOutputType[P]>
        }
      >
    >


  export type cadastroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    sobrenome?: boolean
    email?: boolean
    senha?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["cadastro"]>



  export type cadastroSelectScalar = {
    id?: boolean
    nome?: boolean
    sobrenome?: boolean
    email?: boolean
    senha?: boolean
    criadoEm?: boolean
  }

  export type cadastroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "sobrenome" | "email" | "senha" | "criadoEm", ExtArgs["result"]["cadastro"]>

  export type $cadastroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cadastro"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      sobrenome: string
      email: string
      senha: string
      criadoEm: Date
    }, ExtArgs["result"]["cadastro"]>
    composites: {}
  }

  type cadastroGetPayload<S extends boolean | null | undefined | cadastroDefaultArgs> = $Result.GetResult<Prisma.$cadastroPayload, S>

  type cadastroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cadastroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CadastroCountAggregateInputType | true
    }

  export interface cadastroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cadastro'], meta: { name: 'cadastro' } }
    /**
     * Find zero or one Cadastro that matches the filter.
     * @param {cadastroFindUniqueArgs} args - Arguments to find a Cadastro
     * @example
     * // Get one Cadastro
     * const cadastro = await prisma.cadastro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cadastroFindUniqueArgs>(args: SelectSubset<T, cadastroFindUniqueArgs<ExtArgs>>): Prisma__cadastroClient<$Result.GetResult<Prisma.$cadastroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cadastro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cadastroFindUniqueOrThrowArgs} args - Arguments to find a Cadastro
     * @example
     * // Get one Cadastro
     * const cadastro = await prisma.cadastro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cadastroFindUniqueOrThrowArgs>(args: SelectSubset<T, cadastroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cadastroClient<$Result.GetResult<Prisma.$cadastroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cadastro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cadastroFindFirstArgs} args - Arguments to find a Cadastro
     * @example
     * // Get one Cadastro
     * const cadastro = await prisma.cadastro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cadastroFindFirstArgs>(args?: SelectSubset<T, cadastroFindFirstArgs<ExtArgs>>): Prisma__cadastroClient<$Result.GetResult<Prisma.$cadastroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cadastro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cadastroFindFirstOrThrowArgs} args - Arguments to find a Cadastro
     * @example
     * // Get one Cadastro
     * const cadastro = await prisma.cadastro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cadastroFindFirstOrThrowArgs>(args?: SelectSubset<T, cadastroFindFirstOrThrowArgs<ExtArgs>>): Prisma__cadastroClient<$Result.GetResult<Prisma.$cadastroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cadastros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cadastroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cadastros
     * const cadastros = await prisma.cadastro.findMany()
     * 
     * // Get first 10 Cadastros
     * const cadastros = await prisma.cadastro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cadastroWithIdOnly = await prisma.cadastro.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cadastroFindManyArgs>(args?: SelectSubset<T, cadastroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cadastroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cadastro.
     * @param {cadastroCreateArgs} args - Arguments to create a Cadastro.
     * @example
     * // Create one Cadastro
     * const Cadastro = await prisma.cadastro.create({
     *   data: {
     *     // ... data to create a Cadastro
     *   }
     * })
     * 
     */
    create<T extends cadastroCreateArgs>(args: SelectSubset<T, cadastroCreateArgs<ExtArgs>>): Prisma__cadastroClient<$Result.GetResult<Prisma.$cadastroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cadastros.
     * @param {cadastroCreateManyArgs} args - Arguments to create many Cadastros.
     * @example
     * // Create many Cadastros
     * const cadastro = await prisma.cadastro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cadastroCreateManyArgs>(args?: SelectSubset<T, cadastroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cadastro.
     * @param {cadastroDeleteArgs} args - Arguments to delete one Cadastro.
     * @example
     * // Delete one Cadastro
     * const Cadastro = await prisma.cadastro.delete({
     *   where: {
     *     // ... filter to delete one Cadastro
     *   }
     * })
     * 
     */
    delete<T extends cadastroDeleteArgs>(args: SelectSubset<T, cadastroDeleteArgs<ExtArgs>>): Prisma__cadastroClient<$Result.GetResult<Prisma.$cadastroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cadastro.
     * @param {cadastroUpdateArgs} args - Arguments to update one Cadastro.
     * @example
     * // Update one Cadastro
     * const cadastro = await prisma.cadastro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cadastroUpdateArgs>(args: SelectSubset<T, cadastroUpdateArgs<ExtArgs>>): Prisma__cadastroClient<$Result.GetResult<Prisma.$cadastroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cadastros.
     * @param {cadastroDeleteManyArgs} args - Arguments to filter Cadastros to delete.
     * @example
     * // Delete a few Cadastros
     * const { count } = await prisma.cadastro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cadastroDeleteManyArgs>(args?: SelectSubset<T, cadastroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cadastros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cadastroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cadastros
     * const cadastro = await prisma.cadastro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cadastroUpdateManyArgs>(args: SelectSubset<T, cadastroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cadastro.
     * @param {cadastroUpsertArgs} args - Arguments to update or create a Cadastro.
     * @example
     * // Update or create a Cadastro
     * const cadastro = await prisma.cadastro.upsert({
     *   create: {
     *     // ... data to create a Cadastro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cadastro we want to update
     *   }
     * })
     */
    upsert<T extends cadastroUpsertArgs>(args: SelectSubset<T, cadastroUpsertArgs<ExtArgs>>): Prisma__cadastroClient<$Result.GetResult<Prisma.$cadastroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cadastros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cadastroCountArgs} args - Arguments to filter Cadastros to count.
     * @example
     * // Count the number of Cadastros
     * const count = await prisma.cadastro.count({
     *   where: {
     *     // ... the filter for the Cadastros we want to count
     *   }
     * })
    **/
    count<T extends cadastroCountArgs>(
      args?: Subset<T, cadastroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CadastroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cadastro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CadastroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CadastroAggregateArgs>(args: Subset<T, CadastroAggregateArgs>): Prisma.PrismaPromise<GetCadastroAggregateType<T>>

    /**
     * Group by Cadastro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cadastroGroupByArgs} args - Group by arguments.
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
      T extends cadastroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cadastroGroupByArgs['orderBy'] }
        : { orderBy?: cadastroGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cadastroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCadastroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cadastro model
   */
  readonly fields: cadastroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cadastro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cadastroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cadastro model
   */
  interface cadastroFieldRefs {
    readonly id: FieldRef<"cadastro", 'String'>
    readonly nome: FieldRef<"cadastro", 'String'>
    readonly sobrenome: FieldRef<"cadastro", 'String'>
    readonly email: FieldRef<"cadastro", 'String'>
    readonly senha: FieldRef<"cadastro", 'String'>
    readonly criadoEm: FieldRef<"cadastro", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * cadastro findUnique
   */
  export type cadastroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastro
     */
    select?: cadastroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastro
     */
    omit?: cadastroOmit<ExtArgs> | null
    /**
     * Filter, which cadastro to fetch.
     */
    where: cadastroWhereUniqueInput
  }

  /**
   * cadastro findUniqueOrThrow
   */
  export type cadastroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastro
     */
    select?: cadastroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastro
     */
    omit?: cadastroOmit<ExtArgs> | null
    /**
     * Filter, which cadastro to fetch.
     */
    where: cadastroWhereUniqueInput
  }

  /**
   * cadastro findFirst
   */
  export type cadastroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastro
     */
    select?: cadastroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastro
     */
    omit?: cadastroOmit<ExtArgs> | null
    /**
     * Filter, which cadastro to fetch.
     */
    where?: cadastroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cadastros to fetch.
     */
    orderBy?: cadastroOrderByWithRelationInput | cadastroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cadastros.
     */
    cursor?: cadastroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cadastros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cadastros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cadastros.
     */
    distinct?: CadastroScalarFieldEnum | CadastroScalarFieldEnum[]
  }

  /**
   * cadastro findFirstOrThrow
   */
  export type cadastroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastro
     */
    select?: cadastroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastro
     */
    omit?: cadastroOmit<ExtArgs> | null
    /**
     * Filter, which cadastro to fetch.
     */
    where?: cadastroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cadastros to fetch.
     */
    orderBy?: cadastroOrderByWithRelationInput | cadastroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cadastros.
     */
    cursor?: cadastroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cadastros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cadastros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cadastros.
     */
    distinct?: CadastroScalarFieldEnum | CadastroScalarFieldEnum[]
  }

  /**
   * cadastro findMany
   */
  export type cadastroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastro
     */
    select?: cadastroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastro
     */
    omit?: cadastroOmit<ExtArgs> | null
    /**
     * Filter, which cadastros to fetch.
     */
    where?: cadastroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cadastros to fetch.
     */
    orderBy?: cadastroOrderByWithRelationInput | cadastroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cadastros.
     */
    cursor?: cadastroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cadastros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cadastros.
     */
    skip?: number
    distinct?: CadastroScalarFieldEnum | CadastroScalarFieldEnum[]
  }

  /**
   * cadastro create
   */
  export type cadastroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastro
     */
    select?: cadastroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastro
     */
    omit?: cadastroOmit<ExtArgs> | null
    /**
     * The data needed to create a cadastro.
     */
    data: XOR<cadastroCreateInput, cadastroUncheckedCreateInput>
  }

  /**
   * cadastro createMany
   */
  export type cadastroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cadastros.
     */
    data: cadastroCreateManyInput | cadastroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cadastro update
   */
  export type cadastroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastro
     */
    select?: cadastroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastro
     */
    omit?: cadastroOmit<ExtArgs> | null
    /**
     * The data needed to update a cadastro.
     */
    data: XOR<cadastroUpdateInput, cadastroUncheckedUpdateInput>
    /**
     * Choose, which cadastro to update.
     */
    where: cadastroWhereUniqueInput
  }

  /**
   * cadastro updateMany
   */
  export type cadastroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cadastros.
     */
    data: XOR<cadastroUpdateManyMutationInput, cadastroUncheckedUpdateManyInput>
    /**
     * Filter which cadastros to update
     */
    where?: cadastroWhereInput
    /**
     * Limit how many cadastros to update.
     */
    limit?: number
  }

  /**
   * cadastro upsert
   */
  export type cadastroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastro
     */
    select?: cadastroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastro
     */
    omit?: cadastroOmit<ExtArgs> | null
    /**
     * The filter to search for the cadastro to update in case it exists.
     */
    where: cadastroWhereUniqueInput
    /**
     * In case the cadastro found by the `where` argument doesn't exist, create a new cadastro with this data.
     */
    create: XOR<cadastroCreateInput, cadastroUncheckedCreateInput>
    /**
     * In case the cadastro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cadastroUpdateInput, cadastroUncheckedUpdateInput>
  }

  /**
   * cadastro delete
   */
  export type cadastroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastro
     */
    select?: cadastroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastro
     */
    omit?: cadastroOmit<ExtArgs> | null
    /**
     * Filter which cadastro to delete.
     */
    where: cadastroWhereUniqueInput
  }

  /**
   * cadastro deleteMany
   */
  export type cadastroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cadastros to delete
     */
    where?: cadastroWhereInput
    /**
     * Limit how many cadastros to delete.
     */
    limit?: number
  }

  /**
   * cadastro without action
   */
  export type cadastroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastro
     */
    select?: cadastroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastro
     */
    omit?: cadastroOmit<ExtArgs> | null
  }


  /**
   * Model geladinho
   */

  export type AggregateGeladinho = {
    _count: GeladinhoCountAggregateOutputType | null
    _avg: GeladinhoAvgAggregateOutputType | null
    _sum: GeladinhoSumAggregateOutputType | null
    _min: GeladinhoMinAggregateOutputType | null
    _max: GeladinhoMaxAggregateOutputType | null
  }

  export type GeladinhoAvgAggregateOutputType = {
    id: number | null
    valor: Decimal | null
  }

  export type GeladinhoSumAggregateOutputType = {
    id: number | null
    valor: Decimal | null
  }

  export type GeladinhoMinAggregateOutputType = {
    id: number | null
    sabor: string | null
    valor: Decimal | null
    criadoEm: Date | null
  }

  export type GeladinhoMaxAggregateOutputType = {
    id: number | null
    sabor: string | null
    valor: Decimal | null
    criadoEm: Date | null
  }

  export type GeladinhoCountAggregateOutputType = {
    id: number
    sabor: number
    valor: number
    criadoEm: number
    _all: number
  }


  export type GeladinhoAvgAggregateInputType = {
    id?: true
    valor?: true
  }

  export type GeladinhoSumAggregateInputType = {
    id?: true
    valor?: true
  }

  export type GeladinhoMinAggregateInputType = {
    id?: true
    sabor?: true
    valor?: true
    criadoEm?: true
  }

  export type GeladinhoMaxAggregateInputType = {
    id?: true
    sabor?: true
    valor?: true
    criadoEm?: true
  }

  export type GeladinhoCountAggregateInputType = {
    id?: true
    sabor?: true
    valor?: true
    criadoEm?: true
    _all?: true
  }

  export type GeladinhoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which geladinho to aggregate.
     */
    where?: geladinhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of geladinhos to fetch.
     */
    orderBy?: geladinhoOrderByWithRelationInput | geladinhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: geladinhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` geladinhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` geladinhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned geladinhos
    **/
    _count?: true | GeladinhoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GeladinhoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GeladinhoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeladinhoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeladinhoMaxAggregateInputType
  }

  export type GetGeladinhoAggregateType<T extends GeladinhoAggregateArgs> = {
        [P in keyof T & keyof AggregateGeladinho]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeladinho[P]>
      : GetScalarType<T[P], AggregateGeladinho[P]>
  }




  export type geladinhoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: geladinhoWhereInput
    orderBy?: geladinhoOrderByWithAggregationInput | geladinhoOrderByWithAggregationInput[]
    by: GeladinhoScalarFieldEnum[] | GeladinhoScalarFieldEnum
    having?: geladinhoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeladinhoCountAggregateInputType | true
    _avg?: GeladinhoAvgAggregateInputType
    _sum?: GeladinhoSumAggregateInputType
    _min?: GeladinhoMinAggregateInputType
    _max?: GeladinhoMaxAggregateInputType
  }

  export type GeladinhoGroupByOutputType = {
    id: number
    sabor: string
    valor: Decimal
    criadoEm: Date
    _count: GeladinhoCountAggregateOutputType | null
    _avg: GeladinhoAvgAggregateOutputType | null
    _sum: GeladinhoSumAggregateOutputType | null
    _min: GeladinhoMinAggregateOutputType | null
    _max: GeladinhoMaxAggregateOutputType | null
  }

  type GetGeladinhoGroupByPayload<T extends geladinhoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GeladinhoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeladinhoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeladinhoGroupByOutputType[P]>
            : GetScalarType<T[P], GeladinhoGroupByOutputType[P]>
        }
      >
    >


  export type geladinhoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sabor?: boolean
    valor?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["geladinho"]>



  export type geladinhoSelectScalar = {
    id?: boolean
    sabor?: boolean
    valor?: boolean
    criadoEm?: boolean
  }

  export type geladinhoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sabor" | "valor" | "criadoEm", ExtArgs["result"]["geladinho"]>

  export type $geladinhoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "geladinho"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sabor: string
      valor: Prisma.Decimal
      criadoEm: Date
    }, ExtArgs["result"]["geladinho"]>
    composites: {}
  }

  type geladinhoGetPayload<S extends boolean | null | undefined | geladinhoDefaultArgs> = $Result.GetResult<Prisma.$geladinhoPayload, S>

  type geladinhoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<geladinhoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GeladinhoCountAggregateInputType | true
    }

  export interface geladinhoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['geladinho'], meta: { name: 'geladinho' } }
    /**
     * Find zero or one Geladinho that matches the filter.
     * @param {geladinhoFindUniqueArgs} args - Arguments to find a Geladinho
     * @example
     * // Get one Geladinho
     * const geladinho = await prisma.geladinho.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends geladinhoFindUniqueArgs>(args: SelectSubset<T, geladinhoFindUniqueArgs<ExtArgs>>): Prisma__geladinhoClient<$Result.GetResult<Prisma.$geladinhoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Geladinho that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {geladinhoFindUniqueOrThrowArgs} args - Arguments to find a Geladinho
     * @example
     * // Get one Geladinho
     * const geladinho = await prisma.geladinho.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends geladinhoFindUniqueOrThrowArgs>(args: SelectSubset<T, geladinhoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__geladinhoClient<$Result.GetResult<Prisma.$geladinhoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Geladinho that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {geladinhoFindFirstArgs} args - Arguments to find a Geladinho
     * @example
     * // Get one Geladinho
     * const geladinho = await prisma.geladinho.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends geladinhoFindFirstArgs>(args?: SelectSubset<T, geladinhoFindFirstArgs<ExtArgs>>): Prisma__geladinhoClient<$Result.GetResult<Prisma.$geladinhoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Geladinho that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {geladinhoFindFirstOrThrowArgs} args - Arguments to find a Geladinho
     * @example
     * // Get one Geladinho
     * const geladinho = await prisma.geladinho.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends geladinhoFindFirstOrThrowArgs>(args?: SelectSubset<T, geladinhoFindFirstOrThrowArgs<ExtArgs>>): Prisma__geladinhoClient<$Result.GetResult<Prisma.$geladinhoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Geladinhos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {geladinhoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Geladinhos
     * const geladinhos = await prisma.geladinho.findMany()
     * 
     * // Get first 10 Geladinhos
     * const geladinhos = await prisma.geladinho.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const geladinhoWithIdOnly = await prisma.geladinho.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends geladinhoFindManyArgs>(args?: SelectSubset<T, geladinhoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$geladinhoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Geladinho.
     * @param {geladinhoCreateArgs} args - Arguments to create a Geladinho.
     * @example
     * // Create one Geladinho
     * const Geladinho = await prisma.geladinho.create({
     *   data: {
     *     // ... data to create a Geladinho
     *   }
     * })
     * 
     */
    create<T extends geladinhoCreateArgs>(args: SelectSubset<T, geladinhoCreateArgs<ExtArgs>>): Prisma__geladinhoClient<$Result.GetResult<Prisma.$geladinhoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Geladinhos.
     * @param {geladinhoCreateManyArgs} args - Arguments to create many Geladinhos.
     * @example
     * // Create many Geladinhos
     * const geladinho = await prisma.geladinho.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends geladinhoCreateManyArgs>(args?: SelectSubset<T, geladinhoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Geladinho.
     * @param {geladinhoDeleteArgs} args - Arguments to delete one Geladinho.
     * @example
     * // Delete one Geladinho
     * const Geladinho = await prisma.geladinho.delete({
     *   where: {
     *     // ... filter to delete one Geladinho
     *   }
     * })
     * 
     */
    delete<T extends geladinhoDeleteArgs>(args: SelectSubset<T, geladinhoDeleteArgs<ExtArgs>>): Prisma__geladinhoClient<$Result.GetResult<Prisma.$geladinhoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Geladinho.
     * @param {geladinhoUpdateArgs} args - Arguments to update one Geladinho.
     * @example
     * // Update one Geladinho
     * const geladinho = await prisma.geladinho.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends geladinhoUpdateArgs>(args: SelectSubset<T, geladinhoUpdateArgs<ExtArgs>>): Prisma__geladinhoClient<$Result.GetResult<Prisma.$geladinhoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Geladinhos.
     * @param {geladinhoDeleteManyArgs} args - Arguments to filter Geladinhos to delete.
     * @example
     * // Delete a few Geladinhos
     * const { count } = await prisma.geladinho.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends geladinhoDeleteManyArgs>(args?: SelectSubset<T, geladinhoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Geladinhos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {geladinhoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Geladinhos
     * const geladinho = await prisma.geladinho.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends geladinhoUpdateManyArgs>(args: SelectSubset<T, geladinhoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Geladinho.
     * @param {geladinhoUpsertArgs} args - Arguments to update or create a Geladinho.
     * @example
     * // Update or create a Geladinho
     * const geladinho = await prisma.geladinho.upsert({
     *   create: {
     *     // ... data to create a Geladinho
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Geladinho we want to update
     *   }
     * })
     */
    upsert<T extends geladinhoUpsertArgs>(args: SelectSubset<T, geladinhoUpsertArgs<ExtArgs>>): Prisma__geladinhoClient<$Result.GetResult<Prisma.$geladinhoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Geladinhos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {geladinhoCountArgs} args - Arguments to filter Geladinhos to count.
     * @example
     * // Count the number of Geladinhos
     * const count = await prisma.geladinho.count({
     *   where: {
     *     // ... the filter for the Geladinhos we want to count
     *   }
     * })
    **/
    count<T extends geladinhoCountArgs>(
      args?: Subset<T, geladinhoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeladinhoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Geladinho.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeladinhoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GeladinhoAggregateArgs>(args: Subset<T, GeladinhoAggregateArgs>): Prisma.PrismaPromise<GetGeladinhoAggregateType<T>>

    /**
     * Group by Geladinho.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {geladinhoGroupByArgs} args - Group by arguments.
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
      T extends geladinhoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: geladinhoGroupByArgs['orderBy'] }
        : { orderBy?: geladinhoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, geladinhoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeladinhoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the geladinho model
   */
  readonly fields: geladinhoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for geladinho.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__geladinhoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the geladinho model
   */
  interface geladinhoFieldRefs {
    readonly id: FieldRef<"geladinho", 'Int'>
    readonly sabor: FieldRef<"geladinho", 'String'>
    readonly valor: FieldRef<"geladinho", 'Decimal'>
    readonly criadoEm: FieldRef<"geladinho", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * geladinho findUnique
   */
  export type geladinhoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the geladinho
     */
    select?: geladinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the geladinho
     */
    omit?: geladinhoOmit<ExtArgs> | null
    /**
     * Filter, which geladinho to fetch.
     */
    where: geladinhoWhereUniqueInput
  }

  /**
   * geladinho findUniqueOrThrow
   */
  export type geladinhoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the geladinho
     */
    select?: geladinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the geladinho
     */
    omit?: geladinhoOmit<ExtArgs> | null
    /**
     * Filter, which geladinho to fetch.
     */
    where: geladinhoWhereUniqueInput
  }

  /**
   * geladinho findFirst
   */
  export type geladinhoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the geladinho
     */
    select?: geladinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the geladinho
     */
    omit?: geladinhoOmit<ExtArgs> | null
    /**
     * Filter, which geladinho to fetch.
     */
    where?: geladinhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of geladinhos to fetch.
     */
    orderBy?: geladinhoOrderByWithRelationInput | geladinhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for geladinhos.
     */
    cursor?: geladinhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` geladinhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` geladinhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of geladinhos.
     */
    distinct?: GeladinhoScalarFieldEnum | GeladinhoScalarFieldEnum[]
  }

  /**
   * geladinho findFirstOrThrow
   */
  export type geladinhoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the geladinho
     */
    select?: geladinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the geladinho
     */
    omit?: geladinhoOmit<ExtArgs> | null
    /**
     * Filter, which geladinho to fetch.
     */
    where?: geladinhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of geladinhos to fetch.
     */
    orderBy?: geladinhoOrderByWithRelationInput | geladinhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for geladinhos.
     */
    cursor?: geladinhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` geladinhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` geladinhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of geladinhos.
     */
    distinct?: GeladinhoScalarFieldEnum | GeladinhoScalarFieldEnum[]
  }

  /**
   * geladinho findMany
   */
  export type geladinhoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the geladinho
     */
    select?: geladinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the geladinho
     */
    omit?: geladinhoOmit<ExtArgs> | null
    /**
     * Filter, which geladinhos to fetch.
     */
    where?: geladinhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of geladinhos to fetch.
     */
    orderBy?: geladinhoOrderByWithRelationInput | geladinhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing geladinhos.
     */
    cursor?: geladinhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` geladinhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` geladinhos.
     */
    skip?: number
    distinct?: GeladinhoScalarFieldEnum | GeladinhoScalarFieldEnum[]
  }

  /**
   * geladinho create
   */
  export type geladinhoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the geladinho
     */
    select?: geladinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the geladinho
     */
    omit?: geladinhoOmit<ExtArgs> | null
    /**
     * The data needed to create a geladinho.
     */
    data: XOR<geladinhoCreateInput, geladinhoUncheckedCreateInput>
  }

  /**
   * geladinho createMany
   */
  export type geladinhoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many geladinhos.
     */
    data: geladinhoCreateManyInput | geladinhoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * geladinho update
   */
  export type geladinhoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the geladinho
     */
    select?: geladinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the geladinho
     */
    omit?: geladinhoOmit<ExtArgs> | null
    /**
     * The data needed to update a geladinho.
     */
    data: XOR<geladinhoUpdateInput, geladinhoUncheckedUpdateInput>
    /**
     * Choose, which geladinho to update.
     */
    where: geladinhoWhereUniqueInput
  }

  /**
   * geladinho updateMany
   */
  export type geladinhoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update geladinhos.
     */
    data: XOR<geladinhoUpdateManyMutationInput, geladinhoUncheckedUpdateManyInput>
    /**
     * Filter which geladinhos to update
     */
    where?: geladinhoWhereInput
    /**
     * Limit how many geladinhos to update.
     */
    limit?: number
  }

  /**
   * geladinho upsert
   */
  export type geladinhoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the geladinho
     */
    select?: geladinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the geladinho
     */
    omit?: geladinhoOmit<ExtArgs> | null
    /**
     * The filter to search for the geladinho to update in case it exists.
     */
    where: geladinhoWhereUniqueInput
    /**
     * In case the geladinho found by the `where` argument doesn't exist, create a new geladinho with this data.
     */
    create: XOR<geladinhoCreateInput, geladinhoUncheckedCreateInput>
    /**
     * In case the geladinho was found with the provided `where` argument, update it with this data.
     */
    update: XOR<geladinhoUpdateInput, geladinhoUncheckedUpdateInput>
  }

  /**
   * geladinho delete
   */
  export type geladinhoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the geladinho
     */
    select?: geladinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the geladinho
     */
    omit?: geladinhoOmit<ExtArgs> | null
    /**
     * Filter which geladinho to delete.
     */
    where: geladinhoWhereUniqueInput
  }

  /**
   * geladinho deleteMany
   */
  export type geladinhoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which geladinhos to delete
     */
    where?: geladinhoWhereInput
    /**
     * Limit how many geladinhos to delete.
     */
    limit?: number
  }

  /**
   * geladinho without action
   */
  export type geladinhoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the geladinho
     */
    select?: geladinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the geladinho
     */
    omit?: geladinhoOmit<ExtArgs> | null
  }


  /**
   * Model produto
   */

  export type AggregateProduto = {
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  export type ProdutoAvgAggregateOutputType = {
    id: number | null
    quantidade: number | null
    valor: Decimal | null
  }

  export type ProdutoSumAggregateOutputType = {
    id: number | null
    quantidade: number | null
    valor: Decimal | null
  }

  export type ProdutoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    quantidade: number | null
    valor: Decimal | null
  }

  export type ProdutoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    quantidade: number | null
    valor: Decimal | null
  }

  export type ProdutoCountAggregateOutputType = {
    id: number
    nome: number
    quantidade: number
    valor: number
    _all: number
  }


  export type ProdutoAvgAggregateInputType = {
    id?: true
    quantidade?: true
    valor?: true
  }

  export type ProdutoSumAggregateInputType = {
    id?: true
    quantidade?: true
    valor?: true
  }

  export type ProdutoMinAggregateInputType = {
    id?: true
    nome?: true
    quantidade?: true
    valor?: true
  }

  export type ProdutoMaxAggregateInputType = {
    id?: true
    nome?: true
    quantidade?: true
    valor?: true
  }

  export type ProdutoCountAggregateInputType = {
    id?: true
    nome?: true
    quantidade?: true
    valor?: true
    _all?: true
  }

  export type ProdutoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produto to aggregate.
     */
    where?: produtoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produtos to fetch.
     */
    orderBy?: produtoOrderByWithRelationInput | produtoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: produtoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned produtos
    **/
    _count?: true | ProdutoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdutoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdutoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdutoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdutoMaxAggregateInputType
  }

  export type GetProdutoAggregateType<T extends ProdutoAggregateArgs> = {
        [P in keyof T & keyof AggregateProduto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduto[P]>
      : GetScalarType<T[P], AggregateProduto[P]>
  }




  export type produtoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produtoWhereInput
    orderBy?: produtoOrderByWithAggregationInput | produtoOrderByWithAggregationInput[]
    by: ProdutoScalarFieldEnum[] | ProdutoScalarFieldEnum
    having?: produtoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdutoCountAggregateInputType | true
    _avg?: ProdutoAvgAggregateInputType
    _sum?: ProdutoSumAggregateInputType
    _min?: ProdutoMinAggregateInputType
    _max?: ProdutoMaxAggregateInputType
  }

  export type ProdutoGroupByOutputType = {
    id: number
    nome: string
    quantidade: number
    valor: Decimal
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  type GetProdutoGroupByPayload<T extends produtoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdutoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdutoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
            : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
        }
      >
    >


  export type produtoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    quantidade?: boolean
    valor?: boolean
  }, ExtArgs["result"]["produto"]>



  export type produtoSelectScalar = {
    id?: boolean
    nome?: boolean
    quantidade?: boolean
    valor?: boolean
  }

  export type produtoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "quantidade" | "valor", ExtArgs["result"]["produto"]>

  export type $produtoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "produto"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      quantidade: number
      valor: Prisma.Decimal
    }, ExtArgs["result"]["produto"]>
    composites: {}
  }

  type produtoGetPayload<S extends boolean | null | undefined | produtoDefaultArgs> = $Result.GetResult<Prisma.$produtoPayload, S>

  type produtoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<produtoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdutoCountAggregateInputType | true
    }

  export interface produtoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['produto'], meta: { name: 'produto' } }
    /**
     * Find zero or one Produto that matches the filter.
     * @param {produtoFindUniqueArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends produtoFindUniqueArgs>(args: SelectSubset<T, produtoFindUniqueArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {produtoFindUniqueOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends produtoFindUniqueOrThrowArgs>(args: SelectSubset<T, produtoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtoFindFirstArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends produtoFindFirstArgs>(args?: SelectSubset<T, produtoFindFirstArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtoFindFirstOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends produtoFindFirstOrThrowArgs>(args?: SelectSubset<T, produtoFindFirstOrThrowArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produtos
     * const produtos = await prisma.produto.findMany()
     * 
     * // Get first 10 Produtos
     * const produtos = await prisma.produto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produtoWithIdOnly = await prisma.produto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends produtoFindManyArgs>(args?: SelectSubset<T, produtoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produto.
     * @param {produtoCreateArgs} args - Arguments to create a Produto.
     * @example
     * // Create one Produto
     * const Produto = await prisma.produto.create({
     *   data: {
     *     // ... data to create a Produto
     *   }
     * })
     * 
     */
    create<T extends produtoCreateArgs>(args: SelectSubset<T, produtoCreateArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produtos.
     * @param {produtoCreateManyArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends produtoCreateManyArgs>(args?: SelectSubset<T, produtoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Produto.
     * @param {produtoDeleteArgs} args - Arguments to delete one Produto.
     * @example
     * // Delete one Produto
     * const Produto = await prisma.produto.delete({
     *   where: {
     *     // ... filter to delete one Produto
     *   }
     * })
     * 
     */
    delete<T extends produtoDeleteArgs>(args: SelectSubset<T, produtoDeleteArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produto.
     * @param {produtoUpdateArgs} args - Arguments to update one Produto.
     * @example
     * // Update one Produto
     * const produto = await prisma.produto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends produtoUpdateArgs>(args: SelectSubset<T, produtoUpdateArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produtos.
     * @param {produtoDeleteManyArgs} args - Arguments to filter Produtos to delete.
     * @example
     * // Delete a few Produtos
     * const { count } = await prisma.produto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends produtoDeleteManyArgs>(args?: SelectSubset<T, produtoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends produtoUpdateManyArgs>(args: SelectSubset<T, produtoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Produto.
     * @param {produtoUpsertArgs} args - Arguments to update or create a Produto.
     * @example
     * // Update or create a Produto
     * const produto = await prisma.produto.upsert({
     *   create: {
     *     // ... data to create a Produto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produto we want to update
     *   }
     * })
     */
    upsert<T extends produtoUpsertArgs>(args: SelectSubset<T, produtoUpsertArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtoCountArgs} args - Arguments to filter Produtos to count.
     * @example
     * // Count the number of Produtos
     * const count = await prisma.produto.count({
     *   where: {
     *     // ... the filter for the Produtos we want to count
     *   }
     * })
    **/
    count<T extends produtoCountArgs>(
      args?: Subset<T, produtoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdutoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProdutoAggregateArgs>(args: Subset<T, ProdutoAggregateArgs>): Prisma.PrismaPromise<GetProdutoAggregateType<T>>

    /**
     * Group by Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtoGroupByArgs} args - Group by arguments.
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
      T extends produtoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: produtoGroupByArgs['orderBy'] }
        : { orderBy?: produtoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, produtoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the produto model
   */
  readonly fields: produtoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for produto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__produtoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the produto model
   */
  interface produtoFieldRefs {
    readonly id: FieldRef<"produto", 'Int'>
    readonly nome: FieldRef<"produto", 'String'>
    readonly quantidade: FieldRef<"produto", 'Int'>
    readonly valor: FieldRef<"produto", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * produto findUnique
   */
  export type produtoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Filter, which produto to fetch.
     */
    where: produtoWhereUniqueInput
  }

  /**
   * produto findUniqueOrThrow
   */
  export type produtoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Filter, which produto to fetch.
     */
    where: produtoWhereUniqueInput
  }

  /**
   * produto findFirst
   */
  export type produtoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Filter, which produto to fetch.
     */
    where?: produtoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produtos to fetch.
     */
    orderBy?: produtoOrderByWithRelationInput | produtoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produtos.
     */
    cursor?: produtoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * produto findFirstOrThrow
   */
  export type produtoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Filter, which produto to fetch.
     */
    where?: produtoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produtos to fetch.
     */
    orderBy?: produtoOrderByWithRelationInput | produtoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produtos.
     */
    cursor?: produtoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * produto findMany
   */
  export type produtoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Filter, which produtos to fetch.
     */
    where?: produtoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produtos to fetch.
     */
    orderBy?: produtoOrderByWithRelationInput | produtoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing produtos.
     */
    cursor?: produtoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produtos.
     */
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * produto create
   */
  export type produtoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * The data needed to create a produto.
     */
    data: XOR<produtoCreateInput, produtoUncheckedCreateInput>
  }

  /**
   * produto createMany
   */
  export type produtoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many produtos.
     */
    data: produtoCreateManyInput | produtoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * produto update
   */
  export type produtoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * The data needed to update a produto.
     */
    data: XOR<produtoUpdateInput, produtoUncheckedUpdateInput>
    /**
     * Choose, which produto to update.
     */
    where: produtoWhereUniqueInput
  }

  /**
   * produto updateMany
   */
  export type produtoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update produtos.
     */
    data: XOR<produtoUpdateManyMutationInput, produtoUncheckedUpdateManyInput>
    /**
     * Filter which produtos to update
     */
    where?: produtoWhereInput
    /**
     * Limit how many produtos to update.
     */
    limit?: number
  }

  /**
   * produto upsert
   */
  export type produtoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * The filter to search for the produto to update in case it exists.
     */
    where: produtoWhereUniqueInput
    /**
     * In case the produto found by the `where` argument doesn't exist, create a new produto with this data.
     */
    create: XOR<produtoCreateInput, produtoUncheckedCreateInput>
    /**
     * In case the produto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<produtoUpdateInput, produtoUncheckedUpdateInput>
  }

  /**
   * produto delete
   */
  export type produtoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Filter which produto to delete.
     */
    where: produtoWhereUniqueInput
  }

  /**
   * produto deleteMany
   */
  export type produtoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produtos to delete
     */
    where?: produtoWhereInput
    /**
     * Limit how many produtos to delete.
     */
    limit?: number
  }

  /**
   * produto without action
   */
  export type produtoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CadastroScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    sobrenome: 'sobrenome',
    email: 'email',
    senha: 'senha',
    criadoEm: 'criadoEm'
  };

  export type CadastroScalarFieldEnum = (typeof CadastroScalarFieldEnum)[keyof typeof CadastroScalarFieldEnum]


  export const GeladinhoScalarFieldEnum: {
    id: 'id',
    sabor: 'sabor',
    valor: 'valor',
    criadoEm: 'criadoEm'
  };

  export type GeladinhoScalarFieldEnum = (typeof GeladinhoScalarFieldEnum)[keyof typeof GeladinhoScalarFieldEnum]


  export const ProdutoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    quantidade: 'quantidade',
    valor: 'valor'
  };

  export type ProdutoScalarFieldEnum = (typeof ProdutoScalarFieldEnum)[keyof typeof ProdutoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const cadastroOrderByRelevanceFieldEnum: {
    id: 'id',
    nome: 'nome',
    sobrenome: 'sobrenome',
    email: 'email',
    senha: 'senha'
  };

  export type cadastroOrderByRelevanceFieldEnum = (typeof cadastroOrderByRelevanceFieldEnum)[keyof typeof cadastroOrderByRelevanceFieldEnum]


  export const geladinhoOrderByRelevanceFieldEnum: {
    sabor: 'sabor'
  };

  export type geladinhoOrderByRelevanceFieldEnum = (typeof geladinhoOrderByRelevanceFieldEnum)[keyof typeof geladinhoOrderByRelevanceFieldEnum]


  export const produtoOrderByRelevanceFieldEnum: {
    nome: 'nome'
  };

  export type produtoOrderByRelevanceFieldEnum = (typeof produtoOrderByRelevanceFieldEnum)[keyof typeof produtoOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type cadastroWhereInput = {
    AND?: cadastroWhereInput | cadastroWhereInput[]
    OR?: cadastroWhereInput[]
    NOT?: cadastroWhereInput | cadastroWhereInput[]
    id?: StringFilter<"cadastro"> | string
    nome?: StringFilter<"cadastro"> | string
    sobrenome?: StringFilter<"cadastro"> | string
    email?: StringFilter<"cadastro"> | string
    senha?: StringFilter<"cadastro"> | string
    criadoEm?: DateTimeFilter<"cadastro"> | Date | string
  }

  export type cadastroOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrder
    _relevance?: cadastroOrderByRelevanceInput
  }

  export type cadastroWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: cadastroWhereInput | cadastroWhereInput[]
    OR?: cadastroWhereInput[]
    NOT?: cadastroWhereInput | cadastroWhereInput[]
    nome?: StringFilter<"cadastro"> | string
    sobrenome?: StringFilter<"cadastro"> | string
    email?: StringFilter<"cadastro"> | string
    senha?: StringFilter<"cadastro"> | string
    criadoEm?: DateTimeFilter<"cadastro"> | Date | string
  }, "id">

  export type cadastroOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrder
    _count?: cadastroCountOrderByAggregateInput
    _max?: cadastroMaxOrderByAggregateInput
    _min?: cadastroMinOrderByAggregateInput
  }

  export type cadastroScalarWhereWithAggregatesInput = {
    AND?: cadastroScalarWhereWithAggregatesInput | cadastroScalarWhereWithAggregatesInput[]
    OR?: cadastroScalarWhereWithAggregatesInput[]
    NOT?: cadastroScalarWhereWithAggregatesInput | cadastroScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"cadastro"> | string
    nome?: StringWithAggregatesFilter<"cadastro"> | string
    sobrenome?: StringWithAggregatesFilter<"cadastro"> | string
    email?: StringWithAggregatesFilter<"cadastro"> | string
    senha?: StringWithAggregatesFilter<"cadastro"> | string
    criadoEm?: DateTimeWithAggregatesFilter<"cadastro"> | Date | string
  }

  export type geladinhoWhereInput = {
    AND?: geladinhoWhereInput | geladinhoWhereInput[]
    OR?: geladinhoWhereInput[]
    NOT?: geladinhoWhereInput | geladinhoWhereInput[]
    id?: IntFilter<"geladinho"> | number
    sabor?: StringFilter<"geladinho"> | string
    valor?: DecimalFilter<"geladinho"> | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFilter<"geladinho"> | Date | string
  }

  export type geladinhoOrderByWithRelationInput = {
    id?: SortOrder
    sabor?: SortOrder
    valor?: SortOrder
    criadoEm?: SortOrder
    _relevance?: geladinhoOrderByRelevanceInput
  }

  export type geladinhoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: geladinhoWhereInput | geladinhoWhereInput[]
    OR?: geladinhoWhereInput[]
    NOT?: geladinhoWhereInput | geladinhoWhereInput[]
    sabor?: StringFilter<"geladinho"> | string
    valor?: DecimalFilter<"geladinho"> | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFilter<"geladinho"> | Date | string
  }, "id">

  export type geladinhoOrderByWithAggregationInput = {
    id?: SortOrder
    sabor?: SortOrder
    valor?: SortOrder
    criadoEm?: SortOrder
    _count?: geladinhoCountOrderByAggregateInput
    _avg?: geladinhoAvgOrderByAggregateInput
    _max?: geladinhoMaxOrderByAggregateInput
    _min?: geladinhoMinOrderByAggregateInput
    _sum?: geladinhoSumOrderByAggregateInput
  }

  export type geladinhoScalarWhereWithAggregatesInput = {
    AND?: geladinhoScalarWhereWithAggregatesInput | geladinhoScalarWhereWithAggregatesInput[]
    OR?: geladinhoScalarWhereWithAggregatesInput[]
    NOT?: geladinhoScalarWhereWithAggregatesInput | geladinhoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"geladinho"> | number
    sabor?: StringWithAggregatesFilter<"geladinho"> | string
    valor?: DecimalWithAggregatesFilter<"geladinho"> | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeWithAggregatesFilter<"geladinho"> | Date | string
  }

  export type produtoWhereInput = {
    AND?: produtoWhereInput | produtoWhereInput[]
    OR?: produtoWhereInput[]
    NOT?: produtoWhereInput | produtoWhereInput[]
    id?: IntFilter<"produto"> | number
    nome?: StringFilter<"produto"> | string
    quantidade?: IntFilter<"produto"> | number
    valor?: DecimalFilter<"produto"> | Decimal | DecimalJsLike | number | string
  }

  export type produtoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    quantidade?: SortOrder
    valor?: SortOrder
    _relevance?: produtoOrderByRelevanceInput
  }

  export type produtoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: produtoWhereInput | produtoWhereInput[]
    OR?: produtoWhereInput[]
    NOT?: produtoWhereInput | produtoWhereInput[]
    nome?: StringFilter<"produto"> | string
    quantidade?: IntFilter<"produto"> | number
    valor?: DecimalFilter<"produto"> | Decimal | DecimalJsLike | number | string
  }, "id">

  export type produtoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    quantidade?: SortOrder
    valor?: SortOrder
    _count?: produtoCountOrderByAggregateInput
    _avg?: produtoAvgOrderByAggregateInput
    _max?: produtoMaxOrderByAggregateInput
    _min?: produtoMinOrderByAggregateInput
    _sum?: produtoSumOrderByAggregateInput
  }

  export type produtoScalarWhereWithAggregatesInput = {
    AND?: produtoScalarWhereWithAggregatesInput | produtoScalarWhereWithAggregatesInput[]
    OR?: produtoScalarWhereWithAggregatesInput[]
    NOT?: produtoScalarWhereWithAggregatesInput | produtoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"produto"> | number
    nome?: StringWithAggregatesFilter<"produto"> | string
    quantidade?: IntWithAggregatesFilter<"produto"> | number
    valor?: DecimalWithAggregatesFilter<"produto"> | Decimal | DecimalJsLike | number | string
  }

  export type cadastroCreateInput = {
    id?: string
    nome: string
    sobrenome: string
    email: string
    senha: string
    criadoEm?: Date | string
  }

  export type cadastroUncheckedCreateInput = {
    id?: string
    nome: string
    sobrenome: string
    email: string
    senha: string
    criadoEm?: Date | string
  }

  export type cadastroUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cadastroUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cadastroCreateManyInput = {
    id?: string
    nome: string
    sobrenome: string
    email: string
    senha: string
    criadoEm?: Date | string
  }

  export type cadastroUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cadastroUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type geladinhoCreateInput = {
    sabor: string
    valor: Decimal | DecimalJsLike | number | string
    criadoEm?: Date | string
  }

  export type geladinhoUncheckedCreateInput = {
    id?: number
    sabor: string
    valor: Decimal | DecimalJsLike | number | string
    criadoEm?: Date | string
  }

  export type geladinhoUpdateInput = {
    sabor?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type geladinhoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sabor?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type geladinhoCreateManyInput = {
    id?: number
    sabor: string
    valor: Decimal | DecimalJsLike | number | string
    criadoEm?: Date | string
  }

  export type geladinhoUpdateManyMutationInput = {
    sabor?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type geladinhoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sabor?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type produtoCreateInput = {
    nome: string
    quantidade: number
    valor: Decimal | DecimalJsLike | number | string
  }

  export type produtoUncheckedCreateInput = {
    id?: number
    nome: string
    quantidade: number
    valor: Decimal | DecimalJsLike | number | string
  }

  export type produtoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type produtoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type produtoCreateManyInput = {
    id?: number
    nome: string
    quantidade: number
    valor: Decimal | DecimalJsLike | number | string
  }

  export type produtoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type produtoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type cadastroOrderByRelevanceInput = {
    fields: cadastroOrderByRelevanceFieldEnum | cadastroOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type cadastroCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrder
  }

  export type cadastroMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrder
  }

  export type cadastroMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type geladinhoOrderByRelevanceInput = {
    fields: geladinhoOrderByRelevanceFieldEnum | geladinhoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type geladinhoCountOrderByAggregateInput = {
    id?: SortOrder
    sabor?: SortOrder
    valor?: SortOrder
    criadoEm?: SortOrder
  }

  export type geladinhoAvgOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
  }

  export type geladinhoMaxOrderByAggregateInput = {
    id?: SortOrder
    sabor?: SortOrder
    valor?: SortOrder
    criadoEm?: SortOrder
  }

  export type geladinhoMinOrderByAggregateInput = {
    id?: SortOrder
    sabor?: SortOrder
    valor?: SortOrder
    criadoEm?: SortOrder
  }

  export type geladinhoSumOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type produtoOrderByRelevanceInput = {
    fields: produtoOrderByRelevanceFieldEnum | produtoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type produtoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    quantidade?: SortOrder
    valor?: SortOrder
  }

  export type produtoAvgOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    valor?: SortOrder
  }

  export type produtoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    quantidade?: SortOrder
    valor?: SortOrder
  }

  export type produtoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    quantidade?: SortOrder
    valor?: SortOrder
  }

  export type produtoSumOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    valor?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
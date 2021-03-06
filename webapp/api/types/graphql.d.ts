import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: string;
  DateTime: string;
  JSON: Record<string, unknown>;
  JSONObject: Record<string, unknown>;
  Time: string;
};

export type CreateFlatInput = {
  zipCode?: Maybe<Scalars['String']>;
  squareMeters?: Maybe<Scalars['Int']>;
  rawDocUrl?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type CreateUserInput = {
  id: Scalars['String'];
  confirmedEmail: Scalars['Boolean'];
  subscribedToNews: Scalars['Boolean'];
};



export type Flat = {
  __typename?: 'Flat';
  id: Scalars['String'];
  zipCode?: Maybe<Scalars['String']>;
  squareMeters?: Maybe<Scalars['Int']>;
  rawDocUrl?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  User?: Maybe<User>;
  userId?: Maybe<Scalars['String']>;
};



export type Mutation = {
  __typename?: 'Mutation';
  createFlat: Flat;
  createUser: User;
  deleteFlat: Flat;
  deleteUser: User;
  updateFlat: Flat;
  updateUser: User;
};


export type MutationCreateFlatArgs = {
  input: CreateFlatInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteFlatArgs = {
  id: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};


export type MutationUpdateFlatArgs = {
  id: Scalars['String'];
  input: UpdateFlatInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['String'];
  input: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  flat?: Maybe<Flat>;
  flats: Array<Flat>;
  redwood?: Maybe<Redwood>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryFlatArgs = {
  id: Scalars['String'];
};


export type QueryUserArgs = {
  id: Scalars['String'];
};

export type Redwood = {
  __typename?: 'Redwood';
  version?: Maybe<Scalars['String']>;
  currentUser?: Maybe<Scalars['JSON']>;
  prismaVersion?: Maybe<Scalars['String']>;
};


export type UpdateFlatInput = {
  zipCode?: Maybe<Scalars['String']>;
  squareMeters?: Maybe<Scalars['Int']>;
  rawDocUrl?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type UpdateUserInput = {
  confirmedEmail?: Maybe<Scalars['Boolean']>;
  subscribedToNews?: Maybe<Scalars['Boolean']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  confirmedEmail: Scalars['Boolean'];
  subscribedToNews: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  flats: Array<Maybe<Flat>>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  CreateFlatInput: CreateFlatInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  CreateUserInput: CreateUserInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Flat: ResolverTypeWrapper<Flat>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Redwood: ResolverTypeWrapper<Redwood>;
  Time: ResolverTypeWrapper<Scalars['Time']>;
  UpdateFlatInput: UpdateFlatInput;
  UpdateUserInput: UpdateUserInput;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  CreateFlatInput: CreateFlatInput;
  String: Scalars['String'];
  Int: Scalars['Int'];
  CreateUserInput: CreateUserInput;
  Boolean: Scalars['Boolean'];
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  Flat: Flat;
  JSON: Scalars['JSON'];
  JSONObject: Scalars['JSONObject'];
  Mutation: {};
  Query: {};
  Redwood: Redwood;
  Time: Scalars['Time'];
  UpdateFlatInput: UpdateFlatInput;
  UpdateUserInput: UpdateUserInput;
  User: User;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type FlatResolvers<ContextType = any, ParentType extends ResolversParentTypes['Flat'] = ResolversParentTypes['Flat']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zipCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  squareMeters?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rawDocUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  User?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface JsonObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createFlat?: Resolver<ResolversTypes['Flat'], ParentType, ContextType, RequireFields<MutationCreateFlatArgs, 'input'>>;
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  deleteFlat?: Resolver<ResolversTypes['Flat'], ParentType, ContextType, RequireFields<MutationDeleteFlatArgs, 'id'>>;
  deleteUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
  updateFlat?: Resolver<ResolversTypes['Flat'], ParentType, ContextType, RequireFields<MutationUpdateFlatArgs, 'id' | 'input'>>;
  updateUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'id' | 'input'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  flat?: Resolver<Maybe<ResolversTypes['Flat']>, ParentType, ContextType, RequireFields<QueryFlatArgs, 'id'>>;
  flats?: Resolver<Array<ResolversTypes['Flat']>, ParentType, ContextType>;
  redwood?: Resolver<Maybe<ResolversTypes['Redwood']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
};

export type RedwoodResolvers<ContextType = any, ParentType extends ResolversParentTypes['Redwood'] = ResolversParentTypes['Redwood']> = {
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currentUser?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  prismaVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  confirmedEmail?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  subscribedToNews?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  flats?: Resolver<Array<Maybe<ResolversTypes['Flat']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Flat?: FlatResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  JSONObject?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Redwood?: RedwoodResolvers<ContextType>;
  Time?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
};


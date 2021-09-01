export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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

export type FindFlatByIdVariables = Exact<{
  id: Scalars['String'];
}>;


export type FindFlatById = { __typename?: 'Query', flat?: Maybe<{ __typename?: 'Flat', id: string, zipCode?: Maybe<string>, squareMeters?: Maybe<number>, rawDocUrl?: Maybe<string>, createdAt: string, userId?: Maybe<string> }> };

export type UpdateFlatMutationVariables = Exact<{
  id: Scalars['String'];
  input: UpdateFlatInput;
}>;


export type UpdateFlatMutation = { __typename?: 'Mutation', updateFlat: { __typename?: 'Flat', id: string, zipCode?: Maybe<string>, squareMeters?: Maybe<number>, rawDocUrl?: Maybe<string>, createdAt: string, userId?: Maybe<string> } };

export type DeleteFlatMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteFlatMutation = { __typename?: 'Mutation', deleteFlat: { __typename?: 'Flat', id: string } };

export type FlatsVariables = Exact<{ [key: string]: never; }>;


export type Flats = { __typename?: 'Query', flats: Array<{ __typename?: 'Flat', id: string, zipCode?: Maybe<string>, squareMeters?: Maybe<number>, rawDocUrl?: Maybe<string>, createdAt: string, userId?: Maybe<string> }> };

export type CreateFlatMutationVariables = Exact<{
  input: CreateFlatInput;
}>;


export type CreateFlatMutation = { __typename?: 'Mutation', createFlat: { __typename?: 'Flat', id: string } };

export type FlatsCardsQueryVariables = Exact<{ [key: string]: never; }>;


export type FlatsCardsQuery = { __typename?: 'Query', flatsCards: Array<{ __typename?: 'Flat', id: string, zipCode?: Maybe<string>, squareMeters?: Maybe<number>, rawDocUrl?: Maybe<string>, createdAt: string, userId?: Maybe<string> }> };

export type UpdateFlatMutationWithUrlVariables = Exact<{
  id: Scalars['String'];
  input: UpdateFlatInput;
}>;


export type UpdateFlatMutationWithUrl = { __typename?: 'Mutation', updateFlat: { __typename?: 'Flat', id: string, rawDocUrl?: Maybe<string> } };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['String'];
  input: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string, confirmedEmail: boolean, subscribedToNews: boolean, createdAt: string } };

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: string } };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: { __typename?: 'User', id: string } };

export type FindUserByIdVariables = Exact<{
  id: Scalars['String'];
}>;


export type FindUserById = { __typename?: 'Query', user?: Maybe<{ __typename?: 'User', id: string, confirmedEmail: boolean, subscribedToNews: boolean, createdAt: string }> };

export type UsersVariables = Exact<{ [key: string]: never; }>;


export type Users = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, confirmedEmail: boolean, subscribedToNews: boolean, createdAt: string }> };

export type FindUserWithFlatsByIdVariables = Exact<{
  id: Scalars['String'];
}>;


export type FindUserWithFlatsById = { __typename?: 'Query', user?: Maybe<{ __typename?: 'User', id: string, confirmedEmail: boolean, subscribedToNews: boolean, createdAt: string, flats: Array<Maybe<{ __typename?: 'Flat', id: string, rawDocUrl?: Maybe<string> }>> }> };

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
  zipCode: Scalars['String'];
  squareMeters?: Maybe<Scalars['Int']>;
};



export type Flat = {
  __typename?: 'Flat';
  id: Scalars['String'];
  zipCode: Scalars['String'];
  squareMeters?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
};



export type Mutation = {
  __typename?: 'Mutation';
  createFlat: Flat;
  updateFlat: Flat;
  deleteFlat: Flat;
};


export type MutationCreateFlatArgs = {
  input: CreateFlatInput;
};


export type MutationUpdateFlatArgs = {
  id: Scalars['String'];
  input: UpdateFlatInput;
};


export type MutationDeleteFlatArgs = {
  id: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  flat?: Maybe<Flat>;
  flats: Array<Flat>;
  redwood?: Maybe<Redwood>;
};


export type QueryFlatArgs = {
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
};

export type Find_Flat_By_IdVariables = Exact<{
  id: Scalars['String'];
}>;


export type Find_Flat_By_Id = (
  { __typename?: 'Query' }
  & { flat?: Maybe<(
    { __typename?: 'Flat' }
    & Pick<Flat, 'id' | 'zipCode' | 'squareMeters' | 'createdAt'>
  )> }
);

export type UpdateFlatMutationVariables = Exact<{
  id: Scalars['String'];
  input: UpdateFlatInput;
}>;


export type UpdateFlatMutation = (
  { __typename?: 'Mutation' }
  & { updateFlat: (
    { __typename?: 'Flat' }
    & Pick<Flat, 'id' | 'zipCode' | 'squareMeters' | 'createdAt'>
  ) }
);

export type DeleteFlatMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteFlatMutation = (
  { __typename?: 'Mutation' }
  & { deleteFlat: (
    { __typename?: 'Flat' }
    & Pick<Flat, 'id'>
  ) }
);

export type FlatsVariables = Exact<{ [key: string]: never; }>;


export type Flats = (
  { __typename?: 'Query' }
  & { flats: Array<(
    { __typename?: 'Flat' }
    & Pick<Flat, 'id' | 'zipCode' | 'squareMeters' | 'createdAt'>
  )> }
);

export type CreateFlatMutationVariables = Exact<{
  input: CreateFlatInput;
}>;


export type CreateFlatMutation = (
  { __typename?: 'Mutation' }
  & { createFlat: (
    { __typename?: 'Flat' }
    & Pick<Flat, 'id'>
  ) }
);

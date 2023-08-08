import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Cursor: { input: any; output: any; }
  Date: { input: any; output: any; }
  Datetime: { input: any; output: any; }
  Time: { input: any; output: any; }
  UUID: { input: any; output: any; }
};

/** All input for the create `SubscriptionDetail` mutation. */
export type CreateSubscriptionDetailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `SubscriptionDetail` to be created by this mutation. */
  subscriptionDetail: SubscriptionDetailInput;
};

/** The output of our create `SubscriptionDetail` mutation. */
export type CreateSubscriptionDetailPayload = {
  __typename?: 'CreateSubscriptionDetailPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Subscription` that is related to this `SubscriptionDetail`. */
  subscription?: Maybe<Subscription>;
  /** The `SubscriptionDetail` that was created by this mutation. */
  subscriptionDetail?: Maybe<SubscriptionDetail>;
  /** An edge for our `SubscriptionDetail`. May be used by Relay 1. */
  subscriptionDetailEdge?: Maybe<SubscriptionDetailsEdge>;
  /** Reads a single `User` that is related to this `SubscriptionDetail`. */
  user?: Maybe<User>;
};


/** The output of our create `SubscriptionDetail` mutation. */
export type CreateSubscriptionDetailPayloadSubscriptionDetailEdgeArgs = {
  orderBy?: InputMaybe<Array<SubscriptionDetailsOrderBy>>;
};

/** All input for the create `Subscription` mutation. */
export type CreateSubscriptionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Subscription` to be created by this mutation. */
  subscription: SubscriptionInput;
};

/** The output of our create `Subscription` mutation. */
export type CreateSubscriptionPayload = {
  __typename?: 'CreateSubscriptionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Subscription` that was created by this mutation. */
  subscription?: Maybe<Subscription>;
  /** An edge for our `Subscription`. May be used by Relay 1. */
  subscriptionEdge?: Maybe<SubscriptionsEdge>;
  /** Reads a single `User` that is related to this `Subscription`. */
  user?: Maybe<User>;
};


/** The output of our create `Subscription` mutation. */
export type CreateSubscriptionPayloadSubscriptionEdgeArgs = {
  orderBy?: InputMaybe<Array<SubscriptionsOrderBy>>;
};

/** All input for the create `User` mutation. */
export type CreateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `User` to be created by this mutation. */
  user: UserInput;
};

/** The output of our create `User` mutation. */
export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was created by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our create `User` mutation. */
export type CreateUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** All input for the `deleteSubscriptionByName` mutation. */
export type DeleteSubscriptionByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

/** All input for the `deleteSubscriptionDetail` mutation. */
export type DeleteSubscriptionDetailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `SubscriptionDetail` mutation. */
export type DeleteSubscriptionDetailPayload = {
  __typename?: 'DeleteSubscriptionDetailPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedSubscriptionDetailNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Subscription` that is related to this `SubscriptionDetail`. */
  subscription?: Maybe<Subscription>;
  /** The `SubscriptionDetail` that was deleted by this mutation. */
  subscriptionDetail?: Maybe<SubscriptionDetail>;
  /** An edge for our `SubscriptionDetail`. May be used by Relay 1. */
  subscriptionDetailEdge?: Maybe<SubscriptionDetailsEdge>;
  /** Reads a single `User` that is related to this `SubscriptionDetail`. */
  user?: Maybe<User>;
};


/** The output of our delete `SubscriptionDetail` mutation. */
export type DeleteSubscriptionDetailPayloadSubscriptionDetailEdgeArgs = {
  orderBy?: InputMaybe<Array<SubscriptionDetailsOrderBy>>;
};

/** All input for the `deleteSubscription` mutation. */
export type DeleteSubscriptionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `Subscription` mutation. */
export type DeleteSubscriptionPayload = {
  __typename?: 'DeleteSubscriptionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedSubscriptionNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Subscription` that was deleted by this mutation. */
  subscription?: Maybe<Subscription>;
  /** An edge for our `Subscription`. May be used by Relay 1. */
  subscriptionEdge?: Maybe<SubscriptionsEdge>;
  /** Reads a single `User` that is related to this `Subscription`. */
  user?: Maybe<User>;
};


/** The output of our delete `Subscription` mutation. */
export type DeleteSubscriptionPayloadSubscriptionEdgeArgs = {
  orderBy?: InputMaybe<Array<SubscriptionsOrderBy>>;
};

/** All input for the `deleteUserByEmail` mutation. */
export type DeleteUserByEmailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
};

/** All input for the `deleteUser` mutation. */
export type DeleteUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `User` mutation. */
export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedUserNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was deleted by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our delete `User` mutation. */
export type DeleteUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginPayload = {
  __typename?: 'LoginPayload';
  token?: Maybe<Scalars['String']['output']>;
  user: User;
};

export type LogoutPayload = {
  __typename?: 'LogoutPayload';
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Subscription`. */
  createSubscription?: Maybe<CreateSubscriptionPayload>;
  /** Creates a single `SubscriptionDetail`. */
  createSubscriptionDetail?: Maybe<CreateSubscriptionDetailPayload>;
  /** Creates a single `User`. */
  createUser?: Maybe<CreateUserPayload>;
  /** Deletes a single `Subscription` using a unique key. */
  deleteSubscription?: Maybe<DeleteSubscriptionPayload>;
  /** Deletes a single `Subscription` using a unique key. */
  deleteSubscriptionByName?: Maybe<DeleteSubscriptionPayload>;
  /** Deletes a single `SubscriptionDetail` using a unique key. */
  deleteSubscriptionDetail?: Maybe<DeleteSubscriptionDetailPayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUser?: Maybe<DeleteUserPayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUserByEmail?: Maybe<DeleteUserPayload>;
  /** Use this mutation to log in to your account; this login uses sessions so you do not need to take further action. */
  login?: Maybe<LoginPayload>;
  /** Use this mutation to logout from your account. Don't forget to clear the client state! */
  logout?: Maybe<LogoutPayload>;
  /** Use this mutation to create an account on our system. This may only be used if you are logged out. */
  register?: Maybe<RegisterPayload>;
  /** After triggering forgotPassword, you'll be sent a reset token. Combine this with your user ID and a new password to reset your password. */
  resetPassword?: Maybe<ResetPasswordPayload>;
  /** Updates a single `Subscription` using a unique key and a patch. */
  updateSubscription?: Maybe<UpdateSubscriptionPayload>;
  /** Updates a single `Subscription` using a unique key and a patch. */
  updateSubscriptionByName?: Maybe<UpdateSubscriptionPayload>;
  /** Updates a single `SubscriptionDetail` using a unique key and a patch. */
  updateSubscriptionDetail?: Maybe<UpdateSubscriptionDetailPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUserByEmail?: Maybe<UpdateUserPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateSubscriptionArgs = {
  input: CreateSubscriptionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateSubscriptionDetailArgs = {
  input: CreateSubscriptionDetailInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSubscriptionArgs = {
  input: DeleteSubscriptionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSubscriptionByNameArgs = {
  input: DeleteSubscriptionByNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSubscriptionDetailArgs = {
  input: DeleteSubscriptionDetailInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByEmailArgs = {
  input: DeleteUserByEmailInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationLoginArgs = {
  input: LoginInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationRegisterArgs = {
  input: RegisterInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSubscriptionArgs = {
  input: UpdateSubscriptionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSubscriptionByNameArgs = {
  input: UpdateSubscriptionByNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSubscriptionDetailArgs = {
  input: UpdateSubscriptionDetailInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByEmailArgs = {
  input: UpdateUserByEmailInput;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']['output']>;
};

/** The root query type which gives access points into the data universe. */
export type Query = {
  __typename?: 'Query';
  currentSessionId?: Maybe<Scalars['UUID']['output']>;
  currentUserId?: Maybe<Scalars['UUID']['output']>;
  currentUserIsAdmin?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  subscription?: Maybe<Subscription>;
  subscriptionByName?: Maybe<Subscription>;
  subscriptionDetail?: Maybe<SubscriptionDetail>;
  /** Reads and enables pagination through a set of `SubscriptionDetail`. */
  subscriptionDetails?: Maybe<SubscriptionDetailsConnection>;
  /** Reads and enables pagination through a set of `Subscription`. */
  subscriptions?: Maybe<SubscriptionsConnection>;
  user?: Maybe<User>;
  userByEmail?: Maybe<User>;
  /** Reads and enables pagination through a set of `User`. */
  users?: Maybe<UsersConnection>;
};


/** The root query type which gives access points into the data universe. */
export type QuerySubscriptionArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySubscriptionByNameArgs = {
  name: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySubscriptionDetailArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySubscriptionDetailsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<SubscriptionDetailCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SubscriptionDetailsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QuerySubscriptionsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<SubscriptionCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SubscriptionsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryUserArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserByEmailArgs = {
  email: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<UserCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

export type RegisterInput = {
  email: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

export type RegisterPayload = {
  __typename?: 'RegisterPayload';
  token: Scalars['String']['output'];
  user: User;
};

/** All input for the `resetPassword` mutation. */
export type ResetPasswordInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  newPassword: Scalars['String']['input'];
  resetToken: Scalars['String']['input'];
  userId: Scalars['UUID']['input'];
};

/** The output of our `resetPassword` mutation. */
export type ResetPasswordPayload = {
  __typename?: 'ResetPasswordPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  createdAt: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Reads and enables pagination through a set of `SubscriptionDetail`. */
  subscriptionDetails: SubscriptionDetailsConnection;
  updatedAt: Scalars['Datetime']['output'];
  /** Reads a single `User` that is related to this `Subscription`. */
  user?: Maybe<User>;
  userId?: Maybe<Scalars['UUID']['output']>;
  /** Reads and enables pagination through a set of `User`. */
  usersBySubscriptionDetailSubscriptionIdAndUserId: SubscriptionUsersBySubscriptionDetailSubscriptionIdAndUserIdManyToManyConnection;
};


export type SubscriptionSubscriptionDetailsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<SubscriptionDetailCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SubscriptionDetailsOrderBy>>;
};


export type SubscriptionUsersBySubscriptionDetailSubscriptionIdAndUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<UserCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/**
 * A condition to be used against `Subscription` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type SubscriptionCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type SubscriptionDetail = {
  __typename?: 'SubscriptionDetail';
  createdAt: Scalars['Datetime']['output'];
  date: Scalars['Date']['output'];
  endTime: Scalars['Time']['output'];
  id: Scalars['UUID']['output'];
  startTime: Scalars['Time']['output'];
  /** Reads a single `Subscription` that is related to this `SubscriptionDetail`. */
  subscription?: Maybe<Subscription>;
  subscriptionId: Scalars['UUID']['output'];
  updatedAt: Scalars['Datetime']['output'];
  /** Reads a single `User` that is related to this `SubscriptionDetail`. */
  user?: Maybe<User>;
  userId?: Maybe<Scalars['UUID']['output']>;
};

/**
 * A condition to be used against `SubscriptionDetail` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type SubscriptionDetailCondition = {
  /** Checks for equality with the object’s `date` field. */
  date?: InputMaybe<Scalars['Date']['input']>;
  /** Checks for equality with the object’s `endTime` field. */
  endTime?: InputMaybe<Scalars['Time']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `startTime` field. */
  startTime?: InputMaybe<Scalars['Time']['input']>;
  /** Checks for equality with the object’s `subscriptionId` field. */
  subscriptionId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

/** An input for mutations affecting `SubscriptionDetail` */
export type SubscriptionDetailInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  date: Scalars['Date']['input'];
  endTime: Scalars['Time']['input'];
  id?: InputMaybe<Scalars['UUID']['input']>;
  startTime: Scalars['Time']['input'];
  subscriptionId?: InputMaybe<Scalars['UUID']['input']>;
  subscriptionToSubscriptionId?: InputMaybe<SubscriptionDetailsSubscriptionIdFkeyInput>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<SubscriptionDetailsUserIdFkeyInput>;
};

/** The fields on `subscriptionDetail` to look up the row to update. */
export type SubscriptionDetailOnSubscriptionDetailForSubscriptionDetailsSubscriptionIdFkeyUsingSubscriptionDetailsPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `subscriptionDetail` being updated. */
  patch: UpdateSubscriptionDetailOnSubscriptionDetailForSubscriptionDetailsSubscriptionIdFkeyPatch;
};

/** The fields on `subscriptionDetail` to look up the row to update. */
export type SubscriptionDetailOnSubscriptionDetailForSubscriptionDetailsUserIdFkeyUsingSubscriptionDetailsPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `subscriptionDetail` being updated. */
  patch: UpdateSubscriptionDetailOnSubscriptionDetailForSubscriptionDetailsUserIdFkeyPatch;
};

/** Represents an update to a `SubscriptionDetail`. Fields that are set will be updated. */
export type SubscriptionDetailPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  endTime?: InputMaybe<Scalars['Time']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  startTime?: InputMaybe<Scalars['Time']['input']>;
  subscriptionId?: InputMaybe<Scalars['UUID']['input']>;
  subscriptionToSubscriptionId?: InputMaybe<SubscriptionDetailsSubscriptionIdFkeyInput>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<SubscriptionDetailsUserIdFkeyInput>;
};

/** The fields on `subscriptionDetail` to look up the row to connect. */
export type SubscriptionDetailSubscriptionDetailsPkeyConnect = {
  id: Scalars['UUID']['input'];
};

/** The fields on `subscriptionDetail` to look up the row to delete. */
export type SubscriptionDetailSubscriptionDetailsPkeyDelete = {
  id: Scalars['UUID']['input'];
};

/** A connection to a list of `SubscriptionDetail` values. */
export type SubscriptionDetailsConnection = {
  __typename?: 'SubscriptionDetailsConnection';
  /** A list of edges which contains the `SubscriptionDetail` and cursor to aid in pagination. */
  edges: Array<SubscriptionDetailsEdge>;
  /** A list of `SubscriptionDetail` objects. */
  nodes: Array<SubscriptionDetail>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `SubscriptionDetail` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `SubscriptionDetail` edge in the connection. */
export type SubscriptionDetailsEdge = {
  __typename?: 'SubscriptionDetailsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `SubscriptionDetail` at the end of the edge. */
  node: SubscriptionDetail;
};

/** Methods to use when ordering `SubscriptionDetail`. */
export enum SubscriptionDetailsOrderBy {
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  EndTimeAsc = 'END_TIME_ASC',
  EndTimeDesc = 'END_TIME_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  StartTimeAsc = 'START_TIME_ASC',
  StartTimeDesc = 'START_TIME_DESC',
  SubscriptionIdAsc = 'SUBSCRIPTION_ID_ASC',
  SubscriptionIdDesc = 'SUBSCRIPTION_ID_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

/** Input for the nested mutation of `subscription` in the `SubscriptionDetailInput` mutation. */
export type SubscriptionDetailsSubscriptionIdFkeyInput = {
  /** The primary key(s) for `subscription` for the far side of the relationship. */
  connectById?: InputMaybe<SubscriptionSubscriptionsPkeyConnect>;
  /** The primary key(s) for `subscription` for the far side of the relationship. */
  connectByName?: InputMaybe<SubscriptionSubscriptionsNameKeyConnect>;
  /** A `SubscriptionInput` object that will be created and connected to this object. */
  create?: InputMaybe<SubscriptionDetailsSubscriptionIdFkeySubscriptionsCreateInput>;
  /** The primary key(s) for `subscription` for the far side of the relationship. */
  deleteById?: InputMaybe<SubscriptionSubscriptionsPkeyDelete>;
  /** The primary key(s) for `subscription` for the far side of the relationship. */
  deleteByName?: InputMaybe<SubscriptionSubscriptionsNameKeyDelete>;
  /** The primary key(s) and patch data for `subscription` for the far side of the relationship. */
  updateById?: InputMaybe<SubscriptionOnSubscriptionDetailForSubscriptionDetailsSubscriptionIdFkeyUsingSubscriptionsPkeyUpdate>;
  /** The primary key(s) and patch data for `subscription` for the far side of the relationship. */
  updateByName?: InputMaybe<SubscriptionOnSubscriptionDetailForSubscriptionDetailsSubscriptionIdFkeyUsingSubscriptionsNameKeyUpdate>;
};

/** Input for the nested mutation of `subscriptionDetail` in the `SubscriptionInput` mutation. */
export type SubscriptionDetailsSubscriptionIdFkeyInverseInput = {
  /** The primary key(s) for `subscriptionDetail` for the far side of the relationship. */
  connectById?: InputMaybe<Array<SubscriptionDetailSubscriptionDetailsPkeyConnect>>;
  /** A `SubscriptionDetailInput` object that will be created and connected to this object. */
  create?: InputMaybe<Array<SubscriptionDetailsSubscriptionIdFkeySubscriptionDetailsCreateInput>>;
  /** The primary key(s) for `subscriptionDetail` for the far side of the relationship. */
  deleteById?: InputMaybe<Array<SubscriptionDetailSubscriptionDetailsPkeyDelete>>;
  /** Flag indicating whether all other `subscriptionDetail` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']['input']>;
  /** The primary key(s) and patch data for `subscriptionDetail` for the far side of the relationship. */
  updateById?: InputMaybe<Array<SubscriptionDetailOnSubscriptionDetailForSubscriptionDetailsSubscriptionIdFkeyUsingSubscriptionDetailsPkeyUpdate>>;
};

/** The `subscriptionDetail` to be created by this mutation. */
export type SubscriptionDetailsSubscriptionIdFkeySubscriptionDetailsCreateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  date: Scalars['Date']['input'];
  endTime: Scalars['Time']['input'];
  id?: InputMaybe<Scalars['UUID']['input']>;
  startTime: Scalars['Time']['input'];
  subscriptionToSubscriptionId?: InputMaybe<SubscriptionDetailsSubscriptionIdFkeyInput>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<SubscriptionDetailsUserIdFkeyInput>;
};

/** The `subscription` to be created by this mutation. */
export type SubscriptionDetailsSubscriptionIdFkeySubscriptionsCreateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name: Scalars['String']['input'];
  subscriptionDetailsUsingId?: InputMaybe<SubscriptionDetailsSubscriptionIdFkeyInverseInput>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<SubscriptionsUserIdFkeyInput>;
};

/** Input for the nested mutation of `user` in the `SubscriptionDetailInput` mutation. */
export type SubscriptionDetailsUserIdFkeyInput = {
  /** The primary key(s) for `user` for the far side of the relationship. */
  connectByEmail?: InputMaybe<UserUsersEmailKeyConnect>;
  /** The primary key(s) for `user` for the far side of the relationship. */
  connectById?: InputMaybe<UserUsersPkeyConnect>;
  /** A `UserInput` object that will be created and connected to this object. */
  create?: InputMaybe<SubscriptionDetailsUserIdFkeyUsersCreateInput>;
  /** The primary key(s) for `user` for the far side of the relationship. */
  deleteByEmail?: InputMaybe<UserUsersEmailKeyDelete>;
  /** The primary key(s) for `user` for the far side of the relationship. */
  deleteById?: InputMaybe<UserUsersPkeyDelete>;
  /** The primary key(s) and patch data for `user` for the far side of the relationship. */
  updateByEmail?: InputMaybe<UserOnSubscriptionDetailForSubscriptionDetailsUserIdFkeyUsingUsersEmailKeyUpdate>;
  /** The primary key(s) and patch data for `user` for the far side of the relationship. */
  updateById?: InputMaybe<UserOnSubscriptionDetailForSubscriptionDetailsUserIdFkeyUsingUsersPkeyUpdate>;
};

/** Input for the nested mutation of `subscriptionDetail` in the `UserInput` mutation. */
export type SubscriptionDetailsUserIdFkeyInverseInput = {
  /** The primary key(s) for `subscriptionDetail` for the far side of the relationship. */
  connectById?: InputMaybe<Array<SubscriptionDetailSubscriptionDetailsPkeyConnect>>;
  /** A `SubscriptionDetailInput` object that will be created and connected to this object. */
  create?: InputMaybe<Array<SubscriptionDetailsUserIdFkeySubscriptionDetailsCreateInput>>;
  /** The primary key(s) for `subscriptionDetail` for the far side of the relationship. */
  deleteById?: InputMaybe<Array<SubscriptionDetailSubscriptionDetailsPkeyDelete>>;
  /** Flag indicating whether all other `subscriptionDetail` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']['input']>;
  /** The primary key(s) and patch data for `subscriptionDetail` for the far side of the relationship. */
  updateById?: InputMaybe<Array<SubscriptionDetailOnSubscriptionDetailForSubscriptionDetailsUserIdFkeyUsingSubscriptionDetailsPkeyUpdate>>;
};

/** The `subscriptionDetail` to be created by this mutation. */
export type SubscriptionDetailsUserIdFkeySubscriptionDetailsCreateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  date: Scalars['Date']['input'];
  endTime: Scalars['Time']['input'];
  id?: InputMaybe<Scalars['UUID']['input']>;
  startTime: Scalars['Time']['input'];
  subscriptionId?: InputMaybe<Scalars['UUID']['input']>;
  subscriptionToSubscriptionId?: InputMaybe<SubscriptionDetailsSubscriptionIdFkeyInput>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  userToUserId?: InputMaybe<SubscriptionDetailsUserIdFkeyInput>;
};

/** The `user` to be created by this mutation. */
export type SubscriptionDetailsUserIdFkeyUsersCreateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['UUID']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  subscriptionDetailsUsingId?: InputMaybe<SubscriptionDetailsUserIdFkeyInverseInput>;
  subscriptionsUsingId?: InputMaybe<SubscriptionsUserIdFkeyInverseInput>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

/** An input for mutations affecting `Subscription` */
export type SubscriptionInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name: Scalars['String']['input'];
  subscriptionDetailsUsingId?: InputMaybe<SubscriptionDetailsSubscriptionIdFkeyInverseInput>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<SubscriptionsUserIdFkeyInput>;
};

/** The fields on `subscription` to look up the row to update. */
export type SubscriptionOnSubscriptionDetailForSubscriptionDetailsSubscriptionIdFkeyUsingSubscriptionsNameKeyUpdate = {
  name: Scalars['String']['input'];
  /** An object where the defined keys will be set on the `subscription` being updated. */
  patch: UpdateSubscriptionOnSubscriptionDetailForSubscriptionDetailsSubscriptionIdFkeyPatch;
};

/** The fields on `subscription` to look up the row to update. */
export type SubscriptionOnSubscriptionDetailForSubscriptionDetailsSubscriptionIdFkeyUsingSubscriptionsPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `subscription` being updated. */
  patch: UpdateSubscriptionOnSubscriptionDetailForSubscriptionDetailsSubscriptionIdFkeyPatch;
};

/** The fields on `subscription` to look up the row to update. */
export type SubscriptionOnSubscriptionForSubscriptionsUserIdFkeyUsingSubscriptionsNameKeyUpdate = {
  name: Scalars['String']['input'];
  /** An object where the defined keys will be set on the `subscription` being updated. */
  patch: UpdateSubscriptionOnSubscriptionForSubscriptionsUserIdFkeyPatch;
};

/** The fields on `subscription` to look up the row to update. */
export type SubscriptionOnSubscriptionForSubscriptionsUserIdFkeyUsingSubscriptionsPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `subscription` being updated. */
  patch: UpdateSubscriptionOnSubscriptionForSubscriptionsUserIdFkeyPatch;
};

/** Represents an update to a `Subscription`. Fields that are set will be updated. */
export type SubscriptionPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  subscriptionDetailsUsingId?: InputMaybe<SubscriptionDetailsSubscriptionIdFkeyInverseInput>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<SubscriptionsUserIdFkeyInput>;
};

/** The fields on `subscription` to look up the row to connect. */
export type SubscriptionSubscriptionsNameKeyConnect = {
  name: Scalars['String']['input'];
};

/** The fields on `subscription` to look up the row to delete. */
export type SubscriptionSubscriptionsNameKeyDelete = {
  name: Scalars['String']['input'];
};

/** The fields on `subscription` to look up the row to connect. */
export type SubscriptionSubscriptionsPkeyConnect = {
  id: Scalars['UUID']['input'];
};

/** The fields on `subscription` to look up the row to delete. */
export type SubscriptionSubscriptionsPkeyDelete = {
  id: Scalars['UUID']['input'];
};

/** A connection to a list of `User` values, with data from `SubscriptionDetail`. */
export type SubscriptionUsersBySubscriptionDetailSubscriptionIdAndUserIdManyToManyConnection = {
  __typename?: 'SubscriptionUsersBySubscriptionDetailSubscriptionIdAndUserIdManyToManyConnection';
  /** A list of edges which contains the `User`, info from the `SubscriptionDetail`, and the cursor to aid in pagination. */
  edges: Array<SubscriptionUsersBySubscriptionDetailSubscriptionIdAndUserIdManyToManyEdge>;
  /** A list of `User` objects. */
  nodes: Array<User>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `User` edge in the connection, with data from `SubscriptionDetail`. */
export type SubscriptionUsersBySubscriptionDetailSubscriptionIdAndUserIdManyToManyEdge = {
  __typename?: 'SubscriptionUsersBySubscriptionDetailSubscriptionIdAndUserIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `User` at the end of the edge. */
  node: User;
  /** Reads and enables pagination through a set of `SubscriptionDetail`. */
  subscriptionDetails: SubscriptionDetailsConnection;
};


/** A `User` edge in the connection, with data from `SubscriptionDetail`. */
export type SubscriptionUsersBySubscriptionDetailSubscriptionIdAndUserIdManyToManyEdgeSubscriptionDetailsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<SubscriptionDetailCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SubscriptionDetailsOrderBy>>;
};

/** A connection to a list of `Subscription` values. */
export type SubscriptionsConnection = {
  __typename?: 'SubscriptionsConnection';
  /** A list of edges which contains the `Subscription` and cursor to aid in pagination. */
  edges: Array<SubscriptionsEdge>;
  /** A list of `Subscription` objects. */
  nodes: Array<Subscription>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Subscription` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Subscription` edge in the connection. */
export type SubscriptionsEdge = {
  __typename?: 'SubscriptionsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Subscription` at the end of the edge. */
  node: Subscription;
};

/** Methods to use when ordering `Subscription`. */
export enum SubscriptionsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

/** Input for the nested mutation of `user` in the `SubscriptionInput` mutation. */
export type SubscriptionsUserIdFkeyInput = {
  /** The primary key(s) for `user` for the far side of the relationship. */
  connectByEmail?: InputMaybe<UserUsersEmailKeyConnect>;
  /** The primary key(s) for `user` for the far side of the relationship. */
  connectById?: InputMaybe<UserUsersPkeyConnect>;
  /** A `UserInput` object that will be created and connected to this object. */
  create?: InputMaybe<SubscriptionsUserIdFkeyUsersCreateInput>;
  /** The primary key(s) for `user` for the far side of the relationship. */
  deleteByEmail?: InputMaybe<UserUsersEmailKeyDelete>;
  /** The primary key(s) for `user` for the far side of the relationship. */
  deleteById?: InputMaybe<UserUsersPkeyDelete>;
  /** The primary key(s) and patch data for `user` for the far side of the relationship. */
  updateByEmail?: InputMaybe<UserOnSubscriptionForSubscriptionsUserIdFkeyUsingUsersEmailKeyUpdate>;
  /** The primary key(s) and patch data for `user` for the far side of the relationship. */
  updateById?: InputMaybe<UserOnSubscriptionForSubscriptionsUserIdFkeyUsingUsersPkeyUpdate>;
};

/** Input for the nested mutation of `subscription` in the `UserInput` mutation. */
export type SubscriptionsUserIdFkeyInverseInput = {
  /** The primary key(s) for `subscription` for the far side of the relationship. */
  connectById?: InputMaybe<Array<SubscriptionSubscriptionsPkeyConnect>>;
  /** The primary key(s) for `subscription` for the far side of the relationship. */
  connectByName?: InputMaybe<Array<SubscriptionSubscriptionsNameKeyConnect>>;
  /** A `SubscriptionInput` object that will be created and connected to this object. */
  create?: InputMaybe<Array<SubscriptionsUserIdFkeySubscriptionsCreateInput>>;
  /** The primary key(s) for `subscription` for the far side of the relationship. */
  deleteById?: InputMaybe<Array<SubscriptionSubscriptionsPkeyDelete>>;
  /** The primary key(s) for `subscription` for the far side of the relationship. */
  deleteByName?: InputMaybe<Array<SubscriptionSubscriptionsNameKeyDelete>>;
  /** Flag indicating whether all other `subscription` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']['input']>;
  /** The primary key(s) and patch data for `subscription` for the far side of the relationship. */
  updateById?: InputMaybe<Array<SubscriptionOnSubscriptionForSubscriptionsUserIdFkeyUsingSubscriptionsPkeyUpdate>>;
  /** The primary key(s) and patch data for `subscription` for the far side of the relationship. */
  updateByName?: InputMaybe<Array<SubscriptionOnSubscriptionForSubscriptionsUserIdFkeyUsingSubscriptionsNameKeyUpdate>>;
};

/** The `subscription` to be created by this mutation. */
export type SubscriptionsUserIdFkeySubscriptionsCreateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name: Scalars['String']['input'];
  subscriptionDetailsUsingId?: InputMaybe<SubscriptionDetailsSubscriptionIdFkeyInverseInput>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  userToUserId?: InputMaybe<SubscriptionsUserIdFkeyInput>;
};

/** The `user` to be created by this mutation. */
export type SubscriptionsUserIdFkeyUsersCreateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['UUID']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  subscriptionDetailsUsingId?: InputMaybe<SubscriptionDetailsUserIdFkeyInverseInput>;
  subscriptionsUsingId?: InputMaybe<SubscriptionsUserIdFkeyInverseInput>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

/** All input for the `updateSubscriptionByName` mutation. */
export type UpdateSubscriptionByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  /** An object where the defined keys will be set on the `Subscription` being updated. */
  patch: SubscriptionPatch;
};

/** All input for the `updateSubscriptionDetail` mutation. */
export type UpdateSubscriptionDetailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `SubscriptionDetail` being updated. */
  patch: SubscriptionDetailPatch;
};

/** The output of our update `SubscriptionDetail` mutation. */
export type UpdateSubscriptionDetailPayload = {
  __typename?: 'UpdateSubscriptionDetailPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Subscription` that is related to this `SubscriptionDetail`. */
  subscription?: Maybe<Subscription>;
  /** The `SubscriptionDetail` that was updated by this mutation. */
  subscriptionDetail?: Maybe<SubscriptionDetail>;
  /** An edge for our `SubscriptionDetail`. May be used by Relay 1. */
  subscriptionDetailEdge?: Maybe<SubscriptionDetailsEdge>;
  /** Reads a single `User` that is related to this `SubscriptionDetail`. */
  user?: Maybe<User>;
};


/** The output of our update `SubscriptionDetail` mutation. */
export type UpdateSubscriptionDetailPayloadSubscriptionDetailEdgeArgs = {
  orderBy?: InputMaybe<Array<SubscriptionDetailsOrderBy>>;
};

/** All input for the `updateSubscription` mutation. */
export type UpdateSubscriptionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Subscription` being updated. */
  patch: SubscriptionPatch;
};

/** The output of our update `Subscription` mutation. */
export type UpdateSubscriptionPayload = {
  __typename?: 'UpdateSubscriptionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Subscription` that was updated by this mutation. */
  subscription?: Maybe<Subscription>;
  /** An edge for our `Subscription`. May be used by Relay 1. */
  subscriptionEdge?: Maybe<SubscriptionsEdge>;
  /** Reads a single `User` that is related to this `Subscription`. */
  user?: Maybe<User>;
};


/** The output of our update `Subscription` mutation. */
export type UpdateSubscriptionPayloadSubscriptionEdgeArgs = {
  orderBy?: InputMaybe<Array<SubscriptionsOrderBy>>;
};

/** All input for the `updateUserByEmail` mutation. */
export type UpdateUserByEmailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  /** An object where the defined keys will be set on the `User` being updated. */
  patch: UserPatch;
};

/** All input for the `updateUser` mutation. */
export type UpdateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `User` being updated. */
  patch: UserPatch;
};

/** The output of our update `User` mutation. */
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was updated by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our update `User` mutation. */
export type UpdateUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['Datetime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  isAdmin: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `SubscriptionDetail`. */
  subscriptionDetails: SubscriptionDetailsConnection;
  /** Reads and enables pagination through a set of `Subscription`. */
  subscriptions: SubscriptionsConnection;
  /** Reads and enables pagination through a set of `Subscription`. */
  subscriptionsBySubscriptionDetailUserIdAndSubscriptionId: UserSubscriptionsBySubscriptionDetailUserIdAndSubscriptionIdManyToManyConnection;
  updatedAt: Scalars['Datetime']['output'];
};


export type UserSubscriptionDetailsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<SubscriptionDetailCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SubscriptionDetailsOrderBy>>;
};


export type UserSubscriptionsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<SubscriptionCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SubscriptionsOrderBy>>;
};


export type UserSubscriptionsBySubscriptionDetailUserIdAndSubscriptionIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<SubscriptionCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SubscriptionsOrderBy>>;
};

/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UserCondition = {
  /** Checks for equality with the object’s `email` field. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `password` field. */
  password?: InputMaybe<Scalars['String']['input']>;
};

/** An input for mutations affecting `User` */
export type UserInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['UUID']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  subscriptionDetailsUsingId?: InputMaybe<SubscriptionDetailsUserIdFkeyInverseInput>;
  subscriptionsUsingId?: InputMaybe<SubscriptionsUserIdFkeyInverseInput>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

/** The fields on `user` to look up the row to update. */
export type UserOnSubscriptionDetailForSubscriptionDetailsUserIdFkeyUsingUsersEmailKeyUpdate = {
  email: Scalars['String']['input'];
  /** An object where the defined keys will be set on the `user` being updated. */
  patch: UpdateUserOnSubscriptionDetailForSubscriptionDetailsUserIdFkeyPatch;
};

/** The fields on `user` to look up the row to update. */
export type UserOnSubscriptionDetailForSubscriptionDetailsUserIdFkeyUsingUsersPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `user` being updated. */
  patch: UpdateUserOnSubscriptionDetailForSubscriptionDetailsUserIdFkeyPatch;
};

/** The fields on `user` to look up the row to update. */
export type UserOnSubscriptionForSubscriptionsUserIdFkeyUsingUsersEmailKeyUpdate = {
  email: Scalars['String']['input'];
  /** An object where the defined keys will be set on the `user` being updated. */
  patch: UpdateUserOnSubscriptionForSubscriptionsUserIdFkeyPatch;
};

/** The fields on `user` to look up the row to update. */
export type UserOnSubscriptionForSubscriptionsUserIdFkeyUsingUsersPkeyUpdate = {
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `user` being updated. */
  patch: UpdateUserOnSubscriptionForSubscriptionsUserIdFkeyPatch;
};

/** Represents an update to a `User`. Fields that are set will be updated. */
export type UserPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  subscriptionDetailsUsingId?: InputMaybe<SubscriptionDetailsUserIdFkeyInverseInput>;
  subscriptionsUsingId?: InputMaybe<SubscriptionsUserIdFkeyInverseInput>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

/** A connection to a list of `Subscription` values, with data from `SubscriptionDetail`. */
export type UserSubscriptionsBySubscriptionDetailUserIdAndSubscriptionIdManyToManyConnection = {
  __typename?: 'UserSubscriptionsBySubscriptionDetailUserIdAndSubscriptionIdManyToManyConnection';
  /** A list of edges which contains the `Subscription`, info from the `SubscriptionDetail`, and the cursor to aid in pagination. */
  edges: Array<UserSubscriptionsBySubscriptionDetailUserIdAndSubscriptionIdManyToManyEdge>;
  /** A list of `Subscription` objects. */
  nodes: Array<Subscription>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Subscription` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Subscription` edge in the connection, with data from `SubscriptionDetail`. */
export type UserSubscriptionsBySubscriptionDetailUserIdAndSubscriptionIdManyToManyEdge = {
  __typename?: 'UserSubscriptionsBySubscriptionDetailUserIdAndSubscriptionIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Subscription` at the end of the edge. */
  node: Subscription;
  /** Reads and enables pagination through a set of `SubscriptionDetail`. */
  subscriptionDetails: SubscriptionDetailsConnection;
};


/** A `Subscription` edge in the connection, with data from `SubscriptionDetail`. */
export type UserSubscriptionsBySubscriptionDetailUserIdAndSubscriptionIdManyToManyEdgeSubscriptionDetailsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<SubscriptionDetailCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SubscriptionDetailsOrderBy>>;
};

/** The fields on `user` to look up the row to connect. */
export type UserUsersEmailKeyConnect = {
  email: Scalars['String']['input'];
};

/** The fields on `user` to look up the row to delete. */
export type UserUsersEmailKeyDelete = {
  email: Scalars['String']['input'];
};

/** The fields on `user` to look up the row to connect. */
export type UserUsersPkeyConnect = {
  id: Scalars['UUID']['input'];
};

/** The fields on `user` to look up the row to delete. */
export type UserUsersPkeyDelete = {
  id: Scalars['UUID']['input'];
};

/** A connection to a list of `User` values. */
export type UsersConnection = {
  __typename?: 'UsersConnection';
  /** A list of edges which contains the `User` and cursor to aid in pagination. */
  edges: Array<UsersEdge>;
  /** A list of `User` objects. */
  nodes: Array<User>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `User` edge in the connection. */
export type UsersEdge = {
  __typename?: 'UsersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `User` at the end of the edge. */
  node: User;
};

/** Methods to use when ordering `User`. */
export enum UsersOrderBy {
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PasswordAsc = 'PASSWORD_ASC',
  PasswordDesc = 'PASSWORD_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** An object where the defined keys will be set on the `subscriptionDetail` being updated. */
export type UpdateSubscriptionDetailOnSubscriptionDetailForSubscriptionDetailsSubscriptionIdFkeyPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  endTime?: InputMaybe<Scalars['Time']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  startTime?: InputMaybe<Scalars['Time']['input']>;
  subscriptionToSubscriptionId?: InputMaybe<SubscriptionDetailsSubscriptionIdFkeyInput>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<SubscriptionDetailsUserIdFkeyInput>;
};

/** An object where the defined keys will be set on the `subscriptionDetail` being updated. */
export type UpdateSubscriptionDetailOnSubscriptionDetailForSubscriptionDetailsUserIdFkeyPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  endTime?: InputMaybe<Scalars['Time']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  startTime?: InputMaybe<Scalars['Time']['input']>;
  subscriptionId?: InputMaybe<Scalars['UUID']['input']>;
  subscriptionToSubscriptionId?: InputMaybe<SubscriptionDetailsSubscriptionIdFkeyInput>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  userToUserId?: InputMaybe<SubscriptionDetailsUserIdFkeyInput>;
};

/** An object where the defined keys will be set on the `subscription` being updated. */
export type UpdateSubscriptionOnSubscriptionDetailForSubscriptionDetailsSubscriptionIdFkeyPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  subscriptionDetailsUsingId?: InputMaybe<SubscriptionDetailsSubscriptionIdFkeyInverseInput>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userToUserId?: InputMaybe<SubscriptionsUserIdFkeyInput>;
};

/** An object where the defined keys will be set on the `subscription` being updated. */
export type UpdateSubscriptionOnSubscriptionForSubscriptionsUserIdFkeyPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  subscriptionDetailsUsingId?: InputMaybe<SubscriptionDetailsSubscriptionIdFkeyInverseInput>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  userToUserId?: InputMaybe<SubscriptionsUserIdFkeyInput>;
};

/** An object where the defined keys will be set on the `user` being updated. */
export type UpdateUserOnSubscriptionDetailForSubscriptionDetailsUserIdFkeyPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  subscriptionDetailsUsingId?: InputMaybe<SubscriptionDetailsUserIdFkeyInverseInput>;
  subscriptionsUsingId?: InputMaybe<SubscriptionsUserIdFkeyInverseInput>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

/** An object where the defined keys will be set on the `user` being updated. */
export type UpdateUserOnSubscriptionForSubscriptionsUserIdFkeyPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  subscriptionDetailsUsingId?: InputMaybe<SubscriptionDetailsUserIdFkeyInverseInput>;
  subscriptionsUsingId?: InputMaybe<SubscriptionsUserIdFkeyInverseInput>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Lite_UserFragment = { __typename?: 'User', id: any, name?: string | null, email: string, password?: string | null };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'LoginPayload', token?: string | null, user: { __typename?: 'User', id: any, name?: string | null, email: string, password?: string | null } } | null };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout?: { __typename?: 'LogoutPayload', success?: boolean | null } | null };

export type RegisterMutationVariables = Exact<{
  input: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register?: { __typename?: 'RegisterPayload', token: string, user: { __typename?: 'User', id: any, name?: string | null, email: string, password?: string | null } } | null };

export type CreateSubscriptionMutationVariables = Exact<{
  input: SubscriptionInput;
}>;


export type CreateSubscriptionMutation = { __typename?: 'Mutation', createSubscription?: { __typename?: 'CreateSubscriptionPayload', subscription?: { __typename?: 'Subscription', id: any, name: string, userId?: any | null } | null } | null };

export type CreateSubscriptionDetailMutationVariables = Exact<{
  input: SubscriptionDetailInput;
}>;


export type CreateSubscriptionDetailMutation = { __typename?: 'Mutation', createSubscriptionDetail?: { __typename?: 'CreateSubscriptionDetailPayload', subscriptionDetail?: { __typename?: 'SubscriptionDetail', id: any, subscriptionId: any, startTime: any, endTime: any, userId?: any | null } | null } | null };

export type DeleteSubscriptionMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type DeleteSubscriptionMutation = { __typename?: 'Mutation', deleteSubscription?: { __typename?: 'DeleteSubscriptionPayload', clientMutationId?: string | null } | null };

export type Lite_SubscriptionFragment = { __typename?: 'Subscription', id: any, name: string, userId?: any | null };

export type Lite_SubscriptionDetailFragment = { __typename?: 'SubscriptionDetail', id: any, subscriptionId: any, startTime: any, endTime: any, userId?: any | null };

export type SubscriptionQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type SubscriptionQuery = { __typename?: 'Query', subscription?: { __typename?: 'Subscription', id: any, name: string, subscriptionDetails: { __typename?: 'SubscriptionDetailsConnection', nodes: Array<{ __typename?: 'SubscriptionDetail', id: any, date: any, startTime: any, endTime: any }> } } | null };

export type SubscriptionDetailQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type SubscriptionDetailQuery = { __typename?: 'Query', subscriptionDetail?: { __typename?: 'SubscriptionDetail', id: any, subscriptionId: any, startTime: any, endTime: any, userId?: any | null } | null };

export type SubscriptionsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type SubscriptionsQuery = { __typename?: 'Query', subscriptions?: { __typename?: 'SubscriptionsConnection', nodes: Array<{ __typename?: 'Subscription', id: any, name: string }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean } } | null };

export type UpdateSubscriptionMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
  subscription: SubscriptionPatch;
}>;


export type UpdateSubscriptionMutation = { __typename?: 'Mutation', updateSubscription?: { __typename?: 'UpdateSubscriptionPayload', subscription?: { __typename?: 'Subscription', id: any, name: string } | null } | null };

export type UpdateSubscriptionDetailMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
  subscriptionDetail: SubscriptionDetailPatch;
}>;


export type UpdateSubscriptionDetailMutation = { __typename?: 'Mutation', updateSubscriptionDetail?: { __typename?: 'UpdateSubscriptionDetailPayload', subscriptionDetail?: { __typename?: 'SubscriptionDetail', id: any, subscriptionId: any, startTime: any, endTime: any, userId?: any | null } | null } | null };

export type CreateUserMutationVariables = Exact<{
  input: UserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'CreateUserPayload', user?: { __typename?: 'User', id: any, name?: string | null, email: string, password?: string | null } | null } | null };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser?: { __typename?: 'DeleteUserPayload', clientMutationId?: string | null } | null };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
  user: UserPatch;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'UpdateUserPayload', user?: { __typename?: 'User', id: any, name?: string | null, email: string, password?: string | null } | null } | null };

export type UserQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: any, name?: string | null, email: string, password?: string | null } | null };

export type UsersQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type UsersQuery = { __typename?: 'Query', users?: { __typename?: 'UsersConnection', nodes: Array<{ __typename?: 'User', id: any, name?: string | null, email: string, password?: string | null }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean } } | null };

export const Lite_UserFragmentDoc = gql`
    fragment Lite_User on User {
  id
  name
  email
  password
}
    `;
export const Lite_SubscriptionFragmentDoc = gql`
    fragment Lite_Subscription on Subscription {
  id
  name
  userId
}
    `;
export const Lite_SubscriptionDetailFragmentDoc = gql`
    fragment Lite_SubscriptionDetail on SubscriptionDetail {
  id
  subscriptionId
  startTime
  endTime
  userId
}
    `;
export const LoginDocument = gql`
    mutation login($input: LoginInput!) {
  login(input: $input) {
    token
    user {
      id
      ...Lite_User
    }
  }
}
    ${Lite_UserFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout {
    success
  }
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($input: RegisterInput!) {
  register(input: $input) {
    token
    user {
      id
      ...Lite_User
    }
  }
}
    ${Lite_UserFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const CreateSubscriptionDocument = gql`
    mutation CreateSubscription($input: SubscriptionInput!) {
  createSubscription(input: {subscription: $input}) {
    subscription {
      id
      ...Lite_Subscription
    }
  }
}
    ${Lite_SubscriptionFragmentDoc}`;
export type CreateSubscriptionMutationFn = Apollo.MutationFunction<CreateSubscriptionMutation, CreateSubscriptionMutationVariables>;

/**
 * __useCreateSubscriptionMutation__
 *
 * To run a mutation, you first call `useCreateSubscriptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSubscriptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSubscriptionMutation, { data, loading, error }] = useCreateSubscriptionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSubscriptionMutation(baseOptions?: Apollo.MutationHookOptions<CreateSubscriptionMutation, CreateSubscriptionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSubscriptionMutation, CreateSubscriptionMutationVariables>(CreateSubscriptionDocument, options);
      }
export type CreateSubscriptionMutationHookResult = ReturnType<typeof useCreateSubscriptionMutation>;
export type CreateSubscriptionMutationResult = Apollo.MutationResult<CreateSubscriptionMutation>;
export type CreateSubscriptionMutationOptions = Apollo.BaseMutationOptions<CreateSubscriptionMutation, CreateSubscriptionMutationVariables>;
export const CreateSubscriptionDetailDocument = gql`
    mutation CreateSubscriptionDetail($input: SubscriptionDetailInput!) {
  createSubscriptionDetail(input: {subscriptionDetail: $input}) {
    subscriptionDetail {
      id
      ...Lite_SubscriptionDetail
    }
  }
}
    ${Lite_SubscriptionDetailFragmentDoc}`;
export type CreateSubscriptionDetailMutationFn = Apollo.MutationFunction<CreateSubscriptionDetailMutation, CreateSubscriptionDetailMutationVariables>;

/**
 * __useCreateSubscriptionDetailMutation__
 *
 * To run a mutation, you first call `useCreateSubscriptionDetailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSubscriptionDetailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSubscriptionDetailMutation, { data, loading, error }] = useCreateSubscriptionDetailMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSubscriptionDetailMutation(baseOptions?: Apollo.MutationHookOptions<CreateSubscriptionDetailMutation, CreateSubscriptionDetailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSubscriptionDetailMutation, CreateSubscriptionDetailMutationVariables>(CreateSubscriptionDetailDocument, options);
      }
export type CreateSubscriptionDetailMutationHookResult = ReturnType<typeof useCreateSubscriptionDetailMutation>;
export type CreateSubscriptionDetailMutationResult = Apollo.MutationResult<CreateSubscriptionDetailMutation>;
export type CreateSubscriptionDetailMutationOptions = Apollo.BaseMutationOptions<CreateSubscriptionDetailMutation, CreateSubscriptionDetailMutationVariables>;
export const DeleteSubscriptionDocument = gql`
    mutation DeleteSubscription($id: UUID!) {
  deleteSubscription(input: {id: $id}) {
    clientMutationId
  }
}
    `;
export type DeleteSubscriptionMutationFn = Apollo.MutationFunction<DeleteSubscriptionMutation, DeleteSubscriptionMutationVariables>;

/**
 * __useDeleteSubscriptionMutation__
 *
 * To run a mutation, you first call `useDeleteSubscriptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSubscriptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSubscriptionMutation, { data, loading, error }] = useDeleteSubscriptionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteSubscriptionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSubscriptionMutation, DeleteSubscriptionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteSubscriptionMutation, DeleteSubscriptionMutationVariables>(DeleteSubscriptionDocument, options);
      }
export type DeleteSubscriptionMutationHookResult = ReturnType<typeof useDeleteSubscriptionMutation>;
export type DeleteSubscriptionMutationResult = Apollo.MutationResult<DeleteSubscriptionMutation>;
export type DeleteSubscriptionMutationOptions = Apollo.BaseMutationOptions<DeleteSubscriptionMutation, DeleteSubscriptionMutationVariables>;
export const SubscriptionDocument = gql`
    query Subscription($id: UUID!) {
  subscription(id: $id) {
    id
    name
    subscriptionDetails {
      nodes {
        id
        date
        startTime
        endTime
      }
    }
  }
}
    `;

/**
 * __useSubscriptionQuery__
 *
 * To run a query within a React component, call `useSubscriptionQuery` and pass it any options that fit your needs.
 * When your component renders, `useSubscriptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubscriptionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSubscriptionQuery(baseOptions: Apollo.QueryHookOptions<SubscriptionQuery, SubscriptionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SubscriptionQuery, SubscriptionQueryVariables>(SubscriptionDocument, options);
      }
export function useSubscriptionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SubscriptionQuery, SubscriptionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SubscriptionQuery, SubscriptionQueryVariables>(SubscriptionDocument, options);
        }
export type SubscriptionQueryHookResult = ReturnType<typeof useSubscriptionQuery>;
export type SubscriptionLazyQueryHookResult = ReturnType<typeof useSubscriptionLazyQuery>;
export type SubscriptionQueryResult = Apollo.QueryResult<SubscriptionQuery, SubscriptionQueryVariables>;
export const SubscriptionDetailDocument = gql`
    query SubscriptionDetail($id: UUID!) {
  subscriptionDetail(id: $id) {
    id
    ...Lite_SubscriptionDetail
  }
}
    ${Lite_SubscriptionDetailFragmentDoc}`;

/**
 * __useSubscriptionDetailQuery__
 *
 * To run a query within a React component, call `useSubscriptionDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useSubscriptionDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubscriptionDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSubscriptionDetailQuery(baseOptions: Apollo.QueryHookOptions<SubscriptionDetailQuery, SubscriptionDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SubscriptionDetailQuery, SubscriptionDetailQueryVariables>(SubscriptionDetailDocument, options);
      }
export function useSubscriptionDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SubscriptionDetailQuery, SubscriptionDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SubscriptionDetailQuery, SubscriptionDetailQueryVariables>(SubscriptionDetailDocument, options);
        }
export type SubscriptionDetailQueryHookResult = ReturnType<typeof useSubscriptionDetailQuery>;
export type SubscriptionDetailLazyQueryHookResult = ReturnType<typeof useSubscriptionDetailLazyQuery>;
export type SubscriptionDetailQueryResult = Apollo.QueryResult<SubscriptionDetailQuery, SubscriptionDetailQueryVariables>;
export const SubscriptionsDocument = gql`
    query Subscriptions($first: Int, $offset: Int) {
  subscriptions(first: $first, offset: $offset) {
    nodes {
      id
      name
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
  }
}
    `;

/**
 * __useSubscriptionsQuery__
 *
 * To run a query within a React component, call `useSubscriptionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSubscriptionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubscriptionsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useSubscriptionsQuery(baseOptions?: Apollo.QueryHookOptions<SubscriptionsQuery, SubscriptionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SubscriptionsQuery, SubscriptionsQueryVariables>(SubscriptionsDocument, options);
      }
export function useSubscriptionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SubscriptionsQuery, SubscriptionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SubscriptionsQuery, SubscriptionsQueryVariables>(SubscriptionsDocument, options);
        }
export type SubscriptionsQueryHookResult = ReturnType<typeof useSubscriptionsQuery>;
export type SubscriptionsLazyQueryHookResult = ReturnType<typeof useSubscriptionsLazyQuery>;
export type SubscriptionsQueryResult = Apollo.QueryResult<SubscriptionsQuery, SubscriptionsQueryVariables>;
export const UpdateSubscriptionDocument = gql`
    mutation UpdateSubscription($id: UUID!, $subscription: SubscriptionPatch!) {
  updateSubscription(input: {patch: $subscription, id: $id}) {
    subscription {
      id
      name
    }
  }
}
    `;
export type UpdateSubscriptionMutationFn = Apollo.MutationFunction<UpdateSubscriptionMutation, UpdateSubscriptionMutationVariables>;

/**
 * __useUpdateSubscriptionMutation__
 *
 * To run a mutation, you first call `useUpdateSubscriptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSubscriptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSubscriptionMutation, { data, loading, error }] = useUpdateSubscriptionMutation({
 *   variables: {
 *      id: // value for 'id'
 *      subscription: // value for 'subscription'
 *   },
 * });
 */
export function useUpdateSubscriptionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSubscriptionMutation, UpdateSubscriptionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSubscriptionMutation, UpdateSubscriptionMutationVariables>(UpdateSubscriptionDocument, options);
      }
export type UpdateSubscriptionMutationHookResult = ReturnType<typeof useUpdateSubscriptionMutation>;
export type UpdateSubscriptionMutationResult = Apollo.MutationResult<UpdateSubscriptionMutation>;
export type UpdateSubscriptionMutationOptions = Apollo.BaseMutationOptions<UpdateSubscriptionMutation, UpdateSubscriptionMutationVariables>;
export const UpdateSubscriptionDetailDocument = gql`
    mutation UpdateSubscriptionDetail($id: UUID!, $subscriptionDetail: SubscriptionDetailPatch!) {
  updateSubscriptionDetail(input: {patch: $subscriptionDetail, id: $id}) {
    subscriptionDetail {
      id
      ...Lite_SubscriptionDetail
    }
  }
}
    ${Lite_SubscriptionDetailFragmentDoc}`;
export type UpdateSubscriptionDetailMutationFn = Apollo.MutationFunction<UpdateSubscriptionDetailMutation, UpdateSubscriptionDetailMutationVariables>;

/**
 * __useUpdateSubscriptionDetailMutation__
 *
 * To run a mutation, you first call `useUpdateSubscriptionDetailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSubscriptionDetailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSubscriptionDetailMutation, { data, loading, error }] = useUpdateSubscriptionDetailMutation({
 *   variables: {
 *      id: // value for 'id'
 *      subscriptionDetail: // value for 'subscriptionDetail'
 *   },
 * });
 */
export function useUpdateSubscriptionDetailMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSubscriptionDetailMutation, UpdateSubscriptionDetailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSubscriptionDetailMutation, UpdateSubscriptionDetailMutationVariables>(UpdateSubscriptionDetailDocument, options);
      }
export type UpdateSubscriptionDetailMutationHookResult = ReturnType<typeof useUpdateSubscriptionDetailMutation>;
export type UpdateSubscriptionDetailMutationResult = Apollo.MutationResult<UpdateSubscriptionDetailMutation>;
export type UpdateSubscriptionDetailMutationOptions = Apollo.BaseMutationOptions<UpdateSubscriptionDetailMutation, UpdateSubscriptionDetailMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($input: UserInput!) {
  createUser(input: {user: $input}) {
    user {
      id
      ...Lite_User
    }
  }
}
    ${Lite_UserFragmentDoc}`;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const DeleteUserDocument = gql`
    mutation DeleteUser($id: UUID!) {
  deleteUser(input: {id: $id}) {
    clientMutationId
  }
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($id: UUID!, $user: UserPatch!) {
  updateUser(input: {patch: $user, id: $id}) {
    user {
      ...Lite_User
    }
  }
}
    ${Lite_UserFragmentDoc}`;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      user: // value for 'user'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const UserDocument = gql`
    query User($id: UUID!) {
  user(id: $id) {
    id
    ...Lite_User
  }
}
    ${Lite_UserFragmentDoc}`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const UsersDocument = gql`
    query Users($first: Int, $offset: Int) {
  users(first: $first, offset: $offset) {
    nodes {
      id
      ...Lite_User
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
  }
}
    ${Lite_UserFragmentDoc}`;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *      first: // value for 'first'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
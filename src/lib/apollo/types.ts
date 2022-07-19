/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  DateTime: any;
  Decimal: any;
  JSON: any;
  Upload: any;
};

export type AuthenticatedItem = User;

export type AvatarUser = {
  __typename?: 'AvatarUser';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  image?: Maybe<ImageFieldOutput>;
  lastModification?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
};

export type AvatarUserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  image?: InputMaybe<ImageFieldInput>;
  lastModification?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type AvatarUserOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  lastModification?: InputMaybe<OrderDirection>;
};

export type AvatarUserRelateToOneForCreateInput = {
  connect?: InputMaybe<AvatarUserWhereUniqueInput>;
  create?: InputMaybe<AvatarUserCreateInput>;
};

export type AvatarUserRelateToOneForUpdateInput = {
  connect?: InputMaybe<AvatarUserWhereUniqueInput>;
  create?: InputMaybe<AvatarUserCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type AvatarUserUpdateArgs = {
  data: AvatarUserUpdateInput;
  where: AvatarUserWhereUniqueInput;
};

export type AvatarUserUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  image?: InputMaybe<ImageFieldInput>;
  lastModification?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type AvatarUserWhereInput = {
  AND?: InputMaybe<Array<AvatarUserWhereInput>>;
  NOT?: InputMaybe<Array<AvatarUserWhereInput>>;
  OR?: InputMaybe<Array<AvatarUserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  lastModification?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type AvatarUserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Cart = {
  __typename?: 'Cart';
  id: Scalars['ID'];
  lastModification?: Maybe<Scalars['DateTime']>;
  quantityPayments?: Maybe<Scalars['Int']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']>;
  subscriptions?: Maybe<Array<Subscription>>;
  subscriptionsCount?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
};


export type CartServicesArgs = {
  orderBy?: Array<ServiceOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ServiceWhereInput;
};


export type CartServicesCountArgs = {
  where?: ServiceWhereInput;
};


export type CartSubscriptionsArgs = {
  orderBy?: Array<SubscriptionOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: SubscriptionWhereInput;
};


export type CartSubscriptionsCountArgs = {
  where?: SubscriptionWhereInput;
};

export type CartOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  lastModification?: InputMaybe<OrderDirection>;
  quantityPayments?: InputMaybe<OrderDirection>;
};

export type CartUpdateArgs = {
  data: CartUpdateInput;
  where: CartWhereUniqueInput;
};

export type CartUpdateInput = {
  lastModification?: InputMaybe<Scalars['DateTime']>;
  quantityPayments?: InputMaybe<Scalars['Int']>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  subscriptions?: InputMaybe<SubscriptionRelateToManyForUpdateInput>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type CartWhereInput = {
  AND?: InputMaybe<Array<CartWhereInput>>;
  NOT?: InputMaybe<Array<CartWhereInput>>;
  OR?: InputMaybe<Array<CartWhereInput>>;
  id?: InputMaybe<IdFilter>;
  lastModification?: InputMaybe<DateTimeFilter>;
  quantityPayments?: InputMaybe<IntNullableFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  subscriptions?: InputMaybe<SubscriptionManyRelationFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type CartWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Category = {
  __typename?: 'Category';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  language?: Maybe<Scalars['String']>;
  lastModification?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<Category>;
  products?: Maybe<Array<Product>>;
  productsCount?: Maybe<Scalars['Int']>;
  statusView?: Maybe<Scalars['String']>;
};


export type CategoryProductsArgs = {
  orderBy?: Array<ProductOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ProductWhereInput;
};


export type CategoryProductsCountArgs = {
  where?: ProductWhereInput;
};

export type CategoryCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  language?: InputMaybe<Scalars['String']>;
  lastModification?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<CategoryRelateToOneForCreateInput>;
  products?: InputMaybe<ProductRelateToManyForCreateInput>;
  statusView?: InputMaybe<Scalars['String']>;
};

export type CategoryManyRelationFilter = {
  every?: InputMaybe<CategoryWhereInput>;
  none?: InputMaybe<CategoryWhereInput>;
  some?: InputMaybe<CategoryWhereInput>;
};

export type CategoryOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  language?: InputMaybe<OrderDirection>;
  lastModification?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  statusView?: InputMaybe<OrderDirection>;
};

export type CategoryRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  create?: InputMaybe<Array<CategoryCreateInput>>;
};

export type CategoryRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  create?: InputMaybe<Array<CategoryCreateInput>>;
  disconnect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<CategoryWhereUniqueInput>>;
};

export type CategoryRelateToOneForCreateInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  create?: InputMaybe<CategoryCreateInput>;
};

export type CategoryRelateToOneForUpdateInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  create?: InputMaybe<CategoryCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type CategoryUpdateArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  language?: InputMaybe<Scalars['String']>;
  lastModification?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<CategoryRelateToOneForUpdateInput>;
  products?: InputMaybe<ProductRelateToManyForUpdateInput>;
  statusView?: InputMaybe<Scalars['String']>;
};

export type CategoryWhereInput = {
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  language?: InputMaybe<StringFilter>;
  lastModification?: InputMaybe<DateTimeFilter>;
  name?: InputMaybe<StringFilter>;
  parent?: InputMaybe<CategoryWhereInput>;
  products?: InputMaybe<ProductManyRelationFilter>;
  statusView?: InputMaybe<StringFilter>;
};

export type CategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type CreateInitialUserInput = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['Decimal']>;
  role?: InputMaybe<UserRoleType>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DecimalFilter = {
  equals?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<Scalars['Decimal']>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  not?: InputMaybe<DecimalFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']>>;
};

export type Faq = {
  __typename?: 'Faq';
  createdAt?: Maybe<Scalars['DateTime']>;
  desc?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  language?: Maybe<Scalars['String']>;
  lastModification?: Maybe<Scalars['DateTime']>;
  products?: Maybe<Array<Product>>;
  productsCount?: Maybe<Scalars['Int']>;
  statusView?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


export type FaqProductsArgs = {
  orderBy?: Array<ProductOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ProductWhereInput;
};


export type FaqProductsCountArgs = {
  where?: ProductWhereInput;
};

export type FaqCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  desc?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<Scalars['String']>;
  lastModification?: InputMaybe<Scalars['DateTime']>;
  products?: InputMaybe<ProductRelateToManyForCreateInput>;
  statusView?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type FaqOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  desc?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  language?: InputMaybe<OrderDirection>;
  lastModification?: InputMaybe<OrderDirection>;
  statusView?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type FaqUpdateArgs = {
  data: FaqUpdateInput;
  where: FaqWhereUniqueInput;
};

export type FaqUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  desc?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<Scalars['String']>;
  lastModification?: InputMaybe<Scalars['DateTime']>;
  products?: InputMaybe<ProductRelateToManyForUpdateInput>;
  statusView?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type FaqWhereInput = {
  AND?: InputMaybe<Array<FaqWhereInput>>;
  NOT?: InputMaybe<Array<FaqWhereInput>>;
  OR?: InputMaybe<Array<FaqWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  desc?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  language?: InputMaybe<StringFilter>;
  lastModification?: InputMaybe<DateTimeFilter>;
  products?: InputMaybe<ProductManyRelationFilter>;
  statusView?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type FaqWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type IdFilter = {
  equals?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilter>;
  notIn?: InputMaybe<Array<Scalars['ID']>>;
};

export enum ImageExtension {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png',
  Webp = 'webp'
}

export type ImageFieldInput = {
  upload: Scalars['Upload'];
};

export type ImageFieldOutput = {
  __typename?: 'ImageFieldOutput';
  extension: ImageExtension;
  filesize: Scalars['Int'];
  height: Scalars['Int'];
  id: Scalars['ID'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  enableSessionItem: Scalars['Boolean'];
  enableSignout: Scalars['Boolean'];
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  fieldMeta?: Maybe<Scalars['JSON']>;
  isFilterable: Scalars['Boolean'];
  isOrderable: Scalars['Boolean'];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String'];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars['String'];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars['Int'];
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  description?: Maybe<Scalars['String']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  hideCreate: Scalars['Boolean'];
  hideDelete: Scalars['Boolean'];
  initialColumns: Array<Scalars['String']>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean'];
  itemQueryName: Scalars['String'];
  key: Scalars['String'];
  label: Scalars['String'];
  labelField: Scalars['String'];
  listQueryName: Scalars['String'];
  pageSize: Scalars['Int'];
  path: Scalars['String'];
  plural: Scalars['String'];
  singular: Scalars['String'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  direction: KeystoneAdminUiSortDirection;
  field: Scalars['String'];
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export enum MagicLinkRedemptionErrorCode {
  Failure = 'FAILURE',
  TokenExpired = 'TOKEN_EXPIRED',
  TokenRedeemed = 'TOKEN_REDEEMED'
}

export type Mutation = {
  __typename?: 'Mutation';
  authWithEmail?: Maybe<Scalars['String']>;
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createAvatarUser?: Maybe<AvatarUser>;
  createAvatarUsers?: Maybe<Array<Maybe<AvatarUser>>>;
  createCategories?: Maybe<Array<Maybe<Category>>>;
  createCategory?: Maybe<Category>;
  createFaq?: Maybe<Faq>;
  createFaqs?: Maybe<Array<Maybe<Faq>>>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createOrder?: Maybe<Order>;
  createOrders?: Maybe<Array<Maybe<Order>>>;
  createPage?: Maybe<Page>;
  createPages?: Maybe<Array<Maybe<Page>>>;
  createPayment?: Maybe<Payment>;
  createPayments?: Maybe<Array<Maybe<Payment>>>;
  createPost?: Maybe<Post>;
  createPosts?: Maybe<Array<Maybe<Post>>>;
  createProduct?: Maybe<Product>;
  createProductReview?: Maybe<ProductReview>;
  createProductReviews?: Maybe<Array<Maybe<ProductReview>>>;
  createProducts?: Maybe<Array<Maybe<Product>>>;
  createService?: Maybe<Service>;
  createServices?: Maybe<Array<Maybe<Service>>>;
  createSourceClient?: Maybe<SourceClient>;
  createSourceClients?: Maybe<Array<Maybe<SourceClient>>>;
  createSubscription?: Maybe<Subscription>;
  createSubscriptions?: Maybe<Array<Maybe<Subscription>>>;
  createTag?: Maybe<Tag>;
  createTags?: Maybe<Array<Maybe<Tag>>>;
  createUser?: Maybe<User>;
  createUserService?: Maybe<UserService>;
  createUserServices?: Maybe<Array<Maybe<UserService>>>;
  createUserSubscription?: Maybe<UserSubscription>;
  createUserSubscriptions?: Maybe<Array<Maybe<UserSubscription>>>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  deleteAvatarUser?: Maybe<AvatarUser>;
  deleteAvatarUsers?: Maybe<Array<Maybe<AvatarUser>>>;
  deleteCart?: Maybe<Cart>;
  deleteCarts?: Maybe<Array<Maybe<Cart>>>;
  deleteCategories?: Maybe<Array<Maybe<Category>>>;
  deleteCategory?: Maybe<Category>;
  deleteFaq?: Maybe<Faq>;
  deleteFaqs?: Maybe<Array<Maybe<Faq>>>;
  deleteOrder?: Maybe<Order>;
  deleteOrders?: Maybe<Array<Maybe<Order>>>;
  deletePage?: Maybe<Page>;
  deletePages?: Maybe<Array<Maybe<Page>>>;
  deletePayment?: Maybe<Payment>;
  deletePayments?: Maybe<Array<Maybe<Payment>>>;
  deletePost?: Maybe<Post>;
  deletePosts?: Maybe<Array<Maybe<Post>>>;
  deleteProduct?: Maybe<Product>;
  deleteProductReview?: Maybe<ProductReview>;
  deleteProductReviews?: Maybe<Array<Maybe<ProductReview>>>;
  deleteProducts?: Maybe<Array<Maybe<Product>>>;
  deleteService?: Maybe<Service>;
  deleteServices?: Maybe<Array<Maybe<Service>>>;
  deleteSourceClient?: Maybe<SourceClient>;
  deleteSourceClients?: Maybe<Array<Maybe<SourceClient>>>;
  deleteSubscription?: Maybe<Subscription>;
  deleteSubscriptions?: Maybe<Array<Maybe<Subscription>>>;
  deleteTag?: Maybe<Tag>;
  deleteTags?: Maybe<Array<Maybe<Tag>>>;
  deleteUser?: Maybe<User>;
  deleteUserService?: Maybe<UserService>;
  deleteUserServices?: Maybe<Array<Maybe<UserService>>>;
  deleteUserSubscription?: Maybe<UserSubscription>;
  deleteUserSubscriptions?: Maybe<Array<Maybe<UserSubscription>>>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars['Boolean'];
  redeemUserMagicAuthToken: RedeemUserMagicAuthTokenResult;
  sendUserMagicAuthLink: Scalars['Boolean'];
  updateAvatarUser?: Maybe<AvatarUser>;
  updateAvatarUsers?: Maybe<Array<Maybe<AvatarUser>>>;
  updateCart?: Maybe<Cart>;
  updateCarts?: Maybe<Array<Maybe<Cart>>>;
  updateCategories?: Maybe<Array<Maybe<Category>>>;
  updateCategory?: Maybe<Category>;
  updateFaq?: Maybe<Faq>;
  updateFaqs?: Maybe<Array<Maybe<Faq>>>;
  updateOrder?: Maybe<Order>;
  updateOrders?: Maybe<Array<Maybe<Order>>>;
  updatePage?: Maybe<Page>;
  updatePages?: Maybe<Array<Maybe<Page>>>;
  updatePayment?: Maybe<Payment>;
  updatePayments?: Maybe<Array<Maybe<Payment>>>;
  updatePost?: Maybe<Post>;
  updatePosts?: Maybe<Array<Maybe<Post>>>;
  updateProduct?: Maybe<Product>;
  updateProductReview?: Maybe<ProductReview>;
  updateProductReviews?: Maybe<Array<Maybe<ProductReview>>>;
  updateProducts?: Maybe<Array<Maybe<Product>>>;
  updateService?: Maybe<Service>;
  updateServices?: Maybe<Array<Maybe<Service>>>;
  updateSourceClient?: Maybe<SourceClient>;
  updateSourceClients?: Maybe<Array<Maybe<SourceClient>>>;
  updateSubscription?: Maybe<Subscription>;
  updateSubscriptions?: Maybe<Array<Maybe<Subscription>>>;
  updateTag?: Maybe<Tag>;
  updateTags?: Maybe<Array<Maybe<Tag>>>;
  updateUser?: Maybe<User>;
  updateUserService?: Maybe<UserService>;
  updateUserServices?: Maybe<Array<Maybe<UserService>>>;
  updateUserSubscription?: Maybe<UserSubscription>;
  updateUserSubscriptions?: Maybe<Array<Maybe<UserSubscription>>>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
};


export type MutationAuthWithEmailArgs = {
  email: Scalars['String'];
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateAvatarUserArgs = {
  data: AvatarUserCreateInput;
};


export type MutationCreateAvatarUsersArgs = {
  data: Array<AvatarUserCreateInput>;
};


export type MutationCreateCategoriesArgs = {
  data: Array<CategoryCreateInput>;
};


export type MutationCreateCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationCreateFaqArgs = {
  data: FaqCreateInput;
};


export type MutationCreateFaqsArgs = {
  data: Array<FaqCreateInput>;
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};


export type MutationCreateOrderArgs = {
  data: OrderCreateInput;
};


export type MutationCreateOrdersArgs = {
  data: Array<OrderCreateInput>;
};


export type MutationCreatePageArgs = {
  data: PageCreateInput;
};


export type MutationCreatePagesArgs = {
  data: Array<PageCreateInput>;
};


export type MutationCreatePaymentArgs = {
  data: PaymentCreateInput;
};


export type MutationCreatePaymentsArgs = {
  data: Array<PaymentCreateInput>;
};


export type MutationCreatePostArgs = {
  data: PostCreateInput;
};


export type MutationCreatePostsArgs = {
  data: Array<PostCreateInput>;
};


export type MutationCreateProductArgs = {
  data: ProductCreateInput;
};


export type MutationCreateProductReviewArgs = {
  data: ProductReviewCreateInput;
};


export type MutationCreateProductReviewsArgs = {
  data: Array<ProductReviewCreateInput>;
};


export type MutationCreateProductsArgs = {
  data: Array<ProductCreateInput>;
};


export type MutationCreateServiceArgs = {
  data: ServiceCreateInput;
};


export type MutationCreateServicesArgs = {
  data: Array<ServiceCreateInput>;
};


export type MutationCreateSourceClientArgs = {
  data: SourceClientCreateInput;
};


export type MutationCreateSourceClientsArgs = {
  data: Array<SourceClientCreateInput>;
};


export type MutationCreateSubscriptionArgs = {
  data: SubscriptionCreateInput;
};


export type MutationCreateSubscriptionsArgs = {
  data: Array<SubscriptionCreateInput>;
};


export type MutationCreateTagArgs = {
  data: TagCreateInput;
};


export type MutationCreateTagsArgs = {
  data: Array<TagCreateInput>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUserServiceArgs = {
  data: UserServiceCreateInput;
};


export type MutationCreateUserServicesArgs = {
  data: Array<UserServiceCreateInput>;
};


export type MutationCreateUserSubscriptionArgs = {
  data: UserSubscriptionCreateInput;
};


export type MutationCreateUserSubscriptionsArgs = {
  data: Array<UserSubscriptionCreateInput>;
};


export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};


export type MutationDeleteAvatarUserArgs = {
  where: AvatarUserWhereUniqueInput;
};


export type MutationDeleteAvatarUsersArgs = {
  where: Array<AvatarUserWhereUniqueInput>;
};


export type MutationDeleteCartArgs = {
  where: CartWhereUniqueInput;
};


export type MutationDeleteCartsArgs = {
  where: Array<CartWhereUniqueInput>;
};


export type MutationDeleteCategoriesArgs = {
  where: Array<CategoryWhereUniqueInput>;
};


export type MutationDeleteCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type MutationDeleteFaqArgs = {
  where: FaqWhereUniqueInput;
};


export type MutationDeleteFaqsArgs = {
  where: Array<FaqWhereUniqueInput>;
};


export type MutationDeleteOrderArgs = {
  where: OrderWhereUniqueInput;
};


export type MutationDeleteOrdersArgs = {
  where: Array<OrderWhereUniqueInput>;
};


export type MutationDeletePageArgs = {
  where: PageWhereUniqueInput;
};


export type MutationDeletePagesArgs = {
  where: Array<PageWhereUniqueInput>;
};


export type MutationDeletePaymentArgs = {
  where: PaymentWhereUniqueInput;
};


export type MutationDeletePaymentsArgs = {
  where: Array<PaymentWhereUniqueInput>;
};


export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationDeletePostsArgs = {
  where: Array<PostWhereUniqueInput>;
};


export type MutationDeleteProductArgs = {
  where: ProductWhereUniqueInput;
};


export type MutationDeleteProductReviewArgs = {
  where: ProductReviewWhereUniqueInput;
};


export type MutationDeleteProductReviewsArgs = {
  where: Array<ProductReviewWhereUniqueInput>;
};


export type MutationDeleteProductsArgs = {
  where: Array<ProductWhereUniqueInput>;
};


export type MutationDeleteServiceArgs = {
  where: ServiceWhereUniqueInput;
};


export type MutationDeleteServicesArgs = {
  where: Array<ServiceWhereUniqueInput>;
};


export type MutationDeleteSourceClientArgs = {
  where: SourceClientWhereUniqueInput;
};


export type MutationDeleteSourceClientsArgs = {
  where: Array<SourceClientWhereUniqueInput>;
};


export type MutationDeleteSubscriptionArgs = {
  where: SubscriptionWhereUniqueInput;
};


export type MutationDeleteSubscriptionsArgs = {
  where: Array<SubscriptionWhereUniqueInput>;
};


export type MutationDeleteTagArgs = {
  where: TagWhereUniqueInput;
};


export type MutationDeleteTagsArgs = {
  where: Array<TagWhereUniqueInput>;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUserServiceArgs = {
  where: UserServiceWhereUniqueInput;
};


export type MutationDeleteUserServicesArgs = {
  where: Array<UserServiceWhereUniqueInput>;
};


export type MutationDeleteUserSubscriptionArgs = {
  where: UserSubscriptionWhereUniqueInput;
};


export type MutationDeleteUserSubscriptionsArgs = {
  where: Array<UserSubscriptionWhereUniqueInput>;
};


export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};


export type MutationRedeemUserMagicAuthTokenArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
};


export type MutationSendUserMagicAuthLinkArgs = {
  email: Scalars['String'];
};


export type MutationUpdateAvatarUserArgs = {
  data: AvatarUserUpdateInput;
  where: AvatarUserWhereUniqueInput;
};


export type MutationUpdateAvatarUsersArgs = {
  data: Array<AvatarUserUpdateArgs>;
};


export type MutationUpdateCartArgs = {
  data: CartUpdateInput;
  where: CartWhereUniqueInput;
};


export type MutationUpdateCartsArgs = {
  data: Array<CartUpdateArgs>;
};


export type MutationUpdateCategoriesArgs = {
  data: Array<CategoryUpdateArgs>;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpdateFaqArgs = {
  data: FaqUpdateInput;
  where: FaqWhereUniqueInput;
};


export type MutationUpdateFaqsArgs = {
  data: Array<FaqUpdateArgs>;
};


export type MutationUpdateOrderArgs = {
  data: OrderUpdateInput;
  where: OrderWhereUniqueInput;
};


export type MutationUpdateOrdersArgs = {
  data: Array<OrderUpdateArgs>;
};


export type MutationUpdatePageArgs = {
  data: PageUpdateInput;
  where: PageWhereUniqueInput;
};


export type MutationUpdatePagesArgs = {
  data: Array<PageUpdateArgs>;
};


export type MutationUpdatePaymentArgs = {
  data: PaymentUpdateInput;
  where: PaymentWhereUniqueInput;
};


export type MutationUpdatePaymentsArgs = {
  data: Array<PaymentUpdateArgs>;
};


export type MutationUpdatePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationUpdatePostsArgs = {
  data: Array<PostUpdateArgs>;
};


export type MutationUpdateProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpdateProductReviewArgs = {
  data: ProductReviewUpdateInput;
  where: ProductReviewWhereUniqueInput;
};


export type MutationUpdateProductReviewsArgs = {
  data: Array<ProductReviewUpdateArgs>;
};


export type MutationUpdateProductsArgs = {
  data: Array<ProductUpdateArgs>;
};


export type MutationUpdateServiceArgs = {
  data: ServiceUpdateInput;
  where: ServiceWhereUniqueInput;
};


export type MutationUpdateServicesArgs = {
  data: Array<ServiceUpdateArgs>;
};


export type MutationUpdateSourceClientArgs = {
  data: SourceClientUpdateInput;
  where: SourceClientWhereUniqueInput;
};


export type MutationUpdateSourceClientsArgs = {
  data: Array<SourceClientUpdateArgs>;
};


export type MutationUpdateSubscriptionArgs = {
  data: SubscriptionUpdateInput;
  where: SubscriptionWhereUniqueInput;
};


export type MutationUpdateSubscriptionsArgs = {
  data: Array<SubscriptionUpdateArgs>;
};


export type MutationUpdateTagArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};


export type MutationUpdateTagsArgs = {
  data: Array<TagUpdateArgs>;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUserServiceArgs = {
  data: UserServiceUpdateInput;
  where: UserServiceWhereUniqueInput;
};


export type MutationUpdateUserServicesArgs = {
  data: Array<UserServiceUpdateArgs>;
};


export type MutationUpdateUserSubscriptionArgs = {
  data: UserSubscriptionUpdateInput;
  where: UserSubscriptionWhereUniqueInput;
};


export type MutationUpdateUserSubscriptionsArgs = {
  data: Array<UserSubscriptionUpdateArgs>;
};


export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Order = {
  __typename?: 'Order';
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  dept?: Maybe<Scalars['Int']>;
  employee?: Maybe<User>;
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  lastModification?: Maybe<Scalars['DateTime']>;
  leftPayments?: Maybe<Scalars['Int']>;
  nextPayment?: Maybe<Scalars['Int']>;
  payed?: Maybe<Scalars['Int']>;
  payments?: Maybe<Array<Payment>>;
  paymentsCount?: Maybe<Scalars['Int']>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']>;
  status?: Maybe<OrderStatusType>;
  student?: Maybe<User>;
  subscriptions?: Maybe<Array<Subscription>>;
  subscriptionsCount?: Maybe<Scalars['Int']>;
};


export type OrderPaymentsArgs = {
  orderBy?: Array<PaymentOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: PaymentWhereInput;
};


export type OrderPaymentsCountArgs = {
  where?: PaymentWhereInput;
};


export type OrderServicesArgs = {
  orderBy?: Array<ServiceOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ServiceWhereInput;
};


export type OrderServicesCountArgs = {
  where?: ServiceWhereInput;
};


export type OrderSubscriptionsArgs = {
  orderBy?: Array<SubscriptionOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: SubscriptionWhereInput;
};


export type OrderSubscriptionsCountArgs = {
  where?: SubscriptionWhereInput;
};

export type OrderCreateInput = {
  amount?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  employee?: InputMaybe<UserRelateToOneForCreateInput>;
  lastModification?: InputMaybe<Scalars['DateTime']>;
  leftPayments?: InputMaybe<Scalars['Int']>;
  payments?: InputMaybe<PaymentRelateToManyForCreateInput>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  status?: InputMaybe<OrderStatusType>;
  student?: InputMaybe<UserRelateToOneForCreateInput>;
  subscriptions?: InputMaybe<SubscriptionRelateToManyForCreateInput>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type OrderOrderByInput = {
  amount?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  lastModification?: InputMaybe<OrderDirection>;
  leftPayments?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
};

export type OrderRelateToOneForCreateInput = {
  connect?: InputMaybe<OrderWhereUniqueInput>;
  create?: InputMaybe<OrderCreateInput>;
};

export type OrderRelateToOneForUpdateInput = {
  connect?: InputMaybe<OrderWhereUniqueInput>;
  create?: InputMaybe<OrderCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export enum OrderStatusType {
  Cancelled = 'cancelled',
  Created = 'created',
  Finished = 'finished',
  Frozen = 'frozen',
  Processing = 'processing'
}

export type OrderStatusTypeNullableFilter = {
  equals?: InputMaybe<OrderStatusType>;
  in?: InputMaybe<Array<OrderStatusType>>;
  not?: InputMaybe<OrderStatusTypeNullableFilter>;
  notIn?: InputMaybe<Array<OrderStatusType>>;
};

export type OrderUpdateArgs = {
  data: OrderUpdateInput;
  where: OrderWhereUniqueInput;
};

export type OrderUpdateInput = {
  amount?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  employee?: InputMaybe<UserRelateToOneForUpdateInput>;
  lastModification?: InputMaybe<Scalars['DateTime']>;
  leftPayments?: InputMaybe<Scalars['Int']>;
  payments?: InputMaybe<PaymentRelateToManyForUpdateInput>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  status?: InputMaybe<OrderStatusType>;
  student?: InputMaybe<UserRelateToOneForUpdateInput>;
  subscriptions?: InputMaybe<SubscriptionRelateToManyForUpdateInput>;
};

export type OrderWhereInput = {
  AND?: InputMaybe<Array<OrderWhereInput>>;
  NOT?: InputMaybe<Array<OrderWhereInput>>;
  OR?: InputMaybe<Array<OrderWhereInput>>;
  amount?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  employee?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<IdFilter>;
  lastModification?: InputMaybe<DateTimeFilter>;
  leftPayments?: InputMaybe<IntFilter>;
  payments?: InputMaybe<PaymentManyRelationFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  status?: InputMaybe<OrderStatusTypeNullableFilter>;
  student?: InputMaybe<UserWhereInput>;
  subscriptions?: InputMaybe<SubscriptionManyRelationFilter>;
};

export type OrderWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Page = {
  __typename?: 'Page';
  author?: Maybe<User>;
  content?: Maybe<Page_Content_Document>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  language?: Maybe<Scalars['String']>;
  lastModification?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  statusView?: Maybe<Scalars['String']>;
  tag?: Maybe<Array<Tag>>;
  tagCount?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};


export type PageTagArgs = {
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: TagWhereInput;
};


export type PageTagCountArgs = {
  where?: TagWhereInput;
};

export type PageCreateInput = {
  author?: InputMaybe<UserRelateToOneForCreateInput>;
  content?: InputMaybe<Scalars['JSON']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<Scalars['String']>;
  lastModification?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  statusView?: InputMaybe<Scalars['String']>;
  tag?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type PageOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  language?: InputMaybe<OrderDirection>;
  lastModification?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  statusView?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type PageUpdateArgs = {
  data: PageUpdateInput;
  where: PageWhereUniqueInput;
};

export type PageUpdateInput = {
  author?: InputMaybe<UserRelateToOneForUpdateInput>;
  content?: InputMaybe<Scalars['JSON']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<Scalars['String']>;
  lastModification?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  statusView?: InputMaybe<Scalars['String']>;
  tag?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type PageWhereInput = {
  AND?: InputMaybe<Array<PageWhereInput>>;
  NOT?: InputMaybe<Array<PageWhereInput>>;
  OR?: InputMaybe<Array<PageWhereInput>>;
  author?: InputMaybe<UserWhereInput>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  language?: InputMaybe<StringFilter>;
  lastModification?: InputMaybe<DateTimeFilter>;
  slug?: InputMaybe<StringFilter>;
  statusView?: InputMaybe<StringFilter>;
  tag?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Page_Content_Document = {
  __typename?: 'Page_content_Document';
  document: Scalars['JSON'];
};


export type Page_Content_DocumentDocumentArgs = {
  hydrateRelationships?: Scalars['Boolean'];
};

export type PasswordFilter = {
  isSet: Scalars['Boolean'];
};

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean'];
};

export type Payment = {
  __typename?: 'Payment';
  createdAt?: Maybe<Scalars['DateTime']>;
  externalId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastModification?: Maybe<Scalars['DateTime']>;
  order?: Maybe<Order>;
  receiptId?: Maybe<Scalars['String']>;
  status?: Maybe<PaymentStatusType>;
  student?: Maybe<User>;
  sum?: Maybe<Scalars['Int']>;
};

export type PaymentCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  externalId?: InputMaybe<Scalars['String']>;
  lastModification?: InputMaybe<Scalars['DateTime']>;
  order?: InputMaybe<OrderRelateToOneForCreateInput>;
  receiptId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<PaymentStatusType>;
  student?: InputMaybe<UserRelateToOneForCreateInput>;
  sum?: InputMaybe<Scalars['Int']>;
};

export type PaymentManyRelationFilter = {
  every?: InputMaybe<PaymentWhereInput>;
  none?: InputMaybe<PaymentWhereInput>;
  some?: InputMaybe<PaymentWhereInput>;
};

export type PaymentOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  externalId?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  lastModification?: InputMaybe<OrderDirection>;
  receiptId?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  sum?: InputMaybe<OrderDirection>;
};

export type PaymentRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<PaymentWhereUniqueInput>>;
  create?: InputMaybe<Array<PaymentCreateInput>>;
};

export type PaymentRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<PaymentWhereUniqueInput>>;
  create?: InputMaybe<Array<PaymentCreateInput>>;
  disconnect?: InputMaybe<Array<PaymentWhereUniqueInput>>;
  set?: InputMaybe<Array<PaymentWhereUniqueInput>>;
};

export enum PaymentStatusType {
  Cancelled = 'cancelled',
  Created = 'created',
  Error = 'error',
  Successfully = 'successfully'
}

export type PaymentStatusTypeNullableFilter = {
  equals?: InputMaybe<PaymentStatusType>;
  in?: InputMaybe<Array<PaymentStatusType>>;
  not?: InputMaybe<PaymentStatusTypeNullableFilter>;
  notIn?: InputMaybe<Array<PaymentStatusType>>;
};

export type PaymentUpdateArgs = {
  data: PaymentUpdateInput;
  where: PaymentWhereUniqueInput;
};

export type PaymentUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  externalId?: InputMaybe<Scalars['String']>;
  lastModification?: InputMaybe<Scalars['DateTime']>;
  order?: InputMaybe<OrderRelateToOneForUpdateInput>;
  receiptId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<PaymentStatusType>;
  student?: InputMaybe<UserRelateToOneForUpdateInput>;
  sum?: InputMaybe<Scalars['Int']>;
};

export type PaymentWhereInput = {
  AND?: InputMaybe<Array<PaymentWhereInput>>;
  NOT?: InputMaybe<Array<PaymentWhereInput>>;
  OR?: InputMaybe<Array<PaymentWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  externalId?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  lastModification?: InputMaybe<DateTimeFilter>;
  order?: InputMaybe<OrderWhereInput>;
  receiptId?: InputMaybe<StringFilter>;
  status?: InputMaybe<PaymentStatusTypeNullableFilter>;
  student?: InputMaybe<UserWhereInput>;
  sum?: InputMaybe<IntNullableFilter>;
};

export type PaymentWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Post = {
  __typename?: 'Post';
  author?: Maybe<User>;
  content?: Maybe<Post_Content_Document>;
  cover?: Maybe<ImageFieldOutput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  language?: Maybe<Scalars['String']>;
  lastModification?: Maybe<Scalars['DateTime']>;
  statusView?: Maybe<Scalars['String']>;
  tag?: Maybe<Array<Tag>>;
  tagCount?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};


export type PostTagArgs = {
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: TagWhereInput;
};


export type PostTagCountArgs = {
  where?: TagWhereInput;
};

export type PostCreateInput = {
  author?: InputMaybe<UserRelateToOneForCreateInput>;
  content?: InputMaybe<Scalars['JSON']>;
  cover?: InputMaybe<ImageFieldInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<Scalars['String']>;
  lastModification?: InputMaybe<Scalars['DateTime']>;
  statusView?: InputMaybe<Scalars['String']>;
  tag?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type PostOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  language?: InputMaybe<OrderDirection>;
  lastModification?: InputMaybe<OrderDirection>;
  statusView?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type PostUpdateArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};

export type PostUpdateInput = {
  author?: InputMaybe<UserRelateToOneForUpdateInput>;
  content?: InputMaybe<Scalars['JSON']>;
  cover?: InputMaybe<ImageFieldInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<Scalars['String']>;
  lastModification?: InputMaybe<Scalars['DateTime']>;
  statusView?: InputMaybe<Scalars['String']>;
  tag?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type PostWhereInput = {
  AND?: InputMaybe<Array<PostWhereInput>>;
  NOT?: InputMaybe<Array<PostWhereInput>>;
  OR?: InputMaybe<Array<PostWhereInput>>;
  author?: InputMaybe<UserWhereInput>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  language?: InputMaybe<StringFilter>;
  lastModification?: InputMaybe<DateTimeFilter>;
  statusView?: InputMaybe<StringFilter>;
  tag?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PostWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Post_Content_Document = {
  __typename?: 'Post_content_Document';
  document: Scalars['JSON'];
};


export type Post_Content_DocumentDocumentArgs = {
  hydrateRelationships?: Scalars['Boolean'];
};

export type Product = {
  __typename?: 'Product';
  categories?: Maybe<Array<Category>>;
  categoriesCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  images?: Maybe<ImageFieldOutput>;
  language?: Maybe<Scalars['String']>;
  lastModification?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  statusView?: Maybe<Scalars['String']>;
  tag?: Maybe<Array<Tag>>;
  tagCount?: Maybe<Scalars['Int']>;
};


export type ProductCategoriesArgs = {
  orderBy?: Array<CategoryOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: CategoryWhereInput;
};


export type ProductCategoriesCountArgs = {
  where?: CategoryWhereInput;
};


export type ProductTagArgs = {
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: TagWhereInput;
};


export type ProductTagCountArgs = {
  where?: TagWhereInput;
};

export type ProductCreateInput = {
  categories?: InputMaybe<CategoryRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<ImageFieldInput>;
  language?: InputMaybe<Scalars['String']>;
  lastModification?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  statusView?: InputMaybe<Scalars['String']>;
  tag?: InputMaybe<TagRelateToManyForCreateInput>;
};

export type ProductManyRelationFilter = {
  every?: InputMaybe<ProductWhereInput>;
  none?: InputMaybe<ProductWhereInput>;
  some?: InputMaybe<ProductWhereInput>;
};

export type ProductOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  language?: InputMaybe<OrderDirection>;
  lastModification?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  price?: InputMaybe<OrderDirection>;
  statusView?: InputMaybe<OrderDirection>;
};

export type ProductRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  create?: InputMaybe<Array<ProductCreateInput>>;
};

export type ProductRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  create?: InputMaybe<Array<ProductCreateInput>>;
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductWhereUniqueInput>>;
};

export type ProductReview = {
  __typename?: 'ProductReview';
  createdAt?: Maybe<Scalars['DateTime']>;
  desc?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  language?: Maybe<Scalars['String']>;
  lastModification?: Maybe<Scalars['DateTime']>;
  media?: Maybe<Scalars['String']>;
  products?: Maybe<Array<Product>>;
  productsCount?: Maybe<Scalars['Int']>;
  statusView?: Maybe<Scalars['String']>;
  student?: Maybe<User>;
};


export type ProductReviewProductsArgs = {
  orderBy?: Array<ProductOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ProductWhereInput;
};


export type ProductReviewProductsCountArgs = {
  where?: ProductWhereInput;
};

export type ProductReviewCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  desc?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<Scalars['String']>;
  lastModification?: InputMaybe<Scalars['DateTime']>;
  media?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<ProductRelateToManyForCreateInput>;
  statusView?: InputMaybe<Scalars['String']>;
  student?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type ProductReviewOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  desc?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  language?: InputMaybe<OrderDirection>;
  lastModification?: InputMaybe<OrderDirection>;
  media?: InputMaybe<OrderDirection>;
  statusView?: InputMaybe<OrderDirection>;
};

export type ProductReviewUpdateArgs = {
  data: ProductReviewUpdateInput;
  where: ProductReviewWhereUniqueInput;
};

export type ProductReviewUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  desc?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<Scalars['String']>;
  lastModification?: InputMaybe<Scalars['DateTime']>;
  media?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<ProductRelateToManyForUpdateInput>;
  statusView?: InputMaybe<Scalars['String']>;
  student?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type ProductReviewWhereInput = {
  AND?: InputMaybe<Array<ProductReviewWhereInput>>;
  NOT?: InputMaybe<Array<ProductReviewWhereInput>>;
  OR?: InputMaybe<Array<ProductReviewWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  desc?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  language?: InputMaybe<StringFilter>;
  lastModification?: InputMaybe<DateTimeFilter>;
  media?: InputMaybe<StringFilter>;
  products?: InputMaybe<ProductManyRelationFilter>;
  statusView?: InputMaybe<StringFilter>;
  student?: InputMaybe<UserWhereInput>;
};

export type ProductReviewWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type ProductUpdateArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpdateInput = {
  categories?: InputMaybe<CategoryRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<ImageFieldInput>;
  language?: InputMaybe<Scalars['String']>;
  lastModification?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  statusView?: InputMaybe<Scalars['String']>;
  tag?: InputMaybe<TagRelateToManyForUpdateInput>;
};

export type ProductWhereInput = {
  AND?: InputMaybe<Array<ProductWhereInput>>;
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  OR?: InputMaybe<Array<ProductWhereInput>>;
  categories?: InputMaybe<CategoryManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  language?: InputMaybe<StringFilter>;
  lastModification?: InputMaybe<DateTimeFilter>;
  name?: InputMaybe<StringFilter>;
  price?: InputMaybe<IntNullableFilter>;
  statusView?: InputMaybe<StringFilter>;
  tag?: InputMaybe<TagManyRelationFilter>;
};

export type ProductWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  authenticatedItem?: Maybe<AuthenticatedItem>;
  avatarUser?: Maybe<AvatarUser>;
  avatarUsers?: Maybe<Array<AvatarUser>>;
  avatarUsersCount?: Maybe<Scalars['Int']>;
  cart?: Maybe<Cart>;
  carts?: Maybe<Array<Cart>>;
  cartsCount?: Maybe<Scalars['Int']>;
  categories?: Maybe<Array<Category>>;
  categoriesCount?: Maybe<Scalars['Int']>;
  category?: Maybe<Category>;
  faq?: Maybe<Faq>;
  faqs?: Maybe<Array<Faq>>;
  faqsCount?: Maybe<Scalars['Int']>;
  keystone: KeystoneMeta;
  order?: Maybe<Order>;
  orders?: Maybe<Array<Order>>;
  ordersCount?: Maybe<Scalars['Int']>;
  page?: Maybe<Page>;
  pages?: Maybe<Array<Page>>;
  pagesCount?: Maybe<Scalars['Int']>;
  payment?: Maybe<Payment>;
  payments?: Maybe<Array<Payment>>;
  paymentsCount?: Maybe<Scalars['Int']>;
  post?: Maybe<Post>;
  posts?: Maybe<Array<Post>>;
  postsCount?: Maybe<Scalars['Int']>;
  product?: Maybe<Product>;
  productReview?: Maybe<ProductReview>;
  productReviews?: Maybe<Array<ProductReview>>;
  productReviewsCount?: Maybe<Scalars['Int']>;
  products?: Maybe<Array<Product>>;
  productsCount?: Maybe<Scalars['Int']>;
  service?: Maybe<Service>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']>;
  sourceClient?: Maybe<SourceClient>;
  sourceClients?: Maybe<Array<SourceClient>>;
  sourceClientsCount?: Maybe<Scalars['Int']>;
  subscription?: Maybe<Subscription>;
  subscriptions?: Maybe<Array<Subscription>>;
  subscriptionsCount?: Maybe<Scalars['Int']>;
  tag?: Maybe<Tag>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
  userService?: Maybe<UserService>;
  userServices?: Maybe<Array<UserService>>;
  userServicesCount?: Maybe<Scalars['Int']>;
  userSubscription?: Maybe<UserSubscription>;
  userSubscriptions?: Maybe<Array<UserSubscription>>;
  userSubscriptionsCount?: Maybe<Scalars['Int']>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']>;
};


export type QueryAvatarUserArgs = {
  where: AvatarUserWhereUniqueInput;
};


export type QueryAvatarUsersArgs = {
  orderBy?: Array<AvatarUserOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: AvatarUserWhereInput;
};


export type QueryAvatarUsersCountArgs = {
  where?: AvatarUserWhereInput;
};


export type QueryCartArgs = {
  where: CartWhereUniqueInput;
};


export type QueryCartsArgs = {
  orderBy?: Array<CartOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: CartWhereInput;
};


export type QueryCartsCountArgs = {
  where?: CartWhereInput;
};


export type QueryCategoriesArgs = {
  orderBy?: Array<CategoryOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: CategoryWhereInput;
};


export type QueryCategoriesCountArgs = {
  where?: CategoryWhereInput;
};


export type QueryCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type QueryFaqArgs = {
  where: FaqWhereUniqueInput;
};


export type QueryFaqsArgs = {
  orderBy?: Array<FaqOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: FaqWhereInput;
};


export type QueryFaqsCountArgs = {
  where?: FaqWhereInput;
};


export type QueryOrderArgs = {
  where: OrderWhereUniqueInput;
};


export type QueryOrdersArgs = {
  orderBy?: Array<OrderOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: OrderWhereInput;
};


export type QueryOrdersCountArgs = {
  where?: OrderWhereInput;
};


export type QueryPageArgs = {
  where: PageWhereUniqueInput;
};


export type QueryPagesArgs = {
  orderBy?: Array<PageOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: PageWhereInput;
};


export type QueryPagesCountArgs = {
  where?: PageWhereInput;
};


export type QueryPaymentArgs = {
  where: PaymentWhereUniqueInput;
};


export type QueryPaymentsArgs = {
  orderBy?: Array<PaymentOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: PaymentWhereInput;
};


export type QueryPaymentsCountArgs = {
  where?: PaymentWhereInput;
};


export type QueryPostArgs = {
  where: PostWhereUniqueInput;
};


export type QueryPostsArgs = {
  orderBy?: Array<PostOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: PostWhereInput;
};


export type QueryPostsCountArgs = {
  where?: PostWhereInput;
};


export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryProductReviewArgs = {
  where: ProductReviewWhereUniqueInput;
};


export type QueryProductReviewsArgs = {
  orderBy?: Array<ProductReviewOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ProductReviewWhereInput;
};


export type QueryProductReviewsCountArgs = {
  where?: ProductReviewWhereInput;
};


export type QueryProductsArgs = {
  orderBy?: Array<ProductOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ProductWhereInput;
};


export type QueryProductsCountArgs = {
  where?: ProductWhereInput;
};


export type QueryServiceArgs = {
  where: ServiceWhereUniqueInput;
};


export type QueryServicesArgs = {
  orderBy?: Array<ServiceOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ServiceWhereInput;
};


export type QueryServicesCountArgs = {
  where?: ServiceWhereInput;
};


export type QuerySourceClientArgs = {
  where: SourceClientWhereUniqueInput;
};


export type QuerySourceClientsArgs = {
  orderBy?: Array<SourceClientOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: SourceClientWhereInput;
};


export type QuerySourceClientsCountArgs = {
  where?: SourceClientWhereInput;
};


export type QuerySubscriptionArgs = {
  where: SubscriptionWhereUniqueInput;
};


export type QuerySubscriptionsArgs = {
  orderBy?: Array<SubscriptionOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: SubscriptionWhereInput;
};


export type QuerySubscriptionsCountArgs = {
  where?: SubscriptionWhereInput;
};


export type QueryTagArgs = {
  where: TagWhereUniqueInput;
};


export type QueryTagsArgs = {
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: TagWhereInput;
};


export type QueryTagsCountArgs = {
  where?: TagWhereInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUserServiceArgs = {
  where: UserServiceWhereUniqueInput;
};


export type QueryUserServicesArgs = {
  orderBy?: Array<UserServiceOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserServiceWhereInput;
};


export type QueryUserServicesCountArgs = {
  where?: UserServiceWhereInput;
};


export type QueryUserSubscriptionArgs = {
  where: UserSubscriptionWhereUniqueInput;
};


export type QueryUserSubscriptionsArgs = {
  orderBy?: Array<UserSubscriptionOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserSubscriptionWhereInput;
};


export type QueryUserSubscriptionsCountArgs = {
  where?: UserSubscriptionWhereInput;
};


export type QueryUsersArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserWhereInput;
};


export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RedeemUserMagicAuthTokenFailure = {
  __typename?: 'RedeemUserMagicAuthTokenFailure';
  code: MagicLinkRedemptionErrorCode;
  message: Scalars['String'];
};

export type RedeemUserMagicAuthTokenResult = RedeemUserMagicAuthTokenFailure | RedeemUserMagicAuthTokenSuccess;

export type RedeemUserMagicAuthTokenSuccess = {
  __typename?: 'RedeemUserMagicAuthTokenSuccess';
  item: User;
  token: Scalars['String'];
};

export type Service = {
  __typename?: 'Service';
  categories?: Maybe<Array<Category>>;
  categoriesCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  items?: Maybe<Array<UserService>>;
  itemsCount?: Maybe<Scalars['Int']>;
  language?: Maybe<Scalars['String']>;
  lastModification?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  statusView?: Maybe<Scalars['String']>;
};


export type ServiceCategoriesArgs = {
  orderBy?: Array<CategoryOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: CategoryWhereInput;
};


export type ServiceCategoriesCountArgs = {
  where?: CategoryWhereInput;
};


export type ServiceItemsArgs = {
  orderBy?: Array<UserServiceOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserServiceWhereInput;
};


export type ServiceItemsCountArgs = {
  where?: UserServiceWhereInput;
};

export type ServiceCreateInput = {
  categories?: InputMaybe<CategoryRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  items?: InputMaybe<UserServiceRelateToManyForCreateInput>;
  language?: InputMaybe<Scalars['String']>;
  lastModification?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  statusView?: InputMaybe<Scalars['String']>;
};

export type ServiceManyRelationFilter = {
  every?: InputMaybe<ServiceWhereInput>;
  none?: InputMaybe<ServiceWhereInput>;
  some?: InputMaybe<ServiceWhereInput>;
};

export type ServiceOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  language?: InputMaybe<OrderDirection>;
  lastModification?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  price?: InputMaybe<OrderDirection>;
  statusView?: InputMaybe<OrderDirection>;
};

export type ServiceRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ServiceWhereUniqueInput>>;
  create?: InputMaybe<Array<ServiceCreateInput>>;
};

export type ServiceRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ServiceWhereUniqueInput>>;
  create?: InputMaybe<Array<ServiceCreateInput>>;
  disconnect?: InputMaybe<Array<ServiceWhereUniqueInput>>;
  set?: InputMaybe<Array<ServiceWhereUniqueInput>>;
};

export type ServiceRelateToOneForCreateInput = {
  connect?: InputMaybe<ServiceWhereUniqueInput>;
  create?: InputMaybe<ServiceCreateInput>;
};

export type ServiceRelateToOneForUpdateInput = {
  connect?: InputMaybe<ServiceWhereUniqueInput>;
  create?: InputMaybe<ServiceCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type ServiceUpdateArgs = {
  data: ServiceUpdateInput;
  where: ServiceWhereUniqueInput;
};

export type ServiceUpdateInput = {
  categories?: InputMaybe<CategoryRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  items?: InputMaybe<UserServiceRelateToManyForUpdateInput>;
  language?: InputMaybe<Scalars['String']>;
  lastModification?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  statusView?: InputMaybe<Scalars['String']>;
};

export type ServiceWhereInput = {
  AND?: InputMaybe<Array<ServiceWhereInput>>;
  NOT?: InputMaybe<Array<ServiceWhereInput>>;
  OR?: InputMaybe<Array<ServiceWhereInput>>;
  categories?: InputMaybe<CategoryManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  items?: InputMaybe<UserServiceManyRelationFilter>;
  language?: InputMaybe<StringFilter>;
  lastModification?: InputMaybe<DateTimeFilter>;
  name?: InputMaybe<StringFilter>;
  price?: InputMaybe<IntNullableFilter>;
  statusView?: InputMaybe<StringFilter>;
};

export type ServiceWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type SourceClient = {
  __typename?: 'SourceClient';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  lastModification?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<SourceClient>;
};

export type SourceClientCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  lastModification?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<SourceClientRelateToOneForCreateInput>;
};

export type SourceClientManyRelationFilter = {
  every?: InputMaybe<SourceClientWhereInput>;
  none?: InputMaybe<SourceClientWhereInput>;
  some?: InputMaybe<SourceClientWhereInput>;
};

export type SourceClientOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  lastModification?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type SourceClientRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<SourceClientWhereUniqueInput>>;
  create?: InputMaybe<Array<SourceClientCreateInput>>;
};

export type SourceClientRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<SourceClientWhereUniqueInput>>;
  create?: InputMaybe<Array<SourceClientCreateInput>>;
  disconnect?: InputMaybe<Array<SourceClientWhereUniqueInput>>;
  set?: InputMaybe<Array<SourceClientWhereUniqueInput>>;
};

export type SourceClientRelateToOneForCreateInput = {
  connect?: InputMaybe<SourceClientWhereUniqueInput>;
  create?: InputMaybe<SourceClientCreateInput>;
};

export type SourceClientRelateToOneForUpdateInput = {
  connect?: InputMaybe<SourceClientWhereUniqueInput>;
  create?: InputMaybe<SourceClientCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type SourceClientUpdateArgs = {
  data: SourceClientUpdateInput;
  where: SourceClientWhereUniqueInput;
};

export type SourceClientUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  lastModification?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<SourceClientRelateToOneForUpdateInput>;
};

export type SourceClientWhereInput = {
  AND?: InputMaybe<Array<SourceClientWhereInput>>;
  NOT?: InputMaybe<Array<SourceClientWhereInput>>;
  OR?: InputMaybe<Array<SourceClientWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  lastModification?: InputMaybe<DateTimeFilter>;
  name?: InputMaybe<StringFilter>;
  parent?: InputMaybe<SourceClientWhereInput>;
};

export type SourceClientWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  items?: Maybe<Array<UserSubscription>>;
  itemsCount?: Maybe<Scalars['Int']>;
  language?: Maybe<Scalars['String']>;
  lastModification?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  period?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  statusView?: Maybe<Scalars['String']>;
  visitCount?: Maybe<Scalars['Int']>;
};


export type SubscriptionItemsArgs = {
  orderBy?: Array<UserSubscriptionOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserSubscriptionWhereInput;
};


export type SubscriptionItemsCountArgs = {
  where?: UserSubscriptionWhereInput;
};

export type SubscriptionCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  items?: InputMaybe<UserSubscriptionRelateToManyForCreateInput>;
  language?: InputMaybe<Scalars['String']>;
  lastModification?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  period?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Int']>;
  statusView?: InputMaybe<Scalars['String']>;
  visitCount?: InputMaybe<Scalars['Int']>;
};

export type SubscriptionManyRelationFilter = {
  every?: InputMaybe<SubscriptionWhereInput>;
  none?: InputMaybe<SubscriptionWhereInput>;
  some?: InputMaybe<SubscriptionWhereInput>;
};

export type SubscriptionOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  language?: InputMaybe<OrderDirection>;
  lastModification?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  period?: InputMaybe<OrderDirection>;
  price?: InputMaybe<OrderDirection>;
  statusView?: InputMaybe<OrderDirection>;
  visitCount?: InputMaybe<OrderDirection>;
};

export type SubscriptionRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<SubscriptionWhereUniqueInput>>;
  create?: InputMaybe<Array<SubscriptionCreateInput>>;
};

export type SubscriptionRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<SubscriptionWhereUniqueInput>>;
  create?: InputMaybe<Array<SubscriptionCreateInput>>;
  disconnect?: InputMaybe<Array<SubscriptionWhereUniqueInput>>;
  set?: InputMaybe<Array<SubscriptionWhereUniqueInput>>;
};

export type SubscriptionRelateToOneForCreateInput = {
  connect?: InputMaybe<SubscriptionWhereUniqueInput>;
  create?: InputMaybe<SubscriptionCreateInput>;
};

export type SubscriptionRelateToOneForUpdateInput = {
  connect?: InputMaybe<SubscriptionWhereUniqueInput>;
  create?: InputMaybe<SubscriptionCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type SubscriptionUpdateArgs = {
  data: SubscriptionUpdateInput;
  where: SubscriptionWhereUniqueInput;
};

export type SubscriptionUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  items?: InputMaybe<UserSubscriptionRelateToManyForUpdateInput>;
  language?: InputMaybe<Scalars['String']>;
  lastModification?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  period?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Int']>;
  statusView?: InputMaybe<Scalars['String']>;
  visitCount?: InputMaybe<Scalars['Int']>;
};

export type SubscriptionWhereInput = {
  AND?: InputMaybe<Array<SubscriptionWhereInput>>;
  NOT?: InputMaybe<Array<SubscriptionWhereInput>>;
  OR?: InputMaybe<Array<SubscriptionWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  items?: InputMaybe<UserSubscriptionManyRelationFilter>;
  language?: InputMaybe<StringFilter>;
  lastModification?: InputMaybe<DateTimeFilter>;
  name?: InputMaybe<StringFilter>;
  period?: InputMaybe<IntNullableFilter>;
  price?: InputMaybe<IntFilter>;
  statusView?: InputMaybe<StringFilter>;
  visitCount?: InputMaybe<IntFilter>;
};

export type SubscriptionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Tag = {
  __typename?: 'Tag';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  language?: Maybe<Scalars['String']>;
  lastModification?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type TagCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  language?: InputMaybe<Scalars['String']>;
  lastModification?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type TagManyRelationFilter = {
  every?: InputMaybe<TagWhereInput>;
  none?: InputMaybe<TagWhereInput>;
  some?: InputMaybe<TagWhereInput>;
};

export type TagOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  language?: InputMaybe<OrderDirection>;
  lastModification?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type TagRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  create?: InputMaybe<Array<TagCreateInput>>;
};

export type TagRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  create?: InputMaybe<Array<TagCreateInput>>;
  disconnect?: InputMaybe<Array<TagWhereUniqueInput>>;
  set?: InputMaybe<Array<TagWhereUniqueInput>>;
};

export type TagUpdateArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};

export type TagUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  language?: InputMaybe<Scalars['String']>;
  lastModification?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type TagWhereInput = {
  AND?: InputMaybe<Array<TagWhereInput>>;
  NOT?: InputMaybe<Array<TagWhereInput>>;
  OR?: InputMaybe<Array<TagWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  language?: InputMaybe<StringFilter>;
  lastModification?: InputMaybe<DateTimeFilter>;
  name?: InputMaybe<StringFilter>;
};

export type TagWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<AvatarUser>;
  comment?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  goal?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  language?: Maybe<Scalars['String']>;
  lastModification?: Maybe<Scalars['DateTime']>;
  levelStudent?: Maybe<UserLevelStudentType>;
  magicAuthIssuedAt?: Maybe<Scalars['DateTime']>;
  magicAuthRedeemedAt?: Maybe<Scalars['DateTime']>;
  magicAuthToken?: Maybe<PasswordState>;
  magicLinkToken?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<PasswordState>;
  phone?: Maybe<Scalars['Decimal']>;
  role?: Maybe<UserRoleType>;
  source?: Maybe<Array<SourceClient>>;
  sourceCount?: Maybe<Scalars['Int']>;
  statusClient?: Maybe<UserStatusClientType>;
};


export type UserSourceArgs = {
  orderBy?: Array<SourceClientOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: SourceClientWhereInput;
};


export type UserSourceCountArgs = {
  where?: SourceClientWhereInput;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  message: Scalars['String'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordFailure | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  item: User;
  sessionToken: Scalars['String'];
};

export type UserCreateInput = {
  avatar?: InputMaybe<AvatarUserRelateToOneForCreateInput>;
  comment?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  goal?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<Scalars['String']>;
  lastModification?: InputMaybe<Scalars['DateTime']>;
  levelStudent?: InputMaybe<UserLevelStudentType>;
  magicAuthIssuedAt?: InputMaybe<Scalars['DateTime']>;
  magicAuthRedeemedAt?: InputMaybe<Scalars['DateTime']>;
  magicAuthToken?: InputMaybe<Scalars['String']>;
  magicLinkToken?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['Decimal']>;
  role?: InputMaybe<UserRoleType>;
  source?: InputMaybe<SourceClientRelateToManyForCreateInput>;
  statusClient?: InputMaybe<UserStatusClientType>;
};

export enum UserLevelStudentType {
  A1 = 'a1',
  A2 = 'a2',
  B1 = 'b1',
  B2 = 'b2',
  C1 = 'c1'
}

export type UserLevelStudentTypeNullableFilter = {
  equals?: InputMaybe<UserLevelStudentType>;
  in?: InputMaybe<Array<UserLevelStudentType>>;
  not?: InputMaybe<UserLevelStudentTypeNullableFilter>;
  notIn?: InputMaybe<Array<UserLevelStudentType>>;
};

export type UserOrderByInput = {
  comment?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  goal?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  language?: InputMaybe<OrderDirection>;
  lastModification?: InputMaybe<OrderDirection>;
  levelStudent?: InputMaybe<OrderDirection>;
  magicAuthIssuedAt?: InputMaybe<OrderDirection>;
  magicAuthRedeemedAt?: InputMaybe<OrderDirection>;
  magicLinkToken?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  phone?: InputMaybe<OrderDirection>;
  role?: InputMaybe<OrderDirection>;
  statusClient?: InputMaybe<OrderDirection>;
};

export type UserRelateToOneForCreateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
};

export type UserRelateToOneForUpdateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export enum UserRoleType {
  Admin = 'admin',
  Manager = 'manager',
  Student = 'student',
  Teacher = 'teacher'
}

export type UserRoleTypeNullableFilter = {
  equals?: InputMaybe<UserRoleType>;
  in?: InputMaybe<Array<UserRoleType>>;
  not?: InputMaybe<UserRoleTypeNullableFilter>;
  notIn?: InputMaybe<Array<UserRoleType>>;
};

export type UserService = {
  __typename?: 'UserService';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  lastModification?: Maybe<Scalars['DateTime']>;
  manager?: Maybe<User>;
  name?: Maybe<Scalars['String']>;
  originalPrice?: Maybe<Scalars['Int']>;
  pattern?: Maybe<Service>;
  payed?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  student?: Maybe<User>;
};

export type UserServiceCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  lastModification?: InputMaybe<Scalars['DateTime']>;
  manager?: InputMaybe<UserRelateToOneForCreateInput>;
  name?: InputMaybe<Scalars['String']>;
  originalPrice?: InputMaybe<Scalars['Int']>;
  pattern?: InputMaybe<ServiceRelateToOneForCreateInput>;
  payed?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Int']>;
  student?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type UserServiceManyRelationFilter = {
  every?: InputMaybe<UserServiceWhereInput>;
  none?: InputMaybe<UserServiceWhereInput>;
  some?: InputMaybe<UserServiceWhereInput>;
};

export type UserServiceOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  lastModification?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  originalPrice?: InputMaybe<OrderDirection>;
  payed?: InputMaybe<OrderDirection>;
  price?: InputMaybe<OrderDirection>;
};

export type UserServiceRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<UserServiceWhereUniqueInput>>;
  create?: InputMaybe<Array<UserServiceCreateInput>>;
};

export type UserServiceRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<UserServiceWhereUniqueInput>>;
  create?: InputMaybe<Array<UserServiceCreateInput>>;
  disconnect?: InputMaybe<Array<UserServiceWhereUniqueInput>>;
  set?: InputMaybe<Array<UserServiceWhereUniqueInput>>;
};

export type UserServiceUpdateArgs = {
  data: UserServiceUpdateInput;
  where: UserServiceWhereUniqueInput;
};

export type UserServiceUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  lastModification?: InputMaybe<Scalars['DateTime']>;
  manager?: InputMaybe<UserRelateToOneForUpdateInput>;
  name?: InputMaybe<Scalars['String']>;
  originalPrice?: InputMaybe<Scalars['Int']>;
  pattern?: InputMaybe<ServiceRelateToOneForUpdateInput>;
  payed?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Int']>;
  student?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type UserServiceWhereInput = {
  AND?: InputMaybe<Array<UserServiceWhereInput>>;
  NOT?: InputMaybe<Array<UserServiceWhereInput>>;
  OR?: InputMaybe<Array<UserServiceWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  lastModification?: InputMaybe<DateTimeFilter>;
  manager?: InputMaybe<UserWhereInput>;
  name?: InputMaybe<StringFilter>;
  originalPrice?: InputMaybe<IntNullableFilter>;
  pattern?: InputMaybe<ServiceWhereInput>;
  payed?: InputMaybe<IntNullableFilter>;
  price?: InputMaybe<IntNullableFilter>;
  student?: InputMaybe<UserWhereInput>;
};

export type UserServiceWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum UserStatusClientType {
  LowQualityLead = 'LowQualityLead',
  Client = 'client',
  DecisionAfterTrialLesson = 'decisionAfterTrialLesson',
  DisabledClient = 'disabledClient',
  FirstCall = 'firstCall',
  New = 'new',
  RecordFirstLesson = 'recordFirstLesson',
  Rejection = 'rejection',
  TrialLesson = 'trialLesson'
}

export type UserStatusClientTypeNullableFilter = {
  equals?: InputMaybe<UserStatusClientType>;
  in?: InputMaybe<Array<UserStatusClientType>>;
  not?: InputMaybe<UserStatusClientTypeNullableFilter>;
  notIn?: InputMaybe<Array<UserStatusClientType>>;
};

export type UserSubscription = {
  __typename?: 'UserSubscription';
  beginDate?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastCount?: Maybe<Scalars['Int']>;
  lastModification?: Maybe<Scalars['DateTime']>;
  manager?: Maybe<User>;
  name?: Maybe<Scalars['String']>;
  originalPrice?: Maybe<Scalars['Int']>;
  pattern?: Maybe<Subscription>;
  payed?: Maybe<Scalars['Int']>;
  period?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  student?: Maybe<User>;
  totalBurned?: Maybe<Scalars['Int']>;
  totalVisited?: Maybe<Scalars['Int']>;
  visitCount?: Maybe<Scalars['Int']>;
};

export type UserSubscriptionCreateInput = {
  beginDate?: InputMaybe<Scalars['DateTime']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  lastModification?: InputMaybe<Scalars['DateTime']>;
  manager?: InputMaybe<UserRelateToOneForCreateInput>;
  name?: InputMaybe<Scalars['String']>;
  originalPrice?: InputMaybe<Scalars['Int']>;
  pattern?: InputMaybe<SubscriptionRelateToOneForCreateInput>;
  payed?: InputMaybe<Scalars['Int']>;
  period?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  student?: InputMaybe<UserRelateToOneForCreateInput>;
  totalBurned?: InputMaybe<Scalars['Int']>;
  totalVisited?: InputMaybe<Scalars['Int']>;
  visitCount?: InputMaybe<Scalars['Int']>;
};

export type UserSubscriptionManyRelationFilter = {
  every?: InputMaybe<UserSubscriptionWhereInput>;
  none?: InputMaybe<UserSubscriptionWhereInput>;
  some?: InputMaybe<UserSubscriptionWhereInput>;
};

export type UserSubscriptionOrderByInput = {
  beginDate?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  lastModification?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  originalPrice?: InputMaybe<OrderDirection>;
  payed?: InputMaybe<OrderDirection>;
  period?: InputMaybe<OrderDirection>;
  price?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  totalBurned?: InputMaybe<OrderDirection>;
  totalVisited?: InputMaybe<OrderDirection>;
  visitCount?: InputMaybe<OrderDirection>;
};

export type UserSubscriptionRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<UserSubscriptionWhereUniqueInput>>;
  create?: InputMaybe<Array<UserSubscriptionCreateInput>>;
};

export type UserSubscriptionRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<UserSubscriptionWhereUniqueInput>>;
  create?: InputMaybe<Array<UserSubscriptionCreateInput>>;
  disconnect?: InputMaybe<Array<UserSubscriptionWhereUniqueInput>>;
  set?: InputMaybe<Array<UserSubscriptionWhereUniqueInput>>;
};

export type UserSubscriptionUpdateArgs = {
  data: UserSubscriptionUpdateInput;
  where: UserSubscriptionWhereUniqueInput;
};

export type UserSubscriptionUpdateInput = {
  beginDate?: InputMaybe<Scalars['DateTime']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  lastModification?: InputMaybe<Scalars['DateTime']>;
  manager?: InputMaybe<UserRelateToOneForUpdateInput>;
  name?: InputMaybe<Scalars['String']>;
  originalPrice?: InputMaybe<Scalars['Int']>;
  pattern?: InputMaybe<SubscriptionRelateToOneForUpdateInput>;
  payed?: InputMaybe<Scalars['Int']>;
  period?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  student?: InputMaybe<UserRelateToOneForUpdateInput>;
  totalBurned?: InputMaybe<Scalars['Int']>;
  totalVisited?: InputMaybe<Scalars['Int']>;
  visitCount?: InputMaybe<Scalars['Int']>;
};

export type UserSubscriptionWhereInput = {
  AND?: InputMaybe<Array<UserSubscriptionWhereInput>>;
  NOT?: InputMaybe<Array<UserSubscriptionWhereInput>>;
  OR?: InputMaybe<Array<UserSubscriptionWhereInput>>;
  beginDate?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  lastModification?: InputMaybe<DateTimeFilter>;
  manager?: InputMaybe<UserWhereInput>;
  name?: InputMaybe<StringFilter>;
  originalPrice?: InputMaybe<IntNullableFilter>;
  pattern?: InputMaybe<SubscriptionWhereInput>;
  payed?: InputMaybe<IntNullableFilter>;
  period?: InputMaybe<IntNullableFilter>;
  price?: InputMaybe<IntNullableFilter>;
  status?: InputMaybe<StringFilter>;
  student?: InputMaybe<UserWhereInput>;
  totalBurned?: InputMaybe<IntFilter>;
  totalVisited?: InputMaybe<IntFilter>;
  visitCount?: InputMaybe<IntNullableFilter>;
};

export type UserSubscriptionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  avatar?: InputMaybe<AvatarUserRelateToOneForUpdateInput>;
  comment?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  goal?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<Scalars['String']>;
  lastModification?: InputMaybe<Scalars['DateTime']>;
  levelStudent?: InputMaybe<UserLevelStudentType>;
  magicAuthIssuedAt?: InputMaybe<Scalars['DateTime']>;
  magicAuthRedeemedAt?: InputMaybe<Scalars['DateTime']>;
  magicAuthToken?: InputMaybe<Scalars['String']>;
  magicLinkToken?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['Decimal']>;
  role?: InputMaybe<UserRoleType>;
  source?: InputMaybe<SourceClientRelateToManyForUpdateInput>;
  statusClient?: InputMaybe<UserStatusClientType>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  avatar?: InputMaybe<AvatarUserWhereInput>;
  comment?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  goal?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  language?: InputMaybe<StringFilter>;
  lastModification?: InputMaybe<DateTimeFilter>;
  levelStudent?: InputMaybe<UserLevelStudentTypeNullableFilter>;
  magicAuthIssuedAt?: InputMaybe<DateTimeNullableFilter>;
  magicAuthRedeemedAt?: InputMaybe<DateTimeNullableFilter>;
  magicAuthToken?: InputMaybe<PasswordFilter>;
  magicLinkToken?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<PasswordFilter>;
  phone?: InputMaybe<DecimalFilter>;
  role?: InputMaybe<UserRoleTypeNullableFilter>;
  source?: InputMaybe<SourceClientManyRelationFilter>;
  statusClient?: InputMaybe<UserStatusClientTypeNullableFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

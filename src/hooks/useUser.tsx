import { gql, useQuery } from '@apollo/client';

export const CURRENT_USER_QUERY = gql`
    query {
        authenticatedItem {
            ... on User {
                id
                language
                email
                name
                phone
                statusClient
                avatar {
                    image {
                        url
                    }
                }
                cart {
                    id
                    summa
                    itemsCount
                    quantityPayments
                    items {
                        subscription {
                            name
                            description {
                                document(hydrateRelationships: true)
                            }
                        }
                        service {
                            name
                            description {
                                document(hydrateRelationships: true)
                            }
                        }
                        price
                        originalPrice
                    }
                }
            }
        }
    }
`;

export const useUser = () => {
    const { data } = useQuery(CURRENT_USER_QUERY);
    return data?.authenticatedItem;
};

import gql from 'graphql-tag';

export const QUERY_DIRECTION_PAGE = gql`
    query ($lang: String!, $slug: String!) {
        directions(where: { language: { equals: $lang }, slug: { equals: $slug }, statusView: { equals: "show" } }) {
            id
            name
            description
            image {
                url
            }
            goals {
                id
                name
                image {
                    url
                }
            }
            results {
                id
                name
            }
            products {
                id
                name
                desc {
                    document(hydrateRelationships: true)
                }
                category {
                    id
                    name
                }
                image {
                    url
                }
                tags {
                    id
                    name
                }
                subscriptions {
                    id
                }
            }
        }

        productReviews(where: { statusView: { equals: "show" }, language: { equals: $lang } }) {
            id
            desc
            student {
                name
                avatar {
                    image {
                        url
                    }
                }
            }
        }

        faqs(where: { statusView: { equals: "show" }, language: { equals: $lang } }) {
            id
            title
            desc
        }
    }
`;

import { gql } from '@apollo/client';

export const MUTATION_CART = gql`
    mutation MUTATION_CART($data: CartData!) {
        cart(data: $data) {
            Success
            RedirectUrl
        }
    }
`;

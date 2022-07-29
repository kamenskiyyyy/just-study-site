import { gql, useMutation } from '@apollo/client';
import { FC, useCallback, useEffect, useState } from 'react';
import { CURRENT_USER_QUERY, useUser } from '@src/hooks/useUser';
import { useRouter } from 'next/router';

const MUTATION_GET_TOKEN_FOR_AUTH = gql`
    mutation ($email: String!) {
        authWithEmail(email: $email)
    }
`;

const MUTATION_REDEEM_USER_WITH_TOKEN = gql`
    mutation ($email: String!, $token: String!) {
        redeemUserMagicAuthToken(email: $email, token: $token) {
            ... on RedeemUserMagicAuthTokenSuccess {
                token
            }
            ... on RedeemUserMagicAuthTokenFailure {
                message
            }
        }
    }
`;

export const EmailAuth: FC = () => {
    const [getTokenForAuth] = useMutation(MUTATION_GET_TOKEN_FOR_AUTH);
    const [authWithToken] = useMutation(MUTATION_REDEEM_USER_WITH_TOKEN, {
        refetchQueries: [{ query: CURRENT_USER_QUERY }]
    });
    const { query } = useRouter();
    const [email, setEmail] = useState<string | null>();
    const { user } = useUser();

    const auth = useCallback(async () => {
        if (email && !user) {
            const token = await getTokenForAuth({ variables: { email } });
            if (token) {
                await authWithToken({ variables: { email, token: token.data.authWithEmail } });
            }
        }
    }, [authWithToken, email, getTokenForAuth, user]);

    useEffect(() => {
        if (localStorage.email) {
            setEmail(localStorage.getItem('email'));
            auth();
        }
        if (query.setEmail) {
            setEmail(query.setEmail as string);
            localStorage.setItem('email', query.setEmail as string);
            auth();
        }
    }, [auth, query.setEmail]);

    return null;
};

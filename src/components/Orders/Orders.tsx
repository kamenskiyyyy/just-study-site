import * as React from 'react';
import { FC } from 'react';
import Divider from '@mui/material/Divider';
import { Stack, Typography } from '@mui/material';
import { Order } from '@src/lib/apollo/types';
import { gql, useQuery } from '@apollo/client';
import { SpinnerWrapper } from '@shared/ui/SpinnerWrapper';
import { OrderItem } from '@components/Orders/OrderItem';

export interface IOrders {
    orders: Order[];
}

export const QUERY_ACTIVE_ORDERS = gql`
    query ($userId: ID!) {
        orders(where: { status: { equals: created }, student: { id: { equals: $userId } } }) {
            id
            label
            amount
            nextPayment
            quantityPayments
        }
    }
`;

export const MUTATION_GET_PAY = gql`
    mutation ($orderId: String!) {
        payment(orderId: $orderId) {
            RedirectUrl
            Success
        }
    }
`;

export const Orders: FC<{ userId: string }> = ({ userId }) => {
    const { data, loading } = useQuery<IOrders>(QUERY_ACTIVE_ORDERS, {
        variables: { userId },
        fetchPolicy: 'network-only'
    });

    return (
        <SpinnerWrapper loading={loading}>
            <Stack gap={3}>
                <Typography variant={'h1'}>🏁 Завершите оформление заказа</Typography>
                <Divider />
                {data?.orders.map((order) => (
                    <OrderItem key={order.id} order={order} />
                ))}
            </Stack>
        </SpinnerWrapper>
    );
};

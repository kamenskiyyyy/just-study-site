import * as React from 'react';
import { FC, useEffect } from 'react';
import Divider from '@mui/material/Divider';
import { Alert, Card, Stack, Typography } from '@mui/material';
import { Order, PaytureResponse } from '@src/lib/apollo/types';
import { currencyText } from '@src/lib/currency';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { gql, useMutation } from '@apollo/client';
import { LoadingButton } from '@mui/lab';

export interface IOrders {
    orders: Order[];
}

export const MUTATION_GET_PAY = gql`
    mutation ($orderId: String!) {
        payment(orderId: $orderId) {
            RedirectUrl
            Success
        }
    }
`;

export const Orders: FC<IOrders> = ({ orders }) => {
    const theme = useTheme();
    const { locale, push } = useRouter();
    const [pay, { loading, error, data }] = useMutation<{ payment: PaytureResponse }>(MUTATION_GET_PAY);

    useEffect(() => {
        if (data?.payment.Success === 'True') {
            push(data.payment.RedirectUrl);
        }
    }, [data, error, loading, push]);

    return (
        <Stack gap={3}>
            <Typography variant={'h1'}>🏁 Завершите оформление заказа</Typography>
            <Divider />
            {error && <Alert severity="error">Произошла ошибка при оформлении оплаты</Alert>}
            {orders.map(({ id, label, amount, quantityPayments, nextPayment }) => (
                <Card
                    key={id}
                    sx={{
                        display: 'flex',
                        gap: 3,
                        bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey['900'] : theme.palette.grey.A100
                    }}>
                    <Stack gap={1} m={3} alignItems={'flex-start'}>
                        <Typography variant={'h5'} fontWeight={'bold'}>
                            {label}
                        </Typography>
                        <Stack direction={'row'} gap={1}>
                            <Typography color={theme.palette.primary.main} fontWeight={'bold'} fontSize={'larger'}>
                                Сумма: {amount}
                                {currencyText(locale)}
                            </Typography>
                        </Stack>
                        {quantityPayments && quantityPayments > 1 && (
                            <Typography fontSize={'larger'}>Количество платежей: {quantityPayments}</Typography>
                        )}
                        <LoadingButton
                            variant={'contained'}
                            onClick={() => pay({ variables: { orderId: id } })}
                            loading={loading}>
                            Оплатить {nextPayment} {currencyText(locale)}
                        </LoadingButton>
                    </Stack>
                </Card>
            ))}
        </Stack>
    );
};

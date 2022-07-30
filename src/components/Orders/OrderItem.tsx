import * as React from 'react';
import { FC, useEffect } from 'react';
import { Alert, Card, Stack, Typography } from '@mui/material';
import { getTextCurrency } from '@src/lib/currency';
import { LoadingButton } from '@mui/lab';
import { useTheme } from '@mui/material/styles';
import { Order, PaytureResponse } from '@src/lib/apollo/types';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { MUTATION_GET_PAY } from '@components/Orders/Orders';

export const OrderItem: FC<{ order: Order }> = (props) => {
    const { id, label, quantityPayments, nextPayment, amount, currency } = props.order;
    const theme = useTheme();
    const { locale, push } = useRouter();

    const [pay, { loading, error, data }] = useMutation<{ payment: PaytureResponse }>(MUTATION_GET_PAY);

    useEffect(() => {
        if (data?.payment.Success === 'True') {
            push(data.payment.RedirectUrl);
        }
    }, [data, error, loading, push]);

    return (
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
                        {getTextCurrency(currency as string)}
                    </Typography>
                </Stack>
                {quantityPayments && quantityPayments > 1 && (
                    <Typography fontSize={'larger'}>Количество платежей: {quantityPayments}</Typography>
                )}
                {error && <Alert severity="error">Произошла ошибка при оформлении оплаты</Alert>}
                <LoadingButton
                    variant={'contained'}
                    onClick={() => pay({ variables: { orderId: id } })}
                    loading={loading}>
                    Оплатить {nextPayment} {getTextCurrency(currency as string)}
                </LoadingButton>
            </Stack>
        </Card>
    );
};

import * as React from 'react';
import { FC, useEffect } from 'react';
import { useUser } from '@src/hooks/useUser';
import Divider from '@mui/material/Divider';
import { Alert, Box, Card, Stack, Typography } from '@mui/material';
import { getTextCurrency } from '@src/lib/currency';
import { CheckboxButtonGroup, FormContainer } from 'react-hook-form-mui';
import { useRouter } from 'next/router';
import { transition } from '@src/lib/transition';
import { formLeadsList } from '@translations/formLeadsList';
import { useForm } from 'react-hook-form';
import { cartPage } from '@translations/cartPage';
import Link from '@shared/ui/Link';
import routes from '@src/routes';
import { ContactForm } from '@components/Cart/ContactForm';
import { Currency } from '@shared/enums/currency.enum';
import { CartItem } from '@components/Cart/CartItem';
import { CartItem as CartItemProps, PaytureResponse } from '@src/lib/apollo/types';
import { useMutation } from '@apollo/client';
import { ICartForm } from '@components/Cart/types';
import { MUTATION_CART } from '@components/Cart/graphql';
import { LoadingButton } from '@mui/lab';
import { convertMoney } from '@src/lib/convertMoney';
import { useTheme } from '@mui/material/styles';

export const Cart: FC = () => {
    const theme = useTheme();
    const { locale, push } = useRouter();
    const { user } = useUser();
    const userCart = user?.cart;
    const formContext = useForm<ICartForm>({ defaultValues: { language: locale } });
    const { handleSubmit, setValue } = formContext;
    const t = transition(cartPage, locale);
    const t_contact = transition(formLeadsList, locale);
    const [sendCart, { loading, error, data }] = useMutation<{ cart: PaytureResponse }>(MUTATION_CART);

    const onSubmit = handleSubmit(async (data) => {
        const { agree, ...formattedData } = data;
        await sendCart({ variables: { data: formattedData } });
    });

    useEffect(() => {
        if (data?.cart.Success === 'True') {
            push(data.cart.RedirectUrl);
        }
    }, [data, error, loading, push]);

    useEffect(() => {
        if (user) {
            const name = user?.name.split(' ') || ' ';
            setValue('firstName', name[0]);
            setValue('secondName', name[1]);
            setValue('email', user?.email);
            setValue('phone', user?.phone);
        }
    }, [setValue, user]);

    const textTermAgree = (
        <>
            {t_contact.contacts.infoTermButton}{' '}
            <Link href={routes.terms} variant={'body2'} color={'inherit'}>
                {t_contact.contacts.infoBottomLink}
            </Link>
        </>
    );

    const textPrivateAgree = (
        <>
            {t_contact.contacts.infoPrivacyBottom}{' '}
            <Link href={routes.privacy} variant={'body2'} color={'inherit'}>
                {t_contact.contacts.infoBottomLink}
            </Link>
        </>
    );

    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                py: { xs: 3, md: 6 },
                px: { xs: 2, md: 6 }
            }}>
            <Stack gap={3}>
                <Typography variant={'h1'} mb={{ xs: 1, md: 3 }} style={{ wordBreak: 'break-word' }}>
                    {t.title}
                </Typography>
                <Divider />
                <Stack gap={2}>
                    {userCart?.items.map((item: CartItemProps) => (
                        <CartItem item={item} key={item.id} currency={userCart.currency} />
                    ))}
                    <Divider />
                    <FormContainer formContext={formContext} handleSubmit={onSubmit}>
                        <Stack gap={2}>
                            <ContactForm />
                            <CheckboxButtonGroup
                                name="agree"
                                options={[
                                    {
                                        id: '1',
                                        label: textTermAgree
                                    },
                                    { id: '2', label: textPrivateAgree }
                                ]}
                                required
                            />
                            <Box display={'flex'} justifyContent={'space-between'}>
                                <Typography variant={'h2'} fontWeight={'bold'}>
                                    Сумма
                                </Typography>
                                <Stack direction={'row'} gap={1}>
                                    <Typography variant={'h2'} fontWeight={'bold'}>
                                        {user?.cart?.amount} {getTextCurrency(userCart?.currency)}
                                    </Typography>
                                    {locale === 'ru' && (
                                        <Typography variant={'h2'} fontWeight={'bold'} color={theme.palette.grey.A400}>
                                            / {convertMoney(user?.cart?.amount, 'USD')} {getTextCurrency('USD')}
                                        </Typography>
                                    )}
                                </Stack>
                            </Box>
                            {error && <Alert severity="error">Произошла ошибка при оформлении оплаты</Alert>}
                            <Stack gap={2}>
                                {locale === 'ru' && (
                                    <LoadingButton
                                        type={'submit'}
                                        variant={'contained'}
                                        size={'large'}
                                        onClick={() => setValue('currency', Currency.RUB)}
                                        loading={loading}>
                                        {t.submitButtonRUB}
                                    </LoadingButton>
                                )}
                                <LoadingButton
                                    type={'submit'}
                                    variant={'contained'}
                                    size={'large'}
                                    onClick={() => setValue('currency', Currency.USD)}
                                    loading={loading}>
                                    {t.submitButtonUSD}
                                </LoadingButton>
                            </Stack>
                        </Stack>
                    </FormContainer>
                </Stack>
            </Stack>
        </Card>
    );
};

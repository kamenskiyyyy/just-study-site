import * as React from 'react';
import { FC, useEffect } from 'react';
import { useUser } from '@src/hooks/useUser';
import Divider from '@mui/material/Divider';
import { Box, Button, Stack, Typography } from '@mui/material';
import { currencyText } from '@src/lib/currency';
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
import { CartItem as CartItemProps } from '@src/lib/apollo/types';

export interface ILidForm {
    firstName: string;
    secondName: string;
    phone: number;
    email: string;
    agree: [];
    currency: string;
    language: string;
}

export const Cart: FC = () => {
    const { locale } = useRouter();
    const user = useUser();
    const userCart = user?.cart;
    const formContext = useForm<ILidForm>({ defaultValues: { language: locale } });
    const { handleSubmit, setValue } = formContext;
    const t = transition(cartPage, locale);
    const t_contact = transition(formLeadsList, locale);

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    });

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
        <Stack gap={3}>
            <Divider />
            <Stack gap={2}>
                {userCart?.items.map((item: CartItemProps) => (
                    <CartItem item={item} key={item.id} />
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
                            <Typography variant={'h2'} fontWeight={'bold'}>
                                {user?.cart?.amount} {currencyText(locale)}
                            </Typography>
                        </Box>
                        <Stack gap={2}>
                            {locale === 'ru' && (
                                <Button
                                    type={'submit'}
                                    variant={'contained'}
                                    size={'large'}
                                    onClick={() => setValue('currency', Currency.RUB)}>
                                    {t.submitButtonRUB}
                                </Button>
                            )}
                            <Button
                                type={'submit'}
                                variant={'contained'}
                                size={'large'}
                                onClick={() => setValue('currency', Currency.USD)}>
                                {t.submitButtonUSD}
                            </Button>
                        </Stack>
                    </Stack>
                </FormContainer>
            </Stack>
        </Stack>
    );
};

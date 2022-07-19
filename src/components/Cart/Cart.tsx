import * as React from 'react';
import { FC, useEffect } from 'react';
import { useUser } from '@src/hooks/useUser';
import Divider from '@mui/material/Divider';
import { Box, Button, Card, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import image from '@src/pages/Checkout/unsplash_ZYgY7I4tMeU.png';
import { currencyText } from '@src/lib/currency';
import { CheckboxButtonGroup, FormContainer } from 'react-hook-form-mui';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { transition } from '@src/lib/transition';
import { formLeadsList } from '@translations/formLeadsList';
import { useForm } from 'react-hook-form';
import { cartPage } from '@translations/cartPage';
import Link from '@shared/ui/Link';
import routes from '@src/routes';
import { ContactForm } from '@components/Cart/ContactForm';

interface ILidForm {
    firstName: string;
    secondName: string;
    phone: string;
    email: string;
    agree: [];
}

export const Cart: FC = () => {
    const theme = useTheme();
    const { locale } = useRouter();
    const user = useUser();
    const formContext = useForm<ILidForm>();
    console.log(user);
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
                <Card
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: '30% 1fr',
                        gap: 3,
                        bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey['900'] : theme.palette.grey.A100
                    }}>
                    <Box position={'relative'} borderRadius={'20%'}>
                        <Image src={image} layout={'fill'} objectFit={'cover'} />
                    </Box>
                    <Box my={3}>
                        <Typography variant={'h5'} fontWeight={'bold'}>
                            Первый урок
                        </Typography>
                        <Stack direction={'row'} gap={1}>
                            <Typography component={'del'}>3000{currencyText(locale)}</Typography>
                            <Typography color={theme.palette.primary.main} fontWeight={'bold'}>
                                15000{currencyText(locale)}
                            </Typography>
                        </Stack>
                    </Box>
                </Card>
                <Divider />
                <FormContainer formContext={formContext} handleSubmit={onSubmit}>
                    <Stack gap={2}>
                        {/*{!user && <ContactForm />}*/}
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
                        <Button type={'submit'} variant={'contained'} size={'large'}>
                            {t.submitButton}
                        </Button>
                    </Stack>
                </FormContainer>
            </Stack>
        </Stack>
    );
};

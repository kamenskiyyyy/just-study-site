import { NextPage } from 'next';
import { Head } from '@src/modules/components/Head';
import { Box, Button, Card, Container, Stack, Typography } from '@mui/material';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { transition } from '@src/lib/transition';
import { checkoutPage } from '@translations/checkoutPage';
import Divider from '@mui/material/Divider';
import image from '@src/pages/Checkout/unsplash_ZYgY7I4tMeU.png';
import Image from 'next/image';
import { currencyText } from '@src/lib/currency';
import { CheckboxButtonGroup, FormContainer, TextFieldElement } from 'react-hook-form-mui';
import { formLeadsList } from '@translations/formLeadsList';
import { useForm } from 'react-hook-form';
import routes from '@src/routes';
import Link from '@shared/ui/Link';

interface ILidForm {
    firstName: string;
    secondName: string;
    phone: string;
    email: string;
    agree: [];
}

const Checkout: NextPage = () => {
    const theme = useTheme();
    const { locale } = useRouter();
    const t = transition(checkoutPage, locale);
    const t_contact = transition(formLeadsList, locale);
    const formContext = useForm<ILidForm>();
    const { handleSubmit } = formContext;

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    });

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
        <>
            <Head title={t.title} />
            <Box bgcolor={theme.palette.primary.main} px={{ xs: 0.5, md: 6 }} py={{ xs: 2, md: 6 }}>
                <Container maxWidth={'md'} sx={{ p: 0 }}>
                    <Card sx={{ display: 'flex', flexDirection: 'column', py: { xs: 3, md: 6 }, px: { xs: 2, md: 6 } }}>
                        <Typography variant={'h1'} mb={{ xs: 1, md: 3 }} style={{ wordBreak: 'break-word' }}>
                            {t.title}
                        </Typography>
                        <Stack gap={3}>
                            <Divider />
                            <Stack gap={2}>
                                <Card
                                    sx={{
                                        display: 'grid',
                                        gridTemplateColumns: '30% 1fr',
                                        gap: 3,
                                        bgcolor:
                                            theme.palette.mode === 'dark'
                                                ? theme.palette.grey['900']
                                                : theme.palette.grey.A100
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
                                        <Box
                                            display={'grid'}
                                            gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr' }}
                                            gap={{ xs: 2, md: 2 }}>
                                            <TextFieldElement
                                                name={'firstName'}
                                                label={t_contact.contacts.nameInput}
                                                required
                                                autoComplete={'given-name'}
                                            />
                                            <TextFieldElement
                                                name={'secondName'}
                                                label={t_contact.contacts.secondNameInput}
                                                required
                                                autoComplete={'family-name'}
                                            />
                                        </Box>
                                        <Box
                                            display={'grid'}
                                            gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr' }}
                                            gap={{ xs: 2, md: 2 }}>
                                            <TextFieldElement
                                                name={'phone'}
                                                label={t_contact.contacts.phoneInput}
                                                required
                                                autoComplete={'tel'}
                                            />
                                            <TextFieldElement
                                                name={'email'}
                                                required
                                                label={t_contact.contacts.emailInput}
                                                autoComplete={'email'}
                                            />
                                        </Box>

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
                                            Оформить заказ
                                        </Button>
                                    </Stack>
                                </FormContainer>
                            </Stack>
                        </Stack>
                    </Card>
                </Container>
            </Box>
        </>
    );
};

export default Checkout;

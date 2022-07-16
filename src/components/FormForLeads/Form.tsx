import { Alert, Box, Typography } from '@mui/material';
import { FormContainer, TextFieldElement } from 'react-hook-form-mui';
import { useForm } from 'react-hook-form';
import Link from '@shared/ui/Link';
import routes from '@src/routes';
import { useRouter } from 'next/router';
import { transition } from '@src/lib/transition';
import { formLeadsList } from '@translations/formLeadsList';
import { FC, useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import LoadingButton from '@mui/lab/LoadingButton';
import { IForm } from '@components/FormForLeads/FormForLeads';
import { successPage } from '@translations/successPage';
import { useTheme } from '@mui/material/styles';

export interface ILidForm {
    name: string;
    phone: string;
    email: string;
    comment: string;
}

const MUTATION_NEW_LEAD = gql`
    mutation MUTATION_NEW_LEAD($data: UserCreateInput!) {
        createUser(data: $data) {
            id
        }
    }
`;

export const Form: FC<IForm> = ({ data, redirect }) => {
    const { locale, push } = useRouter();
    const t = transition(formLeadsList, locale);
    const comment = data && `Страница: ${data.resolvedUrl}, язык: ${data.locale}, query: ${JSON.stringify(data.query)}`;
    const formContext = useForm<ILidForm>({ defaultValues: { comment } });
    const { handleSubmit } = formContext;
    const [createLid, { loading, error }] = useMutation(MUTATION_NEW_LEAD);
    const [success, setSuccess] = useState(false);
    const t_success = transition(successPage, locale);
    const theme = useTheme();

    const onSubmit = handleSubmit(async (data) => {
        createLid({ variables: { data } }).then((res) => {
            if (res.data) {
                if (redirect) {
                    push(routes.success);
                } else {
                    setSuccess(true);
                }
            }
        });
    });

    if (success) {
        return (
            <Box maxWidth={{ xs: '100%', md: 560 }}>
                <Typography
                    variant={'h2'}
                    mb={{ xs: 1, md: 3 }}
                    style={{ wordBreak: 'break-word' }}
                    color={theme.palette.success.main}>
                    ✅ {t_success.formLead.title}
                </Typography>
                <Typography variant={'h5'}>{t_success.formLead.desc}</Typography>
            </Box>
        );
    }

    return (
        <Box maxWidth={{ xs: '100%', md: 560 }}>
            <Typography variant={'h6'} mb={2}>
                {t.contacts.title}
            </Typography>
            <FormContainer formContext={formContext} handleSubmit={onSubmit}>
                <Box display={'grid'} gap={{ xs: 2, md: 3 }}>
                    <Box display={'grid'} gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr' }} gap={{ xs: 2, md: 2 }}>
                        <TextFieldElement
                            name={'name'}
                            label={t.contacts.nameInput}
                            required
                            autoComplete={'given-name'}
                            disabled={loading}
                        />
                        <TextFieldElement
                            name={'phone'}
                            label={t.contacts.phoneInput}
                            required
                            autoComplete={'tel'}
                            disabled={loading}
                        />
                    </Box>
                    <TextFieldElement
                        name={'email'}
                        label={t.contacts.emailInput}
                        autoComplete={'email'}
                        disabled={loading}
                        required
                    />
                    {error && <Alert severity="error">{t.error}</Alert>}
                    <LoadingButton loading={loading} variant="contained" type={'submit'}>
                        {t.contacts.submitButton}
                    </LoadingButton>
                    <Box>
                        <Typography variant={'body2'}>{t.contacts.infoPrivacyBottom}</Typography>
                        <Link href={routes.privacy} variant={'body2'} color={'inherit'}>
                            {t.contacts.infoBottomLink}
                        </Link>
                    </Box>
                </Box>
            </FormContainer>
        </Box>
    );
};

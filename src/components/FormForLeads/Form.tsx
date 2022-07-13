import { Box, Button, Typography } from '@mui/material';
import { FormContainer, TextFieldElement } from 'react-hook-form-mui';
import { useForm } from 'react-hook-form';
import Link from '@shared/ui/Link';
import routes from '@src/routes';
import { useRouter } from 'next/router';
import { transition } from '@src/lib/transition';
import { formLeadsList } from '@translations/formLeadsList';
import { FC } from 'react';
import { gql } from '@apollo/client';

interface ILidForm {
    name: string;
    phone: number;
    email: string;
}

const MUTATION_NEW_LEAD = gql`
    mutation MUTATION_NEW_LEAD($data: UserCreateInput!) {
        createUser(data: $data) {
            id
        }
    }
`;

export const Form: FC = () => {
    const { locale } = useRouter();
    const t = transition(formLeadsList, locale);
    const formContext = useForm<ILidForm>();
    const { handleSubmit } = formContext;
    // const [] = useMutation()

    const onSubmit = handleSubmit((e) => {
        console.log(e);
    });

    return (
        <Box maxWidth={{ xs: '100%', md: 560 }}>
            <FormContainer formContext={formContext} handleSubmit={onSubmit}>
                <Box display={'grid'} gap={{ xs: 2, md: 3 }}>
                    <Box display={'grid'} gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr' }} gap={{ xs: 2, md: 2 }}>
                        <TextFieldElement
                            name={'name'}
                            label={t.contacts.nameInput}
                            required
                            autoComplete={'given-name'}
                        />
                        <TextFieldElement name={'phone'} label={t.contacts.phoneInput} required autoComplete={'tel'} />
                    </Box>
                    <TextFieldElement name={'email'} label={t.contacts.emailInput} autoComplete={'email'} />
                    <Button variant="contained" type={'submit'}>
                        {t.contacts.submitButton}
                    </Button>
                    <Box>
                        <Typography variant={'body2'}>{t.contacts.infoBottom}</Typography>
                        <Link href={routes.privacy} variant={'body2'} color={'inherit'}>
                            {t.contacts.infoBottomLink}
                        </Link>
                    </Box>
                </Box>
            </FormContainer>
        </Box>
    );
};

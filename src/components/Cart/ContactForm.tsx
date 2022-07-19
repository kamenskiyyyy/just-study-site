import * as React from 'react';
import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TextFieldElement } from 'react-hook-form-mui';
import { transition } from '@src/lib/transition';
import { formLeadsList } from '@translations/formLeadsList';
import { useRouter } from 'next/router';

export const ContactForm: FC = () => {
    const { locale } = useRouter();
    const t_contact = transition(formLeadsList, locale);

    return (
        <Stack gap={2}>
            <Box display={'grid'} gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr' }} gap={{ xs: 2, md: 2 }}>
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
            <Box display={'grid'} gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr' }} gap={{ xs: 2, md: 2 }}>
                <TextFieldElement name={'phone'} label={t_contact.contacts.phoneInput} required autoComplete={'tel'} />
                <TextFieldElement
                    name={'email'}
                    required
                    label={t_contact.contacts.emailInput}
                    autoComplete={'email'}
                />
            </Box>
        </Stack>
    );
};

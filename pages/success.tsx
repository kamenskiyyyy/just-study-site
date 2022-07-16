import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { SuccessFormLead } from '@src/pages/Success/SuccessPage';
import { Head } from '@src/modules/components/Head';
import * as React from 'react';
import { useRouter } from 'next/router';
import { transition } from '@src/lib/transition';
import { faq } from '@translations/faq';
import { ILanguages } from '@src/modules/constants';
import { NextPageWithLayout } from '@shared/types/page';
import { MainLayout } from '@src/layouts/MainLayout';

const SuccessPage: NextPageWithLayout = () => {
    const theme = useTheme();
    const { locale } = useRouter();
    const t = transition(faq, locale as ILanguages);

    return (
        <>
            <Head title={t.title} description={t.description} />
            <Box bgcolor={theme.palette.primary.main} px={{ xs: 0.5, md: 6 }} py={{ xs: 2, md: 6 }}>
                <SuccessFormLead />
            </Box>
        </>
    );
};

SuccessPage.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};

export default SuccessPage;

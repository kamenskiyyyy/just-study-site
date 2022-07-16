import { GetServerSideProps } from 'next';
import { Box, Container } from '@mui/material';
import { FAQ } from '@components/FAQ/FAQ';
import * as React from 'react';
import client from '@src/lib/apollo/apolloClient';
import { gql } from '@apollo/client';
import { Faq } from '@src/lib/apollo/types';
import { useTheme } from '@mui/material/styles';
import { Head } from '@src/modules/components/Head';
import { useRouter } from 'next/router';
import { transition } from '@src/lib/transition';
import { faq } from '@translations/faq';
import { ILanguages } from '@src/modules/constants';
import { NextPageWithLayout } from '@shared/types/page';
import { MainLayout } from '@src/layouts/MainLayout';

interface IFaqPage {
    faqs: Faq[];
}

const FaqPage: NextPageWithLayout<{ data: IFaqPage }> = (props) => {
    const theme = useTheme();
    const { locale } = useRouter();
    const t = transition(faq, locale as ILanguages);

    return (
        <>
            <Head title={t.title} description={t.description} />
            <Box bgcolor={theme.palette.mode === 'dark' ? theme.palette.grey['800'] : theme.palette.grey['100']}>
                <Container maxWidth={'xl'}>
                    <FAQ faqData={props.data.faqs} />
                </Container>
            </Box>
        </>
    );
};

FaqPage.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};

const QUERY_FAQS = gql`
    query ($lang: String!) {
        faqs(where: { statusView: { equals: "show" }, language: { equals: $lang } }) {
            id
            title
            desc
        }
    }
`;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const lang = ctx.locale;
    const { data } = await client.query<IFaqPage>({
        query: QUERY_FAQS,
        variables: { lang }
    });

    return {
        props: {
            data
        }
    };
};

export default FaqPage;

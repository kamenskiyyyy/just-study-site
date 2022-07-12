import { GetServerSideProps, NextPage } from 'next';
import { Box, Container } from '@mui/material';
import { FAQ } from '@components/FAQ/FAQ';
import * as React from 'react';
import client from '@src/lib/apollo/apolloClient';
import { gql } from '@apollo/client';
import { Faq } from '@src/lib/apollo/types';
import { useTheme } from '@mui/material/styles';

interface IFaqPage {
    faqs: Faq[];
}

const FaqPage: NextPage<{ data: IFaqPage }> = (props) => {
    const theme = useTheme();

    return (
        <Box bgcolor={theme.palette.mode === 'dark' ? theme.palette.grey['800'] : theme.palette.grey['100']}>
            <Container maxWidth={'xl'}>
                <FAQ faqData={props.data.faqs} />
            </Container>
        </Box>
    );
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

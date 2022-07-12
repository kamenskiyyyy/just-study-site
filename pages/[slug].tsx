import { GetServerSideProps, NextPage } from 'next';
import { Box, Card, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { gql } from '@apollo/client';
import client from '@src/lib/apollo/apolloClient';
import { Page } from '@src/lib/apollo/types';
import { DocumentRenderer } from '@keystone-6/document-renderer';

const CMSPage: NextPage<{ data: Page }> = ({ data }) => {
    const { title, content, description } = data;
    const theme = useTheme();

    return (
        <Box bgcolor={theme.palette.primary.main} px={{ xs: 0.5, md: 6 }} py={{ xs: 2, md: 6 }}>
            <Container maxWidth={'xl'} sx={{ p: 0 }}>
                <Card sx={{ display: 'flex', flexDirection: 'column', py: { xs: 3, md: 6 }, px: { xs: 2, md: 6 } }}>
                    <Typography variant={'h1'} mb={{ xs: 1, md: 3 }} style={{ wordBreak: 'break-word' }}>
                        {title}
                    </Typography>
                    {description && (
                        <Typography variant={'h5'} color={theme.palette.primary.main} fontWeight={'bold'}>
                            {description}
                        </Typography>
                    )}
                    <DocumentRenderer document={content!.document} />
                </Card>
            </Container>
        </Box>
    );
};

const QUERY_PAGE = gql`
    query ($slug: String!, $lang: String!) {
        pages(where: { slug: { equals: $slug }, language: { equals: $lang } }) {
            id
            title
            description
            content {
                document(hydrateRelationships: true)
            }
        }
    }
`;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const slug = ctx.query.slug;
    const lang = ctx.locale;
    const { data } = await client.query<{ pages: Page[] }>({
        query: QUERY_PAGE,
        variables: { slug, lang }
    });

    const notFound = data.pages.length === 0;

    return {
        props: {
            data: data.pages[0]
        },
        notFound
    };
};

export default CMSPage;

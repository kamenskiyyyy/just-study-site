import { GetServerSideProps, NextPage } from 'next';
import { Box, Card, Container, Stack, Typography } from '@mui/material';
import { gql } from '@apollo/client';
import client from '@src/lib/apollo/apolloClient';
import { Post, Tag } from '@src/lib/apollo/types';
import { useTheme } from '@mui/material/styles';
import routes from '@src/routes';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { transition } from '@src/lib/transition';
import { blogPage } from '@translations/blogPage';
import { FormForLeads } from '@components/FormForLeads/FormForLeads';

interface IQueryBlogPage {
    posts: Post[];
    tags: Tag[];
}

const BlogPage: NextPage<{ data: IQueryBlogPage }> = ({ data }) => {
    const { tags, posts } = data;
    const theme = useTheme();
    const { push, locale } = useRouter();
    const t = transition(blogPage, locale);

    return (
        <>
            <Box
                bgcolor={theme.palette.mode === 'dark' ? theme.palette.grey['900'] : theme.palette.grey.A200}
                px={{ xs: 0.5, md: 6 }}
                py={{ xs: 2, md: 6 }}>
                <Container maxWidth={'xl'} sx={{ p: 0 }}>
                    <Typography variant={'h1'}>{t.title}</Typography>
                    <Box
                        py={4}
                        px={{ xs: 0, md: 4 }}
                        display={'grid'}
                        gridTemplateColumns={{ sm: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr 1fr' }}
                        gap={{ xs: 3, md: 4 }}>
                        {posts.map(({ title, id, cover }) => (
                            <Card
                                key={id}
                                sx={{
                                    backgroundColor:
                                        theme.palette.mode === 'dark'
                                            ? theme.palette.grey['800']
                                            : theme.palette.background.paper
                                }}>
                                <Stack gap={1} sx={{ cursor: 'pointer' }} onClick={() => push(`${routes.blog}/${id}`)}>
                                    <Card sx={{ minHeight: 270, position: 'relative' }}>
                                        {cover && (
                                            <Image
                                                src={cover.url}
                                                width={cover.width}
                                                height={cover.height}
                                                loading={'lazy'}
                                                layout={'fill'}
                                                objectFit={'cover'}
                                            />
                                        )}
                                    </Card>
                                    <Typography fontSize={20} fontWeight={'bold'} p={2}>
                                        {title}
                                    </Typography>
                                </Stack>
                            </Card>
                        ))}
                    </Box>
                </Container>
            </Box>
            <FormForLeads />
        </>
    );
};

const QUERY_BLOG_PAGE = gql`
    query ($lang: String!) {
        posts(where: { statusView: { equals: "show" }, language: { equals: $lang } }) {
            id
            title
            cover {
                url
                width
                height
            }
        }
        tags(where: { language: { equals: $lang } }) {
            name
            id
        }
    }
`;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const lang = ctx.locale;
    const { data } = await client.query<IQueryBlogPage>({
        query: QUERY_BLOG_PAGE,
        variables: { lang }
    });

    return {
        props: {
            data
        }
    };
};

export default BlogPage;

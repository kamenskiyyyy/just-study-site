import { GetServerSideProps } from 'next';
import { gql } from '@apollo/client';
import client from '@src/lib/apollo/apolloClient';
import { Post } from '@src/lib/apollo/types';
import { Box, Card, Container, Stack, Typography } from '@mui/material';
import { DocumentRenderer } from '@keystone-6/document-renderer';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { transition } from '@src/lib/transition';
import { post } from '@translations/post';
import { localeDate } from '@src/lib/localeDate';
import { format } from 'date-fns';
import { FormForLeads } from '@components/FormForLeads/FormForLeads';
import { Head } from '@src/modules/components/Head';
import * as React from 'react';
import { NextPageWithLayout } from '@shared/types/page';
import { MainLayout } from '@src/layouts/MainLayout';

const PostBlogPage: NextPageWithLayout<{ data: Post }> = ({ data }) => {
    const { title, content, description, cover, author, createdAt } = data;
    const { locale } = useRouter();
    const t = transition(post, locale);
    const theme = useTheme();

    const localeForDate = localeDate(locale || 'en');

    const authorText = `${t.author}: ${author?.name}`;

    return (
        <>
            <Head title={title as string} description={description as string} />
            <Box
                bgcolor={theme.palette.mode === 'dark' ? theme.palette.grey['900'] : theme.palette.grey.A100}
                px={{ xs: 0.5, md: 6 }}
                py={{ xs: 2, md: 6 }}>
                <Container maxWidth={'xl'} sx={{ p: 0 }}>
                    <Card sx={{ display: 'flex', flexDirection: 'column', py: { xs: 3, md: 6 }, px: { xs: 2, md: 6 } }}>
                        <Typography variant={'h1'} mb={{ xs: 1, md: 3 }} style={{ wordBreak: 'break-word' }}>
                            {title}
                        </Typography>

                        {description && (
                            <Typography variant={'h5'} mb={3} color={theme.palette.primary.main} fontWeight={'bold'}>
                                {description}
                            </Typography>
                        )}
                        {cover && (
                            <Card sx={{ minHeight: 370, position: 'relative' }}>
                                <Image src={cover.url} alt={title as string} layout={'fill'} objectFit={'cover'} />
                            </Card>
                        )}
                        <DocumentRenderer document={content!.document} />
                        <Stack mb={2} gap={3} direction={'row'} color={theme.palette.grey.A700}>
                            <Typography>
                                {format(new Date(createdAt), 'dd MMMM yyyy, HH:mm', { locale: localeForDate })}
                            </Typography>
                            {author && <Typography variant={'body1'}>{authorText}</Typography>}
                        </Stack>
                    </Card>
                </Container>
            </Box>
            <FormForLeads />
        </>
    );
};

PostBlogPage.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};

const QUERY_POST = gql`
    query ($id: ID!) {
        post(where: { id: $id }) {
            id
            title
            description
            cover {
                url
                width
                height
            }
            content {
                document(hydrateRelationships: true)
            }
            author {
                name
            }
            createdAt
            tag {
                name
            }
        }
    }
`;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const id = ctx.query.id;
    const { data } = await client.query<{ post: Post }>({
        query: QUERY_POST,
        variables: { id }
    });

    const notFound = !data.post;

    return {
        props: {
            data: data.post
        },
        notFound
    };
};

export default PostBlogPage;

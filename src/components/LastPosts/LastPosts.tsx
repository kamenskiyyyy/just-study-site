import { FC } from 'react';
import { Box, Card, Container, Stack, Typography } from '@mui/material';
import { Post } from '@src/lib/apollo/types';
import { useTheme } from '@mui/material/styles';
import Link from '@shared/ui/Link';
import routes from '@src/routes';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { transition } from '@src/lib/transition';
import { blogPage } from '@translations/blogPage';

export const LastPosts: FC<{ posts: Post[] }> = ({ posts }) => {
    const theme = useTheme();
    const { push, locale } = useRouter();
    const t = transition(blogPage, locale);

    if (posts.length === 0) return null;

    return (
        <Container maxWidth={'xl'} sx={{ py: 4, px: { xs: 2, md: 4 } }}>
            <Box display={'flex'} justifyContent={'space-between'}>
                <Typography variant={'h2'}>{t.title}</Typography>
                <Link href={routes.blog}>
                    {t.linkMore} <ArrowForwardOutlinedIcon />
                </Link>
            </Box>
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
    );
};

import { Head } from '@src/modules/components/Head';
import * as React from 'react';
import { NextPageWithLayout } from '@shared/types/page';
import { MainLayout } from '@src/layouts/MainLayout';
import { Box, Container, Typography } from '@mui/material';
import Link from '@shared/ui/Link';
import routes from '@src/routes';
import Image from 'next/image';
import cat from '@src/pages/Errors/cat404.svg';
import { useRouter } from 'next/router';
import { transition } from '@src/lib/transition';
import { errorPage } from '@translations/errorPage';
import { ILanguages } from '@src/modules/constants';

const Custom404Page: NextPageWithLayout = () => {
    const { locale } = useRouter();
    const t = transition(errorPage, locale as ILanguages);

    return (
        <>
            <Head title={'Error'} description={"We can't seem to find the page you're looking for."} />
            <Container maxWidth="lg">
                <Box
                    sx={{
                        my: 2,
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                        gridAutoColumns: '1fr',
                        gap: 2
                    }}>
                    <Box>
                        <Typography variant="h1" component="h1" gutterBottom>
                            {t['404'].title}
                        </Typography>
                        <Typography variant={'h2'}>{t['404'].description}</Typography>
                        <Typography my={2} variant={'body2'}>
                            {t.codeText} 404
                        </Typography>

                        <Link href={routes.home}>{t.buttonText}</Link>
                    </Box>
                    <Image src={cat} alt={'Error image'} loading={'lazy'} />
                </Box>
            </Container>
        </>
    );
};

Custom404Page.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};

export default Custom404Page;

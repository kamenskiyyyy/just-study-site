import { NextPageWithLayout } from '@shared/types/page';
import { Head } from '@src/modules/components/Head';
import * as React from 'react';
import { Container, Stack, Typography } from '@mui/material';
import Link from '@shared/ui/Link';
import routes from '@src/routes';
import { useRouter } from 'next/router';
import { transition } from '@src/lib/transition';
import { errorPage } from '@translations/errorPage';
import { ILanguages } from '@src/modules/constants';
import SvgJustStudyLogo from '@src/icons/SvgJustStudyLogo';

const Custom505Page: NextPageWithLayout = () => {
    const { locale } = useRouter();
    const t = transition(errorPage, locale as ILanguages);

    return (
        <>
            <Head title={'Error 500'} description={"We can't seem to find the page you're looking for."} />
            <Container maxWidth="lg" sx={{ m: 'auto' }}>
                <Stack direction={'row'} gap={2} alignItems={'center'}>
                    <SvgJustStudyLogo width={60} height={60} />
                    <Typography fontSize={50} fontWeight={'bold'}>
                        Just Study
                    </Typography>
                </Stack>
                <Typography mt={3} variant="h1" component="h1" gutterBottom>
                    {t['500'].title}
                </Typography>
                <Typography variant={'h2'}>{t['500'].description}</Typography>
                <Typography my={2} variant={'body2'}>
                    {t.codeText} 500
                </Typography>

                <Link href={routes.home}>{t.buttonText}</Link>
            </Container>
        </>
    );
};

export default Custom505Page;

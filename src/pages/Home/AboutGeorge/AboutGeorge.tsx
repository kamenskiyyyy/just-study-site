import { FC } from 'react';
import { useRouter } from 'next/router';
import { transition } from '@src/lib/transition';
import { ILanguages } from '@src/modules/constants';
import { Box, Container, Typography } from '@mui/material';
import georgeImage from './george.png';
import Image from 'next/image';
import { aboutGeorge } from '@translations/aboutGeorge';
import { useTheme } from '@mui/material/styles';

export const AboutGeorge: FC = () => {
    const { locale } = useRouter();
    const t = transition(aboutGeorge, locale as ILanguages);
    const theme = useTheme();

    return (
        <Container maxWidth="xl">
            <Box
                p={{ xs: 1, md: 4 }}
                display={'grid'}
                gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr' }}
                gap={{ xs: 2, md: 8 }}
                alignItems={'center'}>
                <Image placeholder={'blur'} src={georgeImage} loading={'lazy'} alt={'George photo'} />
                <Box display={'flex'} flexDirection={'column'} justifyItems={'left'}>
                    <Box
                        ml={0}
                        mb={3}
                        border={'solid'}
                        component={'hr'}
                        height={7}
                        color={theme.palette.primary.main}
                        width={94}
                        bgcolor={theme.palette.primary.main}
                    />
                    <Typography variant={'h2'}>{t.title}</Typography>
                    <Typography variant={'h2'}>{t.title2}</Typography>
                    <Typography mt={1} variant={'h5'}>
                        {t.about}
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

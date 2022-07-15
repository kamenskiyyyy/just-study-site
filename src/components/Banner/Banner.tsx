import { FC, ReactNode } from 'react';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface IBanner {
    title: string;
    desc: ReactNode | string;
    picture: ReactNode;
    buttonText: string;
}

export const Banner: FC<IBanner> = ({ title, desc, picture, buttonText }) => {
    const theme = useTheme();

    return (
        <Box bgcolor={theme.palette.primary.main}>
            <Container maxWidth={'xl'}>
                <Box py={4} px={{ xs: 0, md: 4 }}>
                    <Box
                        display={'grid'}
                        gridTemplateColumns={{ xs: '1fr', md: '1fr 40%', lg: '1fr 30%' }}
                        gap={4}
                        alignItems={'center'}>
                        <Stack direction={'column'} gap={2} alignItems={'flex-start'}>
                            <Typography variant={'h1'} color={'white'}>
                                {title}
                            </Typography>
                            <Box>{desc}</Box>
                            <Button variant={'contained'} color={'success'} size={'large'} href={'#form-lead'}>
                                {buttonText}
                            </Button>
                        </Stack>
                        {picture}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

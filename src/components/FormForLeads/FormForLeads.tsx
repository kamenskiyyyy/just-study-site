import { FC } from 'react';
import { Box, Card, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const FormForLeads: FC = () => {
    const theme = useTheme();

    return (
        <Box bgcolor={theme.palette.primary.main}>
            <Container maxWidth={'xl'}>
                <Box p={4}>
                    <Card>
                        <Box
                            display={'grid'}
                            gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr' }}
                            gap={{ xs: 2, md: 8 }}
                            alignItems={'center'}>
                            <Box>
                                <Typography variant={'h2'} fontWeight={'bold'}>
                                    Запишись на курс
                                </Typography>
                            </Box>
                            <Card>form</Card>
                        </Box>
                    </Card>
                </Box>
            </Container>
        </Box>
    );
};

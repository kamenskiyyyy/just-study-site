import { NextPage } from 'next';
import { Box, Button, Card, Container, Typography } from '@mui/material';
import Image from 'next/image';
import callCentre from './call-centre.png';
import { useRouter } from 'next/router';
import routes from '@src/routes';
import { transition } from '@src/lib/transition';
import { successPage } from '@translations/successPage';

export const SuccessFormLead: NextPage = () => {
    const { locale, push } = useRouter();
    const t = transition(successPage, locale);

    return (
        <Container maxWidth={'xl'} sx={{ p: 0 }}>
            <Card
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    py: { xs: 3, md: 6 },
                    px: { xs: 2, md: 6 }
                }}>
                <Typography variant={'h2'} mb={{ xs: 1, md: 3 }} style={{ wordBreak: 'break-word' }}>
                    {t.formLead.title}
                </Typography>
                <Typography variant={'h5'}>{t.formLead.desc}</Typography>
                <Box maxWidth={500} maxHeight={500}>
                    <Image src={callCentre} placeholder={'blur'} loading={'lazy'} />
                </Box>
                <Button variant={'contained'} onClick={() => push(routes.home)}>
                    {t.formLead.button}
                </Button>
            </Card>
        </Container>
    );
};

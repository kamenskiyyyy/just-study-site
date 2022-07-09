import { FC } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Card, Container, Typography } from '@mui/material';
import archery from './picture/Archery-bro 1.png';
import multitasking from './picture/Multitasking-bro 2.png';
import friends from './picture/Online friends-bro 2.png';
import watch from './picture/Wristwatch-bro 1.png';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { transition } from '@src/lib/transition';
import { advantages } from '@translations/advantages';

const images = [archery, watch, friends, multitasking];

export const Advantages: FC = () => {
    const theme = useTheme();
    const { locale } = useRouter();
    const t = transition(advantages, locale);

    return (
        <Box bgcolor={theme.palette.primary.main}>
            <Container maxWidth={'xl'}>
                <Box py={4} px={{ xs: 0, md: 4 }} display={'flex'} flexDirection={'column'} alignItems={'center'}>
                    <Typography variant={'h2'} color={theme.palette.grey['50']}>
                        {t.title}
                    </Typography>
                    <Box
                        mt={2}
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                            gap: { xs: 1, md: 3 }
                        }}>
                        {t.cards.map(({ title, desc }: { title: string; desc: string }, index: number) => (
                            <Card
                                key={index}
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                                    gap: { xs: 1, md: 2 }
                                }}>
                                <Image
                                    src={images[index]}
                                    placeholder={'blur'}
                                    loading={'lazy'}
                                    layout={'responsive'}
                                />
                                <Box
                                    pb={{ xs: 2, md: 4 }}
                                    pt={{ xs: 0, md: 4 }}
                                    px={{ xs: 2, md: 4 }}
                                    display={'flex'}
                                    flexDirection={'column'}
                                    justifyContent={'center'}>
                                    <Typography variant={'h4'} color={theme.palette.primary.main}>
                                        {title}
                                    </Typography>
                                    <Typography variant={'h6'}>{desc}</Typography>
                                </Box>
                            </Card>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

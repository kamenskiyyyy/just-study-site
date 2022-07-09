import * as React from 'react';
import { FC } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Card, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/system';
import { mockFAQ } from '@components/FAQ/mock';
import TelegramIcon from '@mui/icons-material/Telegram';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import Stack from '@mui/material/Stack';

export const StyledAccordion = styled(Accordion)`
    background: transparent;
    border: none;
    box-shadow: none;

    div {
        padding: 0;
    }
`;

const Help = () => {
    return (
        <>
            <Typography mb={2} variant={'h6'}>
                Не нашли ответа на свой вопрос? Напишите нам в чат Телеграм или Instagram
            </Typography>
            <Stack spacing={2} direction="row">
                <IconButton
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/goshanchico/"
                    aria-label="instagram"
                    title="Instagram"
                    size="small">
                    <InstagramIcon fontSize="small" />
                </IconButton>
                <IconButton
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://t.me/goshline"
                    aria-label="telegram"
                    title="Telegram"
                    size="small">
                    <TelegramIcon fontSize="small" />
                </IconButton>
            </Stack>
        </>
    );
};

export const FAQ: FC = () => {
    const theme = useTheme();

    return (
        <Box bgcolor={theme.palette.mode === 'dark' ? theme.palette.grey['800'] : theme.palette.grey['100']}>
            <Container maxWidth={'xl'}>
                <Box
                    py={4}
                    px={{ xs: 0, md: 4 }}
                    display={'grid'}
                    gridTemplateColumns={{ md: '1fr', lg: '350px 1fr' }}
                    gap={{ xs: 0, md: 4 }}>
                    <Box>
                        <Typography my={2} variant={'h2'}>
                            Ответы на популярные вопросы
                        </Typography>
                        <Box sx={{ display: { xs: 'none', md: 'initial' } }}>
                            <Help />
                        </Box>
                    </Box>

                    <Box>
                        {mockFAQ.map(({ title, desc }, index) => (
                            <StyledAccordion key={index} defaultExpanded={index === 0}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon fontSize={'large'} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header">
                                    <Typography variant={'h6'} fontWeight={'bold'}>
                                        {title}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant={'h6'}>{desc}</Typography>
                                </AccordionDetails>
                            </StyledAccordion>
                        ))}
                        <Box mt={2} sx={{ display: { md: 'none' } }}>
                            <Card sx={{ p: 2 }}>
                                <Help />
                            </Card>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

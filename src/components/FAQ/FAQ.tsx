import * as React from 'react';
import { FC } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Card, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/system';
import { useRouter } from 'next/router';
import { transition } from '@src/lib/transition';
import { ILanguages } from '@src/modules/constants';
import { faq } from '@translations/faq';
import { Help } from '@components/FAQ/Help';
import { Faq } from '@src/lib/apollo/types';

export const StyledAccordion = styled(Accordion)`
    background: transparent;
    border: none;
    box-shadow: none;

    div {
        padding: 0;
    }
`;

export const FAQ: FC<{ faqData: Faq[] }> = ({ faqData }) => {
    const { locale } = useRouter();
    const t = transition(faq, locale as ILanguages);
    const theme = useTheme();

    if (faqData.length === 0) return null;

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
                            {t.title}
                        </Typography>
                        <Box sx={{ display: { xs: 'none', md: 'initial' } }}>
                            <Help />
                        </Box>
                    </Box>

                    <Box>
                        {faqData.map(({ title, desc }, index) => (
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

import * as React from 'react';
import { FC } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/system';
import { mockFAQ } from '@components/FAQ/mock';

export const StyledAccordion = styled(Accordion)`
    background: transparent;
    border: none;
    box-shadow: none;

    div {
        padding: 0;
    }
`;

export const FAQ: FC = () => {
    const theme = useTheme();

    return (
        <Box bgcolor={theme.palette.mode === 'dark' ? theme.palette.grey['800'] : theme.palette.grey['100']}>
            <Container maxWidth={'xl'}>
                <Box py={4} px={{ xs: 0, md: 4 }}>
                    <Typography my={3} variant={'h2'}>
                        Ответы на популярные вопросы
                    </Typography>
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
                </Box>
            </Container>
        </Box>
    );
};

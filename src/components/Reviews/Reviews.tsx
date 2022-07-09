import * as React from 'react';
import { useRef, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Avatar, Button, Container, Dialog, DialogContent, IconButton, Stack, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';
import { transition } from '@src/lib/transition';
import { reviews } from '@translations/reviews';
import { CardReview, Stepper, TruncateText } from './styles';
import { allReviews } from '@components/Reviews/mock';
import { settings } from '@components/Reviews/settings';

type IReview = typeof allReviews[0];

export const Reviews = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = allReviews.length;
    let slider = useRef<Slider>();
    const [showReview, setShowReview] = useState<IReview | null>(null);
    const { locale } = useRouter();
    const t = transition(reviews, locale);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        // @ts-ignore
        slider.slickNext();
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        // @ts-ignore
        slider.slickPrev();
    };

    const handleClose = () => setShowReview(null);

    return (
        <>
            <Box bgcolor={theme.palette.mode === 'dark' ? theme.palette.grey['800'] : theme.palette.grey['100']}>
                <Container maxWidth={'xl'}>
                    <Box py={4} px={{ xs: 0, md: 4 }}>
                        <Typography my={3} variant={'h2'}>
                            {t.title}
                        </Typography>
                        <Slider
                            ref={(c) => (slider = c)}
                            {...settings}
                            afterChange={(currentSlide) => setActiveStep(currentSlide)}>
                            {allReviews.map((review: IReview, index: number) => {
                                const { photo, name, profession, desc } = review;
                                return (
                                    <Box p={1} key={index}>
                                        <CardReview
                                            sx={{ height: 450, p: 3 }}
                                            onClick={() => {
                                                setShowReview(review);
                                            }}>
                                            <Box
                                                display={'grid'}
                                                gridTemplateColumns={{ md: '1fr', lg: '80px 1fr' }}
                                                gap={2}
                                                alignItems={'center'}>
                                                <Avatar
                                                    src={photo}
                                                    alt={'photo student'}
                                                    sx={{ width: 80, height: 80 }}
                                                />
                                                <Box>
                                                    <Typography variant={'h6'} fontWeight={'bold'}>
                                                        {name}
                                                    </Typography>
                                                    <Typography>{profession}</Typography>
                                                </Box>
                                            </Box>
                                            <TruncateText
                                                my={1}
                                                style={{ overflow: 'hidden' }}
                                                maxHeight={{ xs: 250, sm: 270, lg: 310 }}>
                                                {desc}
                                            </TruncateText>
                                        </CardReview>
                                    </Box>
                                );
                            })}
                        </Slider>
                        <Stepper
                            sx={{
                                mt: 1,
                                backgroundColor: 'transparent',
                                display: 'flex',
                                flexDirection: 'row-reverse'
                            }}
                            steps={maxSteps}
                            position="static"
                            activeStep={activeStep}
                            nextButton={null}
                            backButton={
                                <Stack gap={1} flexDirection={'row'}>
                                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                        <KeyboardArrowLeft />
                                    </Button>
                                    <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                                        <KeyboardArrowRight />
                                    </Button>
                                </Stack>
                            }
                        />
                    </Box>
                </Container>
            </Box>
            <Dialog open={!!showReview} onClose={handleClose}>
                <DialogContent>
                    <Box
                        display={'grid'}
                        gridTemplateColumns={{ xd: '1fr', sm: '80px 1fr' }}
                        gap={2}
                        alignItems={'center'}>
                        <Avatar src={showReview?.photo} alt={'photo student'} sx={{ width: 80, height: 80 }} />
                        <Box>
                            <Typography variant={'h6'} fontWeight={'bold'}>
                                {showReview?.name}
                            </Typography>
                            <Typography>{showReview?.profession}</Typography>
                        </Box>
                        <IconButton
                            aria-label="close"
                            onClick={handleClose}
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: (theme) => theme.palette.grey[500]
                            }}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Typography mt={1}>{showReview?.desc}</Typography>
                </DialogContent>
            </Dialog>
        </>
    );
};

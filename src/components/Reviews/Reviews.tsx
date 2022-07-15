import * as React from 'react';
import { FC, useRef, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Avatar, Button, Container, Dialog, DialogContent, IconButton, Stack, Typography } from '@mui/material';
import Slider from 'react-slick';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';
import { transition } from '@src/lib/transition';
import { reviews } from '@translations/reviews';
import { CardReview, Stepper, TruncateText } from './styles';
import { stringAvatar } from '@src/lib/textAvatar';
import { ProductReview } from '@src/lib/apollo/types';
import { formatNameStudent } from '@src/lib/formatNameStudent';
import { settings } from './settings';
import 'slick-carousel/slick/slick.css';

export const Reviews: FC<{ allReviews: Required<ProductReview[]> }> = ({ allReviews }) => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = allReviews.length;
    const slider = useRef<Slider | null>(null);
    const [showReview, setShowReview] = useState<ProductReview | null>(null);
    const { locale } = useRouter();
    const t = transition(reviews, locale);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        slider.current?.slickNext();
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        slider.current?.slickPrev();
    };

    const handleClose = () => setShowReview(null);

    if (allReviews.length === 0) return null;

    return (
        <>
            <Box bgcolor={theme.palette.mode === 'dark' ? theme.palette.grey['800'] : theme.palette.grey['100']}>
                <Container maxWidth={'xl'}>
                    <Box py={4} px={{ xs: 0, md: 4 }}>
                        <Typography my={3} variant={'h2'}>
                            {t.title}
                        </Typography>
                        <Slider ref={slider} {...settings} afterChange={(currentSlide) => setActiveStep(currentSlide)}>
                            {allReviews.map((review, index: number) => {
                                const { student, desc } = review;
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
                                                {student?.avatar ? (
                                                    <Avatar
                                                        src={student?.avatar?.image?.url}
                                                        alt={'photo student'}
                                                        sx={{ width: 80, height: 80 }}
                                                    />
                                                ) : (
                                                    <Avatar
                                                        {...stringAvatar(student?.name as string)}
                                                        alt={'photo student'}
                                                        sx={{ width: 80, height: 80 }}
                                                    />
                                                )}
                                                <Box>
                                                    <Typography variant={'h6'} fontWeight={'bold'}>
                                                        {formatNameStudent(student?.name as string)}
                                                    </Typography>
                                                    {/*<Typography>{profession}</Typography>*/}
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
                        {showReview && showReview?.student?.avatar ? (
                            <Avatar
                                src={showReview?.student?.avatar?.image?.url}
                                alt={'photo student'}
                                sx={{ width: 80, height: 80 }}
                            />
                        ) : (
                            <Avatar
                                {...stringAvatar(showReview?.student?.name || 'Диана Знайкина')}
                                alt={'photo student'}
                                sx={{ width: 80, height: 80 }}
                            />
                        )}
                        <Box>
                            <Typography variant={'h6'} fontWeight={'bold'}>
                                {formatNameStudent(showReview?.student?.name as string)}
                            </Typography>
                            {/*<Typography>{showReview?.profession}</Typography>*/}
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

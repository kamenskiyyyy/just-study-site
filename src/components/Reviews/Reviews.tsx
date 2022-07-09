import * as React from 'react';
import { useRef, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import {
    Avatar,
    Button,
    Card,
    Container,
    Dialog,
    DialogContent,
    IconButton,
    MobileStepper,
    Stack,
    Typography
} from '@mui/material';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';
import { transition } from '@src/lib/transition';
import { reviews } from '@translations/reviews';

const allReviews = [
    {
        photo: 'https://storage.yandexcloud.net/sitejuststudy/user-avatar-d10ad402-65c2-425b-875a-dd299c7c25ab.jpg',
        name: 'Алексей',
        profession: 'Кадет летного училища',
        desc: 'Когда я начал учиться с Гошей мы начали с основ грамматики, впервые за долгое время у меня сформировалась определённая система, с помощью которой я без проблем мог выражать свои мысли, но на грамматике дело не закончилось, мы часто уделяли время новым словам, устойчивым оборотам чтобы мой английский не был таким деревянным. После года обучения с Гошей я поехал в США по программе Work and Travel. Когда я начал учиться с Гошей мы начали с основ грамматики, впервые за долгое время у меня сформировалась определённая система, с помощью которой я без проблем мог выражать свои мысли, но на грамматике дело не закончилось, мы часто уделяли время новым словам, устойчивым оборотам чтобы мой английский не был таким деревянным. После года обучения с Гошей я поехал в США по программе Work and Travel'
    },
    {
        photo: 'https://storage.yandexcloud.net/sitejuststudy/user-avatar-d10ad402-65c2-425b-875a-dd299c7c25ab.jpg',
        name: 'Жанна',
        profession: 'Бортпроводник',
        desc: 'Георгий, спасибо большое за этот курс и вашу работу! Грамотно спланированный, быстрый и эффективный курс с индивидуальным подходом, плюс постоянная поддержка — это лучший вариант изучения языка.👌🏻 За очень короткое время я получила огромное количество информации, как никогда ранее и эта информация благополучно усвоена, что самое главное! И отдельное большое спасибо за бизнес английский! Для меня'
    },
    {
        photo: 'https://storage.yandexcloud.net/sitejuststudy/user-avatar-d10ad402-65c2-425b-875a-dd299c7c25ab.jpg',
        name: 'Алексей',
        profession: 'Кадет летного училища',
        desc: 'Когда я начал учиться с Гошей мы начали с основ грамматики, впервые за долгое время у меня сформировалась определённая система, с помощью которой я без проблем мог выражать свои мысли, но на грамматике дело не закончилось, мы часто уделяли время новым словам, устойчивым оборотам чтобы мой английский не был таким деревянным. После года обучения с Гошей я поехал в США по программе Work and Travel'
    },
    {
        photo: 'https://storage.yandexcloud.net/sitejuststudy/user-avatar-d10ad402-65c2-425b-875a-dd299c7c25ab.jpg',
        name: 'Жанна',
        profession: 'Бортпроводник',
        desc: 'Георгий, спасибо большое за этот курс и вашу работу! Грамотно спланированный, быстрый и эффективный курс с индивидуальным подходом, плюс постоянная поддержка — это лучший вариант изучения языка.👌🏻 За очень короткое время я получила огромное количество информации, как никогда ранее и эта информация благополучно усвоена, что самое главное! И отдельное большое спасибо за бизнес английский! Для меня'
    },
    {
        photo: 'https://storage.yandexcloud.net/sitejuststudy/user-avatar-d10ad402-65c2-425b-875a-dd299c7c25ab.jpg',
        name: 'Алексей',
        profession: 'Кадет летного училища',
        desc: 'Когда я начал учиться с Гошей мы начали с основ грамматики, впервые за долгое время у меня сформировалась определённая система, с помощью которой я без проблем мог выражать свои мысли, но на грамматике дело не закончилось, мы часто уделяли время новым словам, устойчивым оборотам чтобы мой английский не был таким деревянным. После года обучения с Гошей я поехал в США по программе Work and Travel'
    },
    {
        photo: 'https://storage.yandexcloud.net/sitejuststudy/user-avatar-d10ad402-65c2-425b-875a-dd299c7c25ab.jpg',
        name: 'Жанна',
        profession: 'Бортпроводник',
        desc: 'Георгий, спасибо большое за этот курс и вашу работу! Грамотно спланированный, быстрый и эффективный курс с индивидуальным подходом, плюс постоянная поддержка — это лучший вариант изучения языка.👌🏻 За очень короткое время я получила огромное количество информации, как никогда ранее и эта информация благополучно усвоена, что самое главное! И отдельное большое спасибо за бизнес английский! Для меня'
    }
];

type IReview = typeof allReviews[0];

const TruncateText = styled(Typography)`
    overflow: hidden;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 140px;
        background: ${({ theme }) => `linear-gradient(180deg, transparent, ${theme.palette.background.paper}  80%)`};
    }
`;

const Stepper = styled(MobileStepper)`
    .MuiMobileStepper-dots {
        gap: 8px;
    }
`;

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

    const settings: Settings = {
        dots: false,
        infinite: true,
        arrows: false,
        swipeToSlide: true,
        speed: 500,
        lazyLoad: 'ondemand',
        slidesToShow: 4,
        afterChange(currentSlide: number) {
            setActiveStep(currentSlide);
        },
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1414,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <Box bgcolor={theme.palette.mode === 'dark' ? theme.palette.grey['800'] : theme.palette.grey['100']}>
                <Container maxWidth={'xl'}>
                    <Box py={4} px={{ xs: 0, md: 4 }}>
                        <Typography my={3} variant={'h2'}>
                            {t.title}
                        </Typography>
                        <Slider ref={(c) => (slider = c)} {...settings}>
                            {allReviews.map((review: IReview, index: number) => {
                                const { photo, name, profession, desc } = review;
                                return (
                                    <Box p={1} key={index}>
                                        <Card
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
                                        </Card>
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

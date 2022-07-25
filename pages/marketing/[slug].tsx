import { Marketing, ProductReview } from '@src/lib/apollo/types';
import { GetServerSideProps, NextPage } from 'next';
import { IDataAboutUser } from '../index';
import { Head } from '@src/modules/components/Head';
import { Banner } from '@components/Banner/Banner';
import { Box, Container, Stack, Typography } from '@mui/material';
import { InstagramAvatar } from '@src/pages/Marketing/style';
import Image from 'next/image';
import { FormForLeads } from '@components/FormForLeads/FormForLeads';
import { AboutGeorge } from '@src/pages/Home/AboutGeorge/AboutGeorge';
import { Advantages } from '@components/Advantages/Advantages';
import { Reviews } from '@components/Reviews/Reviews';
import client from '@src/lib/apollo/apolloClient';
import { gql } from '@apollo/client';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import SvgJustStudyLogo from '@src/icons/SvgJustStudyLogo';
import { ViewStatus } from '@shared/enums/view-status';

interface IQueryMarketingPage {
    marketing: Marketing;
    productReviews: ProductReview[];
}

const MarketingPage: NextPage<{ data: IQueryMarketingPage; dataAboutUser: IDataAboutUser }> = ({
    data,
    dataAboutUser
}) => {
    const theme = useTheme();
    const { marketing, productReviews } = data;

    return (
        <>
            <Head title={marketing.title as string} description={marketing?.description as string} />
            <Box bgcolor={theme.palette.primary.main}>
                <Container maxWidth={'xl'} sx={{ display: 'flex' }}>
                    <Box py={2} px={{ xs: 0, md: 4 }}>
                        <Stack
                            alignItems={'center'}
                            gap={1}
                            direction={'row'}
                            p={1}
                            bgcolor={theme.palette.background.paper}
                            borderRadius={20}>
                            <SvgJustStudyLogo width={40} />
                            <Typography variant={'h2'}>Just Study</Typography>
                        </Stack>
                    </Box>
                </Container>
            </Box>
            <Banner
                alignPicture={'left'}
                title={marketing.title as string}
                desc={
                    <Typography color={'white'} variant={'h3'}>
                        {marketing.description}
                    </Typography>
                }
                buttonText={'Получить скидку'}
                picture={
                    marketing?.image?.url && (
                        <InstagramAvatar>
                            <div>
                                <Image
                                    src={marketing.image.url}
                                    alt={marketing.title as string}
                                    layout={'fill'}
                                    objectFit={'cover'}
                                />
                            </div>
                        </InstagramAvatar>
                    )
                }
            />
            <FormForLeads data={dataAboutUser} />
            {marketing.aboutGeorge && <AboutGeorge />}
            {marketing.advantages && <Advantages />}
            {marketing.reviews && <Reviews allReviews={productReviews} />}
            <FormForLeads data={dataAboutUser} />
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const lang = ctx.locale;
    const slug = ctx.query.slug;
    const { data } = await client.query<IQueryMarketingPage>({
        query: gql`
            query ($lang: String!, $slug: String!) {
                marketing(where: { slug: $slug }) {
                    title
                    description
                    aboutGeorge
                    advantages
                    reviews
                    image {
                        url
                    }
                    statusView
                }
                productReviews(where: { statusView: { equals: "show" }, language: { equals: $lang } }) {
                    id
                    desc
                    student {
                        name
                        avatar {
                            image {
                                url
                            }
                        }
                    }
                }
            }
        `,
        variables: { lang, slug },
        fetchPolicy: 'no-cache'
    });

    const dataAboutUser: IDataAboutUser = {
        query: ctx.query,
        locale: ctx.locale || '',
        resolvedUrl: ctx.resolvedUrl
    };

    const notFound = data.marketing?.statusView !== ViewStatus.Show;

    return {
        notFound,
        props: {
            data,
            dataAboutUser
        }
    };
};

export default MarketingPage;

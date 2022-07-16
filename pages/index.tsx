import * as React from 'react';
import { GetServerSideProps } from 'next';
import { AboutGeorge } from '@src/pages/Home/AboutGeorge/AboutGeorge';
import { FormForLeads } from '@components/FormForLeads/FormForLeads';
import { Advantages } from '@components/Advantages/Advantages';
import { Reviews } from '@components/Reviews/Reviews';
import { FAQ } from '@components/FAQ/FAQ';
import client from '@src/lib/apollo/apolloClient';
import { gql } from '@apollo/client';
import { Faq, Post, ProductReview } from '@src/lib/apollo/types';
import { LastPosts } from '@components/LastPosts/LastPosts';
import { Head } from '@src/modules/components/Head';
import { MainBanner } from '@src/pages/Home/MainBanner/MainBanner';
import { useRouter } from 'next/router';
import { transition } from '@src/lib/transition';
import { homePage } from '@translations/homePage';
import { ILanguages } from '@src/modules/constants';
import { MainLayout } from '@src/layouts/MainLayout';
import { NextPageWithLayout } from '@shared/types/page';

interface IQueryHomePage {
    faqs: Faq[];
    productReviews: ProductReview[];
    posts: Post[];
}

const Home: NextPageWithLayout<{ data: IQueryHomePage }> = (props) => {
    const { productReviews, posts, faqs } = props.data;
    const { locale } = useRouter();
    const t = transition(homePage, locale as ILanguages);
    return (
        <>
            <Head title={t.title} description={t.description} />
            <MainBanner />
            <AboutGeorge />
            <FormForLeads />
            <Advantages />
            <Reviews allReviews={productReviews} />
            <LastPosts posts={posts} />
            <FAQ faqData={faqs} />
            <FormForLeads />
        </>
    );
};

Home.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const lang = ctx.locale;
    const { data } = await client.query<IQueryHomePage>({
        query: gql`
            query ($lang: String!) {
                faqs(where: { statusView: { equals: "show" }, language: { equals: $lang } }) {
                    id
                    title
                    desc
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
                posts(where: { statusView: { equals: "show" }, language: { equals: $lang } }, take: 4) {
                    id
                    title
                    cover {
                        url
                        width
                        height
                    }
                }
            }
        `,
        variables: { lang }
    });

    return {
        props: {
            data
        }
    };
};

export default Home;

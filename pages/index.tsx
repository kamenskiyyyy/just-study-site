import * as React from 'react';
import type { NextPage } from 'next';
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

interface IQueryHomePage {
    faqs: Faq[];
    productReviews: ProductReview[];
    posts: Post[];
}

const Home: NextPage<{ data: IQueryHomePage }> = (props) => {
    const { productReviews, posts, faqs } = props.data;
    return (
        <>
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

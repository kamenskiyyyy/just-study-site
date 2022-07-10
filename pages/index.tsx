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
import { Faq, ProductReview } from '@src/lib/apollo/types';

interface IQueryHomePage {
    faqs: Faq[];
    productReviews: ProductReview[];
}

const Home: NextPage<{ data: IQueryHomePage }> = (props) => {
    return (
        <>
            <AboutGeorge />
            <FormForLeads />
            <Advantages />
            <Reviews allReviews={props.data.productReviews} />
            <FAQ faqData={props.data.faqs} />
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

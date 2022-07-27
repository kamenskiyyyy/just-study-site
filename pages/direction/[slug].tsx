import { NextPageWithLayout } from '@shared/types/page';
import { MainLayout } from '@src/layouts/MainLayout';
import * as React from 'react';
import { GetServerSideProps } from 'next';
import client from '@src/lib/apollo/apolloClient';
import { Direction, Faq, ProductReview } from '@src/lib/apollo/types';
import { QUERY_DIRECTION_PAGE } from '@src/lib/apollo/directionPage';
import { Head } from '@src/modules/components/Head';
import { MainBanner } from '@src/pages/DirectionItemPage/MainBanner';
import { Goals } from '@src/pages/DirectionItemPage/Goals';
import { IDataAboutUser } from '../index';
import { FormForLeads } from '@components/FormForLeads/FormForLeads';
import { Result } from '@src/pages/DirectionItemPage/Result';
import { Courses } from '@src/pages/DirectionItemPage/Courses';
import { Reviews } from '@components/Reviews/Reviews';
import { FAQ } from '@components/FAQ/FAQ';

interface IQueryMarketingPage {
    directions: Direction[];
    productReviews: ProductReview[];
    faqs: Faq[];
}

const DirectionItemPage: NextPageWithLayout<{ data: IQueryMarketingPage; dataAboutUser: IDataAboutUser }> = ({
    data,
    dataAboutUser
}) => {
    const { directions, productReviews, faqs } = data;
    const { name, description, image, goals, results, products } = directions[0];

    return (
        <>
            <Head title={name as string} description={description as string} />
            <MainBanner name={name} description={description} image={image} />
            <Goals goals={goals} />
            <Result results={results} />
            <Courses products={products} />
            <Reviews allReviews={productReviews} />
            <FormForLeads data={dataAboutUser} />
            <FAQ faqData={faqs} />
        </>
    );
};

DirectionItemPage.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const lang = ctx.locale;
    const slug = ctx.query.slug;
    const { data } = await client.query<IQueryMarketingPage>({
        query: QUERY_DIRECTION_PAGE,
        variables: { lang, slug }
    });

    const dataAboutUser: IDataAboutUser = {
        query: ctx.query,
        locale: ctx.locale || '',
        resolvedUrl: ctx.resolvedUrl
    };

    return {
        notFound: data.directions.length === 0,
        props: {
            data,
            dataAboutUser
        }
    };
};

export default DirectionItemPage;

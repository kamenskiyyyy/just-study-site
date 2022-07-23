import { MainLayout } from '@src/layouts/MainLayout';
import * as React from 'react';
import { NextPageWithLayout } from '@shared/types/page';
import { gql } from '@apollo/client';
import { GetServerSideProps } from 'next';
import client from '@src/lib/apollo/apolloClient';
import { Payment } from '@src/lib/apollo/types';
import { SuccessPayment } from '@src/pages/CheckPayment/SuccessPayment';
import { ErrorPayment } from '@src/pages/CheckPayment/ErrorPayment';
import { Head } from '@src/modules/components/Head';

interface IResultPage {
    status: Payment['status'];
}

const QUERY_CHECK_PAYMENT = gql`
    query ($paymentId: String!) {
        checkPayment(paymentId: $paymentId) {
            status
        }
    }
`;

const ResultPage: NextPageWithLayout<IResultPage> = ({ status }) => {
    return (
        <>
            <Head title={'Статус оплаты'} />
            {status === 'successfully' ? <SuccessPayment /> : <ErrorPayment url={'test'} />}
        </>
    );
};

ResultPage.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const notFound = Object.keys(ctx.query).length < 2;

    if (notFound) {
        return {
            notFound,
            props: {}
        };
    }

    const { orderid } = ctx.query;

    const { data, error } = await client.query({
        variables: { paymentId: orderid },
        query: QUERY_CHECK_PAYMENT,
        fetchPolicy: 'no-cache'
    });

    if (error) {
        return {
            notFound: true,
            props: {}
        };
    }

    return {
        props: {
            status: data.checkPayment.status
        }
    };
};

export default ResultPage;

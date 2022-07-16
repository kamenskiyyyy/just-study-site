import { GetServerSideProps, NextPage } from 'next';
import { Head } from '@src/modules/components/Head';
import * as React from 'react';
import { Banner } from '@components/Banner/Banner';
import { InstagramAvatar } from '@src/pages/Marketing/lenshlee/style';
import avatar from '@src/pages/Marketing/lenshlee/avatar_lenshlee.jpg';
import Image from 'next/image';
import { FormForLeads } from '@components/FormForLeads/FormForLeads';
import { AboutGeorge } from '@src/pages/Home/AboutGeorge/AboutGeorge';
import { Advantages } from '@components/Advantages/Advantages';
import { Reviews } from '@components/Reviews/Reviews';
import client from '@src/lib/apollo/apolloClient';
import { gql } from '@apollo/client';
import { ProductReview } from '@src/lib/apollo/types';
import { Typography } from '@mui/material';
import { IDataAboutUser } from '../index';

interface IQueryLenshleePage {
    productReviews: ProductReview[];
}

const LenshleePage: NextPage<{ data: IQueryLenshleePage; dataAboutUser: IDataAboutUser }> = ({
    data,
    dataAboutUser
}) => {
    const { productReviews } = data;

    const title = '@lenshlee дарит английский со скидкой -20%!';
    const desc = 'Заполни анкету, чтобы сохранить скидку ⤵️';

    return (
        <>
            <Head title={title} description={desc} />
            <Banner
                alignPicture={'left'}
                title={title}
                desc={
                    <Typography color={'white'} variant={'h3'}>
                        {desc}
                    </Typography>
                }
                buttonText={'Получить скидку'}
                picture={
                    <InstagramAvatar>
                        <div>
                            <Image src={avatar} layout={'fill'} objectFit={'cover'} />
                        </div>
                    </InstagramAvatar>
                }
            />
            <FormForLeads data={dataAboutUser} redirect={false} />
            <AboutGeorge />
            <Advantages />
            <FormForLeads data={dataAboutUser} redirect={false} />
            <Reviews allReviews={productReviews} />
            <FormForLeads data={dataAboutUser} redirect={false} />
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const lang = ctx.locale;
    const { data } = await client.query<IQueryLenshleePage>({
        query: gql`
            query ($lang: String!) {
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

    const dataAboutUser: IDataAboutUser = {
        query: ctx.query,
        locale: ctx.locale || '',
        resolvedUrl: ctx.resolvedUrl
    };

    return {
        props: {
            data,
            dataAboutUser
        }
    };
};

export default LenshleePage;

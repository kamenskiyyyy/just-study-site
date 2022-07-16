import { Custom404 } from '@src/pages/Errors/404';
import { Head } from '@src/modules/components/Head';
import * as React from 'react';
import { NextPageWithLayout } from '@shared/types/page';
import { MainLayout } from '@src/layouts/MainLayout';

const Custom404Page: NextPageWithLayout = () => {
    return (
        <>
            <Head title={'Error'} description={"We can't seem to find the page you're looking for."} />
            <Custom404 />
        </>
    );
};

Custom404Page.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};

export default Custom404Page;

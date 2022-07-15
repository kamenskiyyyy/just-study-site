import type { NextPage } from 'next';
import { Custom404 } from '@src/pages/Errors/404';
import { Head } from '@src/modules/components/Head';
import * as React from 'react';

const Custom404Page: NextPage = () => {
    return (
        <>
            <Head title={'Error'} description={"We can't seem to find the page you're looking for."} />
            <Custom404 />
        </>
    );
};

export default Custom404Page;

import * as React from 'react';
import type { NextPage } from 'next';
import { AboutGeorge } from '@src/pages/Home/AboutGeorge/AboutGeorge';
import { FormForLeads } from '@components/FormForLeads/FormForLeads';
import { Advantages } from '@components/Advantages/Advantages';

const Home: NextPage = () => {
    return (
        <>
            <AboutGeorge />
            <FormForLeads />
            <Advantages />
        </>
    );
};

export default Home;

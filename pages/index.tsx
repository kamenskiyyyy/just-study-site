import * as React from 'react';
import type { NextPage } from 'next';
import { AboutGeorge } from '@src/pages/Home/AboutGeorge/AboutGeorge';
import { FormForLeads } from '@components/FormForLeads/FormForLeads';
import { Advantages } from '@components/Advantages/Advantages';
import { Reviews } from '@components/Reviews/Reviews';

const Home: NextPage = () => {
    return (
        <>
            <AboutGeorge />
            <FormForLeads />
            <Advantages />
            <Reviews />
        </>
    );
};

export default Home;

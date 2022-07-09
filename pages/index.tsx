import * as React from 'react';
import type { NextPage } from 'next';
import { AboutGeorge } from '@src/pages/Home/AboutGeorge/AboutGeorge';
import { FormForLeads } from '@components/FormForLeads/FormForLeads';
import { Advantages } from '@components/Advantages/Advantages';
import { Reviews } from '@components/Reviews/Reviews';
import { FAQ } from '@components/FAQ/FAQ';

const Home: NextPage = () => {
    return (
        <>
            <AboutGeorge />
            <FormForLeads />
            <Advantages />
            <Reviews />
            <FAQ />
            <FormForLeads />
        </>
    );
};

export default Home;

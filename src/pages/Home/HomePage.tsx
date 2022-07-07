import { FC } from 'react';
import { AboutGeorge } from '@src/pages/Home/AboutGeorge/AboutGeorge';
import { FormForLeads } from '@components/FormForLeads/FormForLeads';

export const HomePage: FC = () => {
    return (
        <>
            <AboutGeorge />
            <FormForLeads />
        </>
    );
};

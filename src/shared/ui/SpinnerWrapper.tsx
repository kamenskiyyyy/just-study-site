import { Box, CircularProgress } from '@mui/material';
import { FC, ReactNode } from 'react';

interface TSpinnerWrapper {
    loading?: boolean;
    children: ReactNode;
}

export const SpinnerWrapper: FC<TSpinnerWrapper> = ({ loading, children }) => {
    return (
        <>
            {loading ? (
                <Box sx={{ display: 'flex', m: 'auto' }}>
                    <CircularProgress />
                </Box>
            ) : (
                children
            )}
        </>
    );
};

import { Box, CircularProgress } from '@mui/material';
import { FC, ReactNode } from 'react';
import { CircularProgressProps } from '@mui/material/CircularProgress/CircularProgress';

interface TSpinnerWrapper extends CircularProgressProps {
    loading?: boolean;
    children: ReactNode;
}

export const SpinnerWrapper: FC<TSpinnerWrapper> = ({ loading, children, ...spinnerProps }) => {
    return (
        <>
            {loading ? (
                <Box sx={{ display: 'flex', m: 'auto', justifyContent: 'center' }}>
                    <CircularProgress {...spinnerProps} />
                </Box>
            ) : (
                children
            )}
        </>
    );
};

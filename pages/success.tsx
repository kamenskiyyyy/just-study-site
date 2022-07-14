import { NextPage } from 'next';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { SuccessFormLead } from '@src/pages/Success/SuccessPage';

const SuccessPage: NextPage = () => {
    const theme = useTheme();

    return (
        <Box bgcolor={theme.palette.primary.main} px={{ xs: 0.5, md: 6 }} py={{ xs: 2, md: 6 }}>
            <SuccessFormLead />
        </Box>
    );
};

export default SuccessPage;

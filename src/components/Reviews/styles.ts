import { styled } from '@mui/system';
import { Card, MobileStepper, Typography } from '@mui/material';

export const TruncateText = styled(Typography)`
    overflow: hidden;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 140px;
        background: ${({ theme }) => `linear-gradient(180deg, transparent, ${theme.palette.background.paper}  80%)`};
    }
`;

export const Stepper = styled(MobileStepper)`
    .MuiMobileStepper-dots {
        gap: 8px;
    }
`;

export const CardReview = styled(Card)`
    cursor: pointer;

    &:hover {
        -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
        box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    }
`;

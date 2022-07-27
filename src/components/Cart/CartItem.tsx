import * as React from 'react';
import { FC, MouseEventHandler, useEffect, useState } from 'react';
import { Avatar, Box, Card, Popover, Stack, Typography } from '@mui/material';
import { currencyText } from '@src/lib/currency';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { CartItem as CartItemProps } from '@src/lib/apollo/types';
import InfoIcon from '@mui/icons-material/Info';
import { DocumentRenderer } from '@keystone-6/document-renderer';

const smiles = ['💬', '🇬🇧', '👨🏻‍🎓', '🤗', '✨', '⚡️', '👑', '😎', '🙌🏻'];

export const CartItem: FC<{ item: CartItemProps }> = ({ item }) => {
    const theme = useTheme();
    const { locale } = useRouter();
    const { subscription, service, originalPrice, price } = item;
    const [numberSmile, setNumberSmile] = useState<number>(0);
    const [anchorEl, setAnchorEl] = useState<SVGSVGElement | null>(null);

    const title = subscription?.name || service?.name;
    const description = subscription?.product?.desc?.document || service?.description?.document;

    const handlePopoverOpen: MouseEventHandler<SVGSVGElement> = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    useEffect(() => setNumberSmile(Math.floor(Math.random() * smiles.length)), []);

    return (
        <Card
            sx={{
                display: 'grid',
                gridTemplateColumns: '30% 1fr 10%',
                gap: 3,
                bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey['900'] : theme.palette.grey.A100
            }}>
            <Box position={'relative'} borderRadius={'20%'}>
                <Avatar variant={'square'} sx={{ width: '100%', height: '100%', fontSize: '4.25rem' }}>
                    {smiles[numberSmile]}
                </Avatar>
            </Box>
            <Box my={3}>
                <Typography variant={'h5'} fontWeight={'bold'}>
                    {title}
                </Typography>
                <Stack direction={'row'} gap={1}>
                    {originalPrice !== price && (
                        <Typography component={'del'}>
                            {originalPrice}
                            {currencyText(locale)}
                        </Typography>
                    )}
                    <Typography color={theme.palette.primary.main} fontWeight={'bold'}>
                        {price}
                        {currencyText(locale)}
                    </Typography>
                </Stack>
            </Box>
            {description.length > 1 && (
                <>
                    <InfoIcon
                        color="action"
                        style={{ margin: 'auto' }}
                        aria-owns={open ? 'mouse-over-popover' : undefined}
                        aria-haspopup="true"
                        onMouseEnter={handlePopoverOpen}
                        onMouseLeave={handlePopoverClose}
                    />
                    <Popover
                        id="mouse-over-popover"
                        sx={{
                            pointerEvents: 'none'
                        }}
                        open={open}
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                        onClose={handlePopoverClose}
                        disableRestoreFocus>
                        <Box px={1}>
                            <DocumentRenderer document={description} />
                        </Box>
                    </Popover>
                </>
            )}
        </Card>
    );
};

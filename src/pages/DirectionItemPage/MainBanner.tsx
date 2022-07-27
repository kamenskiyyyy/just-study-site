import * as React from 'react';
import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { Banner } from '@components/Banner/Banner';
import { Direction } from '@src/lib/apollo/types';

export const MainBanner: FC<Pick<Direction, 'name' | 'description' | 'image'>> = ({ name, description, image }) => {
    return (
        <Banner
            minHeight={500}
            display={'grid'}
            gridTemplateColumns={{ xs: '1fr', md: '1fr 40%' }}
            title={name as string}
            desc={
                <Typography color={'white'} variant={'h4'}>
                    {description as string}
                </Typography>
            }
            buttonText={'Записаться на курс'}
            picture={
                image?.url && (
                    <Box position={'relative'} height={'100%'} width={'100%'} minHeight={350}>
                        <Image src={image.url} alt={name as string} layout={'fill'} objectFit={'contain'} />
                    </Box>
                )
            }
        />
    );
};

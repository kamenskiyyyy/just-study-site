import * as React from 'react';
import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { Banner } from '@components/Banner/Banner';
import { Direction } from '@src/lib/apollo/types';
import { useRouter } from 'next/router';
import { transition } from '@src/lib/transition';
import { ILanguages } from '@src/modules/constants';
import { directionPage } from '@translations/directionPage';

export const MainBanner: FC<Pick<Direction, 'name' | 'description' | 'image'>> = ({ name, description, image }) => {
    const { locale } = useRouter();
    const t = transition(directionPage, locale as ILanguages);

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
            buttonText={t.recordButton}
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

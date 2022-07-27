import { FC, useState } from 'react';
import { Category, Direction, Product } from '@src/lib/apollo/types';
import { useTheme } from '@mui/material/styles';
import { Box, Button, Card, Chip, Container, Stack, Typography } from '@mui/material';
import { DocumentRenderer } from '@keystone-6/document-renderer';

export const Courses: FC<Pick<Direction, 'products'>> = ({ products }) => {
    const theme = useTheme();
    const categories = products?.map((product: Product) => product.category) as Category[];
    const [category, setCategory] = useState(categories[0].id);

    const filter = (product: Product) => product?.category?.id === category;

    return (
        <Box bgcolor={theme.palette.mode === 'dark' ? theme.palette.grey['900'] : theme.palette.grey.A200} pb={4}>
            <Container maxWidth={'xl'}>
                <Stack
                    gap={3}
                    py={4}
                    px={{ xs: 0, md: 4 }}
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}>
                    <Typography variant={'h2'}>Курсы для любой цели и уровня</Typography>
                    <Stack gap={2} direction={'row'} flexWrap={'wrap'} justifyContent={'center'}>
                        {categories?.map(({ name, id }) => (
                            <Chip
                                key={id}
                                label={name as string}
                                variant="outlined"
                                onClick={() => setCategory(id)}
                                sx={{
                                    border:
                                        id === category
                                            ? `2px solid ${theme.palette.warning.light}`
                                            : '2px solid transparent'
                                }}
                            />
                        ))}
                    </Stack>
                    <Card
                        sx={{
                            px: { xs: 1, sm: 3, md: 6 },
                            py: 3,
                            bgcolor: theme.palette.warning.light,
                            color: theme.palette.grey['900'],
                            maxWidth: 800
                        }}>
                        {products?.filter(filter).map(({ id, name, desc, tags }: Product) => (
                            <Box
                                key={id}
                                display={'grid'}
                                gap={2}
                                gridTemplateColumns={{ xs: '1fr', md: '1fr 30%' }}
                                gridAutoFlow={'dense'}>
                                <Box>
                                    <Typography mb={2} variant={'h5'} fontWeight={'bold'}>
                                        {name}
                                    </Typography>
                                    <DocumentRenderer document={desc?.document} />
                                    <Button
                                        sx={{ mt: 2 }}
                                        variant={'contained'}
                                        color={'info'}
                                        href={`?course=${id}#form-lead`}>
                                        Оставить заявку
                                    </Button>
                                </Box>
                                <Stack mx={{ xs: 4, sm: 0 }} alignItems={{ sm: 'end' }} gridRow={{ xs: 1, md: 'auto' }}>
                                    {tags?.map(({ id, name }) => (
                                        <Chip key={id} label={name} />
                                    ))}
                                </Stack>
                            </Box>
                        ))}
                    </Card>
                </Stack>
            </Container>
        </Box>
    );
};

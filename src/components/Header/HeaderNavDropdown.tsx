import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import IconButton from '@mui/material/IconButton';
import Link from '@shared/ui/Link';
import routes from '@src/routes';
import SvgHamburgerMenu from '@src/icons/SvgHamburgerMenu';
import { useRouter } from 'next/router';
import { transition } from '@src/lib/transition';
import { navigation } from '@translations/navigation';
import { ILanguages } from '@src/modules/constants';
import { useQuery } from '@apollo/client';
import { Direction } from '@src/lib/apollo/types';
import { QUERY_DIRECTIONS_NAVBAR } from '@src/lib/apollo/directionNavBar';

const Anchor = styled('a')<{ component?: React.ElementType; noLinkStyle?: boolean }>(({ theme }) => ({
    ...theme.typography.body2,
    fontWeight: 700,
    textDecoration: 'none',
    border: 'none',
    width: '100%',
    backgroundColor: 'transparent',
    color: theme.palette.mode === 'dark' ? '#fff' : theme.palette.text.secondary,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
    transition: theme.transitions.create('background'),
    '&:hover, &:focus-visible': {
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primaryDark[700] : theme.palette.grey[100],
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
            backgroundColor: 'transparent'
        }
    }
}));

const UList = styled('ul')({
    listStyleType: 'none',
    padding: 0,
    margin: 0
});

export default function HeaderNavDropdown() {
    const [open, setOpen] = React.useState(false);
    const [productsOpen, setProductsOpen] = React.useState(true);
    const hambugerRef = React.useRef<HTMLButtonElement | null>(null);
    const { locale } = useRouter();
    const { data } = useQuery<{ directions: Direction[] }>(QUERY_DIRECTIONS_NAVBAR, { variables: { lang: locale } });

    const t = transition(navigation, locale as ILanguages);

    return (
        <React.Fragment>
            <IconButton
                color="primary"
                aria-label="Menu"
                ref={hambugerRef}
                disableRipple
                onClick={() => setOpen((value) => !value)}
                sx={{
                    position: 'relative',
                    '& rect': {
                        transformOrigin: 'center',
                        transition: '0.2s'
                    },
                    ...(open && {
                        '& rect:first-of-type': {
                            transform: 'translate(1.5px, 1.6px) rotateZ(-45deg)'
                        },
                        '& rect:last-of-type': {
                            transform: 'translate(1.5px, -1.2px) rotateZ(45deg)'
                        }
                    })
                }}>
                <SvgHamburgerMenu />
            </IconButton>
            <ClickAwayListener
                onClickAway={(event) => {
                    if (hambugerRef.current && !hambugerRef.current.contains(event.target as Node)) {
                        setOpen(false);
                    }
                }}>
                <Collapse
                    in={open}
                    sx={{
                        position: 'fixed',
                        top: 56,
                        left: 0,
                        right: 0,
                        boxShadow: (theme) =>
                            `0px 4px 20px ${
                                theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(170, 180, 190, 0.3)'
                            }`,
                        bgcolor: 'background.paper'
                    }}>
                    <Box
                        sx={{
                            p: 2,
                            bgcolor: 'background.paper',
                            maxHeight: 'calc(100vh - 56px)',
                            overflow: 'auto'
                        }}>
                        <UList>
                            <li>
                                <Anchor
                                    as={Link}
                                    onClick={() => setOpen(false)}
                                    href={routes.directions}
                                    sx={{ justifyContent: 'space-between', fontWeight: 'bold' }}>
                                    {t.directions.title}
                                </Anchor>
                                <Collapse in={productsOpen}>
                                    <UList
                                        sx={{
                                            borderLeft: '1px solid',
                                            borderColor: (theme) =>
                                                theme.palette.mode === 'dark' ? 'primaryDark.700' : 'grey.100',
                                            pl: 1,
                                            pb: 1,
                                            ml: 1
                                        }}>
                                        {data?.directions.map(({ id, slug, name }) => (
                                            <li key={id}>
                                                <Anchor
                                                    href={`${routes.directions}/${slug}`}
                                                    as={Link}
                                                    onClick={() => setOpen(false)}
                                                    noLinkStyle
                                                    sx={{
                                                        flexDirection: 'column',
                                                        alignItems: 'initial'
                                                    }}>
                                                    <div>{name}</div>
                                                </Anchor>
                                            </li>
                                        ))}
                                    </UList>
                                </Collapse>
                            </li>
                            <li>
                                <Anchor href={routes.blog} as={Link} noLinkStyle onClick={() => setOpen(false)}>
                                    {t.blog.title}
                                </Anchor>
                            </li>
                        </UList>
                    </Box>
                </Collapse>
            </ClickAwayListener>
        </React.Fragment>
    );
}

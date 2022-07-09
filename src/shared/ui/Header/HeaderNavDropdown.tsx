import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownRounded from '@mui/icons-material/KeyboardArrowDownRounded';
import Link from '@shared/ui/Link';
import routes from '@src/routes';
import SvgHamburgerMenu from 'icons/SvgHamburgerMenu';
import { useRouter } from 'next/router';
import { transition } from '@src/lib/transition';
import { navigation } from '../../../translations/navigation';
import { ILanguages } from '@src/modules/constants';
import { COURSES_PATHS } from '@shared/ui/Header/HeaderNavBar';

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
                                <Anchor as={Link} href={routes.directions} sx={{ justifyContent: 'space-between' }}>
                                    {t.directions.title}
                                    <KeyboardArrowDownRounded
                                        color="primary"
                                        onClick={() => setProductsOpen((bool) => !bool)}
                                        sx={{
                                            transition: '0.3s',
                                            transform: productsOpen ? 'rotate(-180deg)' : 'rotate(0)'
                                        }}
                                    />
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
                                        {t.directions.children.map(({ title, desc }, index) => (
                                            <li key={index}>
                                                <Anchor
                                                    href={COURSES_PATHS[index]}
                                                    as={Link}
                                                    noLinkStyle
                                                    sx={{
                                                        flexDirection: 'column',
                                                        alignItems: 'initial'
                                                    }}>
                                                    <div>{title}</div>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {desc}
                                                    </Typography>
                                                </Anchor>
                                            </li>
                                        ))}
                                    </UList>
                                </Collapse>
                            </li>
                            <li>
                                <Anchor href={routes.blog} as={Link} noLinkStyle>
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

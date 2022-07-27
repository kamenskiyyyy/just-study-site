import { alpha, styled } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import SvgJustStudyLogo from '@src/icons/SvgJustStudyLogo';
import HeaderNavBar from '@shared/../components/Header/HeaderNavBar';
import HeaderNavDropdown from '@shared/../components/Header/HeaderNavDropdown';
import ThemeModeToggle from '@shared/../components/Header/ThemeModeToggle';
import Link from '@shared/ui/Link';
import routes from '@src/routes';

const Header = styled('header')(({ theme }) => ({
    position: 'sticky',
    top: 0,
    transition: theme.transitions.create('top'),
    zIndex: theme.zIndex.appBar,
    backdropFilter: 'blur(20px)',
    boxShadow: `inset 0px -1px 1px ${
        theme.palette.mode === 'dark' ? theme.palette.primaryDark[700] : theme.palette.grey[100]
    }`,
    backgroundColor:
        theme.palette.mode === 'dark' ? alpha(theme.palette.primaryDark[900], 0.72) : 'rgba(255,255,255,0.72)'
}));

const HEIGHT = 56;

export default function AppHeader() {
    return (
        <Header>
            <GlobalStyles
                styles={{
                    ':root': {
                        '--MuiDocs-header-height': `${HEIGHT}px`
                    }
                }}
            />
            <Container maxWidth={'xl'} sx={{ display: 'flex', alignItems: 'center', minHeight: HEIGHT }}>
                <Box component={Link} href={routes.home} aria-label="Go to homepage" sx={{ lineHeight: 0, mr: 2 }}>
                    <SvgJustStudyLogo width={30} />
                </Box>
                <Box sx={{ display: { md: 'none' } }}>
                    <HeaderNavDropdown />
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'initial' } }}>
                    <HeaderNavBar />
                </Box>
                <Box sx={{ ml: 'auto' }} />
                <Stack direction="row" spacing={1}>
                    <ThemeModeToggle />
                </Stack>
            </Container>
        </Header>
    );
}

import {alpha, styled} from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import SvgJustStudyLogo from '@src/icons/SvgJustStudyLogo';
import HeaderNavBar from '@shared/ui/Header/HeaderNavBar';
import HeaderNavDropdown from '@shared/ui/Header/HeaderNavDropdown';
import ThemeModeToggle from '@shared/ui/Header/ThemeModeToggle';
import Link from '@shared/ui/Link';
import ROUTES from '@src/routes';

const Header = styled('header')(({theme}) => ({
    position: 'sticky',
    top: 0,
    transition: theme.transitions.create('top'),
    zIndex: theme.zIndex.appBar,
    backdropFilter: 'blur(20px)',
    boxShadow: `inset 0px -1px 1px ${
        theme.palette.mode === 'dark' ? theme.palette.primaryDark[700] : theme.palette.grey[100]
    }`,
    backgroundColor:
        theme.palette.mode === 'dark'
            ? alpha(theme.palette.primaryDark[900], 0.72)
            : 'rgba(255,255,255,0.72)',
}));

const HEIGHT = 56;

export default function AppHeader() {

    return (
        <Header>
            <GlobalStyles
                styles={{
                    ':root': {
                        '--MuiDocs-header-height': `${HEIGHT}px`,
                    },
                }}
            />
            <Container sx={{display: 'flex', alignItems: 'center', minHeight: HEIGHT}}>
                <Box
                    component={Link}
                    href={ROUTES.home}
                    aria-label="Go to homepage"
                    sx={{lineHeight: 0, mr: 2}}
                >
                    <SvgJustStudyLogo width={30}/>
                </Box>
                <Box sx={{display: {xs: 'none', md: 'initial'}}}>
                    <HeaderNavBar/>
                </Box>
                <Box sx={{ml: 'auto'}}/>
                <Stack direction="row" spacing={1}>
                    <ThemeModeToggle
                    />
                </Stack>
                <Box sx={{display: {md: 'none'}, ml: 1}}>
                    <HeaderNavDropdown/>
                </Box>
            </Container>
        </Header>
    );
}

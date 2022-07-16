import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Link from '@shared/ui/Link';
import SvgJustStudyLogo from '@src/icons/SvgJustStudyLogo';
import { useRouter } from 'next/router';
import { transition } from '@src/lib/transition';
import { ILanguages } from '@src/modules/constants';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import { footer } from '@translations/footer';
import { navigation } from '@translations/navigation';
import { COURSES_PATHS } from '@shared/../components/Header/HeaderNavBar';
import routes from '@src/routes';
import { ChangeLanguage } from '@shared/ui/ChangeLanguage';

export const INFO_PATH = [routes.terms, routes.privacy, routes.faq];

export default function AppFooter() {
    const { locale } = useRouter();
    const t = transition(footer, locale as ILanguages);
    const t_nav = transition(navigation, locale as ILanguages);

    return (
        <Container maxWidth={'xl'} component="footer">
            <Box
                sx={{
                    pt: 4,
                    pb: 8,
                    display: 'grid',
                    gridAutoColumns: '1fr',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 4,
                    gridTemplateColumns: { xs: '1fr', sm: '1fr', md: '1fr 1.75fr', lg: '1fr 1fr' },
                    gridTemplateRows: 'auto',
                    '& a:not(.MuiIconButton-root)': {
                        mt: 1,
                        color: 'text.secondary',
                        typography: 'body2',
                        '&:hover': {
                            color: 'primary.main',
                            textDecoration: 'underline'
                        }
                    }
                }}>
                <div>
                    <Stack spacing={1} direction="row">
                        <SvgJustStudyLogo width={32} />
                        <Typography variant={'h5'} fontWeight={'bold'}>
                            Just Study
                        </Typography>
                    </Stack>
                    <Typography variant="body1" sx={{ pt: 2 }}>
                        {t.school_desc}
                    </Typography>
                </div>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr 1fr', md: '1fr 1fr' },
                        gridAutoColumns: '1fr',
                        gap: 2
                    }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography fontWeight="bold" variant="body2">
                            {t_nav.directions.title}
                        </Typography>
                        {t_nav.directions.children.map(({ title }, index) => (
                            <Link href={COURSES_PATHS[index]} key={index}>
                                {title}
                            </Link>
                        ))}
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography fontWeight="bold" variant="body2">
                            {t.information.title}
                        </Typography>
                        {t.information.children.map((title, index) => (
                            <Link href={INFO_PATH[index]} key={index}>
                                {title}
                            </Link>
                        ))}
                    </Box>
                </Box>
            </Box>
            <Divider />
            <Box
                sx={{
                    py: 4,
                    display: { xs: 'block', sm: 'flex' },
                    alignItems: { sm: 'center' },
                    justifyContent: { sm: 'space-between' }
                }}>
                <Stack gap={2} direction={'row'} alignItems={'center'}>
                    <ChangeLanguage />
                    <Typography color="text.secondary" variant="body2">
                        © {new Date().getFullYear()} Just Study
                    </Typography>
                </Stack>

                <Box sx={{ py: { xs: 2, sm: 0 } }}>
                    <Stack spacing={2} direction="row">
                        <IconButton
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.instagram.com/goshanchico/"
                            aria-label="instagram"
                            title="Instagram"
                            size="small">
                            <InstagramIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://t.me/juststudy_help_bot"
                            aria-label="telegram"
                            title="Telegram"
                            size="small">
                            <TelegramIcon fontSize="small" />
                        </IconButton>
                    </Stack>
                </Box>
            </Box>
        </Container>
    );
}

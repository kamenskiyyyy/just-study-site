import * as React from 'react';
import {alpha, styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Paper from '@mui/material/Paper';
import {unstable_debounce as debounce} from '@mui/utils';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import IconImage from '@components/icon/IconImage';
import ROUTES from '@src/routes';
import Link from '@shared/ui/Link';

const Navigation = styled('nav')(({theme}) => ({
    '& ul': {
        padding: 0,
        margin: 0,
        listStyle: 'none',
        display: 'flex',
    },
    '& li': {
        color: theme.palette.text.primary,
        ...theme.typography.body2,
        fontWeight: 700,
        '& > a, & > div': {
            display: 'inline-block',
            color: 'inherit',
            textDecoration: 'none',
            padding: theme.spacing(1),
            borderRadius: theme.shape.borderRadius,
            '&:hover, &:focus': {
                backgroundColor:
                    theme.palette.mode === 'dark' ? theme.palette.primaryDark[700] : theme.palette.grey[50],
                color:
                    theme.palette.mode === 'dark' ? theme.palette.primaryDark[200] : theme.palette.grey[700],
                // Reset on touch devices, it doesn't add specificity
                '@media (hover: none)': {
                    backgroundColor: 'initial',
                },
            },
        },
        '& > div': {
            cursor: 'default',
        },
    },
}));

const COURSES_IDS = ['general-english', 'aviation-english', 'bigness-english'];

type CoursesSubMenuProps = {
    icon: React.ReactElement;
    name: React.ReactNode;
    description: React.ReactNode;
    href: string;
} & Omit<JSX.IntrinsicElements['a'], 'ref'>;

const CoursesSubMenu = React.forwardRef<HTMLAnchorElement, CoursesSubMenuProps>(
    function ProductSubMenu({icon, name, description, href, ...props}, ref) {
        return (
            <Box
                component={Link}
                href={href}
                ref={ref}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    py: 2,
                    '&:hover, &:focus': {
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'dark'
                                ? alpha(theme.palette.primaryDark[700], 0.4)
                                : theme.palette.grey[50],
                        outline: 'none',
                        '@media (hover: none)': {
                            backgroundColor: 'initial',
                            outline: 'initial',
                        },
                    },
                }}
                {...props}
            >
                <Box
                    sx={{
                        px: 2,
                        '& circle': {
                            fill: (theme) =>
                                theme.palette.mode === 'dark'
                                    ? theme.palette.primaryDark[700]
                                    : theme.palette.grey[100],
                        },
                    }}
                >
                    {icon}
                </Box>
                <div>
                    <Typography color="text.primary" variant="body2" fontWeight={700}>
                        {name}
                    </Typography>
                    <Typography color="text.secondary" variant="body2">
                        {description}
                    </Typography>
                </div>
            </Box>
        );
    },
);

function getNextIndex(eventKey: KeyboardEvent['key'], currentIndex: number, length: number) {
    if (eventKey === 'ArrowLeft') {
        return currentIndex === 0 ? length - 1 : currentIndex - 1;
    }
    if (eventKey === 'ArrowRight') {
        return currentIndex === length - 1 ? 0 : currentIndex + 1;
    }
    return currentIndex;
}

export default function HeaderNavBar() {
    const [subMenuOpen, setSubMenuOpen] = React.useState<null | 'courses'>(null);
    const [subMenuIndex, setSubMenuIndex] = React.useState<number | null>(null);
    const coursesMenuRef = React.useRef<HTMLDivElement | null>(null);
    React.useEffect(() => {
        if (typeof subMenuIndex === 'number') {
            document.getElementById(COURSES_IDS[subMenuIndex])?.focus();
        }
    }, [subMenuIndex]);

    const setSubMenuOpenDebounced = React.useMemo(
        () => debounce(setSubMenuOpen, 40),
        [setSubMenuOpen],
    );

    const setSubMenuOpenUndebounce = React.useMemo(
        () => (value: typeof subMenuOpen) => {
            setSubMenuOpenDebounced.clear();
            setSubMenuOpen(value);
        },
        [setSubMenuOpen, setSubMenuOpenDebounced],
    );

    React.useEffect(() => {
        return () => {
            setSubMenuOpenDebounced.clear();
        };
    }, [setSubMenuOpenDebounced]);

    return (
        <Navigation>
            <ul role="menubar">
                <li
                    role="none"
                    onMouseEnter={() => setSubMenuOpenUndebounce('courses')}
                    onFocus={() => setSubMenuOpenUndebounce('courses')}
                    onMouseLeave={() => setSubMenuOpenDebounced(null)}
                    onBlur={() => setSubMenuOpenUndebounce(null)}
                >
                    <div
                        role="menuitem"
                        tabIndex={0}
                        id="courses-menu"
                        ref={coursesMenuRef}
                        aria-haspopup
                        aria-expanded={subMenuOpen === 'courses' ? 'true' : 'false'}
                    >
                        Courses
                    </div>
                    <Popper
                        open={subMenuOpen === 'courses'}
                        anchorEl={coursesMenuRef.current}
                        transition
                        placement="bottom-start"
                        style={{
                            zIndex: 1200,
                            pointerEvents: subMenuOpen === 'courses' ? undefined : 'none',
                        }}
                    >
                        {({TransitionProps}) => (
                            <Fade {...TransitionProps} timeout={350}>
                                <Paper
                                    variant="outlined"
                                    sx={(theme) => ({
                                        minWidth: 498,
                                        overflow: 'hidden',
                                        borderColor: theme.palette.mode === 'dark' ? 'primaryDark.700' : 'grey.200',
                                        bgcolor:
                                            theme.palette.mode === 'dark' ? 'primaryDark.900' : 'background.paper',
                                        boxShadow: `0px 4px 20px ${
                                            theme.palette.mode === 'dark'
                                                ? alpha(theme.palette.background.paper, 0.72)
                                                : 'rgba(170, 180, 190, 0.3)'
                                        }`,
                                        '& ul': {
                                            margin: 0,
                                            padding: 0,
                                            listStyle: 'none',
                                        },
                                        '& li:not(:last-of-type)': {
                                            borderBottom: '1px solid',
                                            borderColor: theme.palette.mode === 'dark' ? 'primaryDark.700' : 'grey.100',
                                        },
                                        '& a': {textDecoration: 'none'},
                                    })}
                                >
                                    <ul role="menu">
                                        <li role="none">
                                            <CoursesSubMenu
                                                id={COURSES_IDS[0]}
                                                role="menuitem"
                                                href={ROUTES.productCore}
                                                icon={<IconImage name="product-core"/>}
                                                name="MUI Core"
                                                description="Ready-to-use foundational components, free forever."
                                            />
                                        </li>
                                        <li role="none">
                                            <CoursesSubMenu
                                                id={COURSES_IDS[1]}
                                                role="menuitem"
                                                href={ROUTES.productAdvanced}
                                                icon={<IconImage name="product-advanced"/>}
                                                name="MUI X"
                                                description="Advanced and powerful components for complex use cases."
                                            />
                                        </li>
                                        <li role="none">
                                            <CoursesSubMenu
                                                id={COURSES_IDS[2]}
                                                role="menuitem"
                                                href={ROUTES.productTemplates}
                                                icon={<IconImage name="product-templates"/>}
                                                name="Templates"
                                                description="Fully built, out-of-the-box, templates for your application."
                                            />
                                        </li>
                                        <li role="none">
                                            <CoursesSubMenu
                                                id={COURSES_IDS[3]}
                                                role="menuitem"
                                                href={ROUTES.productDesignKits}
                                                icon={<IconImage name="product-designkits"/>}
                                                name="Design kits"
                                                description="Our components available in your favorite design tool."
                                            />
                                        </li>
                                    </ul>
                                </Paper>
                            </Fade>
                        )}
                    </Popper>
                </li>
                <li role="none">
                    <Link role="menuitem" href={ROUTES.blog}>
                        Blog
                    </Link>
                </li>
            </ul>
        </Navigation>
    );
}

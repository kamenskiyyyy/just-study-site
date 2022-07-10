import theme from '@src/theme';

export function stringAvatar(name?: string) {
    if (!name) name = 'Example Name';
    return {
        sx: {
            bgcolor: theme.palette.primary.main
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
    };
}

import {useRouter} from "next/router";
import {transition} from "@src/lib/transition";
import {ILanguages} from "@src/modules/constants";
import {Box, Container, Typography} from "@mui/material";
import * as React from "react";
import {NextPage} from "next";
import Image from "next/image";
import cat from './benjimemes_069.webp';
import Link from "@shared/ui/Link";
import ROUTES from "@src/routes";
import {errorPage} from "../../../translations/errorPage";

export const Custom404: NextPage = () => {
    const {locale} = useRouter()
    const t = transition(errorPage, locale as ILanguages);

    return (
        <Container maxWidth="lg">
            <Box
                sx={{
                    my: 2,
                    display: 'grid',
                    gridTemplateColumns: {xs: '1fr', md: '1fr 1fr'},
                    gridAutoColumns: '1fr',
                    gap: 2,
                }}
            >
                <Box>
                    <Typography variant="h1" component="h1" gutterBottom>
                        {t.title}
                    </Typography>
                    <Typography variant={"h2"}>
                        {t.description}
                    </Typography>
                    <Typography my={2} variant={"body2"}>
                        Error code: 404
                    </Typography>

                    <Link href={ROUTES.home}>Go home</Link>
                </Box>
                <Image src={cat} alt={'Error image'} loading={"lazy"} />
            </Box>
        </Container>
    );
};

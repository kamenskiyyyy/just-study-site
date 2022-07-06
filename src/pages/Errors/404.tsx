import {useRouter} from "next/router";
import {transition} from "@src/lib/transition";
import {homePage} from "../../../translations/homePage";
import {ILanguages} from "@src/modules/constants";
import {Box, Container, Typography} from "@mui/material";
import * as React from "react";
import {NextPage} from "next";
import Image from "next/image";
import cat from './benjimemes_069.webp';
import Link from "@shared/ui/Link";
import ROUTES from "@src/routes";

export const Custom404: NextPage = () => {
    const {locale} = useRouter()
    const t = transition(homePage, locale as ILanguages);

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
                        Ууупс!
                    </Typography>
                    <Typography variant={"h2"}>
                        We can't seem to find the page you're looking for.
                    </Typography>
                    <Typography my={2} variant={"body2"}>
                        Error code: 404
                    </Typography>

                    <Link href={ROUTES.home}>Go home</Link>
                </Box>
                <Image src={cat} loading={"lazy"} />
            </Box>
        </Container>
    );
};

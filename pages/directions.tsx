import * as React from "react";
import type {NextPage} from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {homePage} from "../translations/homePage";
import {useRouter} from "next/router";
import {transition} from "@src/lib/transition";
import {ILanguages} from "@src/modules/constants";

const Directions: NextPage = () => {
    const {locale} = useRouter()
    const t = transition(homePage, locale as ILanguages);

    return (
        <Container maxWidth="lg">
            <Box
                sx={{
                    my: 4,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography variant="h4" component="h1" gutterBottom>
                    Directions
                </Typography>
            </Box>
        </Container>
    );
};



export default Directions;

import * as React from "react";
import type {NextPage} from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProTip from "../src/ProTip";
import Copyright from "../src/Copyright";
import {homePage} from "../translations/homePage";
import {useRouter} from "next/router";

const Home: NextPage = () => {
    const {locale} = useRouter()
    // @ts-ignore
    const t = homePage[locale];

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
                    {t.title}
                </Typography>
                <ProTip/>
                <Copyright/>
            </Box>
        </Container>
    );
};



export default Home;

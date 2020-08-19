import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import Header from "../Components/Header";
import CustomAccordion from "../Components/CustomAccordion";
import Footer from "../Components/Footer";

const useStyles = makeStyles({
    root: {},
    media: {
        height: "15rem",
    },
    title: {
        textAlign: "center",
        marginBottom: "2rem",
        marginTop: "1rem",
    },
});

const sections = [
    { title: "Technology", url: "#" },
    { title: "Design", url: "#" },
    { title: "Culture", url: "#" },
    { title: "Business", url: "#" },
    { title: "Politics", url: "#" },
    { title: "Opinion", url: "#" },
    { title: "Science", url: "#" },
    { title: "Health", url: "#" },
    { title: "Style", url: "#" },
    { title: "Travel", url: "#" },
];

export default function Post() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Header title="Post" sections={sections} />

                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="https://source.unsplash.com/random"
                            title="Contemplative Reptile njknsfsgk sgsg"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                                className={classes.title}
                            >
                                Here will be the title of the Article
                            </Typography>
                            <CustomAccordion />
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Container>
            <Footer
                title="From going online to growing online"
                description="Let’s do it together!"
                mail="dizibizsolutions@gmail.com"
            />
        </React.Fragment>
    );
}

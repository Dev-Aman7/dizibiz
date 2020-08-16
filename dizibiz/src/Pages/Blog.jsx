import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
// import GitHubIcon from "@material-ui/icons/GitHub";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import TwitterIcon from "@material-ui/icons/Twitter";
import Header from "../Components/Header";
import MainFeaturedPost from "../Components/MainFeaturedPost";
import FeaturedPost from "../Components/FeaturedPost";
import Footer from "../Components/Footer";
import ByteCard from "../Components/ByteCard";

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
    posts: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
    },
    postsContainer: {
        marginTop: theme.spacing(4),
        borderTop: "1px solid rgba(0, 0, 0, 0.12)",
        // backgroundColor: "#fff",
    },
}));

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

const mainFeaturedPost = {
    title: "Title of a longer featured blog post",
    description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: "https://source.unsplash.com/random",
    imgText: "main image description",
    linkText: "Continue reading…",
};

const featuredPosts = [
    {
        title: "Featured post",
        date: "Nov 12",
        description:
            "This is a wider card with supporting text below as a natural lead-in to additional content.",
        image: "https://source.unsplash.com/random",
        imageText: "Image Text",
    },
    {
        title: "Post title",
        date: "Nov 11",
        description:
            "This is a wider card with supporting text below as a natural lead-in to additional content.",
        image: "https://source.unsplash.com/random",
        imageText: "Image Text",
    },
];

export default function Blog() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header title="Blog" sections={sections} />
                <main>
                    <MainFeaturedPost post={mainFeaturedPost} />
                    <Grid container spacing={4}>
                        {featuredPosts.map((post) => (
                            <FeaturedPost key={post.title} post={post} />
                        ))}
                    </Grid>
                    <Grid container spacing={5} className={classes.mainGrid} />
                </main>
            </Container>

            <Container maxWidth="lg" className={classes.postsContainer}>
                <Grid container alignItems="center">
                    <Grid item sm={4} xs={10} md={4} className={classes.posts}>
                        <ByteCard
                            title="Some big title coming from backend"
                            time="1 min"
                            tags="will be array"
                            content="some thing large "
                        />
                    </Grid>
                    <Grid item sm={4} xs={10} md={4} className={classes.posts}>
                        <ByteCard
                            title="Some big title coming from backend"
                            time="1 min"
                            tags="will be array"
                            content="some thing large some thing large thing large some thing large  thing large some thing large  thing large some some thing large some thing large thing large some thing large  thing large some thing large  thing large some some thing large some thing large thing large some thing large  thing large some thing large  thing large some some thing large some thing large thing large some thing large  thing large some thing large  thing large some some thing large some thing large thing large some thing large  thing large some thing large  thing large some some thing large some thing large thing large some thing large  thing large some thing large  thing large some  thing large   some thing large some thing large some thing large some thing large some thing large "
                        />
                    </Grid>
                    <Grid item sm={4} xs={10} md={4} className={classes.posts}>
                        <ByteCard
                            title="Some big title coming from backend"
                            time="1 min"
                            tags="will be array"
                            content="some thing large "
                        />
                    </Grid>
                    <Grid item sm={4} xs={10} md={4} className={classes.posts}>
                        <ByteCard
                            title="Some big title coming from backend"
                            time="1 min"
                            tags="will be array"
                            content="some thing large "
                        />
                    </Grid>
                    <Grid item sm={4} xs={10} md={4} className={classes.posts}>
                        <ByteCard
                            title="Some big title coming from backend"
                            time="1 min"
                            tags="will be array"
                            content="some thing large "
                        />
                    </Grid>
                </Grid>
            </Container>
            <Footer
                title="From going online to growing online"
                description="Let’s do it together!"
                mail="dizibizsolutions@gmail.com"
            />
        </React.Fragment>
    );
}

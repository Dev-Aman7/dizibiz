import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: "#0d0d0d",
        // marginTop: theme.spacing(8),
        padding: theme.spacing(6, 0),
        color: "#fff",
        height: "30rem",
    },
    container: {
        color: "#fff",
        marginTop: "3rem",
    },
    title: {
        fontStyle: "italic",
    },
    // text: {
    //     color: "#fff",
    // },
    mail: {
        marginTop: "1rem",
    },
    social: {
        display: "flex",
        alignItems: "center",
        marginTop: "2rem",
        justifyContent: "space-around",
    },
}));

export default function Footer(props) {
    const classes = useStyles();
    const { description, title, mail } = props;

    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg" className={classes.container}>
                <Typography
                    variant="h3"
                    align="center"
                    className={classes.title}
                    gutterBottom
                >
                    {title}
                </Typography>
                <Typography
                    variant="h4"
                    align="center"
                    // color="textSecondary"
                    component="p"
                >
                    {description}
                </Typography>
                <Typography
                    variant="h5"
                    align="center"
                    // color="textSecondary"
                    component="p"
                    className={classes.mail}
                >
                    {mail}
                </Typography>
                {/* <Typography variant="subtitle2" align="center">
                    All right reserved 2020-22
                </Typography> */}
                <Box className={classes.social}>
                    <FacebookIcon />
                    <InstagramIcon />
                    <LinkedInIcon />
                    <TwitterIcon />
                </Box>
            </Container>
        </footer>
    );
}

Footer.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
};

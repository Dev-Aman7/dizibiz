import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        height: "30rem",
        position: "relative",
    },
    media: {
        height: "15rem",
        content: "cover",
    },
    title: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        "-webkit-line-clamp": 2 /* number of lines to show */,
        "-webkit-box-orient": "vertical",
    },
    content: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        "-webkit-line-clamp": 3 /* number of lines to show */,
        "-webkit-box-orient": "vertical",
    },
    bottom: {
        bottom: "1rem",

        position: "absolute",
    },
    bottomContent: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
});

export default function MediaCard({ tags, title, content, time }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://source.unsplash.com/random"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        className={classes.title}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        className={classes.content}
                    >
                        {content}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Box className={classes.bottom}>
                <CardActions className={classes.bottomContent}>
                    <Button size="small" color="primary">
                        {tags}
                    </Button>
                    <Button size="small" color="primary">
                        {time}
                    </Button>
                </CardActions>
            </Box>
        </Card>
    );
}

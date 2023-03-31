import { Button, Typography } from '@material-ui/core'
import { CardMedia, Card, CardActionArea, CardContent, CardActions } from '@material-ui/core'

import { makeStyles } from '@material-ui/core'
import { useMediaQuery } from 'react-responsive'

const ProjectItem = (props) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })

    const desktopStyles = makeStyles({
        box: {
            marginBlock: 80,
            marginInline: 40
        },
        media: {
            height: 0,
            paddingTop: "100%"
        },
        desc: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            WebkitLineClamp: 5,
            display: '-webkit-box',
            WebkitBoxOrient: "vertical",
        },
    });

    const mobileStyles = makeStyles({
        box: {
            marginBlock: 80,
            marginInline: 40
        },
        media: {
            height: 0,
            paddingTop: "100%"
        },
        desc: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            WebkitLineClamp: 5,
            display: '-webkit-box',
            WebkitBoxOrient: "vertical",
        },
    });

    const useStyles = isDesktop ? desktopStyles : mobileStyles;
    const classes = useStyles();

    return (
        <>
        <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image={props.img}
            title="Contemplative Reptile"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {props.title}
            </Typography>
            <Typography className={classes.desc} variant="body2" color="textSecondary" component="p">
                {props.desc}
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            {/* <Button size="small" color="primary">
            Share
            </Button> */}
            {/* <Button size="small" color="primary">
            Learn More
            </Button> */}
        </CardActions>
        </Card>
        </>
    )
}

export default ProjectItem

import { Container, Box, Typography, Grid } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'

import { makeStyles } from '@material-ui/core'
import { useMediaQuery } from 'react-responsive'

import ProjectItem from './ProjectItem'


const ProjectItemGrid = (props) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })

    const desktopStyles = makeStyles({
        box: {
            marginBlock: 80,
            marginInline: 40
        },
        gridItem: {
            flexGrow: 0,
            maxWidth: "25%",
            flexBasis: "25%",
        },
        header: {
            marginBottom:"2rem",
            fontSize: "3rem",
        },
    });

    const mobileStyles = makeStyles({
        box: {
            marginBlock: 80,
            marginInline: 40
        },
        gridItem: {
            marginBlock: "1rem",
        },
        header: {
            marginBottom:"1rem",
            fontSize: "2rem",
        },
    });

    const useStyles = isDesktop ? desktopStyles : mobileStyles;
    const classes = useStyles();

    return (
        <>
        <Grid container
            justify="space-between"
            direction={isDesktop ? "row" : "column"}
        >
            {isDesktop ?
                <>
                <Grid item className={classes.gridItem}>
                    <ProjectItem
                        img={props.item.img1}
                        title={props.item.title1}
                        desc={props.item.desc1}
                        />
                </Grid>

                <Grid item className={classes.gridItem}>
                    <ProjectItem
                        img={props.item.img2}
                        title={props.item.title2}
                        desc={props.item.desc2}
                        />
                </Grid>

                <Grid item className={classes.gridItem}>
                    <ProjectItem
                        img={props.item.img3}
                        title={props.item.title3}
                        desc={props.item.desc3}
                        />
                </Grid>
                </>

                :

                <>
                <Grid item className={classes.gridItem}>
                    <ProjectItem
                        img={props.item.img}
                        title={props.item.title}
                        desc={props.item.desc}
                        />
                </Grid>
                </>
            }
            
            
            

        </Grid>
        </>
    )
}

export default ProjectItemGrid

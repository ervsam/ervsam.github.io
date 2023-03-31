import { Container, Box, Grid, Typography } from '@material-ui/core'
import { CardMedia, Card } from '@material-ui/core'

import { makeStyles } from '@material-ui/core'
import { useMediaQuery } from 'react-responsive'


const Intro = () => {
    const isDesktop = useMediaQuery({ minWidth: 992 })

    const desktopStyles = makeStyles({
        profileImg: {
        maxWidth: 200,
        borderRadius: '50%'
        },
        media: {
        height: 0,
        paddingTop: "100%"
        },
        introBox: {
        marginBlock: 360,
        },
    })

    const mobileStyles = makeStyles({
        profileImg: {
        borderRadius: '50%',
        },
        media: {
        minWidth: 200,
        paddingTop: "100%"
        },
        gridItems: {
        marginBlock: 20
        },
        gridItemsImage: {
        marginBlock: 40,
        minWidth: 200,
        margin: "auto"
        },
        introBox: {
        marginInline: 40,
        marginTop: 108
        },
    })

    const useStyles = isDesktop ? desktopStyles : mobileStyles
    const classes = useStyles()

    return (
        <div>
            <Container className="intro" maxWidth="lg">
                <Box className={classes.introBox}>
                <Grid container
                    direction={isDesktop ? "row" : "column"}
                    justify="space-around"
                    alignItems={isDesktop ? "flex-end" : "flex-start"}
                >
                    <Grid item xs={3} className={classes.gridItemsImage}>
                    <Card className={classes.profileImg}>
                        <CardMedia
                        className={classes.media}
                        image="/images/face_img.jpg"
                        title="Hi, I'm Ervin!"
                        />
                    </Card>
                    </Grid>

                    <Grid item xs={isDesktop ? 4 : 12} className={classes.gridItems}>
                    <Typography variant="h2" align="left" gutterBottom>
                        Hi,
                    </Typography>
                    <Typography align="left" gutterBottom>
                        Welcome to the site where you get to know a little bit more about me.
                        <br/>–<br/>
                        My name is Ervin and I'm currently a third year student studying Computer Science in National Tsing Hua University.
                    </Typography>
                    </Grid>

                    <Grid item xs={isDesktop ? 3 : 12} className={classes.gridItems}>
                    <Typography align="left" gutterBottom>
                        On this page, you get to see the things I've learnt and the projects I've made.
                        <br/>–<br/>
                        You also get to know a little about my personality and my interests outside of tech.
                    </Typography>
                    </Grid>
                </Grid>
                </Box>

            </Container>
        </div>
    )
}

export default Intro

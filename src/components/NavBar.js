import { Button, Container, Box, Grid } from '@material-ui/core'

import { makeStyles } from '@material-ui/core'
import { useMediaQuery } from 'react-responsive'

const NavBar = () => {
    const isDesktop = useMediaQuery({ minWidth: 992 })

    const desktopStyles = makeStyles({
        navBtn: {
            fontSize: "1rem",
            paddingInline: "2rem",
        },
        box: {
            marginBlock: 40,
        }
    })

    const mobileStyles = makeStyles({
        box: {
            marginBlock: 16,
        }
    })

    const useStyles = isDesktop ? desktopStyles : mobileStyles
    const classes = useStyles()

    return (
        <div>
            <Box
                position="fixed" zIndex="1"
                width="100%" top="0" left="0"
                bgcolor="white"
                style={{boxShadow: '0 0 1.5rem 1.5rem rgba(255, 255, 255, 1)'}}
                >
            <Container className="header" maxWidth='lg'>
            <Box className={classes.box}>
            <Grid container justify={isDesktop?"flex-end":"space-evenly"}>
                <Grid item>
                <a href="#" style={{textDecoration:"none"}}>
                    <Button color="primary" className={classes.navBtn}>
                    About Me
                    </Button>
                </a>
                </Grid>
                <Grid item>
                <a href="#projects" style={{textDecoration:"none"}}>
                    <Button color="primary" className={classes.navBtn}>
                    Projects
                    </Button>
                </a>
                </Grid>
                <Grid item>
                <a href="#contact" style={{textDecoration:"none"}}>
                    <Button color="primary" className={classes.navBtn}>
                    Contact
                    </Button>
                </a>
                </Grid>
            </Grid>
            </Box>
            </Container>
            </Box>
        </div>
    )
}

export default NavBar

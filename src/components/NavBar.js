import { Button, Container, Box, Grid } from "@material-ui/core";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

import { makeStyles } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";

const NavBar = () => {
  const isDesktop = useMediaQuery({ minWidth: 992 });

  const desktopStyles = makeStyles({
    navBtn: {
      fontSize: "1rem",
      paddingInline: "2rem",
    },
    box: {
      marginBlock: 40,
    },
  });

  const mobileStyles = makeStyles({
    box: {
      marginBlock: 16,
    },
  });

  const useStyles = isDesktop ? desktopStyles : mobileStyles;
  const classes = useStyles();

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuad",
    });
  };

  return (
    <div>
      <Box
        position="fixed"
        zIndex="1"
        width="100%"
        top="0"
        left="0"
        bgcolor="white"
        style={{ boxShadow: "0 0 1.5rem 1.5rem rgba(255, 255, 255, 1)" }}
      >
        <Container className="header" maxWidth="lg">
          <Box className={classes.box}>
            <Grid container justify={isDesktop ? "flex-end" : "space-evenly"}>
              <Grid item>
                <Button
                  color="primary"
                  className={classes.navBtn}
                  onClick={scrollToTop}
                >
                  About Me
                </Button>
              </Grid>

              <Grid item>
                <Link
                  to="education"
                  smooth={true}
                  duration={500}
                  style={{ textDecoration: "none" }}
                >
                  <Button color="primary" className={classes.navBtn}>
                    Education
                  </Button>
                </Link>
              </Grid>

              <Grid item>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  style={{ textDecoration: "none" }}
                >
                  <Button color="primary" className={classes.navBtn}>
                    Projects
                  </Button>
                </Link>
              </Grid>

              <Grid item>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  style={{ textDecoration: "none" }}
                >
                  <Button color="primary" className={classes.navBtn}>
                    Contact
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default NavBar;

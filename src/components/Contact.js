import { Container, Box, Typography, Link, Grid } from "@material-ui/core";

import { makeStyles } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";

const Contact = () => {
  const isDesktop = useMediaQuery({ minWidth: 992 });

  const desktopStyles = makeStyles({
    box: {
      marginBlock: 80,
      marginInline: 40,
    },
    gridItem: {
      flexGrow: 0,
      maxWidth: "33.333333%",
      flexBasis: "33.333333%",
      marginBottom: "1rem",
    },
    header: {
      marginBottom: "2rem",
      fontSize: "3rem",
    },
  });

  const mobileStyles = makeStyles({
    box: {
      marginBlock: 80,
      marginInline: 40,
    },
    header: {
      marginBottom: "1rem",
      fontSize: "2rem",
    },
    content: {
      fontSize: "1rem",
    },
  });

  const useStyles = isDesktop ? desktopStyles : mobileStyles;
  const classes = useStyles();

  return (
    <>
      <Container id="contact" className="contact" maxWidth="lg">
        <Box className={classes.box}>
          <Typography variant="h3" align="left" className={classes.header}>
            Contact
          </Typography>

          <Grid container direction={isDesktop ? "row" : "column"}>
            {/* <Grid item className={classes.gridItem}>
              <Typography variant="button" display="block" align="left">
                Phone
              </Typography>
              <Typography
                className={classes.content}
                variant="h6"
                align="left"
                gutterBottom
              >
                +886961100735
              </Typography>
            </Grid> */}

            <Grid item className={classes.gridItem}>
              <Typography variant="button" display="block" align="left">
                Email
              </Typography>
              <Typography
                className={classes.content}
                variant="h6"
                align="left"
                gutterBottom
              >
                ervsml@gmail.com
              </Typography>
            </Grid>

            <Grid item className={classes.gridItem}>
              <Typography variant="button" display="block" align="left">
                LinkedIn
              </Typography>
              <Typography
                className={classes.content}
                variant="h6"
                align="left"
                gutterBottom
              >
                <Link
                  href="https://www.linkedin.com/in/ervinsamuel/"
                  target="_blank"
                  color="inherit"
                >
                  linkedin.com/in/ervinsamuel/
                </Link>
              </Typography>
            </Grid>

            <Grid item className={classes.gridItem}>
              <Typography variant="button" display="block" align="left">
                GitHub
              </Typography>
              <Typography variant="h6" align="left" gutterBottom>
                <Link
                  className={classes.content}
                  href="https://github.com/ervsam"
                  target="_blank"
                  color="inherit"
                >
                  github.com/ervsam
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Contact;

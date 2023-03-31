import {
  Container,
  Box,
  Typography,
  Link,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";

const Education = () => {
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
    card: {
      maxWidth: 345,
      display: "flex",
    },
    media: {
      height: 345,
      width: 345,
      backgroundSize: "contain",
      marginRight: "1rem",
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
    card: {
      maxWidth: 345,
      display: "flex",
    },
    media: {
      height: 345,
      width: 345,
      backgroundSize: "contain",
      marginRight: "1rem",
    },
  });

  const useStyles = isDesktop ? desktopStyles : mobileStyles;
  const classes = useStyles();

  return (
    <>
      <div id="education" style={{ paddingTop: "75px" }}></div>

      <Container className="education" maxWidth="lg">
        <Box className={classes.box}>
          <Typography variant="h2" align="left" className={classes.header}>
            Education
          </Typography>

          <Grid container spacing={3} style={{ padding: "3rem 0" }}>
            <Grid item xs={12} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image="/images/NTHU_Round_Seal.png"
                  title="Caption for image 1"
                />
              </Card>
            </Grid>

            <Grid item xs={12} md={8}>
              <CardContent>
                <Typography
                  gutterBottom
                  align="left"
                  variant="h4"
                  component="h2"
                >
                  National Tsing Hua University
                </Typography>
                <Typography
                  variant="h6"
                  align="left"
                  color="textSecondary"
                  component="p"
                >
                  Bachelor of Science in Computer Science
                  <br />
                  2018 - 2022
                </Typography>
              </CardContent>
            </Grid>
          </Grid>

          <Grid container spacing={3} style={{ padding: "3rem 0" }}>
            <Grid item xs={12} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image="/images/SFU-block-logo.png"
                  title="Caption for image 2"
                />
              </Card>
            </Grid>

            <Grid item xs={12} md={8}>
              <CardContent>
                <Typography
                  gutterBottom
                  align="left"
                  variant="h4"
                  component="h2"
                >
                  Simon Fraser University
                </Typography>
                <Typography
                  variant="h6"
                  align="left"
                  color="textSecondary"
                  component="p"
                >
                  Masters of Science in Computer Science
                  <br />
                  2022 - Present
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Education;

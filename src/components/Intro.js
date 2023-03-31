import { Container, Box, Grid, Typography } from "@material-ui/core";
import { CardMedia, Card } from "@material-ui/core";

import { makeStyles } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";

const Intro = () => {
  const isDesktop = useMediaQuery({ minWidth: 992 });

  const desktopStyles = makeStyles({
    profileImg: {
      maxWidth: 200,
      borderRadius: "50%",
    },
    media: {
      height: 0,
      paddingTop: "100%",
    },
    introBox: {
      marginBlock: 360,
    },
  });

  const mobileStyles = makeStyles({
    profileImg: {
      borderRadius: "50%",
    },
    media: {
      minWidth: 200,
      paddingTop: "100%",
    },
    gridItems: {
      marginBlock: 20,
    },
    gridItemsImage: {
      marginBlock: 40,
      minWidth: 200,
      margin: "auto",
    },
    introBox: {
      marginInline: 40,
      marginTop: 108,
    },
  });

  const useStyles = isDesktop ? desktopStyles : mobileStyles;
  const classes = useStyles();

  return (
    <>
      <div></div>
      <Container className="intro" maxWidth="lg">
        <Box className={classes.introBox}>
          <Grid
            container
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
                Welcome to the site where you get to know a little bit more
                about me.
                <br />–<br />
                My name is Ervin and I'm a master's student studying Computer
                Science at Simon Fraser University.
              </Typography>
            </Grid>

            <Grid item xs={isDesktop ? 3 : 12} className={classes.gridItems}>
              <Typography align="left" gutterBottom>
                Want to see what I've been up to? This page has got you covered
                with all my projects and learning experiences.
                <br />–<br />
                Not all of my interests are tech-related - this page gives you a
                peek into what I enjoy doing in my free time.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Intro;

// "Welcome to my personal website! My name is Ervin and I'm a master's student studying Computer Science at Simon Fraser University. Throughout my studies, I've developed a passion for web development, data analysis, and machine learning.

// On this website, you'll find a portfolio of my recent projects, including web applications, data visualizations, and machine learning models. I'm also an avid learner and enjoy exploring new technologies and programming languages.

// When I'm not coding, you can find me hiking in the mountains, reading science fiction novels, or practicing my photography skills.

// I invite you to explore my website and learn more about my work. Whether you're a potential client, collaborator, or just curious to learn more about me, I'm excited to share my passion for technology and creativity with you."

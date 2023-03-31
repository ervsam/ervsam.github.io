import { Container, Box, Typography, Grid } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'

import { makeStyles } from '@material-ui/core'
import { useMediaQuery } from 'react-responsive'

import ProjectItemGrid from './ProjectItemGrid'

const Projects = () => {
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

    var itemsDesktop = [
        {
            img1: "/images/tictactoe.jpg",
            title1: "3D Tic-Tac-Toe",
            desc1: "Applied the Monte Carlo Tree Search with Upper Confidence Bound applied for Trees on a 4 by 4 by 4 Tic-Tac-Toe state space to create an agent that calculates the next optimal move which resulted in a more than 100%-win rate when faced against a Random Agent.",
            img2: "/images/fruit.jpg",
            title2: "Fruit Classifier",
            desc2: "Developed an image classifier in python using the fast.ai library with training data taken from Bing image search by fine-tuning the ResNet model which resulted in a prediction accuracy higher than 90%.",
            img3:"/images/cxr.jpg",
            title3: "COVID-19 Mortality Prediction",
            desc3: "Built a CNN model by using Keras in the Tensorflow library with three hidden layers which predicts a 30-day mortality from CXR which had a 0.75 F1 score."
        },
        // {
        //     img1: "",
        //     title1: "",
        //     desc1: "",
        //     img2: "",
        //     title2: "",
        //     desc2: "",
        //     img3:"",
        //     title3: "",
        //     desc3: ""
        // },
    ]

    var itemsMobile = [
        {
            img: "/images/tictactoe.jpg",
            title: "3D Tic-Tac-Toe",
            desc: "Applied the Monte Carlo Tree Search with Upper Confidence Bound applied for Trees on a 4 by 4 by 4 Tic-Tac-Toe state space to create an agent that calculates the next optimal move which resulted in a more than 100%-win rate when faced against a Random Agent.",
        },
        {
            img: "/images/fruit.jpg",
            title: "Fruit Classifier",
            desc: "Developed an image classifier in python using the fast.ai library with training data taken from Bing image search by fine-tuning the ResNet model which resulted in a prediction accuracy higher than 90%.",
        },
        {
            img:"/images/cxr.jpg",
            title: "COVID-19 Mortality Prediction",
            desc: "Built a CNN model by using Keras in the Tensorflow library with three hidden layers which predicts a 30-day mortality from CXR which had a 0.75 F1 score."
        },
    ]

    var items = isDesktop ? itemsDesktop : itemsMobile

    return (
        <>
        <Container className="contact" maxWidth="lg">
            <Box className={classes.box}>
                <Typography variant="h3" align="left" className={classes.header}>
                    Projects
                </Typography>

                <Carousel
                    animation="slide"
                    next={ (next, active) => console.log(`we left ${active}, and are now at ${next}`) }
                    prev={ (prev, active) => console.log(`we left ${active}, and are now at ${prev}`) }
                >
                    {
                        items.map( (item, i) => <ProjectItemGrid item={item} />
                        )
                    }
                </Carousel>
                
            </Box>
        </Container>
        </>
    )
}

export default Projects

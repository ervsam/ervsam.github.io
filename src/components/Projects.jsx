import { Container, Box, Typography, Grid } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import ProjectCard from './ProjectCard'

// Add newer projects here (from your resume). Each entry: { img, title, desc, link }
const projects = [
  {
    img: '/images/tictactoe.jpg',
    title: '3D Tic-Tac-Toe AI',
    desc: 'Applied Monte Carlo Tree Search with UCB on a 4×4×4 state space to build an agent that calculates optimal moves, achieving a >100% win rate against a random agent.',
  },
  {
    img: '/images/fruit.jpg',
    title: 'Fruit Classifier',
    desc: 'Image classifier in Python using fast.ai, fine-tuning ResNet on Bing image search data, achieving >90% prediction accuracy.',
  },
  {
    img: '/images/cxr.jpg',
    title: 'COVID-19 Mortality Prediction',
    desc: 'CNN model in Keras/TensorFlow with three hidden layers predicting 30-day mortality from chest X-rays, achieving a 0.75 F1 score.',
  },
]

const Projects = () => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <>
      <div id="projects" style={{ paddingTop: 75 }} />
      <Container maxWidth="lg">
        <Box sx={{ my: 10, mx: isDesktop ? 5 : 0 }}>
          <Typography
            variant="h3"
            align="left"
            sx={{ mb: isDesktop ? 4 : 2, fontSize: isDesktop ? '3rem' : '2rem' }}
          >
            Projects
          </Typography>

          <Grid container spacing={3}>
            {projects.map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project.title}>
                <ProjectCard {...project} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default Projects

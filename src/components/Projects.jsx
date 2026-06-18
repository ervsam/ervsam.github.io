import { Grid } from '@mui/material'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Job Match Intelligence System',
    desc: 'End-to-end RAG pipeline that ingests job postings from Gmail, ranks them by semantic similarity to a candidate profile, and generates structured fit analysis using GPT-4o. Includes an LLM-as-judge evaluation framework across 157 job postings.',
    link: 'https://job-match-intelligence.streamlit.app',
    tags: ['RAG', 'GPT-4o', 'ChromaDB', 'OpenAI', 'Streamlit', 'Python'],
  },
  {
    img: '/images/tictactoe.jpg',
    title: '3D Tic-Tac-Toe AI',
    desc: 'Applied Monte Carlo Tree Search with UCB on a 4×4×4 state space to build an agent that calculates optimal moves, achieving a >100% win rate against a random agent.',
    tags: ['Python', 'MCTS', 'Algorithms'],
  },
  {
    img: '/images/fruit.jpg',
    title: 'Fruit Classifier',
    desc: 'Image classifier in Python using fast.ai, fine-tuning ResNet on Bing image search data, achieving >90% prediction accuracy.',
    tags: ['Python', 'fast.ai', 'ResNet', 'Computer Vision'],
  },
  {
    img: '/images/cxr.jpg',
    title: 'COVID-19 Mortality Prediction',
    desc: 'CNN model in Keras/TensorFlow with three hidden layers predicting 30-day mortality from chest X-rays, achieving a 0.75 F1 score.',
    tags: ['Python', 'Keras', 'TensorFlow', 'CNN'],
  },
]

const Projects = () => (
  <SectionWrapper id="projects" bgcolor="background.paper">
    <SectionHeader title="Projects" />

    <Grid container spacing={3}>
      {projects.map((project) => (
        <Grid item xs={12} sm={6} md={6} key={project.title}>
          <ProjectCard {...project} />
        </Grid>
      ))}
    </Grid>
  </SectionWrapper>
)

export default Projects

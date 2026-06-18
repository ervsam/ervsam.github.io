import { Container, Box, Typography, Grid, Chip } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const skillGroups = [
  {
    category: 'Languages',
    skills: ['Python', 'C++'],
  },
  {
    category: 'Machine Learning',
    skills: ['PyTorch', 'XGBoost', 'Scikit-learn', 'Supervised Learning', 'RAG'],
  },
  {
    category: 'ML Systems',
    skills: [
      'Data Pipelines',
      'Feature Engineering',
      'Data Validation',
      'Real-Time Inference',
      'C++/Python Integration',
      'REST APIs',
    ],
  },
  {
    category: 'Tools & Data',
    skills: ['NumPy', 'Pandas', 'Git', 'Linux', 'Jupyter', 'TensorBoard', 'OpenAI API', 'ChromaDB', 'Streamlit'],
  },
]

const Skills = () => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <>
      <div id="skills" style={{ paddingTop: 75 }} />
      <Container maxWidth="lg">
        <Box sx={{ my: 10, mx: isDesktop ? 5 : 0 }}>
          <Typography
            variant="h3"
            align="left"
            sx={{ mb: isDesktop ? 4 : 2, fontSize: isDesktop ? '3rem' : '2rem' }}
          >
            Skills
          </Typography>

          <Grid container spacing={4}>
            {skillGroups.map(({ category, skills }) => (
              <Grid item xs={12} sm={6} key={category}>
                <Typography
                  variant="overline"
                  display="block"
                  gutterBottom
                  sx={{ fontWeight: 600, letterSpacing: 2 }}
                >
                  {category}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {skills.map((skill) => (
                    <Chip key={skill} label={skill} variant="outlined" size="small" />
                  ))}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default Skills

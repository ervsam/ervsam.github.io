import { Box, Chip, Typography, Grid } from '@mui/material'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'

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

const Skills = () => (
  <SectionWrapper id="skills" bgcolor="background.default">
    <SectionHeader title="Skills" />

    <Grid container spacing={4}>
      {skillGroups.map(({ category, skills }) => (
        <Grid item xs={12} sm={6} key={category}>
          <Typography
            variant="overline"
            display="block"
            gutterBottom
            sx={{ fontWeight: 700, letterSpacing: '0.1em', color: 'text.secondary', mb: 1.5 }}
          >
            {category}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {skills.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                sx={{
                  bgcolor: '#EFF6FF',
                  color: 'primary.dark',
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: '#BFDBFE',
                  '&:hover': { bgcolor: '#DBEAFE' },
                }}
              />
            ))}
          </Box>
        </Grid>
      ))}
    </Grid>
  </SectionWrapper>
)

export default Skills

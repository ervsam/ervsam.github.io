import { Container, Box, Typography, Divider } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// Fill in your work history here once you share your resume.
// Each entry: { title, company, period, bullets: [] }
const experienceData = []

const Experience = () => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  if (experienceData.length === 0) return null

  return (
    <>
      <div id="experience" style={{ paddingTop: 75 }} />
      <Container maxWidth="lg">
        <Box sx={{ my: 10, mx: isDesktop ? 5 : 0 }}>
          <Typography
            variant="h3"
            align="left"
            sx={{ mb: isDesktop ? 4 : 2, fontSize: isDesktop ? '3rem' : '2rem' }}
          >
            Experience
          </Typography>

          {experienceData.map((exp, i) => (
            <Box key={i} sx={{ mb: 4 }}>
              <Typography variant="h5">{exp.title}</Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {exp.company} · {exp.period}
              </Typography>
              <ul style={{ marginTop: 8, paddingLeft: 20 }}>
                {exp.bullets.map((b, j) => (
                  <li key={j}>
                    <Typography variant="body1">{b}</Typography>
                  </li>
                ))}
              </ul>
              {i < experienceData.length - 1 && <Divider sx={{ mt: 3 }} />}
            </Box>
          ))}
        </Box>
      </Container>
    </>
  )
}

export default Experience

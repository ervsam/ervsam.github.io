import { Container, Box, Grid, Typography, Card, CardMedia, Button } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import DownloadIcon from '@mui/icons-material/Download'

const Intro = () => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: isDesktop ? '360px' : '108px', mb: isDesktop ? '80px' : '40px', mx: isDesktop ? 0 : '40px' }}>
        <Grid
          container
          direction={isDesktop ? 'row' : 'column'}
          justifyContent="space-around"
          alignItems={isDesktop ? 'flex-end' : 'flex-start'}
          spacing={4}
        >
          <Grid item xs={12} md={3} sx={{ ...(isDesktop ? {} : { mx: 'auto' }) }}>
            <Card sx={{ borderRadius: '50%', maxWidth: 200, overflow: 'hidden' }}>
              <CardMedia
                sx={{ height: 0, paddingTop: '100%' }}
                image="/images/face_img.jpg"
                title="Hi, I'm Ervin!"
              />
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h2" align="left" gutterBottom>
              Hi,
            </Typography>
            <Typography align="left" gutterBottom>
              My name is Ervin. I recently graduated with a Master's in Computer
              Science from Simon Fraser University and I'm currently looking for
              software engineering roles.
              <br />–<br />
              My work spans machine learning, data science, and web development.
            </Typography>
            <Box sx={{ mt: 2 }}>
              {/* Add your resume PDF to public/resume.pdf to enable this button */}
              <Button
                variant="outlined"
                startIcon={<DownloadIcon />}
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography align="left" gutterBottom>
              Scroll down to see my experience, projects, and skills.
              <br />–<br />
              Feel free to reach out via the contact section below.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Intro

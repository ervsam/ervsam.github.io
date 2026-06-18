import { Container, Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const schools = [
  {
    logo: '/images/SFU-block-logo.png',
    name: 'Simon Fraser University',
    degree: 'Master of Science in Computer Science',
    years: '2022 – 2024',
  },
  {
    logo: '/images/NTHU_Round_Seal.png',
    name: 'National Tsing Hua University',
    degree: 'Bachelor of Science in Computer Science',
    years: '2018 – 2022',
  },
]

const Education = () => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <>
      <div id="education" style={{ paddingTop: 75 }} />
      <Container maxWidth="lg">
        <Box sx={{ my: 10, mx: isDesktop ? 5 : 0 }}>
          <Typography
            variant="h3"
            align="left"
            sx={{ mb: isDesktop ? 4 : 2, fontSize: isDesktop ? '3rem' : '2rem' }}
          >
            Education
          </Typography>

          {schools.map(({ logo, name, degree, years }) => (
            <Grid container spacing={3} sx={{ py: 3 }} key={name}>
              <Grid item xs={12} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 200, backgroundSize: 'contain', bgcolor: '#fafafa' }}
                    image={logo}
                    title={name}
                  />
                </Card>
              </Grid>
              <Grid item xs={12} md={8} sx={{ display: 'flex', alignItems: 'center' }}>
                <CardContent sx={{ pl: 0 }}>
                  <Typography gutterBottom align="left" variant="h4" component="h2">
                    {name}
                  </Typography>
                  <Typography variant="h6" align="left" color="text.secondary">
                    {degree}
                    <br />
                    {years}
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          ))}
        </Box>
      </Container>
    </>
  )
}

export default Education

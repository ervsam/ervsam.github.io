import { Container, Box, Typography, Link, Grid } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const contactItems = [
  { label: 'Email', value: 'ervsml@gmail.com', href: 'mailto:ervsml@gmail.com' },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/ervinsamuel',
    href: 'https://www.linkedin.com/in/ervinsamuel/',
  },
  { label: 'GitHub', value: 'github.com/ervsam', href: 'https://github.com/ervsam' },
]

const Contact = () => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <>
      <div id="contact" style={{ paddingTop: 75 }} />
      <Container maxWidth="lg">
        <Box sx={{ my: 10, mx: isDesktop ? 5 : 0 }}>
          <Typography
            variant="h3"
            align="left"
            sx={{ mb: isDesktop ? 4 : 2, fontSize: isDesktop ? '3rem' : '2rem' }}
          >
            Contact
          </Typography>

          <Grid container direction={isDesktop ? 'row' : 'column'}>
            {contactItems.map(({ label, value, href }) => (
              <Grid
                item
                key={label}
                sx={{
                  flexGrow: 0,
                  maxWidth: isDesktop ? '33.333%' : '100%',
                  flexBasis: isDesktop ? '33.333%' : '100%',
                  mb: 2,
                }}
              >
                <Typography variant="button" display="block" align="left">
                  {label}
                </Typography>
                <Typography variant="h6" align="left" gutterBottom>
                  <Link href={href} target="_blank" rel="noopener noreferrer" color="inherit">
                    {value}
                  </Link>
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default Contact

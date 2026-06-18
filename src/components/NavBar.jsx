import { Button, Container, Box, Stack } from '@mui/material'
import { Link } from 'react-scroll'
import { animateScroll as scroll } from 'react-scroll'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const navItems = [
  { label: 'About', to: null },
  { label: 'Experience', to: 'experience' },
  { label: 'Education', to: 'education' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
]

const NavBar = () => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  const scrollToTop = () => scroll.scrollToTop({ duration: 500, smooth: 'easeInOutQuad' })

  return (
    <Box
      position="fixed"
      zIndex={10}
      width="100%"
      top={0}
      left={0}
      bgcolor="white"
      sx={{ boxShadow: '0 0 1.5rem 1.5rem rgba(255,255,255,1)' }}
    >
      <Container maxWidth="lg">
        <Box py={isDesktop ? 2.5 : 1}>
          <Stack
            direction="row"
            justifyContent={isDesktop ? 'flex-end' : 'space-evenly'}
            spacing={isDesktop ? 1 : 0}
          >
            {navItems.map(({ label, to }) =>
              to ? (
                <Link key={label} to={to} smooth duration={500} style={{ textDecoration: 'none' }}>
                  <Button color="primary" sx={isDesktop ? { fontSize: '1rem', px: 2 } : { fontSize: '0.75rem' }}>
                    {label}
                  </Button>
                </Link>
              ) : (
                <Button
                  key={label}
                  color="primary"
                  onClick={scrollToTop}
                  sx={isDesktop ? { fontSize: '1rem', px: 2 } : { fontSize: '0.75rem' }}
                >
                  {label}
                </Button>
              )
            )}
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

export default NavBar

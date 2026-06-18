import { useState } from 'react'
import {
  AppBar, Toolbar, Container, Button, Box, IconButton,
  Drawer, List, ListItem, ListItemButton, ListItemText,
  Typography, useScrollTrigger,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { Link, animateScroll as scroll } from 'react-scroll'

const navItems = [
  { label: 'About',      to: null },
  { label: 'Experience', to: 'experience' },
  { label: 'Education',  to: 'education' },
  { label: 'Skills',     to: 'skills' },
  { label: 'Projects',   to: 'projects' },
  { label: 'Contact',    to: 'contact' },
]

const scrollToTop = () => scroll.scrollToTop({ duration: 500, smooth: 'easeInOutQuad' })

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 30 })

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          top: 2,
          bgcolor: scrolled ? 'rgba(255,255,255,0.88)' : 'rgba(255,255,255,0)',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: '1px solid',
          borderColor: scrolled ? 'divider' : 'transparent',
          transition: 'background-color 0.25s, border-color 0.25s, backdrop-filter 0.25s',
          color: 'text.primary',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 56, md: 64 }, justifyContent: 'space-between' }}>
            <Button
              onClick={scrollToTop}
              disableRipple
              sx={{
                fontWeight: 800,
                fontSize: '1.1rem',
                color: 'primary.main',
                letterSpacing: '-0.03em',
                minWidth: 0,
                p: 0,
                '&:hover': { bgcolor: 'transparent', opacity: 0.75 },
              }}
            >
              ES
            </Button>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
              {navItems.map(({ label, to }) =>
                to ? (
                  <Link
                    key={label}
                    to={to}
                    smooth
                    duration={500}
                    offset={-72}
                    style={{ textDecoration: 'none' }}
                  >
                    <Button
                      disableRipple
                      sx={{
                        color: 'text.secondary',
                        fontWeight: 500,
                        fontSize: '0.875rem',
                        '&:hover': { color: 'primary.main', bgcolor: 'transparent' },
                      }}
                    >
                      {label}
                    </Button>
                  </Link>
                ) : (
                  <Button
                    key={label}
                    onClick={scrollToTop}
                    disableRipple
                    sx={{
                      color: 'text.secondary',
                      fontWeight: 500,
                      fontSize: '0.875rem',
                      '&:hover': { color: 'primary.main', bgcolor: 'transparent' },
                    }}
                  >
                    {label}
                  </Button>
                )
              )}
            </Box>

            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{ display: { xs: 'flex', md: 'none' }, color: 'text.primary' }}
              aria-label="Open menu"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 260, pt: 1 } }}
      >
        <Box sx={{ px: 2, pb: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography fontWeight={800} color="primary.main" fontSize="1.1rem">ES</Typography>
          <IconButton onClick={() => setDrawerOpen(false)} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ px: 1 }}>
          {navItems.map(({ label, to }) => (
            <ListItem key={label} disablePadding>
              {to ? (
                <Link
                  to={to}
                  smooth
                  duration={500}
                  offset={-72}
                  style={{ textDecoration: 'none', width: '100%' }}
                  onClick={() => setDrawerOpen(false)}
                >
                  <ListItemButton sx={{ borderRadius: 1 }}>
                    <ListItemText
                      primary={label}
                      primaryTypographyProps={{ fontWeight: 500, fontSize: '0.9375rem' }}
                    />
                  </ListItemButton>
                </Link>
              ) : (
                <ListItemButton
                  sx={{ borderRadius: 1 }}
                  onClick={() => { scrollToTop(); setDrawerOpen(false) }}
                >
                  <ListItemText
                    primary={label}
                    primaryTypographyProps={{ fontWeight: 500, fontSize: '0.9375rem' }}
                  />
                </ListItemButton>
              )}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  )
}

export default NavBar

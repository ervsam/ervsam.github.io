import { useState, useEffect } from 'react'
import './App.css'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import theme from './theme'
import NavBar from './components/NavBar'
import Intro from './components/Intro'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="App">
        {/* Scroll progress bar */}
        <LinearProgress
          variant="determinate"
          value={scrollProgress}
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1400,
            height: 2,
            bgcolor: 'transparent',
            '& .MuiLinearProgress-bar': { bgcolor: 'primary.main' },
          }}
        />
        <NavBar />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Intro />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default App

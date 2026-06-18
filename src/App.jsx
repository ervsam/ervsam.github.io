import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import NavBar from './components/NavBar'
import Intro from './components/Intro'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <NavBar />
        <Intro />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  )
}

export default App

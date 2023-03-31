import './App.css'

import { makeStyles } from '@material-ui/core'
import { useMediaQuery } from 'react-responsive'

import '@fontsource/roboto'

import NavBar from './components/NavBar.js'
import Intro from './components/Intro.js'
import Projects from './components/Projects.js'
import Contact from './components/Contact.js'

function App() {
  // TODO: initialize isDesktop here and pass as props

  const isDesktop = useMediaQuery({ minWidth: 992 })

    const desktopStyles = makeStyles({
      container: {
          marginBlock: 80,
          marginInline: 120
      }
    });

    const mobileStyles = makeStyles({
      container: {
          marginBlock: 80,
          marginInline: 40
      }
    });

    const useStyles = isDesktop ? desktopStyles : mobileStyles;
    const classes = useStyles();


  const isTestMode = false

  if (isTestMode) {
    const Desktop = ({ children }) => {
      const isDesktop = useMediaQuery({ minWidth: 992 })
      return isDesktop ? children : null
    }
    const Tablet = ({ children }) => {
      const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
      return isTablet ? children : null
    }
    const Mobile = ({ children }) => {
      const isMobile = useMediaQuery({ maxWidth: 767 })
      return isMobile ? children : null
    }
    const Default = ({ children }) => {
      const isNotMobile = useMediaQuery({ minWidth: 768 })
      return isNotMobile ? children : null
    }
    
    const Example = () => (
      <div>
        <Desktop>Desktop or laptop</Desktop>
        <Tablet>Tablet</Tablet>
        <Mobile>Mobile</Mobile>
        <Default>Not mobile (desktop or laptop or tablet)</Default>
      </div>
    )
  }

  return (
    <div className="App">

      {/* NAVIGATION BAR */}
      <NavBar/>
      
      {/* FIRST SECTION */}
      <Intro/>

      {/* PROJECTS SECTION */}
      <div id="projects" style={{paddingTop:"50px"}}>
        <Projects/>
      </div>

      {/* CONTACT */}
      <div id="contact">
        <Contact/>
      </div>
      
      {isTestMode ? <Example/> : null}

    </div>
  );
}

export default App;

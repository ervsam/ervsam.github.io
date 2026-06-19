import NavBar from './components/NavBar'
import Hero from './components/Hero'
import CurrentlyBand from './components/CurrentlyBand'
import SelectedWork from './components/SelectedWork'
import ExperienceSection from './components/ExperienceSection'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div id="top" className="App">
      <NavBar />
      <main style={{ flexGrow: 1 }}>
        <Hero />
        <CurrentlyBand />
        <SelectedWork />
        <ExperienceSection />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

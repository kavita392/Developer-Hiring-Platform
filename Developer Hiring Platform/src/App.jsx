import React from 'react'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import HireAbout from './components/HireAbout/HireAbout'
import Technology from './components/Technology/Technology'
import Software from './components/Software/Software'
import TopCompanies from './components/TopCompanies/TopCompanies'
import HowToWork from './components/HowToWork/HowToWork'
import Steps from './components/Steps/Steps'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from "./components/Footer/Footer";


// import HireDevelopers from './components/HireDevelopers/HireDevelopers'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Banner />
        <HireAbout />
        <Technology />
        <Software />
        <TopCompanies />
        <HowToWork />
        <Steps />
        <Testimonials />
         {/* <HireDevelopers /> */}
      </main>
      <Footer />
    </div>
  )
}

export default App

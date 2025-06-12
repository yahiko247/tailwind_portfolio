import React from 'react'
import { useState } from 'react'
import "../index.css"
import { Header } from '../components/headercomponent'
import { NavBar } from '../components/navBarComponent'
import { MainContent} from '../components/maincontent'
import { Footer } from '../components/footerComponent'
import { LoadingScreen } from '../components/loadingScreen'
import { MobileMenu } from '../components/MobileNav'
import { Home } from '../components/section/home'
import { About } from '../components/section/about'





function LandingPage() {
  const [isLoaded, setIsloaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsloaded(true)}/>}{""}
      <div 
        className={`min-h-screen transitin-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
          } bg-black text-grey-100`}
        >

        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home/>
        <About/>


      </div>
    </>
  )
}

export default LandingPage

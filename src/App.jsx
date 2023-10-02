import Hero from "./components/hero"
import MaslahatBeramiz from "./components/maslahat-beramiz"
import Navbar from "./components/navbar"
import BarchaMahsulotlar from "./components/barcha-mahsulotlar"
import BizningAfzalliklarimiz from "./components/bizning-afzalliklarimiz"
import FotoGalereya from "./components/fotogalereya"
import Video from "./components/video"
import CarouselSection from "./components/carousel-section"
import Footer from "./components/footer"
import { UserContext } from "./context/user-context"
import Modal from "./components/modal"
import Card from "./components/card"
import { useState } from "react"

function App() {
  const [modalD, setModalD] = useState('hidden')
  const [overlayD, setOverlayD] = useState('hidden')

  function modalHandler() {
    setModalD('block')
    setOverlayD('block')
  }

  function overlayHandler() {
    setModalD('hidden')
    setOverlayD('hidden')
  }

  return (
    <>
      <UserContext.Provider value={{
        modalDisplay: modalD,
        overlayDisplay: overlayD,
        modalClick: modalHandler,
        overlayClick: overlayHandler,
      }}>
        <Modal />
        <div className="hidden">
          <Card />
        </div>
        <Navbar />
        <Hero />
        <MaslahatBeramiz />
        <BarchaMahsulotlar />
        <BizningAfzalliklarimiz />
        <FotoGalereya />
        <Video />
        <CarouselSection />
        <Footer />
      </UserContext.Provider>
    </>
  )
}

export default App

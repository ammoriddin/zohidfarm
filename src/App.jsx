import Hero from "./components/hero"
import MaslahatBeramiz from "./components/maslahat-beramiz"
import Navbar from "./components/navbar"
import BarchaMahsulotlar from "./components/barcha-mahsulotlar"
import BizningAfzalliklarimiz from "./components/bizning-afzalliklarimiz"
import FotoGalereya from "./components/fotogalereya"
import Video from "./components/video"
import CarouselSection from "./components/carousel-section"
import Footer from "./components/footer"

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <MaslahatBeramiz />
      <BarchaMahsulotlar />
      <BizningAfzalliklarimiz />
      <FotoGalereya />
      <Video />
      <CarouselSection />
      <Footer />
    </>
  )
}

export default App

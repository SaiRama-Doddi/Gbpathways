
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Exams from './pages/Exams'
import FreeConsultation from './pages/FreeConsultation'
import ImageGrid from './pages/ImagesGrid'
import VisaGuide from './pages/VisaGuide'
import WhyChooseUs from './pages/WhyChooseUs'
import Services from './pages/Services'
import HomePage from './pages/HomePage'

function App() {


  return (
    <>
     <Navbar />
    <HomePage/>
     <VisaGuide/>
     <Services/>
     <FreeConsultation />
     <WhyChooseUs/>
     <Exams/>
         <ImageGrid/>
     <Footer />    

   </>
  )
}

export default App

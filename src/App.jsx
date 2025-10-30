
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Exams from './pages/Exams'
import FreeConsultation from './pages/FreeConsultation'
import ImageGrid from './pages/ImagesGrid'
import WhyChooseUs from './pages/WhyChooseUs'

function App() {


  return (
    <>
     <Navbar />
     <ImageGrid/>
     <FreeConsultation />
     <WhyChooseUs/>
     <Exams/>
     <Footer />    

   </>
  )
}

export default App

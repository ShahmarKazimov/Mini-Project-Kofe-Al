import Navbar from './components/Header/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'


function App() {

  return (
    <div>
      <div className='sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1310px] lg:container px-5 mx-auto'>
        <Navbar />
      </div>
      <Outlet />
      <div className='sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1310px] lg:container px-5 mx-auto'>
        <Footer />
      </div>
    </div>
  )
}

export default App
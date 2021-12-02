import React,{useState} from "react"
import Aboutme from "./pages/Aboutme"
import  Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import Resume from "./pages/Resume"
import Footer from "./Footer"
import Navbar from "./Navbar"



export default function Header (){
    const [currentPage, setCurrentPage] = useState('Home');
  
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'Aboutme') {
        return <Aboutme />;
      }
      if (currentPage === 'Projects') {
        return <Projects />;
      }
      if (currentPage === 'Resume') {
        return <Resume />;
      }
      return <Contact />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
      {renderPage()}
      <Footer/>
    </div>

  )

  
}
import React,{useState} from "react"
import Aboutme from "./pages/Aboutme"
import  Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import Resume from "./pages/Resume"
import Footer from "./Footer"
import Navbar from "./Navbar"


export default function Header (){
  const projectOne = {
    name: 'Dynamite Recipes',
    descripton: 'Find recipes with what you have on hand application',
    image: '../images/Project1image.PNG',
    githubURL: '',
  };
  const projectTwo = {
    name: 'Pipe Dreams',
    descripton: 'Find Gas near you regardless of where you are',
    image:'../../images/project2.PNG',
  };
  const projectThree = {
    name: 'Password Generator',
    descripton: 'This make a random password for you',
    image:'../../images/project3.PNG',
  };

  const projectFour = {
    name: 'Dragon Ball Z Fan Quiz',
    descripton: 'Quick Quiz Game regarding Dragon Ball Z questions',
    image:'../../images/project4.PNG',
  };
  const projectFive = {
    name: 'Weather Dashboard',
    descripton: 'Check the daily and weekly weather no matter where you are',
    image:'../../images/project5.PNG',
  };
  const projectSix = {
    name: 'E--Commerce-Back-End',
    descripton: 'This is a CRUD implementation exercise.',
    image:'../../images/project6.png',
  };

    const [currentPage, setCurrentPage] = useState('Aboutme');
  
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'Aboutme') {
        return <Aboutme />;
      }
      if (currentPage === 'Projects') {
        return (
        <div>
   
          <Projects project={projectOne}/>
        <Projects project={projectTwo}/>
        <Projects project={projectThree}/>
        <Projects project={projectFour}/>
        <Projects project={projectFive}/>
        <Projects project={projectSix}/>
        </div>);
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
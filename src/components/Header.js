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
  // const projectTwo = {
  //   name: 'Sweepers',
  //   descripton: '',
  //   image:'../../images/sweeper.png',
  // };
  // const projectThree = {
  //   name: '',
  //   descripton: '',
  //   image:'',
  // };

  // const projectFour = {
  //   name: '',
  //   descripton: '',
  //   image:'',
  // };
  // const projectFive = {
  //   name: '',
  //   descripton: '',
  //   image:'',
  // };
  // const projectSix = {
  //   name: '',
  //   descripton: '',
  //   image:'',
  // };

    const [currentPage, setCurrentPage] = useState('Aboutme');
  
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'Aboutme') {
        return <Aboutme />;
      }
      if (currentPage === 'Projects') {
        return (
        <div>
    {/* TODO CHANGE PROJECT ONE TO 123456 */}
          <Projects project={projectOne}/>
        <Projects project={projectOne}/>
        <Projects project={projectOne}/>
        <Projects project={projectOne}/>
        <Projects project={projectOne}/>
        <Projects project={projectOne}/>
        <Projects project={projectOne}/>
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
import { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {

  const[showModal , setShowModal] = useState(false);

  const[theme , setTheme] = useState(localStorage.getItem("currentMode") || "dark");

  useEffect(() => {
      if(theme === "light") {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
      }else{
        document.body.classList.remove("light");
        document.body.classList.add("dark");
      }
  }, [theme]);


  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    
    // Sauvegarder le thème dans localStorage
    localStorage.setItem("currentMode", newTheme);
    
    // Mettre à jour l'état du thème
    setTheme(newTheme);
  };
  


  return (

    <header className="flex">
        <button onClick={() => { 
          setShowModal(true)
        }} className="menu icon-menu flex"> </button>
      <div/>

      <nav>

        <ul className="flex">
          <li>
            <a href="/">About</a>
          </li>
          {/* <li>
            <a href="#art">Articles</a>
          </li> */}
          <li>
            <a href="#art">Projects</a>
          </li>
          {/* <li>
            <a href="#us">Speaking</a>
          </li> */}
          <li>
            <a href="#us">Contact Us</a>
          </li>
        </ul>

      </nav>


    


    <button onClick={handleThemeChange} className="mode flex">
     {theme === "dark" ? (
       <span className="icon-moon-o"></span>
     ) : (
      <span className="icon-sun"></span>
     )}
    </button>


      {/* <button onClick={() => {
        // Send value to LS
          localStorage.setTheme("currentMode", theme === "light" ? "dark" : "light")

        // get value from LS
          setTheme(localStorage.getItem("currentMode"))

      }} className="mode flex">
        <span className="icon-moon-o"> </span>
      </button> */}


        {showModal && (
            <div className="fixed">
          
              <ul className="modal">
                <li>
                  <button className="icon-x1" onClick={() => { 
                    setShowModal(false)
                   }}/> 
                </li>
                <li><a href="">About</a></li>
               
                <li><a href="#art">Projects</a></li>
               
                <li><a href="#us">Contact Us</a></li>
              </ul>
            
            </div>
        )}
      

    </header>
  );
};

export default Header;

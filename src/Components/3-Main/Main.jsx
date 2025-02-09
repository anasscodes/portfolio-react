import { useState } from "react";
import "./Main.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";



const Main = () => {

  const [arr , setArr] = useState(myProjects)
  
  const [active , setActive] = useState("all")

  const handleClick = (buttonCategory) =>{
    setActive(buttonCategory);
            const newArr = myProjects.filter((item) => {

                const frr =  item.category.find((myItem) => {
                      return myItem === buttonCategory;
                 })

              return frr ===buttonCategory;
            })  
            setArr(newArr);
  }

  return (
    <>
      <main className="flex">

        <section className="flex left-section">

          <button onClick={() => {setActive("all"); setArr(myProjects)}} className={active === "all" ? "active" : null}>All projects</button>
                          
          <button onClick={() => {
            handleClick("css")
          }} className={active === "css" ? "active" : null} >HTML & CSS</button>
          
          <button onClick={() => {setActive("js"); handleClick("js")}} className={active === "js" ? "active" : null}>JavaScript</button>
         
          <button onClick={() => {setActive("react"); handleClick("react")}} className={active === "react" ? "active" : null}>React & BTS</button>
          
          <button onClick={() => {setActive("node"); handleClick("express")}} className={active === "node" ? "active"  : null}>Node & Express</button>

        </section>

        <section id="art" className=" flex right-section">
          
          <AnimatePresence>

            {arr.map((item)=>{
              return (
                <motion.article 
                layout
                initial={{transform: "scale(0)"}}
                animate={{transform: "scale(1)"}}
                transition={{type: "spring", damping: 8, stiffness: 50}}
                key={item.imgPath}
                
                className="cad">
              
              <img width={232} src={item.imgPath} alt="" />
              <div style={{width: "232px"}} className="box">
                <h3 className="title">{item.projectTitle}</h3>
                <p className="sub-title">{item.proSubTitle}</p>
                <div className="flex icons">
                  <div style={{gap: "11px"}} className="flex">
                    <div className="icon-link"></div>
                    <a href="https://github.com/anasscodes" target="_blank">
                      <div className="icon icon-github"></div>
                     </a>
                  </div>
                  <a className="link flex" href={item.link} target="_blank">
                    More 
                    <span style={{alignSelf: "center"}} className="icon-arrow-right"></span>
                  </a>
                </div>
              </div>
            </motion.article>
              );
            })}
          </AnimatePresence>
        </section>

      </main>
    </>
  );
};

export default Main;


import { useEffect, useState } from 'react'
import Header from './Components/1-Head/Header'
import Hero from './Components/2-Hero/Hero'
import Main from './Components/3-Main/Main'
import Contact from './Components/4-Contact/Contact'
import Footer from './Components/5-Footer/Footer'




function App() {
  
  useEffect(()=>{
    window.addEventListener("scroll",() => {
        if(window.scrollY > 200){
          setShowScrollBtn(true)
        }else{
          setShowScrollBtn(false)
        }
    });
  },[]);

  const [showScrollBtn, setShowScrollBtn] = useState(false);

  return (
    <div id='up' className='container'>

     <Header/>

     {/* <div className='divider'/> */}

     <Hero/>

      <div className='divider'/>

     <Main/>

     <div className='divider'/>

     <Contact/>

     <div className='divider'/>

     <Footer/>
     

      
        <a style={{ opacity: showScrollBtn? 1 : 0, transition: "1s"}} href="#up">
        <div className=" icon-keyboard_arrow_up scrollTop"></div>
        </a>
    
    
    
     
    </div>
  )
}

export default App

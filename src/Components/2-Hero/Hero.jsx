import './Hero.css'
import Lottie from 'lottie-react';
import devAnimation from '../../../src/animation/dev2.json'
import { motion } from 'framer-motion';



const Hero = () => {
  return (
    <section className='hero flex'>
        
        <div className='left-section '>
            <div className='parent-avatar'>
               <img src="./ph-mtn.png" className='avatar' alt="" />
                <span className='icon-verified'></span>
            </div>

            <motion.h1 
             initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 2}}
             className='title'>Software Developer, Founder, 
              And Passionate about creating fast.
            </motion.h1>

            <p className='sub-title'>
            Hello World! I am Anass MouaTani  , Full stack developer.
            and passionate about developing seamless, user-friendly applications with MERN stack. My projects focus on building engaging digital experiences with clean, efficient code and modern design.
            Frontend: React.js , Bootswatch , Tailwind CSS  //  Backend: Node.js, Express, MongoDB ..
            Constantly Learning: Improving my skills with hands-on projects and embracing new web technologies!
            </p>

            <div className="all-icons flex">
              <a href="" target="_blank">
                <div className="icon icon-x"></div>
              </a>

              <a href="" target="_blank">
                 <div className="icon icon-instagram"></div> 
              </a>

              <a href="https://github.com/anasscodes" target="_blank">
                 <div className="icon icon-github"></div>
              </a>

              <a href="https://www.linkedin.com/in/anass-mouatani-bb010a33b/" target="_blank">
                 <div className="icon icon-linkedin"></div>
              </a>
            </div>
        </div>

        <div className='right-section animation '>
          {/* https://lottiefiles.com/ */}
        <Lottie className='lottie'
           animationData={devAnimation} />
        </div>
    
    
    </section>
  )
}

export default Hero
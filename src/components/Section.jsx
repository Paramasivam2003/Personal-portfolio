import heroimg from '../assets/hero.jpg'
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter} from "react-icons/ai";

function Section(){
  
  const config ={
      Role:"I'm a React Developer",
      social:{
        github:"https://github.com/Paramasivam2003",
        linkedin:"https://www.linkedin.com/in/paramu81/",
        twitter:"https://x.com/Paramas83382622?t=u65tZ0-9rJGlQb6eknfbiA&s=09",
      }
  }

  return(
  <section id='section' className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center'>
    <div className='md:w-1/2 flex flex-col'>
        <div className='flex flex-col md:flex-row'>
        <h1 className='text-white text-6xl mt-10 font-my-font'>Hi, <br/>I'm <span className='text-black font-thin'>P</span> Paramasivam
          <p className='text-2xl text-orange-500'>{config.Role}</p>
        </h1>
        </div>
        <div className='flex py-8'>
          <a target='_blank' href={config.social.github} className='pr-5 hover:text-white'><AiOutlineGithub size={40}/></a>
          <a target='_blank' href={config.social.linkedin} className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
          <a target='_blank' href={config.social.twitter} className='hover:text-white'><AiOutlineTwitter size={40}/></a>
        </div>

    </div>
    <img className='md:w-1/3 photo'  src={heroimg} alt="" />
  </section>
  )
}
export default Section;
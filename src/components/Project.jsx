import portfolio from '../assets/Personal portfolio.png';
import Ecommerce from '../assets/Ecommerce.png';
import Euroland from '../assets/Euroland.png';

function Project(){

  const config={
    project:[
      {
        image: portfolio,
        description:"Designed and developed a responsive personal portfolio website to showcase skills,projects, and Resume. Utilized HTML, CSS, Reactjs and TailwindCss to create a modern, user-friendly interface that adapts to different screen sizes.",
        link:"https://personal-portfolio-seven-rosy.vercel.app/",
      },
      {
        image: Ecommerce,
        description:"Developed a fully functional eCommerce website using React.js and a Fake API for productmanagement, shopping cart, and checkout functionalities.",
        link:"https://e-commerce-indol-theta-87.vercel.app/",
      },
      {
        image: Euroland,
        description:"basic static euroland project using ht6ml and css",
        link:"https://euroland-website.vercel.app/",
      },
    ]
  }

  return(
    <section id='project' className="flex flex-col px-16 py-20 justify-center bg-[#1f4c4b] text-white">
      <div className="w-full">
        <div className="flex flex-col px-10 py-5">
        <h1 className="text-4xl font-extrabold mb-5">Project</h1>
        <p className='font-sec-font text-xl font-bold'>These are some of my best projects.I have bulit these using HTML, CSS, Reactjs.check out these.</p>
        </div>
      </div>

      <div className="w-full" >
        <div className='flex flex-col md:flex-row px-10 gap-10'>
          {config.project.map((project)=>(
          <div className='relative '>
            <img className='h-[380px] w-[600px]' src={project.image} alt="" />
                <div className='project-desc'>
                  <p className='project-p'>{project.description}</p>
                  <div className='flex justify-center'>
                    <a className='btn' target='_blank' href={project.link}>View Project</a>
                  </div>
                </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Project;
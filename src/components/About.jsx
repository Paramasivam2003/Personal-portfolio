import hero from '../assets/hero.png';
function About(){
const config ={
  line1:"Hi,My Name is Paramasivam.i am Reactjs Developer.I build beautiful personal portfolio websites using Reactjs and Tailwindcss.",
  line2:"i am proficient in frontend skills like HTML5, CSS3, Tailwindcss, Reactjs and javascript.",
}

  return(
    <section id='about' className='flex flex-col md:flex-row bg-teritary px-5  h-[550px] md:h-[400px]'>
      <div className='md:w-1/2 ps-32 py-12' >
        <img className='w-1/2' src={hero} alt=""/>
      </div>
      <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center font-sec-font text-xl text-black'>
        <h1 className='text-4xl font-bold mb-5'>About me</h1>
        <p className='pb-5'>{config.line1}</p>
        <p>{config.line2}</p>
        </div>
      </div>
    </section>
  )
}
export default About;
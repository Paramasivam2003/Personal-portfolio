import resume from '../assets/resume.png';
function Resume(){
const config ={
  link:"https://drive.google.com/file/d/1QSuoXQlnJpa6doDtXJBHnl483P0usaGx/view?usp=drivesdk",
}

  return(
    <section id='resume' className='flex flex-col md:flex-row bg-[#fof4f8] px-5  h-[490px] md:h-[400px]'>
      <div className='md:w-1/2 ps-32 py-12 flex justify-start md:justify-end' >
        <img className='w-1/2' src={resume} alt=""/>
      </div>
      <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center font-sec-font text-xl text-black'>
        <h1 className='text-4xl font-bold mb-5'>Resume</h1>
        <p className='text-xl font-semi'>You can view my Resume <a href={config.link} className='btn'>Download</a></p>
        </div>
      </div>
    </section>
  )
}
export default Resume;
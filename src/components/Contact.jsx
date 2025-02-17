function Contact(){
  const config={
    email:" paramasivam8110@gmail.com",
    phone:" 6369560229",
  }
  
  return(
    <section id='contact' className='flex flex-col bg-[#d9e4e0] px-5 py-20 h-[350px] md:h-[350px]'>
      <div className='flex flex-col items-center'>
        <h1 className='text-4xl font-bold pb-5'>Contact</h1>
        <p className='text-xl font-semibold'>if you want to discuss more in details. please contact me.</p>
        <p className='py-2'><span>Email :</span> {config.email}</p>
        <p className='py-2'><span>Phone :</span> {config.phone}</p>
      </div>
    </section>
  )
}
export default Contact;
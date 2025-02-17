import { FaInstagramSquare } from "react-icons/fa";
function Footer(){
  const config={
    social:"https://www.instagram.com/its_paramu77?igsh=MXVkYXFraWh2dnU5MA==",
  }

  return(
    <div className="py-4 bg-slate-500 text-orange-400 font-my-font flex justify-between">
      <a className="flex ps-10 text-md font-bold" target="_blank" href={config.social}><FaInstagramSquare size={30}/> its_paramu77</a>
      <p className="pe-10">&copy; paramu2025</p>
    </div>
  )
}

export default Footer;
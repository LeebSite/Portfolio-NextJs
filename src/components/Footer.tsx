import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="py-12" style={{ background: 'linear-gradient(to bottom, #000000, #132138, #163b78,  #17448c, #0a4fbb)' }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-start gap-8 px-4 sm:px-6 lg:px-8">
        <div className="text-left w-full sm:w-auto">
          <h2 className="text-white text-lg font-semibold mb-4">Follow Me</h2>
          <div className="flex space-x-7 justify-start sm:justify-start">
            <a
              href="https://www.linkedin.com/in/muhammad-ghalib-pradipa-151ab1246/"
              className="text-gray-400 hover:text-white transition-transform duration-300 transform hover:scale-110"
            >
              <FaLinkedin size={27} />
            </a>
            <a
              href="https://www.instagram.com/gpradiipaa"
              className="text-gray-400 hover:text-white transition-transform duration-300 transform hover:scale-110"
            >
              <FaInstagram size={27} />
            </a>
            <a
              href="https://github.com/LeebSite"
              className="text-gray-400 hover:text-white transition-transform duration-300 transform hover:scale-110"
            >
              <FaGithub size={27} />
            </a>
            <a
              href="mailto:mhd.ghalibpradipa@gmail.com"
              className="text-gray-400 hover:text-white transition-transform duration-300 transform hover:scale-110"
            >
              <FaEnvelope size={27} />
            </a>
          </div>
        </div>
        <div className="text-left w-full sm:w-auto">
          <h2 className="text-white text-lg font-semibold mb-4">Contact Me!</h2>
          <p className="font-light tracking-wide">Pekanbaru, Indonesia</p>
          <p className="font-light tracking-wide">Jl. Eka Tunggal Perum.Purwodadi Indah Permai</p>
          <p className="font-light tracking-wide ">Email : mhd.ghalibpradipa@gmail.com</p>
        </div>
      </div>
      <p className="text-left ml-4 sm:text-center text-xl pt-8 font-semibold text-white font-family-poppins">
        2024 Muhammad Ghalib Pradipa
      </p>
    </footer>
  );
}

export default Footer;

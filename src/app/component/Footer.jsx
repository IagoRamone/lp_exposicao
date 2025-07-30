import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-6 mt-12 px-8">
      <div className="flex flex-col items-center justify-between gap-6">
        
        {/* Mapa */}
        <div className="w-full  flex justify-center md:justify-start">
          <iframe
            className="w-full md:w-100 h-56 rounded-xl shadow-lg border-2 border-gray-300"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.6267763818723!2d-43.39864592468687!3d-23.00074797918907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdb9c8ccf6ae3%3A0x1cbc132a4be5de15!2sVogue%20Square!5e0!3m2!1spt-PT!2sbr!4v1739983873764!5m2!1spt-PT!2sbr"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <br></br>
  </div>


<div className="flex flex-col md:flex-row items-center justify-center gap-6">
  {/* Logo */}
  <div className="w-full md:w-3/3 flex justify-center">
    <Image src="/logo_apetite.png" alt="Logo do evento" width={300} height={50} />
  </div>

  {/* Rede social */}
  <div className="w-full md:w-2/3 flex flex-col items-center md:items-start">
    <p className="mb-2 text-sm md:text-base">Siga no Instagram:</p>
    <a
      href="https://www.instagram.com/adezcomunica/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-white text-lg hover:text-pink-500 transition-colors"
    >
      <FaInstagram className="text-2xl" />
      <span>@adezcomunica</span>
    </a>
  </div>
</div>

    </footer>
  );
}

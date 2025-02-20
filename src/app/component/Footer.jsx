import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-6 mt-12 flex flex-col md:flex-row items-center justify-between px-8">      
      <div className="w-full md:w-1/3 flex justify-center md:justify-start">
      <iframe
      className="w-full md:w-80 h-56 rounded-xl shadow-lg border-2 border-gray-300"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.6267763818723!2d-43.39864592468687!3d-23.00074797918907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdb9c8ccf6ae3%3A0x1cbc132a4be5de15!2sVogue%20Square!5e0!3m2!1spt-PT!2sbr!4v1739983873764!5m2!1spt-PT!2sbr"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
 
      <div className="w-full md:w-1/3 flex justify-center my-4 md:my-0">
        <Image src="/logo_apetite.png" alt="Logo do evento" width={400} height={50} />
      </div>

      
      <div className="w-full md:w-1/3 flex justify-center md:justify-end">
        
      </div>

    </footer>
  );
}

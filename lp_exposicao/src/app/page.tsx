import Image from "next/image";

export default function Home() {
  return (
    <div>
    <SectionOne/>
    <SectionTwo/>
    <SectionThree/>
    </div>
  );
}

function SectionOne() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/" type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold uppercase">Exposição de Arte Moderna</h1>
        <p className="text-lg mt-4">Explore obras incríveis de artistas contemporâneos</p>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
    </section>
  );
}

function SectionTwo() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 text-gray-900 py-12 px-6">
      <main className="flex flex-col lg:flex-row items-center max-w-6xl w-full text-center lg:text-left">
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 flex-1">
          <Image src="/pratos/foto_adez.jpg" alt="Copo com laranja" width={200} height={200} className="rounded-lg shadow-md" />
          <Image src="/pratos/flor_no_copo.jpg" alt="Flor no copo" width={200} height={200} className="rounded-lg shadow-md" />
          <Image src="/pratos/foto_adez.jpg" alt="Foto Adez" width={200} height={200} className="rounded-lg shadow-md" />
          <Image src="/art4.jpg" alt="Obra 4" width={200} height={200} className="rounded-lg shadow-md" />
          <Image src="/art5.jpg" alt="Obra 5" width={200} height={200} className="rounded-lg shadow-md" />
          <Image src="/art6.jpg" alt="Obra 6" width={200} height={200} className="rounded-lg shadow-md" />
        </div>

        <div className="flex-1 lg:pl-12 mt-8 lg:mt-0">
          <h2 className="text-2xl font-semibold mb-4">Explore a Arte do Futuro</h2>
          <p className="text-lg text-gray-700">
            Descubra obras de artistas inovadores e experimente a nova era da arte digital e tradicional. 
          </p>
        </div>

      </main>
      
    </div>
  );
}


function SectionThree() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white text-gray-900 py-12 px-6">
      
      <h2 className="text-3xl font-semibold mb-8 underline">Nossos Parceiros</h2>

      {/* Grid de parceiros */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-5xl">
        <Image src="/parceiros/CASTELLA.jpg" alt="Castella" width={150} height={150} className="rounded-lg shadow-md" />
        <Image src="/parceiros/FASANO.png" alt="Fasano" width={150} height={150} className="rounded-lg shadow-md" />
        <Image src="/parceiros/HEAVEN.png" alt="Heaven" width={150} height={150} className="rounded-lg shadow-md" />
        <Image src="/parceiros/2_fevereiro.jpeg" alt="2 De Fevereiro" width={150} height={150} className="rounded-lg shadow-md" />
        <Image src="/parceiros/maze.jpg" alt="Mazé" width={150} height={150} className="rounded-lg shadow-md" />
        <Image src="/parceiros/NATURAL.png" alt="Natural" width={150} height={150} className="rounded-lg shadow-md" />
        <Image src="/parceiros/francis_doces_finos.PNG" alt="Francis Doces Finos" width={150} height={150} className="rounded-lg shadow-md" />
        <Image src="/parceiros/BADALADO.jpg" alt="Badalado" width={150} height={150} className="rounded-lg shadow-md" />
      </div>

    </div>
  );
}

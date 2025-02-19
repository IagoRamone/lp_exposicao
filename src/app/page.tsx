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
    <section
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/chefs.jpg')" }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold uppercase">Exposição Apetite Virtual</h1>
        <p className="text-lg mt-4">Por que comemos com os olhos?</p>
      </div>
    </section>
  );
}


function SectionTwo() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 text-gray-900 py-12 px-6 space-y-12">
      
      <div className="flex flex-col lg:flex-row items-center max-w-6xl w-full">
        <div className="flex-1">
          <Image 
            src="/pratos/Fasano.jpg" 
            alt="Fasano" 
            width={400} 
            height={300} 
            className="rounded-lg shadow-md" 
          />
        </div>
        <div className="flex-1 lg:pl-12 mt-8 lg:mt-0 text-center lg:text-left">
          <h2 className="text-2xl font-semibold mb-4">Explore a Arte do Futuro</h2>
          <p className="text-lg text-gray-700">
          A sofisticação da alta gastronomia e a arte da fotografia se encontram na exposição - Nome da Exposição -, uma experiência visual única que transforma pratos em verdadeiras obras de arte. Com produção assinada pelo Estúdio 10, a mostra reúne imagens impactantes que exploram a estética dos alimentos, elevando a fotografia gastronômica a um novo patamar.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse items-center max-w-6xl w-full">
        <div className="flex-1">
          <Image 
            src="/pratos/lendas_naval.jpg" 
            alt="Lendas Naval" 
            width={400} 
            height={300} 
            className="rounded-lg shadow-md" 
          />
        </div>
        <div className="flex-1 lg:pr-12 mt-8 lg:mt-0 text-center lg:text-left">

          <p className="text-lg text-gray-700">
          A noite de inauguração contará com a presença de grandes nomes da cena gastronômica e cultural, como o prestigiado chef João Diamante, que realizará uma exclusiva noite de autógrafos. Além disso, marcas icônicas como Heaven e Fasano marcam presença, agregando ainda mais requinte ao evento.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center max-w-6xl w-full">
        <div className="flex-1">
          <Image 
            src="/pratos/Vegue-se.JPG" 
            alt="Vegue-se" 
            width={400} 
            height={300} 
            className="rounded-lg shadow-md" 
          />
        </div>
        <div className="flex-1 lg:pl-12 mt-8 lg:mt-0 text-center lg:text-left">
          <p className="text-lg text-gray-700">
          Mais do que uma celebração da beleza dos alimentos, a exposição também tem um propósito social: apoio ao projeto “Diamantes na Cozinha”, um projeto dedicado à transformação de vidas por meio da gastronomia. O evento reforça o compromisso com a inclusão e o impacto social positivo, trazendo a arte como ferramenta de mudança.

A mostra acontece no Vogue Square, com abertura no dia 11/03 e permanece em cartaz até 25/04. Uma oportunidade imperdível para apreciar o encontro entre gastronomia, fotografia e exclusividade.
          </p>
        </div>
      </div>

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

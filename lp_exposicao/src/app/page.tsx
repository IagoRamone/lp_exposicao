import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 text-gray-900">
     
      <header className="w-full py-6 bg-white shadow-md flex justify-center">
        <h1 className="text-3xl font-bold uppercase tracking-widest">
          Exposição de Arte Moderna
        </h1>
      </header>

      <main className="flex flex-col items-center py-12 px-6 max-w-4xl text-center">
        <h2 className="text-2xl font-semibold mb-4">Explore a Arte do Futuro</h2>
        <p className="text-lg text-gray-700">
          Descubra obras de artistas inovadores e experimente a nova era da arte digital e tradicional.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
          <Image src="/art1.jpg" alt="Obra 1" width={200} height={200} className="rounded-lg shadow-md" />
          <Image src="/art2.jpg" alt="Obra 2" width={200} height={200} className="rounded-lg shadow-md" />
          <Image src="/art3.jpg" alt="Obra 3" width={200} height={200} className="rounded-lg shadow-md" />
          <Image src="/art4.jpg" alt="Obra 4" width={200} height={200} className="rounded-lg shadow-md" />
          <Image src="/art5.jpg" alt="Obra 5" width={200} height={200} className="rounded-lg shadow-md" />
          <Image src="/art6.jpg" alt="Obra 6" width={200} height={200} className="rounded-lg shadow-md" />
        </div>

      </main>

      <footer className="w-full bg-gray-900 text-white text-center py-6 mt-12">
        <p>&copy; 2025 Exposição de Arte Moderna - Todos os direitos reservados.</p>
        <p>
          <a href="https://instagram.com/exposicao" className="hover:underline">
            Instagram
          </a>{" "}
          |{" "}
          <a href="https://facebook.com/exposicao" className="hover:underline">
            Facebook
          </a>
        </p>
      </footer>
    </div>
  );
}

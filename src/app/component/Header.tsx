import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full py-6 bg-black shadow-md flex items-center justify-between px-8 relative">
      <Image 
        src="/logo_apetite.png" 
        alt="Logo" 
        width={300} 
        height={40} 
        className="rounded-lg shadow-md"
      />
    </header>
  );
}

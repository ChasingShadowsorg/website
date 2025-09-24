import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a] text-[#f5f5f5] font-sans text-center p-8">
      <Image
        src="/logo.png"
        alt="Chasing Shadows Logo"
        width={200}
        height={200}
        className="max-w-[200px] mb-6"
        priority
      />
      
      <h1 className="text-5xl font-bold mb-2">Chasing Shadows</h1>
      <h2 className="text-2xl text-[#b0b0b0] mb-8">
        Paranormal Investigations Across New England
      </h2>

      <p className="max-w-xl mb-8 leading-relaxed text-lg">
        We are a dedicated paranormal investigation team exploring some of the most 
        haunted locations in New England. Our mission is to document and uncover 
        the stories hidden in the shadows. Upcoming: SK Pierce Haunted Victorian Mansion, October 14.
      </p>

      <a 
        href="mailto:contact@chasingshadows.org"
        className="bg-[#e6e6e6] text-[#111] px-6 py-3 rounded-md font-bold shadow-lg hover:bg-[#d0d0d0] transition-colors"
      >
        Contact Us
      </a>

      <div className="mt-8 text-sm text-[#b0b0b0]">
        Follow us on 
        <a 
          href="https://x.com/ShadowChasingNE" 
          target="_blank" 
          rel="noopener noreferrer"
          className="underline hover:text-white transition-colors"
        >
          X (@ShadowChasingNE)
        </a>
      </div>
    </div>
  );
}

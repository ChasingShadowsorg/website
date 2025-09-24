'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a] text-[#f5f5f5] font-sans text-center p-8 py-16">
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

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-[#1a1a1a] p-8 rounded-lg shadow-md mb-8 max-w-4xl mx-auto"
      >
        <p className="max-w-xl leading-relaxed text-lg">
          We are a dedicated paranormal investigation team exploring some of the most 
          haunted locations in New England. Our mission is to document and uncover 
          the stories hidden in the shadows.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-[#1a1a1a] p-8 rounded-lg shadow-md mb-8 max-w-4xl mx-auto"
      >
        <section>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="mb-6 leading-relaxed">
            Chasing Shadows is a passionate team of paranormal enthusiasts dedicated to uncovering the mysteries of the unknown. With a focus on ethical investigations, we use state-of-the-art equipment to document evidence while respecting the history and spirits of each location.
          </p>
        </section>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-[#1a1a1a] p-8 rounded-lg shadow-md mb-8 max-w-4xl mx-auto"
      >
        <section>
          <h3 className="text-xl font-bold mb-4">Collaborations</h3>
          <p className="leading-relaxed">
            We believe in the power of community. Chasing Shadows actively collaborates with other paranormal investigation groups across New England to share knowledge, resources, and experiences. These partnerships help us conduct more comprehensive investigations and build a stronger network in the paranormal field.
          </p>
        </section>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-[#1a1a1a] p-8 rounded-lg shadow-md mb-8 max-w-4xl mx-auto"
      >
        <section>
          <h3 className="text-xl font-bold mb-4">Our Investigations</h3>
          <p className="leading-relaxed">
            Securing access to haunted locations is key to our work. We carefully select and lock in sites with rich histories, such as abandoned mansions and historic buildings. Our team documents every step, from initial research to on-site evidence collection, ensuring thorough and respectful explorations.
          </p>
        </section>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-[#1a1a1a] p-8 rounded-lg shadow-md mb-8 max-w-4xl mx-auto"
      >
        <section>
          <h3 className="text-xl font-bold mb-4">Paranormal Insights</h3>
          <p className="leading-relaxed mb-4">
            Paranormal investigating involves more than just ghost hunting. Here are some key insights:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>Use reliable equipment like EMF meters, spirit boxes, and night-vision cameras.</li>
            <li>Always research the history of a location to understand potential spiritual activity.</li>
            <li>Maintain skepticism and look for rational explanations before concluding paranormal causes.</li>
            <li>Respect the sites and any entities present—ethics are paramount.</li>
          </ul>
        </section>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-[#1a1a1a] p-8 rounded-lg shadow-md mb-8 max-w-4xl mx-auto text-center"
      >
        <a 
          href="mailto:contact@chasingshadows.org"
          className="bg-[#e6e6e6] text-[#111] px-6 py-3 rounded-md font-bold shadow-lg hover:bg-[#d0d0d0] transition-colors"
        >
          Contact Us
        </a>

        <div className="mt-8 text-sm text-[#b0b0b0] flex flex-wrap justify-center gap-2 items-center">
          <span>Follow us on:</span>
          <a 
            href="https://x.com/ShadowChasingNE" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline hover:text-white transition-colors"
          >
            X
          </a>
          <span>|</span>
          <a 
            href="https://www.instagram.com/chasingshadowsne/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline hover:text-white transition-colors"
          >
            Instagram
          </a>
          <span>|</span>
          <a 
            href="https://www.youtube.com/@ChasingShadowsNE" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline hover:text-white transition-colors"
          >
            YouTube
          </a>
        </div>
      </motion.div>
    </div>
  );
}

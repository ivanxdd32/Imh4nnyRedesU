import { motion } from "framer-motion";
import discord from "../assets/discord.webP";
import profile from "../assets/profile.webP";

export default function Header() {
  return (
    <motion.div
      className="h-20 py-5 bg-gradient-to-r from-purple-500 to-blue-500 flex z-10 items-center justify-center gap-8 shadow-lg"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Icono de Discord */}
      <a
        href="https://discord.gg/ytRxpM35Kz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.img
          src={discord}
          alt="Discord"
          className="w-16 h-16 object-contain cursor-pointer hover:scale-110 transition-transform"
          whileHover={{ rotate: 15 }}
        />
      </a>

      {/* Nombre */}
      <motion.h1
        className="text-white text-xl md:text-2xl font-bold tracking-wider"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        IMH4NNY
      </motion.h1>

      {/* Foto de perfil */}
      <motion.img
        src={profile}
        alt="Foto de perfil"
        className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.7)",
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

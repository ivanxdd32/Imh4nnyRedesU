import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import instagram from "../assets/instagram.webP";
import tiktok from "../assets/tiktok.webP";
import kick from "../assets/kick.webP";
import youtube from "../assets/youtube.webP";

export default function MainPage() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: instagram,
      link: "https://instagram.com/imh4nny",
      color: "bg-pink-500 bg-opacity-80",
    },
    {
      name: "TikTok",
      icon: tiktok,
      link: "https://www.tiktok.com/@soyhanny_?is_from_webapp=1&sender_device=pc",
      color: "bg-black",
    },
    {
      name: "Kick",
      icon: kick,
      link: "https://kick.com/h4nny",
      color: "bg-green-500 bg-opacity-80",
    },
    {
      name: "YouTube",
      icon: youtube,
      link: "https://www.youtube.com/@Imh4nny",
      color: "bg-red-500 bg-opacity-80",
    },
  ];

  const emotes = ["🔥", "💜", "🎮", "🚀", "💖", "✨", "👾"];
  const [emoteIndex, setEmoteIndex] = useState(0);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setEmoteIndex((prev) => (prev + 1) % emotes.length);
    }, 2000); // cada 2 segundos
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isFirstRender) {
      const timer = setTimeout(() => setIsFirstRender(false), 100);
      return () => clearTimeout(timer);
    }
  }, [isFirstRender]);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-screen-lg w-full">
        {/* Sección de Redes Sociales */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-pink-400 h-12">
            <Typewriter
              words={["¡Sígueme en mis redes!"]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
            <AnimatePresence mode="wait">
              <motion.span
                key={emotes[emoteIndex]}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.4,
                  delay: isFirstRender ? 3 : 0,
                }}
                className="text-3xl"
              >
                {emotes[emoteIndex]}
              </motion.span>
            </AnimatePresence>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-40 h-48 flex flex-col items-center justify-center p-4 ${social.color} rounded-xl shadow-lg 
                hover:rotate-5 transition-transform animate__animated animate__backInUp`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-16 h-16 mb-2"
                />
                <span className="text-lg font-semibold text-white">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-24 p-6 bg-gradient-to-r from-yellow-400 to-red-400 rounded-xl shadow-lg animate__animated"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Título con los corazones animados */}
          <h2 className="text-3xl font-bold text-gray-900">
            <motion.span
              className="inline-block animate__animated animate__heartBeat"
              style={{
                animationDelay: "2s",
                animationIterationCount: "infinite",
              }}
            >
              💖
            </motion.span>
            {" Apoya el Stream "}
            <motion.span
              className="inline-block animate__animated animate__heartBeat"
              style={{
                animationDelay: "2s",
                animationIterationCount: "infinite",
              }}
            >
              💖
            </motion.span>
          </h2>

          {/* Texto motivacional */}
          <p className="text-lg mt-2 text-gray-800">
            Cada donación me ayuda a seguir creando contenido increíble para
            ustedes. ¡Gracias por el apoyo! 🎉
          </p>

          {/* Botón animado */}
          <motion.a
            href="https://streamelements.com/imh4nny/donate"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-bold shadow-md"
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.5)",
            }}
            whileTap={{ scale: 0.9 }}
          >
            Donar Ahora 🚀
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

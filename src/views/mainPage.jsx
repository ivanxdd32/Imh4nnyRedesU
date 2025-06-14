import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import instagram from "../assets/instagram.png";
import tiktok from "../assets/tiktok.png";
import kick from "../assets/kick.png";
import youtube from "../assets/youtube.png";

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
      link: "https://tiktok.com/@imh4nny",
      color: "bg-black",
    },
    {
      name: "Kick",
      icon: kick,
      link: "https://kick.com/imh4nny",
      color: "bg-green-500 bg-opacity-80",
    },
    {
      name: "YouTube",
      icon: youtube,
      link: "https://youtube.com/@imh4nny",
      color: "bg-red-500 bg-opacity-80",
    },
  ];

  // Estado para la animación de máquina de escribir
  const [typedText, setTypedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(false);
  const textToType = "¡Sígueme en mis redes!";
  const typingSpeed = 100; // Velocidad de escritura

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(textToType.slice(0, index));
      index++;
      if (index > textToType.length) {
        clearInterval(interval);
        setCursorVisible(true); // Activa el cursor parpadeante al finalizar
      }
    }, typingSpeed);
    return () => clearInterval(interval);
  }, []);

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
            {typedText}
            <span className={cursorVisible ? "blink" : ""}>|</span>
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
          className={`text-center mt-24 p-6 bg-gradient-to-r from-yellow-400 to-red-400 rounded-xl shadow-lg animate__animated`}
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

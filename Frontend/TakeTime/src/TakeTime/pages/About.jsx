import React, { useState } from "react";
import { motion } from "framer-motion";
import { Footer } from "./Footer";


export const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const slides = [
    {
      title: "¿Qué es nuestra app?",
      content: "Nuestra aplicación es un banco de tiempo donde puedes intercambiar horas por habilidades. Una comunidad colaborativa donde tu tiempo vale más que el dinero.",
    },
    {
      title: "¿Cómo funciona?",
      content: "Ofrece tus habilidades o servicios, acumula horas y úsalas para recibir servicios de otros miembros. Es simple, justo y sin dinero de por medio.",
    },
    {
      title: "Nuestra misión",
      content: "Fomentar la colaboración, el aprendizaje mutuo y la solidaridad entre personas, creando conexiones significativas basadas en el intercambio de tiempo.",
    },
  ];


  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };


  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };


  return (

<>


    <div className="bg-blue-100 py-8 px-4 h-screen">
      <div className="container mx-0">
        <div className="relative bg-white h-80 rounded-lg shadow-lg p-6 text-center">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">{slides[currentIndex].title}</h3>
            <p className="text-gray-600">{slides[currentIndex].content}</p>
          </motion.div>
          <div className="flex justify-between mt-6">
            <button
              onClick={prevSlide}
              className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300"
            >
              &#8592; Anterior
            </button>
            <button
              onClick={nextSlide}
              className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300"
            >
              Siguiente &#8594;
            </button>
          </div>
        </div>
      </div>
    </div>
  
  

    <Footer/>
</>
  );
};

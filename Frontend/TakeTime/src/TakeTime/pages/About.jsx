import React, { useState } from "react";
import { motion } from "framer-motion";
import { Footer } from "./Footer";


export const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const slides = [
    {
      title: "¿Qué es nuestra app?",
      content: "Nuestra aplicación es un banco de tiempo diseñado para promover el intercambio de habilidades y servicios dentro de una comunidad. Aquí, las personas pueden ofrecer su tiempo y conocimientos a otros miembros, acumulando horas como moneda virtual. Estas horas pueden luego ser utilizadas para recibir servicios o aprender nuevas habilidades, todo sin necesidad de dinero. Es un sistema que fomenta la colaboración y la confianza entre los participantes, creando un entorno de apoyo mutuo y crecimiento colectivo.",
    },
    {
      title: "¿Cómo funciona?",
      content: "El funcionamiento de nuestra app es sencillo y accesible para todos. Como usuario, puedes ofrecer tus habilidades o servicios a otros miembros de la comunidad. Por cada hora que dedicas a ayudar a alguien, recibes una hora en tu cuenta que puedes gastar en cualquier servicio ofrecido por otros miembros. Por ejemplo, puedes enseñar un idioma, ayudar con reparaciones en el hogar o cuidar niños, y luego utilizar esas horas ganadas para recibir clases de música, asesoramiento profesional o apoyo técnico. Todo esto está diseñado para ser justo, equitativo y basado en la idea de que el tiempo de cada persona tiene el mismo valor, sin importar el servicio que ofrezca.",
    },
    {
      title: "Nuestra misión",
      content: "Nuestra misión principal es construir una comunidad solidaria donde las personas puedan compartir sus talentos y aprender unas de otras. Creemos en el poder del tiempo como una herramienta para fomentar el aprendizaje mutuo, la inclusión social y el desarrollo personal. Queremos empoderar a los individuos para que se conecten con otros, valoren su tiempo y contribuyan al bienestar de la comunidad. Nuestro objetivo es crear un sistema que trascienda las barreras económicas y promueva un intercambio significativo y sostenible entre las personas.",
    },
    {
      title: "Beneficios de participar",
      content: "Al participar en nuestra app, puedes disfrutar de una amplia gama de beneficios. Primero, tendrás acceso a una red diversa de personas con habilidades y conocimientos únicos, lo que te permitirá aprender cosas nuevas y recibir ayuda en áreas donde lo necesites. Además, puedes ahorrar dinero al intercambiar servicios en lugar de pagar por ellos. También fomenta un sentido de pertenencia y conexión dentro de la comunidad, fortaleciendo las relaciones interpersonales. Por último, el sistema promueve la igualdad, ya que cada hora de tiempo tiene el mismo valor, sin importar el tipo de servicio ofrecido.",
    },
    {
      title: "¿Quién puede participar?",
      content: "Cualquier persona puede participar en nuestra comunidad de banco de tiempo. No importa tu edad, experiencia profesional o nivel de habilidad. Todos tienen algo valioso que ofrecer, ya sea tiempo, conocimientos o apoyo emocional. La idea es crear un espacio inclusivo donde todos se sientan valorados y puedan contribuir de acuerdo a sus capacidades. Incluso si no estás seguro de qué habilidades ofrecer, puedes descubrirlas a medida que interactúas con otros miembros y exploras nuevas oportunidades.",
    }
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

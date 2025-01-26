import React, { useState } from "react";
import { Footer } from "./Footer";

export const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "¿Qué es un banco de tiempo?",
      answer:
        "Un banco de tiempo es una comunidad en la que las personas intercambian habilidades y servicios utilizando horas como moneda en lugar de dinero.",
    },
    {
      question: "¿Cómo funciona el intercambio de horas?",
      answer:
        "Cada miembro del banco de tiempo ofrece sus habilidades o servicios. Por cada hora de trabajo que ofrece, gana una hora que puede utilizar para recibir otro servicio de otro miembro de la comunidad.",
    },
    {
      question: "¿Qué tipos de habilidades puedo intercambiar?",
      answer:
        "Puedes intercambiar una amplia variedad de habilidades, como clases de idiomas, reparaciones, asesoramiento, cuidado de niños, entre otros. Todo depende de lo que ofrezcan y necesiten los miembros.",
    },
    {
      question: "¿Cómo me uno a un banco de tiempo?",
      answer:
        "Para unirte, debes registrarte en el banco de tiempo de tu comunidad. Generalmente, esto implica llenar un formulario y describir qué habilidades puedes ofrecer y cuáles te interesan.",
    },
    {
      question: "¿Es necesario tener experiencia profesional para participar?",
      answer:
        "No, no necesitas experiencia profesional. Lo importante es que puedas ofrecer un servicio de calidad dentro de tus capacidades y habilidades.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (

    <>


    <div className="bg-gray-100 p-6 h-screen">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Preguntas Frecuentes
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-2">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left text-lg font-medium text-gray-700 focus:outline-none flex justify-between items-center"
            >
              {faq.question}
              <span className="ml-2 text-gray-500">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>

    <Footer/>
  </>


  );
};

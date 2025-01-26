import React, { useState } from "react";
import { Footer } from "./Footer";

export const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
        question: "¿Qué es un banco de tiempo?",
        answer:
          "Un banco de tiempo es una comunidad en la que las personas intercambian habilidades y servicios utilizando horas como moneda en lugar de dinero. La idea principal es fomentar la solidaridad, la confianza y el apoyo mutuo entre los miembros de la comunidad. Cada hora que ofreces ayuda a construir una red más fuerte y más conectada de personas dispuestas a colaborar entre sí.",
      },
      {
        question: "¿Cómo funciona el intercambio de horas?",
        answer:
          "Cada miembro del banco de tiempo ofrece sus habilidades o servicios. Por cada hora de trabajo que ofrece, gana una hora que puede utilizar para recibir otro servicio de otro miembro de la comunidad. Este sistema se basa en el principio de igualdad, ya que todas las horas tienen el mismo valor, independientemente del tipo de habilidad o servicio ofrecido. Esto promueve un intercambio justo y equitativo entre los participantes.",
      },
      {
        question: "¿Qué tipos de habilidades puedo intercambiar?",
        answer:
          "Puedes intercambiar una amplia variedad de habilidades, como clases de idiomas, reparaciones, asesoramiento, cuidado de niños, jardinería, cocina o incluso compañía para personas mayores. La diversidad de habilidades depende de los miembros de la comunidad y sus intereses. Este intercambio permite a los participantes aprender nuevas habilidades, ahorrar dinero y construir relaciones significativas.",
      },
      {
        question: "¿Cómo me uno a un banco de tiempo?",
        answer:
          "Para unirte, debes registrarte en el banco de tiempo de tu comunidad. Generalmente, esto implica llenar un formulario en el que describas qué habilidades puedes ofrecer y cuáles te interesan recibir. Algunos bancos de tiempo también realizan reuniones de bienvenida para explicar las normas y valores de la comunidad, así como para ayudarte a conocer a otros miembros. Una vez registrado, podrás comenzar a intercambiar horas de inmediato.",
      },
      {
        question: "¿Es necesario tener experiencia profesional para participar?",
        answer:
          "No, no necesitas experiencia profesional para participar. Lo importante es que puedas ofrecer un servicio de calidad dentro de tus capacidades y habilidades. Por ejemplo, puedes ofrecer tareas simples como acompañar a alguien en una caminata, ayudar con compras o realizar pequeñas reparaciones en casa. Todos tienen algo valioso que aportar, independientemente de su nivel de experiencia profesional.",
      },
      {
        question: "¿Cómo se registran y rastrean las horas intercambiadas?",
        answer:
          "La mayoría de los bancos de tiempo cuentan con un sistema en línea o una aplicación móvil para registrar y rastrear las horas intercambiadas. Cada vez que realizas un servicio, el tiempo que dedicas se acredita a tu cuenta. Del mismo modo, cuando recibes un servicio, se debita de tu saldo de horas. Estos sistemas están diseñados para ser transparentes y fáciles de usar, asegurando que todos los miembros tengan acceso a la información sobre sus transacciones.",
      },
      {
        question: "¿Qué sucede si no tengo habilidades específicas para ofrecer?",
        answer:
          "No te preocupes si sientes que no tienes habilidades específicas para ofrecer. Los bancos de tiempo valoran todas las contribuciones, desde tareas simples como regar plantas o cuidar mascotas hasta habilidades más especializadas. Además, ser parte de un banco de tiempo te permite descubrir y desarrollar nuevas habilidades mientras interactúas con otros miembros de la comunidad.",
      },
      {
        question: "¿Cuál es el beneficio de un banco de tiempo frente a los métodos tradicionales de intercambio?",
        answer:
          "Un banco de tiempo fomenta una economía más humana y basada en la solidaridad, donde el valor no se mide en dinero, sino en tiempo y apoyo mutuo. Este enfoque reduce la dependencia de sistemas monetarios tradicionales, promueve la inclusión social y fortalece las conexiones dentro de la comunidad. Además, al intercambiar servicios directamente, puedes ahorrar dinero y disfrutar de experiencias enriquecedoras al interactuar con personas de diferentes orígenes y habilidades."
      }
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

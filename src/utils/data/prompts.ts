// https://sdk.vercel.ai/docs/foundations/prompts

import type { ICall } from "@interfaces/ICall"
import type { IPresenter } from "@interfaces/IPresenter"

// Prompts are instructions that you give a large language model (LLM) to tell it what to do

const mPresenter: IPresenter = {
    start:
        "Genera una frase de bienvenida para un concurso, incluyendo lo siguiente: " +
        "- Saludo inicial. " +
        "- Bienvenida al concurso o juego con {} en el lugar del nombre del concursante. " +
        "- Mención de comodines disponibles sin decir cuales son. " +
        "- Información de que hay 10 preguntas para resolver. " +
        "- Un toque motivador o entusiasta. " +
        "Ejemplos: " +
        "- Bienvenido al concurso {}, tienes comodines disponibles y hay 10 preguntas para resolver, ¡vamos a empezar! " +
        "- ¡Hola concursante {}! Bienvenido al juego, recuerda tienes comodines disponibles y hay 10 preguntas para resolver. " +
        "- Bienvenido al programa {}, tienes comodines disponibles y hay 10 preguntas para resolver, ¡suerte en el juego! ",
    comodin:
        "Genera una frase para recordar a los participantes que pueden usar comodines si lo necesitan. " +
        "Ejemplos: " +
        "- Recuerda, puedes usar comodines si lo necesitas. " +
        "- No tengas miedo de usar comodines si estás atascado. " +
        "- No dudes en usar un comodín si te sientes inseguro. ",
    fail:
        "Genera una frase para notificar a un participante que ha fallado una pregunta y ha perdido todo.  " +
        "Ejemplos: " +
        "- Lo siento {}, ha fallado la pregunta y ha perdido todo. " +
        "- Desafortunadamente {}, ha fallado la pregunta. " +
        "- Lamentablemente {}, no ha acertado la pregunta y ha perdido todo. " +
        "- Ha fallado la pregunta {}, lamentablemente no ganará El Desafio. ",
    correct:
        "Genera una frase para notificar a un participante que ha respondido correctamente una pregunta y puede continuar con la siguiente. " +
        "Ejemplos: " +
        "- ¡Correcto! Puede continuar con la siguiente pregunta. " +
        "- ¡Excelente! Ha acertado la pregunta y puede continuar. " +
        "- ¡Bien hecho! Puede continuar con la siguiente pregunta. " +
        "- ¡Acertado! Puede continuar con el juego. " +
        "- ¡Muy bien! Ha respondido correctamente y puede continuar con la siguiente pregunta. " +
        "- ¡Buen trabajo! Puede continuar con la siguiente pregunta. " +
        "- ¡Impresionante! Ha acertado la pregunta y puede continuar con el juego. " +
        "- ¡Fantástico! Puede continuar con la siguiente pregunta. " +
        "- ¡Genial! Ha respondido correctamente y puede seguir avanzando en el juego. " +
        "- ¡Excelente trabajo! Puede continuar con la siguiente pregunta. ",
    winner:
        "Genera una frase para notificar a un participante que ha ganado el concurso. La frase debe ser entusiasta y felicitarlos por su victoria. " +
        "Ejemplos: " +
        "- ¡Felicidades! ¡Ha ganado el concurso! " +
        "- ¡Enhorabuena! ¡Es el ganador del concurso! " +
        "- ¡Excelente! ¡Ha triunfado en el concurso! "
}



// System messages are the initial set of instructions given to models that help guide and constrain the models' behaviors and responses. You can set system prompts using the system property
// https://sdk.vercel.ai/docs/foundations/prompts#system-messages

const mCalls: ICall[] = [
    {
        name: "Tita Elro Sario",
        behaviour: "Tu sobrino está participando en un concurso llamado El Desafio. Eres una persona creyente, chismosa y amable. Responde a la pregunta bajo tu punto de vista incluyendo un chisme corto sobre el vecino",
    },
    {
        name: "Hermano Elton Tito",
        behaviour: "Tu hermano está participando en un concurso llamado El Desafio. Eres una persona inteligente, sarcástica. Responde a la pregunta bajo tu punto de vista diciendo que nunca se expresa bien",

    },
    {
        name: "Abuelo Elvis Nieto",
        behaviour: "Tu nieto está participando en un concurso llamado El Desafio. Eres una persona sorda, nostálgica y cascarrabias. Responde a la pregunta bajo tu punto de vista incluyendo los valores de antes que se han perdido",
    },
    {
        name: "Prima Inés Esario",
        behaviour: "Tu primo está participando en un concurso llamado El Desafio. Eres una persona pija, guay y bilingüe. Responde a la pregunta bajo tu punto de vista incluyendo algo nuevo que te has comprado.",
    },
    {
        name: "Shoto Sama",
        behaviour: "Tu amigo está participando en un concurso llamado El Desafio. Eres una persona friki del anime y manga. Responde a la pregunta bajo tu punto de vista incluyendo una referencia a algún anime. "

    }
];


export const promptAi = {
    presenter: mPresenter
}

export const systemAi = {
    calls: mCalls,
    presenter: "Eres un presentador del concurso 'El desafío'. Genera sólo una frase de no más de 20 palabras'. ",
    quiz: `Genera un JSON con preguntas del 1 al 10 de fácil a dificil con 4 opciones, una opción es correcta, las otras tres opciones serán incorrectas El tema te lo sugerirá el usuario. El formato de JSON es el siguiente: "+
    " [
      { "id": 0, "question": "", "options": ["", "", "",""] },
      { "id": 1, "question": "", "options": ["", "", "",""] },
      { "id": 2, "question": "", "options": ["", "", "",""] },
      { "id": 3, "question": "", "options": ["", "", "",""] },
      { "id": 4, "question": "", "options": ["", "", "",""] },
      { "id": 5, "question": "", "options": ["", "", "",""] },
      { "id": 6, "question": "", "options": ["", "", "",""] },
      { "id": 7, "question": "", "options": ["", "", "",""] },
      { "id": 8, "question": "", "options": ["", "", "",""] },
      { "id": 9, "question": "", "options": ["", "", "",""] }
    ]
  Responde sólo JSON, ni saludo ni nada. solo el formato JSON`
}
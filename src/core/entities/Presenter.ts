import { aiChatResponse } from "@utils/ai";
import type { IPresenter } from "@interfaces/IPresenter";
import { promptAi, systemAi } from "@utils/data/prompts";
import { enumPresenter as enumP } from "@enum/enumPresenter";

const prompt: IPresenter = promptAi.presenter;
const sys: string = systemAi.presenter;

// como el mvc del node express
class Presenter {
    static getNoPresenterResponse(name: string) {
        switch (name) {
            case enumP.presentation:
                return "Bienvenido a El Desafio, tienes comodines disponibles y hay 10 preguntas para resolver, ¡vamos a empezar!"
            case enumP.comodin:
                return "Recuerda, puedes usar comodines si lo necesitas."
            case enumP.correct:
                return "¡Correcto! Puede continuar con la siguiente pregunta."
            case enumP.incorrect:
                return "Desafortunadamente ha fallado la pregunta."
            case enumP.winner:
                return "¡Felicidades! ¡Ha ganado El Desafio!"
            default:
                return "Continua así"
        }
    }

    static async callPresentacion(name: string) {
        const result = await aiChatResponse(prompt.start, sys)
        return result.replaceAll("{}", name);

    }
    static async callComodin() {
        const result = await aiChatResponse(prompt.comodin, sys);
        return result;
    }
    static async callIncorrect(name: string) {
        const result = await aiChatResponse(prompt.fail.replaceAll("{}", name), sys)
        return result.replaceAll("{}", name);
    }
    static async callCorrect() {
        const result = await aiChatResponse(prompt.correct, sys);
        return result;
    }
    static async callWinner(name: string) {
        const result = await aiChatResponse(prompt.winner, sys);
        return result.replaceAll("{}", name);

    }

    static thinking() {
        return "procesando ...";
    }

    /*async callTrampa() {
        const result = await aiChatResponse(prompt., sys);
        return result;
    }*/
}

// Ejemplo de uso
// import { promptAi, systemAi } from "@utils/data/prompts";

//let presenter = new Presenter(promptAi.presenter, systemAi.presenter);

export default Presenter;
// import type { IQuiz } from "@interfaces/IQuiz";
import { aiChatResponse } from "@utils/ai";
import { systemAi } from "@utils/data/prompts";
import { GAMEPLAY_ELDESAFIO } from "@entities/Gameplay";
import { enumError as enumE } from "@enum/enumError";

const quizs: string = systemAi.quiz;
class Creator {
    theme: string;

    constructor(theme: string) {
        this.theme = theme;
    }

    static async getSuggestQuiz(theme: string) {
        const result = await aiChatResponse(theme, quizs);
        return result;
    }

    static getSuccess() {
        return "";
    }

    static getError(error: Error) {
        switch (error.message) {
            case enumE.fetch:
                return "No hay conexión a Internet"
            case enumE.apiKey:
                return "La 'API Key' no es correcta. Cámbiala y vuelve a intentarlo"
            default:
                console.log("Error", error.message);
                return "Error desconocido. Prueba otra vez con otro tema."
        }

    }

    static getLoading() {
        return "Explorando el mundo digital ...";
    }

    static getMessageSave() {
        return "Guardado correctamente";
    }


    static setQuizLocalStorage(value: string) {
        window.localStorage.setItem(GAMEPLAY_ELDESAFIO, value);
    }

    static getQuizLocalStorage() {
        window.localStorage.getItem(GAMEPLAY_ELDESAFIO);
    }

}

export default Creator;
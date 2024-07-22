// import type { IQuiz } from "@interfaces/IQuiz";
import { aiChatResponse } from "@utils/ai";
import { systemAi } from "@utils/data/prompts";

const quizs: string = systemAi.quiz;
const EL_DESAFIO_CREATOR = "el-desafio-creator";

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
            case "Failed to fetch":
                return "No hay conexión a Internet"
            case "Invalid API Key":
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
        return "Guardado correctamente en la sección de 'Categoria'";
    }


    static setQuizLocalStorage(value: string) {
        window.localStorage.setItem(EL_DESAFIO_CREATOR, value);
    }

    static getQuizLocalStorage() {
        window.localStorage.getItem(EL_DESAFIO_CREATOR);
    }

}

export default Creator;
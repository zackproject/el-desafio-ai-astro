import { aiChatResponse } from "@utils/ai";
import type { IPresenter } from "@interfaces/IPresenter";
import { promptAi, systemAi } from "@utils/data/prompts";


const prompt: IPresenter = promptAi.presenter;
const sys: string = systemAi.presenter;

// como el mvc del node express
class Presenter {

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
    /*async callTrampa() {
        const result = await aiChatResponse(prompt., sys);
        return result;
    }*/
}

// Ejemplo de uso
// import { promptAi, systemAi } from "@utils/data/prompts";

//let presenter = new Presenter(promptAi.presenter, systemAi.presenter);

export default Presenter;
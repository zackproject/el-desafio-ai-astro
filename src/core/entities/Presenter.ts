import { aiChatResponse } from "@utils/ai";
import type { IPresenter } from "@interfaces/IPresenter";

// como el mvc del node express
class Presenter {
    sys: string
    prompt: IPresenter

    constructor(prompt: IPresenter, sys: string,) {
        this.prompt = prompt;
        this.sys = sys;
    }
    async callPresentacion(name: string) {
        const result = await aiChatResponse(this.prompt.start, this.sys)
        return result.replaceAll("{}", name);
    }
    async callComodin() {
        const result = await aiChatResponse(this.prompt.comodin, this.sys);
        return result;
    }
    async callInorrect(name: string) {
        const result = await aiChatResponse(this.prompt.fail.replaceAll("{}", name), this.sys)
        return result.replaceAll("{}", name);
    }
    async callCorrect() {
        const result = await aiChatResponse(this.prompt.correct, this.sys);
        return result;
    }
    async callWinner(name: string) {
        const result = await aiChatResponse(this.prompt.winner, this.sys);
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
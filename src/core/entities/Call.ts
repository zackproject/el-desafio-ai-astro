import type { ICall } from "@interfaces/ICall";
import { aiChatResponse } from "@utils/ai";
import { systemAi } from "@utils/data/prompts";

const calls: ICall[] = systemAi.calls;

// Controler https://youtu.be/ev3Yxva4wI4&t=3799
class Call {
    static getName(iContact: number) {
        const result = calls[iContact].name; //await ?
        return result;
    }

    static async getCallResponse(question: string, iContact: number) {
        const result = await aiChatResponse(question, calls[iContact].behaviour);
        return result;
    }

    static getNoCallResponse(error: Error) {
        switch (error.message) {
            case "Failed to fetch":
                return "Sin cobertura. Compruebe la linea telefónica"
            case "Invalid API Key":
                return "El pin del teléfono es incorrecto. Por favor, modifica la API"
            default:
                console.log("Error", error.message);
                return "Error desconocido. Por favor, intente nuevamente más tarde o contacte con el soporte técnico."
        }

    }

    static usePhone() {
        return "Llamando ...";
    }

    static getContacts() {
        return calls;
    }

    static getContactsLength() {
        return calls.length;
    }
}

export default Call
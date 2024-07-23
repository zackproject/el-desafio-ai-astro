import type { iGameplay } from "@interfaces/iGameplay";
import type { IQuiz } from "@interfaces/IQuiz";
import { quizDefault } from "@utils/data/quiz";
export const GAMEPLAY_ELDESAFIO = "gameplay-el-desafio";
const local = window.localStorage.getItem(GAMEPLAY_ELDESAFIO) as string;
const obj: iGameplay = JSON.parse(local);

class Gameplay {
    username: string;
    questionsList: IQuiz[];
    solutionsList: number[];
    idActualQuestion: number;

    constructor(
        username: string,
        questionsList: IQuiz[],
        solutionsList: number[],
        idActualQuestion: number

    ) {
        this.username = username;
        this.questionsList = questionsList;
        this.solutionsList = solutionsList;
        this.idActualQuestion = idActualQuestion;
    }

    static getQuestion() {
        return obj.questionsList[obj.idActualQuestion].question;
    }

    static getOptions() {
        return obj.questionsList[obj.idActualQuestion].options;
    }
    static getCorrectId() {
        return obj.solutionsList[obj.idActualQuestion];
    }


    static getQuestionId() {
        // used to dificulty level
        return obj.idActualQuestion;
    }

    static getUsername() {
        const mLocal = window.localStorage.getItem(GAMEPLAY_ELDESAFIO);
        if (mLocal !== null) {
            return obj.username;
        }
        return "Invitado";
    }

    static setDefaultGamePlay(mUsername: string = "Invitado") {
        // Has a default gameplay if user no create 
        const mLocal = window.localStorage.getItem(GAMEPLAY_ELDESAFIO);
        if (mLocal === null) {
            const mGameplay = new Gameplay(
                mUsername,
                quizDefault.questionsList,
                quizDefault.solutionsList,
                0
            );
            window.localStorage.setItem(GAMEPLAY_ELDESAFIO, JSON.stringify(mGameplay));
        } else {
            // overwrite the username is created
            const mObj: iGameplay = JSON.parse(mLocal);
            mObj.username = mUsername;
            window.localStorage.setItem(GAMEPLAY_ELDESAFIO, JSON.stringify(mObj));
        }
    }

    static checkQuestion(idChecked: number, idCorrectAnwer: number) {
        if (idChecked === idCorrectAnwer) {
            //Presentador CallCorrect()
            //Green <label>
            // button nextQuestion enabled 
            return true;

        } else {
            //Presentador CallIncorrect()
            //Red <label>
            // image retry.png 
            // resetLocalStorage()
            return false;
        }

    }


    static isNextQuestion() {
        if (obj.idActualQuestion + 1 < obj.questionsList.length) {
            obj.idActualQuestion = obj.idActualQuestion + 1;
            //Presentador CallComodin()
            // options disabled 
            window.localStorage.setItem(GAMEPLAY_ELDESAFIO, JSON.stringify(obj));
            return true;
        } else {
            //Presentador CallWinner()  
            // button disabled (true) 
            // resetLocalStorage()
            return false;
        }
        // const nextID = obj.idActualQuestion + 1;
        /* const mGameplay = new Gameplay(
             obj.username,
             obj.questionsList,
             obj.solutionsList,
             nextID
         );*/

    }
}

export default Gameplay

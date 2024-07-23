import type { iGameplay } from "@interfaces/iGameplay";
import type { IQuiz } from "@interfaces/IQuiz";
import { quizDefault } from "@utils/data/quiz";
const GAMEPLAY_ELDESAFIO = "gameplay-el-desafio";
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
        return obj.username;
    }

    static setDefaultGamePlay(username: string = "Invitado") {
        // Only has a default gameplay if user no create one
        const mLocal = window.localStorage.getItem(GAMEPLAY_ELDESAFIO);
        if (mLocal === null || mLocal === "") {
            const mGameplay = new Gameplay(
                username,
                quizDefault.questionsList,
                quizDefault.solutionsList,
                0
            );
            window.localStorage.setItem(GAMEPLAY_ELDESAFIO, JSON.stringify(mGameplay));
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

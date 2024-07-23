import type { iGameplay } from "@interfaces/iGameplay";
import { quizDefault } from "@utils/data/quiz";
export const GAMEPLAY_ELDESAFIO = "gameplay-el-desafio";
const local = window.localStorage.getItem(GAMEPLAY_ELDESAFIO) as string;
const obj: iGameplay = JSON.parse(local);

class Gameplay {
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
    static resetGame() {
        let mObj = obj;
        mObj.idActualQuestion = 0;
        window.localStorage.setItem(GAMEPLAY_ELDESAFIO, JSON.stringify(mObj));
    }
    
    static getUsername() {
        if (obj !== null) {
            return obj.username;
        } else {
            return "Invitado";
        }
    }

    static setDefaultGamePlay(mUsername: string = "Invitado") {
        let mObj = obj;
        if (mObj !== null) {
            mObj.username = mUsername;

        }
        if (mObj === null) {
            // Has a default gameplay if user no create 
            mObj = {
                username: mUsername,
                questionsList: quizDefault.questionsList,
                solutionsList: quizDefault.solutionsList,
                idActualQuestion: 0
            };
        }
        window.localStorage.setItem(GAMEPLAY_ELDESAFIO, JSON.stringify(mObj));
    }

    static checkQuestion(idChecked: number, idCorrectAnwer: number) {
        //  return idChecked === idChecked; in one line
        if (idChecked === idCorrectAnwer) {
            //Presentador CallCorrect()
            //Green <label>
            // button nextQuestion enabled 
            return true;

        } else {
            obj.idActualQuestion = 0;
            window.localStorage.setItem(GAMEPLAY_ELDESAFIO, JSON.stringify(obj));
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

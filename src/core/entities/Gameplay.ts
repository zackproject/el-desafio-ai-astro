import type { IQuiz } from "@interfaces/IQuiz";
import { quizDefault, type iQuizDefault } from "@utils/data/quiz";
const SETTINGS_ELDESAFIO = "settings-el-desafio";
const local = window.localStorage.getItem(SETTINGS_ELDESAFIO) as string;
const obj: iQuizDefault = JSON.parse(local);

class Gameplay {
    username: string;
    useCamera: boolean;
    useGreen: boolean;
    questionsList: IQuiz[];
    solutionsList: number[];
    idActualQuestion: number;

    constructor(
        username: string,
        useCamera: boolean,
        useGreen: boolean,
        questionsList: IQuiz[],
        solutionsList: number[],
        idActualQuestion: number

    ) {
        this.username = username;
        this.useCamera = useCamera;
        this.useGreen = useGreen;
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

    static isGreenScreen() {
        return obj.useGreen;
    }

    static isCamera() {
        return obj.useCamera;
    }

    static setDefaultGamePlay(username: string, useCamera: boolean, useGreen: boolean) {
        const gameplay = new Gameplay(
            username,
            useCamera,
            useGreen,
            quizDefault.questionsList,
            quizDefault.solutionsList,
            0
        );
        window.localStorage.setItem(SETTINGS_ELDESAFIO, JSON.stringify(gameplay));
    }


    static nextQuestion() {
        const nextID = obj.idActualQuestion + 1;
        const gameplay = new Gameplay(
            obj.username,
            obj.useCamera,
            obj.useGreen,
            obj.questionsList,
            obj.solutionsList,
            nextID
        );
        
        window.localStorage.setItem(SETTINGS_ELDESAFIO, JSON.stringify(gameplay));
    }
}

export default Gameplay

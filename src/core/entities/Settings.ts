import type { IQuiz } from "@interfaces/IQuiz";

export class Settings {
    username: string;
    useCamera: boolean;
    useGreen: boolean;
    quiz: IQuiz[];
    solutionList: number[];
    idActualQuestion: number;

    constructor(
        username: string,
        useCamera: boolean,
        useGreen: boolean,
        quiz: IQuiz[],
        solutionList: number[],
        idActualQuestion: number = 1

    ) {
        this.username = username;
        this.useCamera = useCamera;
        this.useGreen = useGreen;
        this.quiz = quiz;
        this.solutionList = solutionList;
        this.idActualQuestion = idActualQuestion;
    }

    // Add any methods you need for the Settings class
}

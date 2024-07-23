import type { IQuiz } from "@interfaces/IQuiz";

export interface iGameplay {
    idActualQuestion: number;
    username: string;
    questionsList: IQuiz[];
    solutionsList: number[];
}

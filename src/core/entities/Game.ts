import type { IQuiz } from "@interfaces/IQuiz";
import type { Comodin } from "@entities/Comodin";

class Game {
    name: string ;
    category: string; // optional?
    id_actual_question: number;
    comodinList: Comodin[];
    questionsList: IQuiz[];
    solutionsList: number[];

    constructor(
        name: string,
        category: string,
        id_actual_question: number,
        comodinList: Comodin[],
        questionsList: IQuiz[],
        solutionsList: number[]
    ) {
        this.name = name;
        this.id_actual_question = id_actual_question;
        this.category = category;
        this.comodinList = comodinList;
        this.questionsList = questionsList;
        this.solutionsList = solutionsList;
        // this.award = award;
    }
}

export default Game

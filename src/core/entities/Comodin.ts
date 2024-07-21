export class Comodin {
    id: number;
    name: string;
    used: boolean;

    constructor(id: number, name: string, used: boolean) {
        this.id = id;
        this.name = name;
        this.used = used;
    }

    apply50Percent(ncorrect: number) {
        let ar = [0, 1, 2, 3];
        //Remove one item
        const remove = 1;
        //Exclueix la responsta correcta
        ar.splice(ncorrect, remove);
        let rand = randInt(0, ar.length - 1);
        //Exclueix responsta random
        ar.splice(rand, remove);
        //Ha d'esborrar aquestes dues opcions
        return ar;
    };


    applyPublic(question_id: number, ncorrect: number) {
        //let dificultad = question_id % 10; // 1=facil 10=dificil
        let dificultad = (question_id + 1); // 1=facil 10=dificil CREO QUE NO ES NECESARIO %10
        //En un range on dificultat=10 --> 50% de probabilitat d'acert
        let range = 100 - (dificultad * 5);
        //opt1 sera la correcta, el public pot o no acertar
        let OPT1 = randInt(range - 10, range)
        //El rand2 sera menor al opt1
        let opt2 = randInt(0, 100 - OPT1);
        //El rand3 sera menor al opt1 i opt2
        let opt3 = randInt(0, 100 - (opt2 + OPT1));
        //El rand sera la resta del 100%, lo que queda
        // per probabilitat, opt4 pot arribar a ser major que la resta
        let opt4 = 100 - (opt3 + opt2 + OPT1);

        //nCorrect = 0,1,2,3 (4 options)
        switch (ncorrect) {
            case 1:
                return [opt4, OPT1, opt3, opt2];
            case 2:
                return [opt3, opt2, OPT1, opt4];
            case 3:
                return [opt3, opt2, opt4, OPT1];
            default:
                //default 0
                return [OPT1, opt2, opt3, opt4];
        }

    }

}

const randInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


export let c1 = new Comodin(1, "Llamada", false);
export let c2 = new Comodin(2, "Publico", false);
export let c3 = new Comodin(3, "La mitad", false);
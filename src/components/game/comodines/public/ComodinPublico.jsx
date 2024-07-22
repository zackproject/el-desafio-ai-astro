import { useRef, useState } from "preact/hooks";
import "../comodin.css"
import "./comodinPublic.css"
import { randInt } from "@utils/randNumber";

export const ComodinPublico = (props) => {
    const { questionId, correct } = props;
    console.log(correct, "correcto?");
    const [votes, setVotes] = useState([0/*A*/, 0/*B*/, 0/*C*/, 0/*D*/]);

    const mDialog = useRef(null);

    const logo = "./people.png"
    const image = "./people.png"
    const alt = "Comodin Publico"


    const askThePublic = (mquestion_id, mcorrect) => {
        //let dificultad = question_id % 10; // 1=facil 10=dificil
        let dificultad = (mquestion_id + 1); // 1=facil 10=dificil CREO QUE NO ES NECESARIO %10
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
        switch (mcorrect) {
            case 1:
                setVotes([opt4, OPT1, opt3, opt2]);
                console.log("uno");
                break;
            case 2:
                setVotes([opt3, opt2, OPT1, opt4]);
                console.log("dos");
                break;
            case 3:
                setVotes([opt3, opt2, opt4, OPT1]);
                console.log("tres");
                break;
            default:
                //default 0
                setVotes([OPT1, opt2, opt3, opt4]);
                console.log("default");
                break;

        }
    }

    return (
        <>
            <dialog class="comodin-parent" ref={mDialog}>
                <div class="logo-comodin">
                    <img src={image} height="50" width="45" alt={alt} />
                </div>
                <span class="close-btn" aria-label="Cerrar" onClick={() => mDialog.current.close()}>X</span>

                <div class="header">
                    <div class="percent" id="percent-a">{votes[0]}%</div>
                    <div class="percent" id="percent-b">{votes[1]}%</div>
                    <div class="percent" id="percent-c">{votes[2]}%</div>
                    <div class="percent" id="percent-d">{votes[3]}%</div>
                </div>
                <div class="main">
                    <div class="bar-parent">
                        <div id="public-a" class="bar-content" title={"Opción A: " + votes[0] + "%"} style={"height:" + votes[0] + "%;"}>
                        </div>
                    </div>
                    <div class="bar-parent">
                        <div id="public-b" class="bar-content" title={"Opción B: " + votes[1] + "%"} style={"height:" + votes[1] + "%;"}>
                        </div>
                    </div>
                    <div class="bar-parent">
                        <div id="public-c" class="bar-content" title={"Opción C: " + votes[2] + "%"} style={"height:" + votes[2] + "%;"}>
                        </div>
                    </div>
                    <div class="bar-parent">
                        <div id="public-d" class="bar-content" title={"Opción D: " + votes[3] + "%"} style={"height:" + votes[3] + "%;"}>
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <div class="letter">A</div>
                    <div class="letter">B</div>
                    <div class="letter">C</div>
                    <div class="letter">D</div>
                </div>
                <button class="survey-btn" title="Encuestar al público" onClick={() => askThePublic(questionId, correct)}>ENCUESTAR</button>
            </dialog>
            <button class="icon-comodin" title="Usar comodin público" onClick={() => mDialog.current.showModal()} >
                <img
                    src={logo}
                    height="30"
                    width="30"
                    alt={alt}
                />
            </button>
        </>
    )
}
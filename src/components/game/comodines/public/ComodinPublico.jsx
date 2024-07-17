import { useRef } from "preact/hooks";
import "../comodin.css"
import "./comodinPublic.css"

export function ComodinPublico() {
    const voteA = 10;
    const voteB = 30;
    const voteC = 40;
    const voteD = 21;
    const mDialog = useRef(null);

    const logo = "./people.png"
    const image = "./people.png"
    const alt = "Comodin Publico"
    return (
        <>
            <dialog class="comodin-parent" ref={mDialog}>
                <div class="logo-comodin">
                    <img src={image} height="50" width="45" alt={alt} />
                </div>
                <span class="close-btn" aria-label="Cerrar" onClick={() => mDialog.current.close()}>X</span>
                <div class="header">
                    <div class="percent" id="percent-a">{voteA}%</div>
                    <div class="percent" id="percent-b">{voteB}%</div>
                    <div class="percent" id="percent-c">{voteC}%</div>
                    <div class="percent" id="percent-d">{voteD}%</div>
                </div>
                <div class="main">
                    <div class="bar-parent">
                        <div id="public-a" class="bar-content" style={"height:" + voteA + "%;"}>
                        </div>
                    </div>
                    <div class="bar-parent">
                        <div id="public-b" class="bar-content" style={"height:" + voteB + "%;"}>
                        </div>
                    </div>
                    <div class="bar-parent">
                        <div id="public-c" class="bar-content" style={"height:" + voteC + "%;"}>
                        </div>
                    </div>
                    <div class="bar-parent">
                        <div id="public-d" class="bar-content" style={"height:" + voteD + "%;"}>
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <div class="letter">A</div>
                    <div class="letter">B</div>
                    <div class="letter">C</div>
                    <div class="letter">D</div>
                </div>
                <button class="survey-btn" title="Encuestar al público">ENCUESTAR</button>
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
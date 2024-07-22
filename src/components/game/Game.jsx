import { useState, useEffect } from "preact/hooks";
import { CameraComponent } from "@components/game/videocamera/Videocamera.jsx";
import { NavbarComponent } from "@components/shared/navbar/Navbar";
import { ComodinContactComponent } from "@components/game/comodines/contact/ComodinContact";
import { ComodinPublicComponent } from "@components/game/comodines/public/ComodinPublic";
import { PresenterComponent } from "@components/game/Presenter/Presenter.jsx";
import { QuizComponent } from "./quiz/Quiz";
import Gameplay from "@entities/Gameplay";
import Presenter from "@entities/Presenter";
import "./game.css"

export const GameComponent = () => {
    const [loading, setLoading] = useState(false);

    const [question, setQuestion] = useState();
    const [username, setUsername] = useState("Kevin");
    const [options, setOptions] = useState();
    const [correct, setCorrect] = useState();
    // when question changeupdate question and options and correct
    const [questionId, setQuestionId] = useState(1);

    const [camera, setCamera] = useState();
    useEffect(() => {
        setQuestionId(Gameplay.getQuestionId())
        setQuestion(Gameplay.getQuestion())
        //  setCorrect()
        setOptions(Gameplay.getOptions())
        setCorrect(Gameplay.getCorrectId())
        setUsername(Gameplay.getUsername())
        setCamera(Gameplay.isCamera())
        document.body.style.background = Gameplay.isGreenScreen() ? '#00ff00' : '';
    }, []);






    return (
        <>
            <NavbarComponent>
                <div style={{ display: "flex", gap: "10px" }}>
                    <ComodinContactComponent question={question} options={options} />
                    <ComodinPublicComponent questionId={questionId} correct={correct} />
                </div>
            </NavbarComponent>

            <CameraComponent useCamera={camera} className="element2" />
            <div class="btn-presentador">
                <button id="btn-next" disabled={loading} onClick={() => {
                }} title="Ir a la siguiente pregunta">
                    <img
                        id="img-next"
                        src="./next.png"
                        height="30"
                        width="30"
                        alt="Siguiente"
                    />
                </button>
            </div>
            <PresenterComponent typePresenter="comodin" />
            {
                options && <QuizComponent idQuestion={questionId + 1} question={question} options={options} />
            }

        </>);

}
import { useState, useEffect } from "preact/hooks";
import { CameraComponent } from "@components/game/videocamera/Videocamera.jsx";
import { NavbarComponent } from "@components/shared/navbar/Navbar";
import { ComodinContactComponent } from "@components/game/comodines/contact/ComodinContact";
import { ComodinPublicComponent } from "@components/game/comodines/public/ComodinPublic";
import { PresenterComponent } from "@components/game/Presenter/Presenter.jsx";
import Gameplay from "@entities/Gameplay";
import "./game.css"
import Settings from "@entities/Settings";
import { enumPresenter as enumP } from "@enum/enumPresenter";


export const GameComponent = () => {
    const [inGame, setInGame] = useState(true);
    const [typePresenter, setTypePresenter] = useState("presentation");
    const [question, setQuestion] = useState("");
    const [endGame, setEndGame] = useState(false);
    const [username, setUsername] = useState();
    const [options, setOptions] = useState(["", "", "", ""]);
    const [correct, setCorrect] = useState();
    const [questionId, setQuestionId] = useState(1);
    const [camera, setCamera] = useState();

    useEffect(() => {
        // if not exist, set default
        // Gameplay.setDefaultGamePlay(username);
        setUsername(Gameplay.getUsername())
        setQuestionId(Gameplay.getQuestionId())
        setQuestion(Gameplay.getQuestion())
        setOptions(Gameplay.getOptions())
        setCorrect(Gameplay.getCorrectId())
        setCamera(Settings.isCamera())
        document.body.style.background = Settings.isGreenScreen() ? '#00ff00' : '';
    }, []);

    const checkAnswer = (e) => {
        if (inGame) {
            const isCorrect = Gameplay.checkQuestion(parseInt(e.target.value), correct)
            if (isCorrect) {
                setTypePresenter(enumP.correct);
                console.log();
                e.target.parentElement.style.backgroundColor = "#019029" //green
            } else {
                setTypePresenter(enumP.incorrect);
                setEndGame(true);
                e.target.parentElement.style.backgroundColor = "#900101" //red
            }
            setInGame(false);
        }
    };

    const resetAnswerColors = () => {
        const answerElements = document.querySelectorAll('.answer-quiz');
        answerElements.forEach(el => {
            el.style.backgroundColor = ""; // Reset to default
        });
    };

    const nextQuestion = () => {
        resetAnswerColors();
        const isNextAvailable = Gameplay.isNextQuestion();
        if (isNextAvailable) {
            setTypePresenter(enumP.comodin);
            setQuestionId(Gameplay.getQuestionId())
            setQuestion(Gameplay.getQuestion())
            //  setCorrect()
            setOptions(Gameplay.getOptions())
            setCorrect(Gameplay.getCorrectId());
            setInGame(true);
        } else {
            setTypePresenter(enumP.winner);
            setEndGame(true);
        }
    }

    const resetQuestion = () => {
        resetAnswerColors();
        setTypePresenter(enumP.presentation);
        setQuestionId(Gameplay.getQuestionId())
        setTypePresenter(enumP.comodin);
        setQuestionId(Gameplay.getQuestionId())
        setQuestion(Gameplay.getQuestion())
        setOptions(Gameplay.getOptions())
        setCorrect(Gameplay.getCorrectId());
        setEndGame(false);
        setInGame(true);

    }

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
                {!endGame && <button disabled={inGame} className={`${!inGame ? "enabled-btn" : "disabled-btn"}`} onClick={nextQuestion} title="Ir a la siguiente pregunta">
                    <img
                        src="./next.png"
                        height="30"
                        width="30"
                        alt="Siguiente"
                    />
                </button>}

                {endGame && <button disabled={inGame} className={`${!inGame ? "enabled-btn" : "disabled-btn"}`} onClick={resetQuestion} title="Volver a empezar">
                    <img
                        src="./retry.png"
                        height="30"
                        width="30"
                        alt="Reintentar"
                    />
                </button>}

            </div>
            {username && <PresenterComponent typePresenter={typePresenter} username={username} />}

            <div id="quiz-and-options">
                <div id="question">{questionId + 1}. {question}</div>
                <div class="answer-list">
                    <div className={`option-quiz answer-quiz default-answer ${inGame ? "mark-answer" : ""}`} onChange={checkAnswer}>
                        <input id="quiz-0" name="quiz-element" type="radio" value={0} />
                        <label class="answer" for="quiz-0"
                        ><span class="suboption-quiz">A</span>
                            <span class="text-answer">{options[0]}</span>
                        </label>
                    </div>
                    <div className={`option-quiz answer-quiz default-answer ${inGame ? "mark-answer" : ""}`} onChange={checkAnswer}>
                        <input id="quiz-1" name="quiz-element" type="radio" value={1} />
                        <label class="answer" for="quiz-1"
                        ><span class="suboption-quiz">B</span>
                            <span class="text-answer">{options[1]}</span>
                        </label>
                    </div>
                    <div className={`option-quiz answer-quiz default-answer ${inGame ? "mark-answer" : ""}`} onChange={checkAnswer}>
                        <input id="quiz-2" name="quiz-element" type="radio" value={2} />
                        <label class="answer" for="quiz-2"
                        ><span class="suboption-quiz">C</span>
                            <span class="text-answer">{options[2]}</span>
                        </label>
                    </div>
                    <div className={`option-quiz answer-quiz default-answer ${inGame ? "mark-answer" : ""}`} onChange={checkAnswer}>
                        <input id="quiz-3" name="quiz-element" disabled={!inGame} type="radio" value={3} />
                        <label class="answer" for="quiz-3"
                        ><span class="suboption-quiz">D</span>
                            <span class="text-answer">{options[3]}</span>
                        </label>
                    </div>
                </div>
            </div>

        </>);

}
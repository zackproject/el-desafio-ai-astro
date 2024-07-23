import { useState } from "preact/hooks";
import { emptyQuiz } from "@utils/data/questions";
import Creator from "@entities/Creator";
import "./creativeMode.css";


export function CreativeMode() {
    const [data, setData] = useState(emptyQuiz);
    const [responseSave, setResponseSave] = useState("");
    const [theme, setTheme] = useState("Segunda Guerra Mundial");
    const [responseCreative, setResponseCreative] = useState(null);
    const [loading, setLoading] = useState(false);

    const submitForm = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        saveForm(data, formData);
        setResponseSave(Creator.getMessageSave())
        event.target.reset();
        setData(emptyQuiz);
    };



    const saveForm = (data, formData) => {
        let qList = []
        let sList = [];
        for (let i = 0; i < data.length; i++) {
            // Question
            const questionText = formData.get(`question-${i}`);
            // Options
            const optionsText = [
                formData.get(`a-option-${i}`),
                formData.get(`b-option-${i}`),
                formData.get(`c-option-${i}`),
                formData.get(`d-option-${i}`)
            ];
            // Solution
            qList.push({ question: questionText, options: optionsText })
            sList.push(parseInt(formData.get(`solution-${i}`)));
        }
        const formQuiz = { idActualQuestion: 0, questionsList: qList, solutionsList: sList, username: "Invitado" };
        Creator.setQuizLocalStorage(JSON.stringify(formQuiz));

    }

    const fetchCreative = async (event) => {
        event.preventDefault();
        setLoading(true);
        setResponseCreative(Creator.getLoading());
        try {
            const response = await Creator.getSuggestQuiz(theme);
            const result = JSON.parse(response);
            setData(result);
            setResponseCreative(Creator.getSuccess());
        } catch (error) {
            setResponseCreative(Creator.getError(error));
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <h2>Modificar El desafío</h2>
            <h3>Usar A.I</h3>
            <p>Escribe un temática y te sugeriré las preguntas. La revision final la harás tú.</p>
            <label id="send-theme"> Temática </label>
            <input
                htmlFor="send-theme"
                type="text"
                placeholder={theme}
                onChange={(e) => setTheme(e.target.value)}
            />
            <button onClick={fetchCreative} className="btn-login" disabled={loading}>
                Buscar
            </button>
            {responseCreative}
            <h3>Preguntas de El desafío</h3>
            <p>Rellena los campos de las 10 preguntas y sus 4 opciones</p>
            <form id="form-quiz" onSubmit={submitForm}>
                {data.map((question, i) => (
                    <fieldset key={question.id} className="question">
                        <legend>
                            <label htmlFor={`question-${i}`}>{`Pregunta ${i + 1}`}</label>
                        </legend>
                        <input
                            id={`question-${i}`}
                            name={`question-${i}`}
                            type="text"
                            placeholder="Pregunta"
                            maxLength="80"
                            required
                            defaultValue={question.question}
                        />
                        <p>Opciones</p>
                        <label htmlFor={`a-option-${i}`}>{"A)"}</label>
                        <input
                            id={`a-option-${i}`}
                            name={`a-option-${i}`}
                            type="text"
                            placeholder={`Respuesta 1`}
                            maxLength="25"
                            required
                            defaultValue={question.options[0]}
                        />
                        <label htmlFor={`b-option-${i}`}>{"B)"}</label>
                        <input
                            id={`b-option-${i}`}
                            name={`b-option-${i}`}
                            type="text"
                            placeholder={`Respuesta 2`}
                            maxLength="25"
                            required
                            defaultValue={question.options[1]}
                        />
                        <label htmlFor={`c-option-${i}`}>{"C)"}</label>
                        <input
                            id={`c-option-${i}`}
                            name={`c-option-${i}`}
                            type="text"
                            placeholder={`Respuesta 3`}
                            maxLength="25"
                            required
                            defaultValue={question.options[2]}
                        />
                        <label htmlFor={`d-option-${i}`}>{"D)"}</label>
                        <input
                            id={`d-option-${i}`}
                            name={`d-option-${i}`}
                            type="text"
                            placeholder={`Respuesta 4`}
                            maxLength="25"
                            required
                            defaultValue={question.options[3]}
                        />
                        <p>Marca la opción correcta:</p>
                        <div className="solution-quiz">
                            <input
                                type="radio"
                                id={`a-solution-${i}`}
                                name={`solution-${i}`}
                                value="0"
                                required
                            />
                            <label htmlFor={`a-solution-${i}`}>Opción A</label>
                            <input
                                type="radio"
                                id={`b-solution-${i}`}
                                name={`solution-${i}`}
                                value="1"
                                required
                            />
                            <label htmlFor={`b-solution-${i}`}>Opción B</label>
                            <input
                                type="radio"
                                id={`c-solution-${i}`}
                                name={`solution-${i}`}
                                value="2"
                                required
                            />

                            <label htmlFor={`c-solution-${i}`}>Opción C</label>
                            <input
                                type="radio"
                                id={`d-solution-${i}`}
                                name={`solution-${i}`}
                                value="3"
                                required
                            />
                            <label htmlFor={`d-solution-${i}`}>Opción D</label>
                        </div>
                    </fieldset>
                ))}
                <input type="submit" value="Enviar y guardar" />
            </form>
            {responseSave}
        </>
    );
}
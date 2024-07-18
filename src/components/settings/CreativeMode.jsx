import { useState } from "preact/hooks";
import "./creativeMode.css";
import { emptyQuiz } from "@utils/data/questions";
import Creator from "@entities/Creator";

export function CreativeMode() {
    const [data, setData] = useState(emptyQuiz);
    const [theme, setTheme] = useState("Segunda Guerra Mundial");
    const [responseCreative, setResponseCreative] = useState(null);
    const [loading, setLoading] = useState(false);

    // Función para manejar el envío del formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target)

        // Aquí puedes manejar la lógica para enviar las preguntas
        // Por ejemplo, podrías obtener los valores del formulario y procesarlos
    };


    const fetchCreative = async (event) => {
        event.preventDefault();
        setLoading(true);
        setResponseCreative(Creator.getLoading());
        try {
            const response = await Creator.getSuggestQuiz(theme);
            const result = JSON.parse(response)
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

            <h2>Crear desafío</h2>
            <h3>Usar I.A</h3>
            <p>Escribe un tematica y te sugeriré las preguntas. La revision final la harás tú.</p>

            <label id="send-theme" > Tematica </label>
            <input htmlFor="send-theme"
                type="text"
                placeholder={theme}
                onChange={(e) => setTheme(e.target.value)}
            />
            <button onClick={fetchCreative} className="btn-login" disabled={loading}>
                Buscar
            </button> {responseCreative}
            <h3>Preguntas de El desafio</h3>
            <p>Rellena los campos de las 10 preguntas y sus 4 opciones</p>
            <form id="form-quiz" onSubmit={handleSubmit}>
                {data.map((question, index) => (
                    <fieldset key={question.id} className="question">
                        <legend>
                            <label htmlFor={`question-${index + 1}`}>{`Pregunta ${index + 1}`}</label>
                        </legend>
                        <input
                            id={`question-${index + 1}`}
                            name={`question-${index + 1}`}
                            type="text"
                            placeholder="Pregunta"
                            maxLength="80"
                            required
                            value={question.question}
                        />
                        <label htmlFor={`answers-${index + 1}`}>Opciones</label>
                        {question.options.map((option, optIndex) => (
                            <input
                                key={`answer-${index + 1}-${optIndex}`}
                                name={`answers-${index + 1}`}
                                type="text"
                                placeholder={`Respuesta ${optIndex + 1}`}
                                maxLength="25"
                                required
                                value={option}
                            />
                        ))}
                    </fieldset>
                ))}
                <input type="submit" value="Enviar y revisar" />
            </form>
        </>
    );
}

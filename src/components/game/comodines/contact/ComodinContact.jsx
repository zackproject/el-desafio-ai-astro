import { useRef, useState } from "preact/hooks";
import "../comodin.css";
import "./comodinContact.css";
import { systemAi } from "@utils/data/prompts";
import { aiChatResponse } from "@utils/ai";
import { getQuestionQuiz } from "@utils/data/questions";
import { formatSeconds } from "@utils/timer";

export function ComodinContacto() {
    const mDialogContact = useRef(null);
    const mDialogCall = useRef(null);
    const [numPerson, setNumPerson] = useState(0);
    const [data, setResponseCall] = useState(null);
    const [loading, setLoading] = useState(false);
    const [counter, setCounter] = useState(0); // Estado para el contador
    // get selected person in call
    const handleSelected = (e) => setNumPerson(parseInt(e.target.value));

    const fetchData = async () => {
        // counter call
        setCounter(0);
        setLoading(true);
        try {
            const response = await aiChatResponse(getQuestionQuiz(), systemAi.calls[numPerson].behaviour);
            setResponseCall(response);
            const interval = setInterval(() => {
                setCounter((prevCounter) => prevCounter + 1);
                if (counter === 30) {
                    clearInterval(interval);
                }
            }, 1000);
        } catch {
            setResponseCall("Nadie responde al teléfono");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <dialog class="comodin-parent" ref={mDialogCall}>
                <div class="logo-comodin">
                    <img src="./phone.png" height="50" width="45" alt="Teléfono" />
                </div>
                <div class="comodin-items">
                    <div id="name-call">{systemAi.calls[numPerson].name}</div>
                    <div id="text-call" title="Mensaje de llamada">
                        {loading ? 'Llamando...' : data}
                    </div>
                    <div id="time-call" title="Tiempo de llamada">{formatSeconds(counter)}</div>
                    <div class="call-close">
                        <button title="Finalizar llamada" onClick={() => mDialogCall.current.close()}>
                            <img src="./phone_close.png" width="50" height="50" alt="Colgar llamada" />
                        </button>
                    </div>
                </div>
            </dialog>
            <dialog class="comodin-parent" ref={mDialogContact}>
                <div class="logo-comodin">
                    <img src="./contact.png" height="50" width="45" alt="Contacto" />
                </div>
                <span class="close-btn" aria-label="Cerrar" onClick={() => mDialogContact.current.close()}>X</span>
                <div class="comodin-items">
                    <select value={numPerson} onChange={handleSelected} size={systemAi.calls.length}>
                        {systemAi.calls.map((e, i) => (
                            <option key={i} value={i}>{e.name}</option>
                        ))}
                    </select>
                    <div class="contact-call">
                        <button class="comodin" title="Hacer llamada" onClick={() => {
                            mDialogContact.current.close();
                            mDialogCall.current.showModal();
                            fetchData();
                        }}>LLAMAR</button>
                    </div>
                </div>
            </dialog>
            <button class="icon-comodin" title="Usar comodin público" onClick={() => mDialogContact.current.showModal()}>
                <img src="./phone_logo.png" height="30" width="30" alt="Telefono" />
            </button>
        </>
    );
}
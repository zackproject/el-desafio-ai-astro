import { useRef, useState } from "preact/hooks";
import "../comodin.css";
import "./comodinContact.css";
import { formatSeconds } from "@utils/timer";
import Call from "@entities/Call"

export const ComodinContactComponent = ({ question, options }) => {
    const mDialogContact = useRef(null);
    const mDialogCall = useRef(null);
    const intervalRef = useRef(null); // useRef to store interval ID
    const [numPerson, setNumPerson] = useState(0);
    const [data, setResponseCall] = useState(null);
    const [loading, setLoading] = useState(false);
    const [counter, setCounter] = useState(0); // Estado para el contador
    // get selected person in call
    const handleSelected = (e) => setNumPerson(parseInt(e.target.value));

    const buildQuestion = (mQuestion, mOptions) => {
        return `${mQuestion} A) ${mOptions[0]} B) ${mOptions[1]} C) ${mOptions[2]} D) ${mOptions[3]} `
    }


    const startCounter = () => {
        setCounter(0); // Reset counter
        intervalRef.current = setInterval(() => {
            setCounter((prevCounter) => {
                if (prevCounter >= 30) {
                    clearInterval(intervalRef.current);
                    return prevCounter;
                }
                return prevCounter + 1;
            });
        }, 1000);
    };

    const fetchData = async () => {
        setCounter(0);
        setLoading(true);
        try {
            clearInterval(intervalRef.current);
            const response = await Call.getCallResponse(buildQuestion(question, options), numPerson)
            setResponseCall(response);
            startCounter(); 
        } catch (error) {
            setResponseCall(Call.getNoCallResponse(error));
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
                    <div id="name-call">{Call.getName(numPerson)}</div>
                    <div id="text-call">
                        {loading ? Call.usePhone() : data}
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
                    <select value={numPerson} onChange={handleSelected} size={Call.getContactsLength()}>
                        {Call.getContacts().map((e, i) => (
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
import { useRef, useState } from "preact/hooks";
import "../comodin.css"
import "./comodinContact.css"
import { systemAi } from "@utils/prompts";
export function ComodinContacto(props) {
    const mDialogContact = useRef(null);
    const mDialogCall = useRef(null);
    const { logo, image, alt } = props;
    const [value, setValue] = useState("");

    const handleSelected = (e) => {
        console.log(e.target);
        setValue(e.target.value);
    };
    return (
        <>
            <dialog class="comodin-parent" ref={mDialogCall}>
                <div class="logo-comodin">
                    <img src={image} height="50" width="45" alt={alt} />
                </div>
                <div class="comodin-items">
                    <div id="name-call">{value}</div>
                    <div id="text-call" title="Mensaje de llamada">
                    </div>
                    <div id="time-call" title="Tiempo de llamada">{"time"}</div>
                    <div class="call-close">
                        <button title="Finalizar llamada" onClick={() => mDialogCall.current.close()}>
                            <img
                                src="./phone_close.png"
                                width="50"
                                height="50"
                                alt="Colgar llamada"
                            />
                        </button>
                    </div>
                </div>
            </dialog>
            <dialog class="comodin-parent" ref={mDialogContact}>
                <div class="logo-comodin">
                    <img src={image} height="50" width="45" alt={alt} />
                </div>
                <span class="close-btn" aria-label="Cerrar" onClick={() => mDialogContact.current.close()}>X</span>
                <div class="comodin-items">
                    <select value={value} onChange={handleSelected} size={Object.keys(systemAi.calls).length}>
                        {Object.keys(systemAi.calls).map((data, i) => (
                            <option key={i} value={data}>
                                {systemAi.calls[data].name}
                            </option>
                        ))}

                    </select>
                    <div class="contact-call">
                        <button class="comodin" title="Hacer llamada" onClick={() => {
                            mDialogContact.current.close();
                            mDialogCall.current.showModal();
                        }}>LLAMAR</button>
                    </div>
                </div>
            </dialog >


            <button class="icon-comodin" title="Usar comodin público" onClick={() => {
                mDialogContact.current.showModal()
            }} >
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
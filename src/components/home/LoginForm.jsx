import Gameplay from "@entities/Gameplay";
import { useEffect, useState } from "preact/hooks";


export function LoginForm({ children }) {
    const [username, setUsername] = useState();
    const [apiKey, setApiKey] = useState();
    const [camera, setCamera] = useState(false);
    const [greenscreen, setGreenscreen] = useState(false);
    useEffect(() => {
        document.body.style.background = greenscreen ? '#00ff00' : '';
    }, [greenscreen]);


    const handleForm = () => {
        Gameplay.setDefaultGamePlay(username, camera, greenscreen);
    }

    // <button id="resumeGame" title="Recuperar partida anterior">RECUPERAR PARTIDA</button >
    return (
        <>
            <label for="inputName" class="title-input">Nick</label>
            <input
                maxlength="12"
                class="text-input"
                placeholder="Escribe tu nombre"
                autocomplete="off"
                type="text"
                id="inputName"
                name="name" onChange={(e) => setUsername(e.target.value)}
            />

            <label for="inputKey" class="title-input">Groq API </label>
            <input
                maxlength="12"
                class="text-input"
                placeholder="https://console.groq.com/keys"
                autocomplete="off"
                type="password"
                id="inputKey"
                name="name" onChange={(e) => setApiKey(e.target.value)}
            />
            <label for="categoriaViewList" class="title-input">Categoria</label>


            <button class="start-btn" onClick={handleForm}>
                COMENZAR
            </button>


            {children  /*<slot/>*/}
            <div class="label-settings">
                <input
                    type="checkbox"
                    id="useCamera"
                    name="useCamera"
                    value="camera"
                    onChange={(e) => setCamera(e.target.checked)}
                />
                <label for="useCamera">Videocamara</label>
            </div>
            <div class="label-settings">
                <input
                    type="checkbox"
                    id="useGrenscreen"
                    name="greenscreen"
                    value="green"
                    onChange={(e) => setGreenscreen(e.target.checked)}
                />
                <label for="useGrenscreen">Pantalla verde</label>
            </div>
        </>)
}
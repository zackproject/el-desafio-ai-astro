import Gameplay from "@entities/Gameplay";
import { useEffect, useState } from "preact/hooks";
import { APIKEY } from "config";
import Settings from "@entities/Settings";

export function LoginForm({ children }) {
    const [saved, setSaved] = useState(false);
    const [username, setUsername] = useState();
    const [apiKey, setApiKey] = useState("");
    const [camera, setCamera] = useState(false);
    const [greenscreen, setGreenscreen] = useState(false);
    useEffect(() => {
        document.body.style.background = greenscreen ? '#00ff00' : '';
        if (localStorage.getItem(APIKEY) !== null) {
            setApiKey(localStorage.getItem(APIKEY));
        }
    }, [greenscreen]);


    const handleForm = () => {
        // Gameplay.setDefaultGamePlay(username);
        Settings.setSettings(camera, greenscreen);
        localStorage.setItem(APIKEY, apiKey);
        setSaved(true);
    }

    // <button id="resumeGame" title="Recuperar partida anterior">RECUPERAR PARTIDA</button >
    return (
        <>
            {
                !saved && <>
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
                        class="text-input"
                        placeholder="https://console.groq.com/keys"
                        autocomplete="off"
                        type="password"
                        id="inputKey"
                        value={apiKey}
                        name="key" onChange={(e) => setApiKey(e.target.value)}
                    />

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
                    <button class="start-btn" onClick={handleForm}>
                        GUARDAR
                    </button>
                </>
            }

            {saved &&
                <a href="/play">EMPEZAR</a>
            }
            {
                !saved && children  /*<slot/>*/
            }

        </>)
}
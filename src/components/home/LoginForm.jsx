import { quizList, tecnoQuiz } from "@utils/data/questions";
import { getQuizLocalStorage, setSettingsLocalStorage } from "@utils/localStorage";
import { useEffect, useState } from "preact/hooks";


export function LoginForm({ children }) {
    const [subCategory, setSubCategory] = useState();
    const [username, setUsername] = useState();
    const [category, setCategory] = useState();
    const [camera, setCamera] = useState(false);
    const [greenscreen, setGreenscreen] = useState(false);
    useEffect(() => {
        document.body.style.background = greenscreen ? '#00ff00' : '';
    }, [category]);


    const handleSubCategory = () => {
        if (category === "0") {
            subCategory = {name:"Tecnologia",
                quizQuestion:tecnoQuiz,
                solutionList:[0,0,0,0,0,0,0,0,0,0]

            };
        }
        if (category === "1") {
            subCategory = JSON.parse(getQuizLocalStorage());
        }
    }

    const handleForm = () => {
        setSettingsLocalStorage(username, camera, greenscreen, );
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
            <label for="categoriaViewList" class="title-input">Categoria</label>
            <select class="select-opt" id="categoriaViewList" onChange={(e) => setCategory(e.target.value)}>
                <option value="0">Por defecto</option>
                <option value="1">Creado</option>
            </select>

            <select class="select-opt" id="categoriaViewList">
                {
                    category === "0" && quizList.map((e, i) => <option key={i} value={"default-" + e.id}>{e.title}</option>)
                }
                {
                    category === "1" && <option value={"e.id"}>{"e.title"}</option>
                }
            </select>

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
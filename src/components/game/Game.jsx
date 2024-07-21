import Videocamera from "@components/game/videocamera/Videocamera.jsx";
import { useState, useEffect } from "preact/hooks";
export function Game() {
    const [question, setQuestion] = useState();
    const [options, setOptions] = useState();

    const [camera, setCamera] = useState();
    useEffect(() => {
        const local = JSON.parse(localStorage.getItem("settings-el-desafio"));
        console.log("aaaaa", local.useCamera);

        document.body.style.background = local.useGreen ? '#00ff00' : '';

        setCamera(local.useCamera)
        setQuestion(local.quiz[local.idActualQuestion].question)
        setOptions(local.quiz[local.idActualQuestion].options)

    },[]);
    return (
        <>
            <Videocamera useCamera={camera} className="element2" />

            
            {question}
            <ul>
                {
                    options && 
                    options.map((e, i) => (
                        <li key={i} value={i}>{e}</li>
                    ))
                }

            </ul>


        </>);

}
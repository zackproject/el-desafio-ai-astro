import type { iGameplay } from "@interfaces/iGameplay";

export const quizDefault: iGameplay = {
    idActualQuestion: 0,
    username: "Invitado",
    questionsList: [
        {
            id: 1,
            question: "¿En que se quiere convertir Luffy?",
            options: [
                "En el rey de los piratas",
                "En el rey de la marina",
                "En el rey de Impel Down",
                "En el rey de España"
            ]
        },
        {
            id: 2,
            question: "¿Quién es el espadachín de la tripulación de los Mugiwaras?",
            options: [
                "Sanji",
                "Zoro",
                "Tony Tony Chopper",
                "Usopp"
            ]
        },
        {
            id: 3,
            question: "¿Cuál es la debilidad de los usuarios de frutas del demonio?",
            options: [
                "No poder hablar",
                "No poder reproducirse",
                "No tienen debilidad",
                "No poder nadar"
            ]
        },
        {
            id: 4,
            question: "¿Cual es el nombre correcto de Luffy?",
            options: [
                "Monkey D. Luffy",
                "Luffy The Monkey",
                "Monkey L. Ruffy",
                "Gomu D. Luffy"
            ]
        },
        {
            id: 5,
            question: "¿Como se llama el primer barco de los Mugiwaras?",
            options: [
                "Thousand Sunny",
                "Going Merry",
                "Moby Dick",
                "Red Force"
            ]
        },
        {
            id: 6,
            question: "¿Cómo se llama la fruta diabolica que se comió Portgas D. Ace ?",
            options: [
                "Fruta Mera Mera",
                "Fruta Opai Opai",
                "Fruta Fire Fire",
                "Fruta Magu Magu"
            ]
        },
        {
            id: 7,
            question: "¿Que tipo de fruta del diablo es la Mera Mera?",
            options: [
                "Logia",
                "Paramecia",
                "Zoan",
                "Ibuprofeno"
            ]
        },
        {
            id: 8,
            question: "¿Cómo se llama el arco de time skip luego de la guerra de Marineford?",
            options: [
                "2D3Y",
                "3D2Y",
                "2D2Y",
                "3D3Y"
            ]
        },
        {
            id: 9,
            question: "¿Cómo se llama el actor que hace de Luffy en el Live Action?",
            options: [
                "Morgan Davies",
                "Vincent Regan",
                "Iñaki Godoy",
                "Taz Skylar"
            ]
        },
        {
            id: 10,
            question: "¿Cómo se llama la última isla de One Piece?",
            options: [
                "Sabaody",
                "Mary Geoise",
                "Raftel",
                "Ohara"
            ]
        }
    ],
    solutionsList: [
        0,
        1,
        3,
        0,
        1,
        0,
        0,
        1,
        2,
        2
    ]
}
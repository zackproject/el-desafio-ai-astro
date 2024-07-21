import { Settings } from "@entities/Settings";
import type { ISettings } from "@interfaces/ISettings";
import { tecnoQuiz } from "@utils/data/questions";

const EL_DESAFIO_CREATOR = "el-desafio-creator";
const SETTINGS_ELDESAFIO = "settings-el-desafio";


export function setQuizLocalStorage(value: string) {
    localStorage.setItem(EL_DESAFIO_CREATOR, value);
}



export function getQuizLocalStorage() {
    localStorage.getItem(EL_DESAFIO_CREATOR);
}

export function setSettingsLocalStorage(username: string, useCamera: boolean, useGreen: boolean) {
    const mSettings = new Settings(username, useCamera, useGreen, tecnoQuiz, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

   localStorage.setItem(SETTINGS_ELDESAFIO, JSON.stringify(mSettings));

}

export function getSettingsLocalStorage() {
    localStorage.getItem(JSON.parse(SETTINGS_ELDESAFIO));

}
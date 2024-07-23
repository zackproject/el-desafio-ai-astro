import type { ISettings } from "@interfaces/ISettings";

const SETTINGS_ELDESAFIO = "settings-el-desafio";
const local = window.localStorage.getItem(SETTINGS_ELDESAFIO) as string;
const obj: ISettings = JSON.parse(local);

class Settings {

    static setSettings(useCamera: boolean = false, useGreen: boolean = false) {
        let mObj = obj;
        mObj = {
            useCamera: useCamera,
            useGreen: useGreen
        }
        window.localStorage.setItem(SETTINGS_ELDESAFIO, JSON.stringify(mObj));
    }

    static getSettings() {
        let mObj = obj;
        if (mObj !== null) { return mObj; }
        this.setSettings();
        let nObj: ISettings = { useCamera: false, useGreen: false }
        return nObj;
    }

    static isGreenScreen() {
        let mObj = obj;
        if (mObj === null) {
            this.setSettings();
            return false;
        }
        return mObj.useGreen;
    }

    static isCamera() {
        let mObj = obj;
        if (mObj === null) {
            this.setSettings();
            return false;
        }
        return mObj.useCamera;
    }
}

export default Settings;



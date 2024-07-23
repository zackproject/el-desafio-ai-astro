const SETTINGS_ELDESAFIO = "settings-el-desafio";
class Settings {
    useCamera: boolean;
    useGreen: boolean;

    constructor(
        useCamera: boolean,
        useGreen: boolean,

    ) {
        this.useCamera = useCamera;
        this.useGreen = useGreen;
    }

    static setSettings(useCamera: boolean, useGreen: boolean) {
        const mSettings = new Settings(
            useCamera,
            useGreen,
        );
        window.localStorage.setItem(SETTINGS_ELDESAFIO, JSON.stringify(mSettings));
    }

    static getSettings() {
        const value = window.localStorage.getItem(SETTINGS_ELDESAFIO) as string;
        return JSON.parse(value);
    }

    static isGreenScreen(){
        const value = window.localStorage.getItem(SETTINGS_ELDESAFIO) as string;
        return JSON.parse(value).useGreen as boolean;
    }

    static isCamera(){
        const value = window.localStorage.getItem(SETTINGS_ELDESAFIO) as string;
        return JSON.parse(value).useCamera as boolean;
    }
}

export default Settings;



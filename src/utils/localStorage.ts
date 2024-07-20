const EL_DESAFIO_CREATOR = "el-desafio-creator";


export function setQuizLocalStorage(value: string) {
    localStorage.setItem(EL_DESAFIO_CREATOR, value);
}


export function getQuizLocalStorage() {
    localStorage.getItem(EL_DESAFIO_CREATOR);
}
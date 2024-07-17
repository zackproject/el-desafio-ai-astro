export function formatSeconds(segundos: number) {
    return segundos < 10 ? "00:0" + segundos : "00:" + segundos;
}
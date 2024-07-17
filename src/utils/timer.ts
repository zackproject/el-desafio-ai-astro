export function formatSeconds(segundos: number) {
    const min = Math.floor(segundos / 60);
    const secRestants = segundos % 60;

    const totalMin = min < 10 ? '0' + min : min.toString();
    const totalSec = secRestants < 10 ? '0' + secRestants : secRestants.toString();

    return totalMin + ':' + totalSec;
}

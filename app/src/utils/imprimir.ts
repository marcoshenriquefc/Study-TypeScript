import { Imprimivel } from "./imprimivel.js";

export function imprimir(...obj: Imprimivel[]) {
    for (const item of obj) {
        console.log(item.paraTexto());
    }
}
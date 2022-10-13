export function imprimir(...obj) {
    for (const item of obj) {
        console.log(item.paraTexto());
    }
}

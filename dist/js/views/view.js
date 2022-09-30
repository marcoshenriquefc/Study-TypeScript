export class View {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    update(mensagem) {
        const template = this.template(mensagem);
        this._elemento.innerHTML = template;
    }
}

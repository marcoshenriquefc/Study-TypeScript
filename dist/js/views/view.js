export class View {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    template(mensagem) {
        throw Error('Classe filha precisa de template');
    }
    update(mensagem) {
        const template = this.template(mensagem);
        this._elemento.innerHTML = template;
    }
}

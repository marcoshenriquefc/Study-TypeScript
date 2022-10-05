export class View {
    constructor(seletor, escapar) {
        this._escapar = false;
        this._elemento = document.querySelector(seletor);
        if (escapar) {
            this._escapar = escapar;
        }
    }
    update(mensagem) {
        let template = this.template(mensagem);
        if (this._escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this._elemento.innerHTML = template;
    }
}

export class View {
    constructor(seletor, escapar) {
        this._escapar = false;
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this._elemento = elemento;
        }
        else {
            throw Error(` o seletor ${seletor} não existe!`);
        }
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

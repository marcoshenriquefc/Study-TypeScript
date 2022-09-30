export abstract class View<T>{

    protected _elemento: HTMLElement;

    constructor(seletor : string){
        this._elemento = document.querySelector(seletor);
    }

    protected abstract template(mensagem: T): string;

    update(mensagem: T): void{
        const template = this.template(mensagem);
        this._elemento.innerHTML = template;
    }
}
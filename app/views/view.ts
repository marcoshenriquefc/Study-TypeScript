export class View<T>{

    protected _elemento: HTMLElement;

    constructor(seletor : string){
        this._elemento = document.querySelector(seletor);
    }

    template(mensagem: T): string{
        throw Error('Classe filha precisa de template');
    }

    update(mensagem: T): void{
        const template = this.template(mensagem);
        this._elemento.innerHTML = template;
    }
}
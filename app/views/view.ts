export abstract class View<T>{

    protected _elemento: HTMLElement;
    private _escapar = false;

    constructor(seletor : string, escapar?: boolean){
        const elemento = document.querySelector(seletor);

        if(elemento){
            this._elemento = elemento as HTMLElement;
        }
        else{
            throw Error(` o seletor ${seletor} não existe!`);
            
        }
        // this._elemento = document.querySelector(seletor);

        if(escapar){
            this._escapar = escapar;
        }
    }

    protected abstract template(mensagem: T): string;


    update(mensagem: T): void{
        let template = this.template(mensagem);
        
        if(this._escapar){
            template = template.replace(/<script>[\s\S]*?<\/script>/, '')
        }

        this._elemento.innerHTML = template;
    }
}
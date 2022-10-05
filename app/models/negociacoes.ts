import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private _negociacoes: Array<Negociacao> = [];

    public adiciona(negociacao: Negociacao){
        this._negociacoes.push(negociacao);
    }

    public lista() : ReadonlyArray<Negociacao>{
        return this._negociacoes;
    }

    
    public static criaDe(dataString: string, quantidadeString:string, valorString:string): Negociacao{
        const exp = /-/g;
        const data = new Date(dataString.replace(exp, ','))
        const quantidade = parseFloat(quantidadeString);
        const valor = parseFloat(valorString)

        return new Negociacao(data, quantidade,valor);
    }
}
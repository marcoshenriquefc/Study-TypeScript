import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private _negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao){
        this._negociacoes.push(negociacao);
    }

    lista() : Array<Negociacao>{
        return this._negociacoes;
    }
}
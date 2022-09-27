import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {
    private _inputData : HTMLInputElement;
    private _inputQuantidade : HTMLInputElement;
    private _inputValor : HTMLInputElement;
    private _negociacoes = new Negociacoes();

    constructor() {
        this._inputData = document.querySelector('#data')
        this._inputQuantidade = document.querySelector('#quantidade')
        this._inputValor = document.querySelector('#valor')
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao();

        this._negociacoes.adiciona(negociacao);
        console.log(this._negociacoes.lista());

        this.limparForm()
    }

    criaNegociacao(): Negociacao{
        const exp = /-/g;
        const data = new Date(this._inputData.value.replace(exp, ','))
        const quantidade = parseFloat(this._inputQuantidade.value);
        const valor = parseFloat(this._inputValor.value)

        return new Negociacao(data, quantidade,valor);
    }

    limparForm(): void{
        this._inputData.value = '';
        this._inputQuantidade.value = '1';
        this._inputValor.value = '0.0';

        this._inputData.focus();
    }
}
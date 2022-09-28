import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacaoView } from "../views/negociacao-view.js";

export class NegociacaoController {
    private _inputData : HTMLInputElement;
    private _inputQuantidade : HTMLInputElement;
    private _inputValor : HTMLInputElement;
    private _negociacoes = new Negociacoes();
    private _negociacaoView = new NegociacaoView('#negociacaos-table');

    constructor() {
        this._inputData = document.querySelector('#data')
        this._inputQuantidade = document.querySelector('#quantidade')
        this._inputValor = document.querySelector('#valor')

        this._negociacaoView.update(this._negociacoes);
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao();
        this.limparForm()

        this._negociacoes.adiciona(negociacao);
        this._negociacaoView.update(this._negociacoes)
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
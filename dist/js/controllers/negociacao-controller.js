import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacaoView } from "../views/negociacao-view.js";
export class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacaoView = new NegociacaoView('#negociacaos-table');
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        this._negociacaoView.update(this._negociacoes);
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.limparForm();
        this._negociacoes.adiciona(negociacao);
        this._negociacaoView.update(this._negociacoes);
    }
    criaNegociacao() {
        const exp = /-/g;
        const data = new Date(this._inputData.value.replace(exp, ','));
        const quantidade = parseFloat(this._inputQuantidade.value);
        const valor = parseFloat(this._inputValor.value);
        return new Negociacao(data, quantidade, valor);
    }
    limparForm() {
        this._inputData.value = '';
        this._inputQuantidade.value = '1';
        this._inputValor.value = '0.0';
        this._inputData.focus();
    }
}

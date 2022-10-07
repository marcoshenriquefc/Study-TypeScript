import { DiasDaSemana } from "../enums/dia-da-semana.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacaoView } from "../views/negociacao-view.js";
export class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacaoView = new NegociacaoView('#negociacaos-table', true);
        this._mensagemView = new MensagemView('#mensagemView', true);
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        this._negociacaoView.update(this._negociacoes);
    }
    adiciona() {
        const negociacao = Negociacoes.criaDe(this._inputData.value, this._inputQuantidade.value, this._inputValor.value);
        this._negociacoes.adiciona(negociacao);
        this._negociacaoView.update(this._negociacoes);
        this._mensagemView.update('Adicionado com sucesso');
        this.limparForm();
    }
    limparForm() {
        this._inputData.value = '';
        this._inputQuantidade.value = '1';
        this._inputValor.value = '0.0';
        this._inputData.focus();
    }
    DiaUtil(data) {
        return data.getDate() > DiasDaSemana.domingo && data.getDate() < DiasDaSemana.sabado;
    }
}

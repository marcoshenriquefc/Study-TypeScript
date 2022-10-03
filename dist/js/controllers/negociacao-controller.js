import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacaoView } from "../views/negociacao-view.js";
export class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacaoView = new NegociacaoView('#negociacaos-table');
        this._mensagemView = new MensagemView('#mensagemView');
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        this._negociacaoView.update(this._negociacoes);
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        if (!this.diaUtil(negociacao.data)) {
            this._mensagemView.update('Negociações apenas em dias úteis');
            return;
        }
        this._negociacoes.adiciona(negociacao);
        this.limparForm();
        this.atualizaView();
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
    atualizaView() {
        this._negociacaoView.update(this._negociacoes);
        this._mensagemView.update('Adicionado com sucesso');
    }
    diaUtil(data) {
        return data.getDay() > DiasDaSemana.domingo && data.getDay() < DiasDaSemana.sabado;
    }
}

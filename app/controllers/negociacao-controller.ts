import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacaoView } from "../views/negociacao-view.js";

export class NegociacaoController {
    private _inputData : HTMLInputElement;
    private _inputQuantidade : HTMLInputElement;
    private _inputValor : HTMLInputElement;
    private _negociacoes = new Negociacoes();
    private _negociacaoView = new NegociacaoView('#negociacaos-table');
    private _mensagemView = new MensagemView('#mensagemView')

    constructor() {
        this._inputData = document.querySelector('#data')
        this._inputQuantidade = document.querySelector('#quantidade')
        this._inputValor = document.querySelector('#valor')

        this._negociacaoView.update(this._negociacoes);
    }

    public adiciona(): void {
        const negociacao = this.criaNegociacao();

        if(!this.diaUtil(negociacao.data)){
            this._mensagemView.update('Negociações apenas em dias úteis')
            return
        }

        this._negociacoes.adiciona(negociacao);
        this.limparForm();
        this.atualizaView();
    }

    private criaNegociacao(): Negociacao{
        const exp = /-/g;
        const data = new Date(this._inputData.value.replace(exp, ','))
        const quantidade = parseFloat(this._inputQuantidade.value);
        const valor = parseFloat(this._inputValor.value)

        return new Negociacao(data, quantidade,valor);
    }

    private limparForm(): void{
        this._inputData.value = '';
        this._inputQuantidade.value = '1';
        this._inputValor.value = '0.0';

        this._inputData.focus();
    }

    private atualizaView(): void{
        this._negociacaoView.update(this._negociacoes);
        this._mensagemView.update('Adicionado com sucesso');
    }

    private diaUtil(data: Date){
        return data.getDay() > DiasDaSemana.domingo && data.getDay() < DiasDaSemana.sabado;
    }
}
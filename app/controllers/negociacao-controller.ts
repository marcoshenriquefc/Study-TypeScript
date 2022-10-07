import { DiasDaSemana } from "../enums/dia-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacaoView } from "../views/negociacao-view.js";

export class NegociacaoController {
    private _inputData : HTMLInputElement;
    private _inputQuantidade : HTMLInputElement;
    private _inputValor : HTMLInputElement;
    private _negociacoes = new Negociacoes();
    private _negociacaoView = new NegociacaoView('#negociacaos-table', true);
    private _mensagemView = new MensagemView('#mensagemView', true)

    constructor() {
        this._inputData = document.querySelector('#data') as HTMLInputElement;
        this._inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this._inputValor = document.querySelector('#valor') as HTMLInputElement;

        this._negociacaoView.update(this._negociacoes);
    }

    adiciona(): void {
        const negociacao = Negociacoes.criaDe(
            this._inputData.value,
            this._inputQuantidade.value,
            this._inputValor.value,
        );

        this._negociacoes.adiciona(negociacao);
        this._negociacaoView.update(this._negociacoes)
        this._mensagemView.update('Adicionado com sucesso')

        this.limparForm()
    }


    private limparForm(): void{
        this._inputData.value = '';
        this._inputQuantidade.value = '1';
        this._inputValor.value = '0.0';

        this._inputData.focus();
    }

    private DiaUtil(data: Date){
        return data.getDate() > DiasDaSemana.domingo && data.getDate() < DiasDaSemana.sabado;
    }
}
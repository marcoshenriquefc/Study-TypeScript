import { domInjector } from '../decorator/dom-injector.js';
import { inspect } from '../decorator/inspect.js';
import { logarTempoExecucao } from '../decorator/logar-tempo-execucao.js';
import { DiasDaSemana } from '../enums/dias-da-semana.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { negociacaoService } from '../services/negociacoes-service.js';
import { imprimir } from '../utils/imprimir.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacoesView } from '../views/negociacoes-view.js';

export class NegociacaoController {

    @domInjector('#data')
    private inputData: HTMLInputElement;
    @domInjector('#quantidade')
    private inputQuantidade: HTMLInputElement;
    @domInjector('#valor')
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');
    private negociacaoService = new negociacaoService();

    constructor() {
        this.negociacoesView.update(this.negociacoes);
    }


    @inspect()
    @logarTempoExecucao()
    public adiciona(): void {
        const negociacao = Negociacao.criaDe(
            this.inputData.value, 
            this.inputQuantidade.value,
            this.inputValor.value
        );

        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView
                .update('Apenas negociações em dias úteis são aceitas');
            return ;
        }

        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView();

        imprimir(negociacao, this.negociacoes );
    }

    public inportarDados():void{
        this.negociacaoService.obterNegociacoes()
        .then(negociacoesDados => {
            return negociacoesDados.filter(negociacoesDados =>{
                return !this.negociacoes
                .lista()
                .some(Negociacao => Negociacao.ehigual(negociacoesDados))
            })
        })
        .then(negociacoesDados  =>{
            negociacoesDados.forEach(negociacao =>{
                this.negociacoes.adiciona(negociacao);
            });
            this.negociacoesView.update(this.negociacoes)
            this.mensagemView.update('Importado com sucesso')
        })
        .catch(err => {
            this.mensagemView.update('ERRO NA IMPORTAÇÃO')
        })
    }

    private ehDiaUtil(data: Date) {
        return data.getDay() > DiasDaSemana.DOMINGO 
            && data.getDay() < DiasDaSemana.SABADO;
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '1';
        this.inputValor.value = '0.0';
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso');
    }
}
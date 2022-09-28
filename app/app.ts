import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { NegociacaoView } from "./views/negociacao-view.js";


const negociacao = new NegociacaoController()
const form = document.querySelector('.form');

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    negociacao.adiciona()
})

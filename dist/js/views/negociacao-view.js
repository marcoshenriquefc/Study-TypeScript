export class NegociacaoView {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    template(modelo) {
        return `
        <table class='table table-hover table-bordered'>
            <thead>
                <tr>
                    <th> DATA </th>
                    <th> QUANTIDADE </th>
                    <th> VALOR </th>
                    <th> VOLUME </th>
                </tr>
            </thead>
            <tbody>
            ${modelo.lista().map(negociacao => {
            return `
                <tr>
                    <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                    <td>${negociacao.quantidade}</td>
                    <td>${negociacao.valor}</td>
                    <td>${negociacao.volume}</td>
                </tr>
                `;
        }).join('')}
            <tbody>
        </table>
        `;
    }
    update(modelo) {
        this._elemento.innerHTML = this.template(modelo);
    }
}

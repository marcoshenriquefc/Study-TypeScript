export function domInjector(seletor) {
    return function (target, propertyKey) {
        console.log(seletor);
        const getter = function () {
            const elemento = document.querySelector(seletor);
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}

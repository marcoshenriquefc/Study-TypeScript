export function domInjector(seletor: string){
    return function(target: any, propertyKey: string){
        // console.log(seletor);
        let elemento: HTMLElement;

        const getter = function (){
            if(!elemento){
                elemento = <HTMLElement>document.querySelector(seletor);
                console.log(`Elemento: ${propertyKey}`)
            }
            return elemento;
        }

        Object.defineProperty(
            target,
            propertyKey,
            { get: getter })
    }
}
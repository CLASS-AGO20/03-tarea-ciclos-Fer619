export default class App {

    sumatoriaSerieUno(numero){
        let suma= 0;

        for(let i= 1; i<=numero; i++){

            suma= suma + (1/i);

        }
        return suma;
    }

    sumatoriaSerieDos(numero){

    }

    esPrimo(numero){

        let i= 2;
        let primo= 0;

        do {

            if(numero%i !==0){

                primo= "true";
            }
            i= 2;
        
        }while(numero%i ===0){

            primo= "false";
        }

        return primo;
    }

    


       
}

let app = new App();

console.log(app.sumatoriaSerieUno(4));

console.log(app.esPrimo(7));
console.log(app.esPrimo(10));

export default class App {

    sumatoriaSerieUno(numero){
        let suma= 0;

        for(let i= 1; i<=numero; i++){

            suma= suma + (1/i);

        }
        return suma;
    }

    sumatoriaSerieDos(numero){

        let i= 1;
        let suma= 0;

        while(i<=numero){

            if((i%2 ==0) || (i==1)){

                suma= suma + (1/i);
            }else{

                suma= suma - (1/i);
            }
            i++;
        }
        return suma;
    }

    esPrimo(numero){

        let i= 2
        let primo= 0;

            if(numero%i ==0){

                return false;

            } else{
                return true;
            }
        
        }
    
    obtnenerMultiplos(inicio, fin){

        let i= 0;
        let aux= "";

        do{

            if((i>=inicio)&&(i<=fin)){

                if(i%3===0){
                    aux= aux + i;
                }
            }
            i++;
        }while(i<=fin);

        return aux;
    }

   

    


    


       
}

let app = new App();

console.log(app.sumatoriaSerieUno(4));

console.log(app.sumatoriaSerieDos(5));

console.log(app.esPrimo(7));
console.log(app.esPrimo(10));

console.log(app.obtnenerMultiplos(10, 33));
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

    obtenerImpares(numero1, numero2){

        let aux= "";
        let inicio= numero1;
        let fin= numero2;
        let aux1= 0;

        if(numero1>numero2){
            inicio= numero2;
            fin= numero1;
        }

        aux1=1;
        for(let i = fin; i>= inicio; i--){

            if(i%2 !=0){

                aux= aux + i;
                aux1++;
            }else{
                aux= aux+","+i+",";
            }
        }

        return aux;
    }



   

    


    


       
}

let app = new App();

console.log(app.sumatoriaSerieUno(4));

console.log(app.sumatoriaSerieDos(5));

console.log(app.esPrimo(7));
console.log(app.esPrimo(10));

console.log(app.obtnenerMultiplos(20, 35));

console.log(app.obtenerImpares(10, 15));
console.log(app.obtenerImpares(17, 10));
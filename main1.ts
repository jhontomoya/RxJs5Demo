import { Observable, Observer } from "rxjs";

let number = [1, 5, 10, 20];
let source = Observable.from(number);

/*class MyObservable implements Observer<number> {
    next(value: number){
        console.log(`ValueOk: ${value}`);
    };//Se genero un evento, ocurrio otro evento y me entero
    error(err: any){
        console.log(`Error: ${err}`);
    };//Si en el evento ocurrio el error. Cundo pase un error todos los eventos se terminan
    complete(){
        console.log(`Complete!`);
    };
}

source.subscribe(new MyObservable);*/

source.subscribe(
    value => {
        console.log(`value: ${value}`);
    },
    error => {
        console.log(`Error: ${error}`);
    },
    () => {
        console.log('Complete');
    }
);
import { Observable, Observer } from "rxjs";

let output = document.getElementById('output');
let button = document.getElementById('button');
let click = Observable.fromEvent(button,'click');

function load(url: string){
    return Observable.create(observer => {

        let xhr = new XMLHttpRequest();
        xhr.addEventListener('load',() => {

            if(xhr.status === 200){// status tiene el codigo, Ejemplo 200
                let jsonStarwars = JSON.parse(xhr.responseText);
                observer.next(jsonStarwars);
                observer.complete();
            }else{
                observer.error(xhr.statusText); // statusText tiene lo que es el codigo ejemplo. OK
            }     
        });

        xhr.open('GET', url);
        xhr.send();     

    });

}

function renderStarWars (jsonStarwars){
    jsonStarwars.forEach(element => {
        let div = document.createElement('div');
        div.innerText = `${element.category} - ${element.name}`;
        output.appendChild(div);
    });
}

click.subscribe(
    value => {
        load('starwars.json')
        .subscribe(value => {
                        renderStarWars(value);
                    },
                    error => {
                        console.log(`Error: ${error}`);
                    });
    },
    error => {
        console.log(`Error: ${error}`);
    },
    () => {
        console.log('Complete');
    }
);
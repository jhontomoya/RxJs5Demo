import { Observable, Observer } from "rxjs";

let input = document.getElementById('letra');
let button = document.getElementById('button');
let output = document.getElementById('output');
let click = Observable.fromEvent(button,'click');

function load( url : string){
    let xhr = new XMLHttpRequest();
    xhr.addEventListener('load',() => {
        let jsonPersonas = JSON.parse(xhr.responseText);
        jsonPersonas.forEach(element => {
            //console.log(`${element.name} - ${element.calificacion}`);
        });
    });
    xhr.open('GET', url);
    xhr.send();
}

click.subscribe(
    value => {
        load('personas.json');
        //.subscribe(value => Observable.from(value))
        //load('personas.json').subscribe(value => Observable.from(value).filter((d:any) => {d.calificacion >60});
        //console.log('Click');
    },
    error => {
        console.log(`Error: ${error}`);
    },
    () => {
        console.log('Complete');
    }
);
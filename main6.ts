import { Observable, Observer } from "rxjs";

let source = Observable.fromEvent(document,'mousemove')
                        .map((event:MouseEvent) => {//o any para cualquier tipo de dato
                            return{
                                x: event.clientX,
                                y: event.clientY
                            }
                        }).filter(element => {
                            return element.x > 500;
                        });

source.subscribe(
    value => {
        console.log(`valueX: ${value.x} valueY: ${value.y}`);
    },
    error => {
        console.log(`Error: ${error}`);
    },
    () => {
        console.log('Complete');
    }
);
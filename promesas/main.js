//Promesas

/*const eventoFuturo = () => {
    return new Promise ((resolve, reject) => {
        //El cuerpo de la promesa
    })
}

console.log(eventoFuturo());*/

// const eventoFuturo = (respuesta) => {
//     return new Promise ((resolve, reject) => {
//         respuesta ? resolve('Promesa resuelta') : reject('Promesa rechazada');
//     })
// }

// //console.log(eventoFuturo(true));
// console.log(eventoFuturo(false));


//MAP
const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'AngularJS', precio: 22000},
    {nombre: 'Desarrollo Web', precio: 16000},
] 

const nombreCursos = cursos.map((curso) => curso.nombre);
console.log(nombreCursos);

const actualizados = cursos.map((curso) => {
    return {
        nombre: curso.nombre,
        precio: curso.precio * 1.25
    }
})

console.log(actualizados);
console.log(cursos);

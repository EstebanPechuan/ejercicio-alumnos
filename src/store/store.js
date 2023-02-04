import { writable } from "svelte/store";

let profe = {
    'nombre': 'Profesor',
    'apellido': 'Test',
    'email': 'profe@gmail.com',
}

let alumnosInitial = [
    {
        'nombre': 'Alumno',
        'apellido': '1',
        'dni': '11111111',
        'domicilio': 'calle falsa 1'
    },
    {
        'nombre': 'Alumno',
        'apellido': '2',
        'dni': '22222222',
        'domicilio': 'calle falsa 2'
    },
]



// let initialState = JSON.parse(localStorage.getItem('profesor')) || alumnosInitial
// let initialProfe = JSON.parse(localStorage.getItem('profesor')) || profe

export let profesor = writable(profe)
export let alumnos = writable(alumnosInitial)
import axios from "axios";


class CalificacionesService{
    url = "http://localhost:8000/materias";

    obtenerMaterias(){
        
        return axios.get(`${this.url}/todos`);

    };

    arrCalificaciones = [];
    
    // constructor(){
    //     this.arrCalificaciones={
    //     20161:[
    //         {codigo:5051, asignatura:'Calculo-1', creditos: 2, periodo1:4, periodo2:4.3, periodo3:3.5},
    //         {codigo:5052, asignatura:'Fisica-1', creditos: 4, periodo1:4.3, periodo2:4.1, periodo3:3.0},
    //         {codigo:5036, asignatura:'Geometría Analítica', creditos: 3, periodo1:4.0, periodo2:3.6, periodo3:3.8},
    //         {codigo:5039, asignatura:'Arquitectura de Datos', creditos: 3, periodo1:4.0, periodo2:3.6, periodo3:3.8}
    //     ],
    //     20162:[
    //         {codigo:6051, asignatura:'Cálculo-2', creditos: 2, periodo1:4, periodo2:4.3, periodo3:3.5},
    //         {codigo:6052, asignatura:'Fisica-2', creditos: 4, periodo1:4.3, periodo2:4.1, periodo3:3.0},
    //         {codigo:6036, asignatura:'Ecua. Diferenciales', creditos: 3, periodo1:4.0, periodo2:3.6, periodo3:3.8}
    //     ],
    //     20171:[
    //         {codigo:6051, asignatura:'Calculo-3', creditos: 2, periodo1:4, periodo2:4.3, periodo3:3.5},
    //         {codigo:6052, asignatura:'Fisica-3', creditos: 4, periodo1:3.4, periodo2:4.8, periodo3:3.0},
    //         {codigo:6036, asignatura:'Fundamentos Programación', creditos: 4, periodo1:4.0, periodo2:3.6, periodo3:3.8}],
    //     20172:[
    //         {codigo:7051, asignatura:'Algoritmos-1', creditos: 2, periodo1:4, periodo2:4.3, periodo3:3.5},
    //         {codigo:7052, asignatura:'Matematicas Especiales', creditos: 4, periodo1:4.3,periodo2:4.1, periodo3:3.0},
    //         {codigo:7036, asignatura:'Programación Básica-1', creditos: 3, periodo1:4.0, periodo2:3.6, periodo3:3.8}],
    //     20181:[
    //         {codigo:8051, asignatura:'Algoritmos-2', creditos: 2, periodo1:4,periodo2:4.3, periodo3:3.5},
    //         {codigo:8052, asignatura:'Ciencia de Datos-2', creditos: 4, periodo1:4.3, periodo2:4.1, periodo3:3.0},
    //         {codigo:8036, asignatura:'Programación Básica-2', creditos: 3, periodo1:4.0, periodo2:3.6, periodo3:3.8}],
    //     20182:[
    //         {codigo:9051, asignatura:'Algoritmos-3', creditos: 2, periodo1:4, periodo2:4.3, periodo3:3.5},
    //         {codigo:9052, asignatura:'Introducción DB-1', creditos: 4,periodo1:4.3, periodo2:4.1, periodo3:3.0},
    //         {codigo:9036, asignatura:'Geometría', creditos: 3, periodo1:3.1, periodo2:3.3, periodo3:3.8}],
    //     20191:[
    //         {codigo:15051, asignatura:'Calculo-1', creditos: 2, periodo1:4, periodo2:4.3, periodo3:3.5},
    //         {codigo:15052, asignatura:'Fisica-1', creditos: 4, periodo1:4.0, periodo2:4.1, periodo3:3.0},
    //         {codigo:15036, asignatura:'Introducción DB-2', creditos: 2, periodo1:4.0, periodo2:3.0, periodo3:3.8}],
    //     20192:[
    //         {codigo:16051, asignatura:'Calculo-2', creditos: 2, periodo1:4, periodo2:4.3, periodo3:4.5},
    //         {codigo:16052, asignatura:'Fisica-2', creditos: 4, periodo1:3.8, periodo2:4.1, periodo3:3.0},
    //         {codigo:16036, asignatura:'Geometría-2', creditos: 3, periodo1:4.0, periodo2:3.6, periodo3:3.8}],
    //     20201:[
    //         {codigo:17051, asignatura:'Calculo-3', creditos: 2, periodo1:4.5, periodo2:4.3, periodo3:3.5},
    //         {codigo:17052, asignatura:'Fisica-3', creditos: 6, periodo1:3.0, periodo2:4.1, periodo3:3.9},
    //         {codigo:17036, asignatura:'Geometría-3', creditos: 3, periodo1:3.8, periodo2:3.6, periodo3:3.0}],
    //     20202:[
    //         {codigo:18051, asignatura:'Calculo-4', creditos: 2, periodo1:4.8, periodo2:4.3, periodo3:3.5},
    //         {codigo:18052, asignatura:'Fisica-4', creditos: 4, periodo1:3.4, periodo2:4.1, periodo3:3.0},
    //         {codigo:18036, asignatura:'Geometría-4', creditos: 3, periodo1:3.5, periodo2:3.6, periodo3:3.8}],
    //     20211:[
    //         {codigo:19051, asignatura:'Calculo-5', creditos: 2, periodo1:3.0, periodo2:4.3, periodo3:3.5},
    //         {codigo:19052, asignatura:'Fisica-5', creditos: 4, periodo1:4.0, periodo2:3.2, periodo3:3.8},
    //         {codigo:19036, asignatura:'Geometría-5', creditos: 3, periodo1:4.0, periodo2:3.6, periodo3:4.8}],
    //     20212:[
    //         {codigo:20051, asignatura:'Calculo-6', creditos: 2, periodo1:4.1, periodo2:4.7, periodo3:3.0},
    //         {codigo:20052, asignatura:'Fisica-6', creditos: 4, periodo1:4.3, periodo2:4.1, periodo3:3.1},
    //         {codigo:20036, asignatura:'Introducción DB-1', creditos: 3, periodo1:4.0, periodo2:3.6, periodo3:3.8}]
    //     };
    // }


}export default new CalificacionesService();


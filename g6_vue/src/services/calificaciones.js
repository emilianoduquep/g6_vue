class CalificacionesService{
    
    arrCalificaciones = {};
    constructor(){
        this.arrCalificaciones={
        20161:[
        {codigo:5051, asignatura:'Calculo-1', creditos: 2, periodo1:4, periodo2:4.3, periodo3:3.5},
        {codigo:5052, asignatura:'Fisica-1', creditos: 4, periodo1:4.3, periodo2:4.1, periodo3:3.0},
        {codigo:5036, asignatura:'Geometría Analítica', creditos: 3, periodo1:4.0, periodo2:3.6, periodo3:3.8},
        {codigo:5039, asignatura:'Arquitectura de Datos', creditos: 3, periodo1:4.0, periodo2:3.6, periodo3:3.8}
    ]};
    }

    obtenerTodos(){
        
        return this.arrCalificaciones;
    }
}export default new CalificacionesService();
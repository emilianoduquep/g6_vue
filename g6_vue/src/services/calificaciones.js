import axios from "axios";


class CalificacionesService{
    //url = "http://localhost:8080/materias";
    url = "http://132.145.73.75:8080/materias";

    obtenerMaterias(){
        
        return axios.get(`${this.url}/todos`);

    };

    arrCalificaciones = [];
    



}export default new CalificacionesService();


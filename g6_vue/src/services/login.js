import axios from "axios";

class LoginService{
    url = "http://localhost:8000/cliente";

    validar(miUsuario, miPassword){

        let datos = {usuario:miUsuario, password: miPassword};

        return axios.post(`${this.url}/validar`, datos);
    }

    // ******** esto se hacia con los servicios ********
    // totalUsuarios = [];
    

    // constructor(){

    //     this.totalUsuarios = [{cc:'123456789', pass:'123'}];
        
    // };

    // obtenerTodos(){
        
    //     return this.totalUsuarios;
        
    // }
}export default new LoginService();
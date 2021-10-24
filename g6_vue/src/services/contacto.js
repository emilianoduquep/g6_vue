import axios from "axios";

class ContactoService{
    //url = "http://localhost:8080/contacto";
    url = "http://132.145.73.75:8080/contacto";

    guardar(miContaco){
        return axios.post(`${this.url}`,miContaco)
    }

}export default new ContactoService();
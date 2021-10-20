class LoginService{

    totalUsuarios = [];

    constructor(){

        this.totalUsuarios = [{'cc':'123456789', 'pass':'123'}];
        
    };

    obtenerTodos(){
        
        return this.totalUsuarios;
    }
}export default new LoginService();
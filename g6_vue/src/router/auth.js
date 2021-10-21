const isAuthenticated = (origen, destino, accion)=>{

    if (localStorage.cedula) {
        accion();
    } else {
        accion({name:"Login"});
    }

};
export default isAuthenticated;
class RegistroCursos{
    cursos = {};
    dict = {}; // Diccionario para el estado de los checkbox
    num_cursos = 0;
    year = ''; //Periodo actual
    
    creditosTotales = 0; //Total inscritos en el periodo
    maxCreditos = 0; //Maximo de créditos
    
    materiasInscritas = []; //Para no mostrar materias ya vistas o inscritas
    cursosCopy = {};
    msg = "";

    constructor(){
        this.cursos = {
            20212: [{ codigo: 202101, asignatura: 'Calculo I', creditos: 2, docente: 'Néstor García' , visto:false, che: false},
            { codigo: 202106, asignatura: 'Geometría Analítica', creditos: 3, docente: 'Diana Gamero', visto:false, che: false },
            { codigo: 202111, asignatura: 'Arquitectura de Datos', creditos: 3, docente: 'Néstor García', visto:false, che: false },
            { codigo: 202115, asignatura: 'Matematicas Especiales', creditos: 4, docente: 'Néstor García', visto:false, che: false },
            { codigo: 202103, asignatura: 'Programación Básica I', creditos: 3, docente: 'Diana Gamero', visto:false, che: false },
            { codigo: 202105, asignatura: 'Algoritmos I', creditos: 2, docente: 'Diana Gamero' , visto:false, che: false},
            { codigo: 202110, asignatura: 'Introducción DB I', creditos: 4, docente: 'Néstor García', visto:false, che: false }]
        }
        this.cursosCopy = this.cursos;
        
    }

    getMsg(){
        return this.msg;
    }

    getCredTotales(){
        return this.creditosTotales;
    }

    getCredRes(){
        return this.maxCreditos - this.creditosTotales;
    }

    limpiarBuscar(){ //Limpiar buscador e imprimir de nuevo todos los cursos
        var inputT = document.getElementById('buscar');
        inputT.value = '';
        this.cursos = this.cursosCopy;
    }
    
    buscarCurso(){ //Buscador de curso
        var inputT = document.getElementById('buscar');
        var boolS = false;
        this.cursosCopy = this.cursos;
        for(let lct of this.cursos[this.year]){
            if(lct.codigo+"" === inputT){
                boolS = true;
                console.log("Sí esta");
                break;
            }
        }

        if(boolS){
            for(let lct of this.cursos[this.year]){
                if(lct.codigo+"" != inputT){
                    lct.visto = true;
                }
            }
        }else{
            console.log("No está");
        }
    
    }

    matricular(){
        var compCreditos = 0;
        let credDisp = 0;

        for (let lct of this.cursos[this.year]) {
            if(lct.che === true){ //Si está marcado, registramos la materia
                compCreditos += lct.creditos;
            }
        }
        credDisp = this.maxCreditos - this.creditosTotales;
        if(compCreditos != 0){
            if((compCreditos+this.creditosTotales)<=this.maxCreditos){
                for (let lec of this.cursos[this.year]) {
                    if(lec.che === true){ //Si está marcado, registramos la materia
                        lec.visto = true;
                        //this.materiasInscritas.push(lct.codigo);
                    }
                }

                //Cambiamos el total de creditos inscritos
                this.creditosTotales += compCreditos;

                //Reset de los checkbox a sin marcar
                for (let lec of this.cursos[this.year]) {
                    if(lec.che === true){ //Si está marcado, registramos la materia
                        lec.che = false;
                    }
                }

                credDisp = this.maxCreditos - this.creditosTotales;
                console.log("Inscripción realizada");
                this.msg = "Materias inscritas satisfactoriamente. \nTotal créditos inscritos: " + this.creditosTotales + "\nCréditos disponibles: " + credDisp;
            }else{
                console.log("Excede la cantidad de creditos");
                this.msg = "Usted excede el número máximo de créditos permitidos. " + (compCreditos+this.creditosTotales) + " de " + this.maxCreditos + ". \nActualmente tiene inscritos " + this.creditosTotales + " créditos.";
            }
        }else{
            console.log("No ha seleccionado algo");
            this.msg = "Aún no ha seleccionado materias...\nTiene disponible " + credDisp + " créditos.";
        }



        /*

        this.num_cursos = 0;
         //Inicial es 0, pero después por los que ya tengamos
        var materiasTemp = [];
    
        for (let lct of cursos[year]) { //Miramos cuáles checkbox se marcaron
            this.num_cursos++;
            var boolTemp = document.getElementById(num_cursos+'');
            
    
            if(boolTemp != null && boolTemp.checked){ //Si está marcado, registramos la materia
                console.log(num_cursos + " " + boolTemp.checked);
                compCreditos += lct.creditos;
                materiasTemp.push(lct.codigo);
            }
        }
    
        if(compCreditos != 0){ //Agregar materias
            if((compCreditos+this.creditosTotales)<=this.maxCreditos){
                //Agregamos al array de cursos ya registrados
                for(let jlct of materiasTemp){
                    this.materiasInscritas.push(jlct); //Agregamos el código de la materia a la lista de cursos vistos
                    console.log(jlct);
                }
    
                //Cambiamos el total de creditos inscritos
                this.creditosTotales += compCreditos;
    
                //Reset de los checkbox a sin marcar
                this.num_cursos = 0;
                for (let lec of cursos[year]) {
                    this.num_cursos++;
                    this.dict[num_cursos+''] = false;
                }
    
                let credDisp = maxCreditos-creditosTotales;
                alert("Materias inscritas satisfactoriamente. \nTotal créditos inscritos: " + creditosTotales + "\nCréditos disponibles: " + credDisp);
            }else{
                alert("Usted excede el número máximo de créditos permitidos. " + (compCreditos+creditosTotales) + " de " + maxCreditos + ". \nActualmente tiene inscritos " + creditosTotales + " créditos.");
            }
        }else{
            alert("Aún no ha seleccionado materias...\nTiene disponible " + credDisp + " créditos." );
        }*/

    }

    cambiarEstado (codigoT) { //Cambiar estado de los checkbox
        
        for (let lec of this.cursos[this.year]) {
            
            if(lec.codigo === codigoT){
                console.log("Antes: " + lec.che + " Code: " + lec.codigo);
                if(lec.che){
                    lec.che = false;
                }else{
                    lec.che = true;
                }
            }
            console.log("Después: " + lec.che + " Code: " + lec.codigo);
        }

    }

    cargarCursos (yr, mx){ //Cargar tabla
        this.year = yr;
        this.maxCreditos = mx;
        return this.cursos;
    
        /*this.num_cursos = 0;
    
        for (let lectura of cursos[year]) { //Recorremos todos los cursos que se encuentran disp.
            this.num_cursos++;
            let boolC = dict[num_cursos+'']; //Estado del checkbox para esa fila
            let boolE = true; //Comprobar si ya se vió la materia para no imprimirla
            var str = '';
            //console.log("guardado " + boolC);
            
            for(let lct of materiasInscritas){
                if(lct === lectura.codigo){
                    boolE = false; //Ya se vió/inscribió la materia
                }
            }
    
            if(boolE){ //No se ha visto
                if(boolC){
                    str = `<td><p>
                    <input type="checkbox" id="${num_cursos}"  value="a" checked=true onclick="cambiarEstado(this)">
                    </p></td> ` 
                }else{
                    str = `<td><p>
                    <input type="checkbox" id="${num_cursos}" value="a" defaultChecked=false onclick="cambiarEstado(this)">
                    </p></td> ` 
                }
    
                datosTabla.innerHTML += `<tr>
                    <td><p>${lectura.codigo}</p></td>
                    <td><p>${lectura.asignatura}</p></td>
                    <td><p>${lectura.docente}</p></td>
                    <td><p>${lectura.creditos}</p></td>`+
                    str + `
                </tr> `  
            
            //document.getElementById(num_cursos+'').checked = boolC;
            }
        }*/
    
    }
    
    
    
    
    
}export default new RegistroCursos();



//cargarCursos(); //Arrojamos la tabla en primera instancia

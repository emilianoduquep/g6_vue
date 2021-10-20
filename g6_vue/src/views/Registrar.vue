<style scoped>



		main {
            margin: 0;
			padding: 0;
			font-size: 62.5%;

			/* esto se hace para que 1rem = 10px*/
			max-width: 1140px;
			font-size: 16px;
		}

		h1 {
			font-size: 2.8rem;
		}

		h2 {
			font-size: 2.4rem;
		}

		h3 {
			font-size: 2.0rem;
		}

		h4 {
			font-size: 1.6rem;
		}

		p {
			font-size: 1.4rem;
		}

		a {
			font-size: 1.8rem;
		}

/** Header **/
.contenedorHeader {	
	background-image: url(../images/banner.jpeg);
	height: 220px;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	display: grid;
	grid-template-columns: 243px 897px;

	
}

.contenedorHeader__imgLogo {
	padding-bottom: 20px;
	height: 220px;
	width: 243px;
}

.contenedorHeader__banner {
	margin-bottom: 20px;
	position: relative;
}

.contenedorHeader__filtro {
	position: absolute;
	background-color: rgba(0, 0, 0, 0.7);
	width: 100%;
	height: 100%;
}

.tituloU{
	color: #F4FCFC;
	width: 100%;
	text-align: center;
}


.contenedorHeader__banner h1 {
	text-align: center;
	margin-top: 150px;
	color: F4FCFC;
	
}
.contenedorHeader__navegacion {
	display: flex;
	gap: 2rem;
	color: #F4FCFC;
	justify-content: right;
	margin-top: 50px;
	margin-right: 50px;
	
	
}
.contenedorHeader__navegacion a {
	
	color: #F4FCFC;
	font-size: small;
	text-decoration: none;
}

body{
	background: #F4FCFC;
	height: 100%;
	margin: 0;
	font-family: 'Source Sans Pro', sans-serif;
	background-repeat: no-repeat;
	background-attachment: fixed;
}


/**Main**/
.menu__lateral{
	
    float: left;
    color: #142727;
    width: 21.5%;
    height: 1300px;
    background-color: #9c9f9d;
    padding-bottom: 40px;
    border-radius: 5px; 
}

.menu__lateral h2{
	text-align:center;
	background-color: #e5e0dc;
	padding-bottom: 10px;
	padding-top: 10px;
    border-radius: 5px; 
}

.menu__lateral a{
	font-size: large;
}

.log_barraLat {
	font-size: small;
	float: right;
	margin-top: 750px;
	text-decoration: none;
	color:  #142727 ;
	margin-right: 30px;
}

ul {
    list-style-type: none;
    text-align: left;
    margin: 0;
    padding: 0;
}

li{
    padding:20px;
}
li:hover{
    background-color: #e5e0dc;
    cursor: pointer;
    border-radius: 5px; 
}

li:active{
    background-color: #e5e0dc;
    cursor: pointer;
    border-radius: 5px; 
}
li a {
    display: block;
    color: #206A64;
    width: 300px;
    text-decoration: none;
    font-size: x-large;
}

p{
    display: inline-block;
    font-weight: lighter;
    font-size: 20px;
}
.cabecera{
    display: flex;
    vertical-align: middle;
}
.contenedor__contenido{
	margin-top: 20px;
	margin-left: 50px;
    color: #142727;
    display: inline-block;
    height: 1300px;
    width: 65%;
    background-color: #e5e0dc;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    border-radius: 15px; 
}

.buscador{
    float: right;
	text-align: right;
    margin-right: 10px;
    width: 30%;
    
}

.buscador p{
	font-size: medium;
}

.cursos_disp{
	padding-top: 20px;
    text-align: center;
	margin-top: 30px;
	margin-left: 30px;
    height: 85%;
    width: 90%;
    color: #e5e0dc;
    background-color: rgba(30, 33, 32, 0.68);
    border-radius: 15px; 
}

.cursos_disp h3{
	padding: 10px;
    margin-left: 20%;
    text-align: center;
}

.cursos_disp table{
	margin-right: 10px;
	margin-left: 10px;
	border: 1px solid #000;
	color:  #142727 ;
	margin-bottom: 20px;
}

.cursos_disp th, td {
   width: 20%;
   text-align: center;
   border: 1px solid #000;
   border-collapse: collapse;
   background: #ffffff;
}

.tabla_cursos {
	margin-right: 10px;
	margin-left: 10px;
	border: 1px solid #000;
	color:  #142727 ;
	margin-bottom: 20px;
}

.tabla_cursos th, td {
   width: 25%;
   text-align: center;
   border: 1px solid #000;
   border-collapse: collapse;
   background: #ffffff;
}


.matricular{
	vertical-align: middle;
    height: 20%;
    width: 100%;
    
}

/** Footer **/
.contenedorFooter {
	margin-top: 20px;
	background-image: url(../images/banner.jpeg);
	height: 150px;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	position: relative;

}

.contenedorFooter__banner {
	position: absolute;
	background-color: rgba(0, 0, 0, 0.7);
	width: 100%;
	height: 100%;
	
}
.navegacion-footer {
	display: flex;
	gap: 2rem;
	justify-content: end;
	margin-top: 75px;
	margin-right: 50px;		}
.navegacion-footer a {
	
	color: white;
	text-decoration: none;
}

</style>

<template>
<main>
    <header class="contenedorHeader">
        <img class="contenedorHeader__imgLogo" src="../images/Logo.png" alt="">
        <div class="contenedorHeader__banner">
            <div class="contenedorHeader__filtro">
                
                <nav class="contenedorHeader__navegacion">
                    
                    <router-link to="/">Log Out</router-link>
                </nav>
    
                <h2 id="titulo" class="tituloU">Universidad de las Tecnologias TIC</h2>
            </div>

        </div>
    </header>

    
    <aside class="menu__lateral">
        <h2>Menú</h2>
        <ul>
            <li><router-link to="/informacion">Información Personal</router-link></li>
            <li><router-link to="/registrar">Registrar Cursos</router-link></li>
            <li><router-link to="/calificaciones">Ver Calificaciones</router-link></li>
        </ul>

        
    </aside>
	
	<div class="contenedor__contenido">
        <h3>REGISTRAR CURSOS</h3>
        

        
        <div class="cursos_disp">
            <div class="cabecera">
                <h3>Cursos disponibles</h3>
                
                <div class="buscador">
                    <form action="">
                        <br>
                        
                        <label><p>Máx. Créditos: {{this.maxCreditos}}</p></label>
                        <label><p>Créditos Disponibles: {{this.credDisp}}</p></label>
                        <label><p>Créditos Inscritos: {{this.credIns}}</p></label>
                        <!--<p><input type="text" name="buscar" id="buscar" required></p> 
                            <label for="buscar"><p>Buscar curso</p></label>
                        <div>
                            <p><input type="submit" value="Buscar" @click="actualizarBuscar()"></p> 
                            <p><input type="submit" value="Limpiar" @click="actualizarLimpiar()"></p> 
                        </div>-->
                    </form>
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                            <td><strong><p>CODIGO</p></strong></td>
                            <td><strong><p>ASIGNATURA</p></strong></td>
                            <td><strong><p>DOCENTE</p></strong></td>
                            <td><strong><p>CREDITOS</p></strong></td>
                            <td><strong><p>SELECCIONAR</p></strong></td>
                            

                    </tr>
                    
                </thead>

                <tbody id="tabla_cursos" v-for="k in this.arregloCur[this.year]" :key="k">
                    
                        <tr v-if="k.visto === false">
                            <td><strong><p>{{k.codigo}}</p></strong></td>
                            <td><strong><p>{{k.asignatura}}</p></strong></td>
                            <td><strong><p>{{k.creditos}}</p></strong></td>
                            <td><strong><p>{{k.docente}}</p></strong></td>
                            
                            <td v-if="k.che === true"><strong><p>
                            <input type="checkbox" value="a" checked=true @click="cursosObj.cambiarEstado(k.codigo)">
                            </p></strong></td> 

                            <td v-if="k.che === false"><strong><p>
                            <input type="checkbox" value="a" @click="cursosObj.cambiarEstado(k.codigo)">
                            </p></strong></td>
               
                        </tr>

                </tbody>
            </table>
<!--
                <tr>
                    <td><p>15507</p></td>
                    <td><p>Macro Economía</p></td>
                    <td><p>Nestor Garcia</p></td>
                    <td><p>2</p></td>
                    <td><p>
                        <input type="checkbox" id="" name="" value="">
                        <label for="vehicle1"></label>
                    </p></td>

                </tr>

                <tr>
                    <td><p>15508</p></td>
                    <td><p>Estadística</p></td>
                    <td><p>Aytell Ramos</p></td>
                    <td><p>2</p></td>
                    <td><p>
                        <input type="checkbox" id="" name="" value="">
                        <label for="vehicle1"></label>
                    </p></td>

                </tr>

                <tr>
                    <td><p>15509</p></td>
                    <td><p>Finazas 1</p></td>
                    <td><p>Andrew Echavarria</p></td>
                    <td><p>2</p></td>
                    <td><p>
                        <input type="checkbox" id="" name="" value="">
                        <label for="vehicle1"></label>
                    </p></td>

                </tr>

            </table> -->

            <input type="submit" value="Matricular" @click="actualizarMatricula()">
        </div>

        
            
        

	</div>

	
	<footer>
        <!-- <img src="images\Banner.png" alt="Pie de pagina"> -->
        <div class="contenedorFooter">
            <div class="contenedorFooter__banner">
                <nav class="navegacion-footer">
                    
                </nav>
            </div>
        </div>
    </footer>
</main>
</template>

<script> 
import RegistroCursos from "@/services/registrarCursos.js"
export default {

	mounted(){
		this.cursosObj = RegistroCursos;
        this.arregloCur= this.cursosObj.cargarCursos(this.year, this.maxCreditos);
        this.credDisp = this.cursosObj.getCredRes();
        this.credIns = this.cursosObj.getCredTotales();
    },
    data(){
        return {
            cursosObj : null,
            arregloCur: {},
            year : '20212',
            maxCreditos : 9,
            credDisp: 0,
            credIns:0,
            msg:'',
        };			
    },
    
    methods:{
		actualizarMatricula() {
            this.cursosObj.matricular();
            this.credDisp = this.cursosObj.getCredRes();
            this.credIns = this.cursosObj.getCredTotales();
            this.arregloCur= this.cursosObj.cargarCursos(this.year, this.maxCreditos);
            this.msg = this.cursosObj.getMsg();
            alert(this.msg);
			
		},	
        
    }
}
</script>


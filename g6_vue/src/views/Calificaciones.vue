<template>
    <body>
	<header class="contenedorHeader">
		<img class="contenedorHeader__imgLogo" src="images/Logo.png" alt="">
		<div class="contenedorHeader__banner">
			<div class="contenedorHeader__filtro">
				
				<nav class="contenedorHeader__navegacion">
					<router-link to="/">Log Out</router-link>
				</nav>
	
				<h1>Universidad de las Tecnologias TIC</h1>
			</div>

		</div>
	</header>

	<main class="contenedor">
        <aside class="menu_lateral">
            <div class="menu_lateral-menu">
                <h2>Menú</h2>
            </div>
            
            <div class="menu_lateral__opciones">
                <a href="#">Información Personal</a>
                <a href="#">Registrar Cursos</a>
                <a href="#">Ver Calificaciones</a>
            </div>
            <div class="menu_lateral__logout">
                <router-link to="/">Log Out</router-link>
            </div>
            
        </aside>
        <section class="ventana_cursos">
            <div class="ventana_cursos__cabecera">
                <!-- <form class="ventana_cursos__cabecera-buscar" action="">
                    <label for="buscar">Buscar</label>
                    <input type="text" name="buscar" id="buscar" required> 
                    <input type="submit" value="Buscar" onclick="return buscar()"> 
                </form> -->
            </div>


            <div class="ventana_cursos__cuerpo">
                <h3>Calificaciones de Cursos Inscritos</h3>
                <div class="ventana_cursos__seleccionadores">
                    <div>
                        <label for="Año">Año</label>
                        <select name="year" id="select_year" v-model="sAnno">
                            <option value="-1">Seleccione el Año</option>
							<option v-for="(i, index) in anno" value="index">{{i}}</option>
                        </select>
                    </div>

                    <div>
                        <label for="semestre">Semestre</label>
                        <select name="semester" id="select_semester" v-model="sSemester">
							<option value="-1">Seleccione el Semestre</option>
							<option v-for="(i, index) in 2" value="index">{{i}}</option>                
                        </select>
                    </div>

                    <div>
                        <a class="boton_buscar" href="#" onclick="procesarDatos()">buscar</a>
                    </div>
            

                </div>

                <div class="ventana_cursos__cuerpo-fondo">
                    <table border="1" class="ventana_cursos__cuerpo-tabla" >
                        <thead >
                            <tr>
                                <th>Código</th>
                                <th>Asignatura</th>
                                <th>Crd</th>
                                <th>1er</th>
                                <th>2do</th>
                                <th>3er</th>
                                <th>Final</th>
                            </tr>
                        </thead >
                        <tbody id="tabla">

                        </tbody>
<!--                    
                        <tr>
                            <td>15501</td>
                            <td>Macro Economía</td>
                            <td>2</td>
                            <td>3.1</td>
                            <td>5.0</td>
                            <td>4.4</td>
                            <td>4.2</td>
                        </tr>
            
                        <tr>
                            <td>15502</td>
                            <td>Estadística</td>
                            <td>2</td>
                            <td>3.1</td>
                            <td>5.0</td>
                            <td>4.4</td>
                            <td>4.2</td>
                        </tr>
            
                        <tr>
                            <td>15503</td>
                            <td>Finazas 1</td>
                            <td>2</td>
                            <td>3.1</td>
                            <td>5.0</td>
                            <td>4.4</td>
                            <td>4.2</td>
                        </tr> -->
                    </table>
                </div>

            </div>
            
    
        </section>
    </main>

	
	<footer>
		<!-- <img src="images\Banner.png" alt="Pie de pagina"> -->
		<div class="contenedorFooter">
			<div class="contenedorFooter__banner">
				<nav class="navegacion-footer">
					<router-link to="/">Log Out</router-link>
				</nav>
			</div>
		</div>
	</footer>
    
</body>
</template>

<style scoped>
 html * {
			margin: 0;
			padding: 0;
			font-size: 62.5%;
			/* esto se hace para que 1rem = 10px*/
		}

		body {
			max-width: 1140px;
			font-size: 16px;
		}

		h1 {
			font-size: 3.0rem;
		}

		h2 {
			font-size: 2.4rem;
		}

		h3 {
			font-size: 1.8rem;
		}

		h4 {
			font-size: 1.2rem;
		}

		p {
			font-size: 1.1rem;
		}

		a {
			font-size: 1.8rem;
		}

		/** Header **/
		.contenedorHeader {
			
			background-image: url(../images/banner.jpeg);
			height: 280px;
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center center;
			display: grid;
			grid-template-columns: 280px 860px;
		}

		.contenedorHeader__imgLogo {
			height: 280px;
			width: 280px;
		}

		.contenedorHeader__banner {

			position: relative;
		}
		.contenedorHeader__filtro {
			position: absolute;
			background-color: rgba(0, 0, 0, 0.7);
			width: 100%;
			height: 100%;
		}
		.contenedorHeader__banner h1 {
			
			width: max-content;
			margin: 0 auto;
			margin-top: 5rem;
			color: white;
			
		}
		.contenedorHeader__navegacion {
			display: flex;
			gap: 2rem;
			justify-content: right;
			margin-top: 50px;
			margin-right: 50px;
		}
		.contenedorHeader__navegacion a {
			
			color: white;
			text-decoration: none;
		}


		/** Main **/
        .contenedor {
            display: grid;
            grid-template-columns: 1fr 3fr;
            font-size: 4rem;
            height: 55rem;
        }
        /** Aside **/
        .menu_lateral {
            background-color: #C4C4C4;
            display: grid;
            grid-template-rows: 1fr 6fr 1fr;
        }
        .menu_lateral-menu {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color:#E5E0DC ;
            
        }
        .menu_lateral a {
            display: block;
            text-decoration: none;
            color: #142727;
            font-weight: bold;
            width: 100%;
            padding-top: 1rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid black;
        }
        .menu_lateral__opciones {
            margin-top: 1rem;
            
        }
        .menu_lateral__logout {
            text-align: right;
            margin-right: 1rem;  
        }
        .menu_lateral__logout a {
            border: none;
            
        }

        /** Ventana Cursos**/
        .ventana_cursos {
            
            display: grid;
            grid-template-rows: 0.5fr 5fr;
            
        }
        .ventana_cursos__cabecera {
            width: 95%;
            margin: 0 auto;
            display: flex;
            justify-content: right;
            align-items: center;
        }
        .ventana_cursos__cabecera-buscar {
            background-color: #C4C4C4;
            font-size: 2rem;
            width:fit-content;
            height: fit-content;
            padding: 1rem;
            border-radius: 0.5rem;
        }
        .ventana_cursos__cuerpo {
            background-color: #E5E0DC;
            display: grid;
            grid-template-rows: 0.5fr 0.5fr 5fr;
            width: 95%;
            margin: 0 auto;
            margin-bottom: 1rem;
            border-radius: 0.5rem;
            
        }
        .ventana_cursos__cuerpo h3 {
            padding: 2rem;
        }
        .ventana_cursos__seleccionadores {
            font-size: 3.4rem;
            display: flex;
            justify-content: space-evenly;
            height:min-content;
        }
        .boton_buscar {
            text-decoration: none;
            color: black;
            text-transform: uppercase;
            background-color: #C4C4C4;
            padding: 0.5rem;
            border-radius: 0.5rem;
            font-size: 1.2rem;
            font-weight: bold;
        }
        .boton_buscar:hover {
            cursor: pointer;
        }
        .ventana_cursos__cuerpo-fondo {
            background-color: white;
            width: 96%;
            margin: 0 auto;
            margin-bottom: 1rem;
        }
        .ventana_cursos__cuerpo-tabla {
            width: 100%;
            
        }
        .ventana_cursos__cuerpo-tabla td,
        .ventana_cursos__cuerpo-tabla tr {
            font-size: 1.2rem;
        }
        .ventana_cursos__cuerpo-tabla th {
            font-size: 1.2rem;
        }
        .leyenda {
            font-weight: bold;
            padding: 0.5rem;
        }

        /** Footer **/
		.contenedorFooter {
			background-image: url(../images/banner.jpeg);
			height: 100px;
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
			display: flex;
			align-items: center;
			justify-content:right;
		}
		.navegacion-footer {
			display: flex;
			gap: 2rem;
			padding-right: 2rem;
		}
		.navegacion-footer a {
			
			color: white;
			text-decoration: none;
		}
</style>

<script>
export default {

	mounted(){
		
    },
    data(){
        return {
            cedula:'1241654276',
			anno: [2015, 2016, 2017, 2018, 2019, 2020, 2021],
			sAnno: '',
			sSemester: '',
			yearsSemester: {
				'20161':[
					{'codigo':5051, 'asignatura':'Calculo-1', 'creditos': 2, 'periodo1':4, 'periodo2':4.3, 'periodo3':3.5},
					{'codigo':5052, 'asignatura':'Fisica-1', 'creditos': 4, 'periodo1':4.3, 'periodo2':4.1, 'periodo3':3.0},
					{'codigo':5036, 'asignatura':'Geometría Analítica', 'creditos': 3, 'periodo1':4.0, 'periodo2':3.6, 'periodo3':3.8},
					{'codigo':5039, 'asignatura':'Arquitectura de Datos', 'creditos': 3, 'periodo1':4.0, 'periodo2':3.6, 'periodo3':3.8}],
				'20162':[
					{'codigo':6051, 'asignatura':'Cálculo-2', 'creditos': 2, 'periodo1':4, 'periodo2':4.3, 'periodo3':3.5},
					{'codigo':6052, 'asignatura':'Fisica-2', 'creditos': 4, 'periodo1':4.3, 'periodo2':4.1, 'periodo3':3.0},
					{'codigo':6036, 'asignatura':'Ecua. Diferenciales', 'creditos': 3, 'periodo1':4.0, 'periodo2':3.6, 'periodo3':3.8}],
				'20171':[
					{'codigo':6051, 'asignatura':'Calculo-3', 'creditos': 2, 'periodo1':4, 'periodo2':4.3, 'periodo3':3.5},
					{'codigo':6052, 'asignatura':'Fisica-3', 'creditos': 4, 'periodo1':3.4, 'periodo2':4.8, 'periodo3':3.0},
					{'codigo':6036, 'asignatura':'Fundamentos Programación', 'creditos': 4, 'periodo1':4.0, 'periodo2':3.6, 'periodo3':3.8}],
				'20172':[
					{'codigo':7051, 'asignatura':'Algoritmos-1', 'creditos': 2, 'periodo1':4, 'periodo2':4.3, 'periodo3':3.5},
					{'codigo':7052, 'asignatura':'Matematicas Especiales', 'creditos': 4, 'periodo1':4.3, 'periodo2':4.1, 'periodo3':3.0},
					{'codigo':7036, 'asignatura':'Programación Básica-1', 'creditos': 3, 'periodo1':4.0, 'periodo2':3.6, 'periodo3':3.8}],
				'20181':[
					{'codigo':8051, 'asignatura':'Algoritmos-2', 'creditos': 2, 'periodo1':4, 'periodo2':4.3, 'periodo3':3.5},
					{'codigo':8052, 'asignatura':'Ciencia de Datos-2', 'creditos': 4, 'periodo1':4.3, 'periodo2':4.1, 'periodo3':3.0},
					{'codigo':8036, 'asignatura':'Programación Básica-2', 'creditos': 3, 'periodo1':4.0, 'periodo2':3.6, 'periodo3':3.8}],
				'20182':[
					{'codigo':9051, 'asignatura':'Algoritmos-3', 'creditos': 2, 'periodo1':4, 'periodo2':4.3, 'periodo3':3.5},
					{'codigo':9052, 'asignatura':'Introducción DB-1', 'creditos': 4, 'periodo1':4.3, 'periodo2':4.1, 'periodo3':3.0},
					{'codigo':9036, 'asignatura':'Geometría', 'creditos': 3, 'periodo1':3.1, 'periodo2':3.3, 'periodo3':3.8}],
				'20191':[
					{'codigo':15051, 'asignatura':'Calculo-1', 'creditos': 2, 'periodo1':4, 'periodo2':4.3, 'periodo3':3.5},
					{'codigo':15052, 'asignatura':'Fisica-1', 'creditos': 4, 'periodo1':4.3, 'periodo2':4.1, 'periodo3':3.0},
					{'codigo':15036, 'asignatura':'Introducción DB-2', 'creditos': 2, 'periodo1':4.0, 'periodo2':3.0, 'periodo3':3.8}],
				'20192':[
					{'codigo':16051, 'asignatura':'Calculo-1', 'creditos': 2, 'periodo1':4, 'periodo2':4.3, 'periodo3':3.5},
					{'codigo':16052, 'asignatura':'Fisica-1', 'creditos': 4, 'periodo1':4.3, 'periodo2':4.1, 'periodo3':3.0},
					{'codigo':16036, 'asignatura':'Geometría', 'creditos': 3, 'periodo1':4.0, 'periodo2':3.6, 'periodo3':3.8}],
				'20201':[
					{'codigo':17051, 'asignatura':'Calculo-1', 'creditos': 2, 'periodo1':4, 'periodo2':4.3, 'periodo3':3.5},
					{'codigo':17052, 'asignatura':'Fisica-1', 'creditos': 4, 'periodo1':4.3, 'periodo2':4.1, 'periodo3':3.0},
					{'codigo':17036, 'asignatura':'Geometría', 'creditos': 3, 'periodo1':3.0, 'periodo2':3.6, 'periodo3':3.8}],
				'20202':[
					{'codigo':18051, 'asignatura':'Calculo-1', 'creditos': 2, 'periodo1':4, 'periodo2':4.3, 'periodo3':3.5},
					{'codigo':18052, 'asignatura':'Fisica-1', 'creditos': 4, 'periodo1':4.3, 'periodo2':4.1, 'periodo3':3.0},
					{'codigo':18036, 'asignatura':'Geometría', 'creditos': 3, 'periodo1':4.0, 'periodo2':3.6, 'periodo3':3.8}],
				'20211':[
					{'codigo':19051, 'asignatura':'Calculo-1', 'creditos': 2, 'periodo1':4, 'periodo2':4.3, 'periodo3':3.5},
					{'codigo':19052, 'asignatura':'Fisica-1', 'creditos': 4, 'periodo1':4.3, 'periodo2':4.1, 'periodo3':3.0},
					{'codigo':19036, 'asignatura':'Geometría', 'creditos': 3, 'periodo1':4.0, 'periodo2':3.6, 'periodo3':3.8}],
				'20212':[
					{'codigo':20051, 'asignatura':'Calculo-1', 'creditos': 2, 'periodo1':4, 'periodo2':4.3, 'periodo3':3.5},
					{'codigo':20052, 'asignatura':'Fisica-1', 'creditos': 4, 'periodo1':4.3, 'periodo2':4.1, 'periodo3':3.0},
					{'codigo':20036, 'asignatura':'Introducción DB-1', 'creditos': 3, 'periodo1':4.0, 'periodo2':3.6, 'periodo3':3.8}]
			}
        };			
    },
    
    methods:{
		
	
    }
}
</script>
<template>
    <div class="contenedorTotal">
        <header class="contenedorHeader">
            <img class="contenedorHeader__imgLogo" src="../images/Logo.png" alt="logo">
            <div class="contenedorHeader__banner">
                <div class="contenedorHeader__filtro">
                    
                    <nav class="contenedorHeader__navegacion">
                        <a href="#" @click.prevent="cerrarSesion">Log out</a>
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
                    <router-link to="/informacion">Información Personal</router-link>
                    <router-link to="/registrar">Registrar Cursos</router-link>
                    <router-link to="/calificaciones">Ver Calificaciones</router-link>
                </div>
                <div class="menu_lateral__logout">
                    <a href="#" @click.prevent="cerrarSesion">Log out</a>
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
                                <option value=-1>Seleccione el Año</option>
                                <option v-for="i in anno" :key="i" :value="i">{{i}}</option>
                            </select>
                        </div>

                        <div>
                            <label for="semestre">Semestre</label>
                            <select name="semester" id="select_semester" v-model="sSemester">
                                <option value=-1>Seleccione el Semestre</option>
                                <option v-for="i in 2" :key="i" v-bind:value="i">{{i}}</option>                
                            </select>
                        </div>

                        <div>
                            <a class="boton_buscar" @click="buscarCalificaciones()">Buscar</a>
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
                                    
                                </tr>
                            </thead >
                            <tbody id="tabla">
                                
                                <tr v-for="k of this.arregloCalificaciones" :key="k">
                                    <td>{{k.codigo}}</td>
                                    <td>{{k.asignatura}}</td>
                                    <td>{{k.creditos}}</td>
                                    <td>{{k.periodo1}}</td>
                                    <td>{{k.periodo2}}</td>
                                    <td>{{k.periodo3}}</td>
                                    
                                </tr>
                            </tbody>

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
    </div>        
    
</template>

<style scoped>

        .contenedorTotal {
            margin: 0 auto;
            padding: 0;
            font-size: 62.5%;
            /* esto se hace para que 1rem = 10px*/
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
			font-size: 1.4rem;
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

        .ventana_cursos__seleccionadores label{
            font-size: 1.8rem;
        }
        #select_year, #select_semester{
            height: 2.5rem;
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
import CalificacionesService from "@/services/calificaciones.js"
export default {

	mounted(){
		
        //this.arregloCalificaciones=CalificacionesService.obtenerTodos();
        CalificacionesService.obtenerMaterias().then((respuesta)=>{
            if (respuesta.data) {
                //console.log(respuesta.data[0].asignatura);
                this.arregloGeneral=respuesta.data;
                
            }
        })
		
    },
    data(){
        return {
            arregloCalificaciones: [],
            arregloGeneral:[],
            cedula:'1241654276',
			anno: ['2016', '2017', '2018', '2019', '2020', '2021'],
			sAnno: -1,
			sSemester: -1,
            yS:'',
        };			
    },
    
    methods:{
        cerrarSesion(){
			localStorage.clear();
			this.$router.push({name: "Home"});
		},

		buscarCalificaciones() {
            
            if (this.sAnno === -1 || this.sSemester === -1) {
			 	alert("Debe seleccionar un año y un semestre");
			}else{
                this.arregloCalificaciones = [];
                this.yS =(String(this.sAnno) + String(this.sSemester));
                
                for (const key of this.arregloGeneral) {
                    
                     if (key.aSemestre === this.yS) {
                         this.arregloCalificaciones.push(key)
                     }
                   
                }

            }

            


            // console.log(this.arregloCalificaciones[20161][0].codigo);
            // console.log(this.arregloCalificaciones[20161][0].asignatura);
    
			// if (this.sAnno.value === "" || this.sSemester.value === "") {
			// 	alert("Debe seleccionar un año y un semestre");
			// } else {
			// 	console.log(this.sAnno.text);
			// 	console.log(this.sSemester.text);
			// 	this.lData = '20161'
			// 	console.log(lData.value);
			// 	//this.sAnno.value + this.sSemester.value;
			// 	for (let lectura of this.yearsSemester[lData]) {
			// 		lectura.notaFinal = (lectura.periodo1 + lectura.periodo2 + lectura.periodo3)/3
			// 		console.log(lectura.notaFinal);
			// 	}
			// }
			
		},
	
    }
}
</script>
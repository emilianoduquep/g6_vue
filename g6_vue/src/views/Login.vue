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
			text-align: center;
			margin-top: 120px;
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


		
		/** Formulario **/
		.titulo{
			color: #206A64;
			text-align: center;
			margin-top: 50px;
			margin-bottom: 50px;

		}
		.contenedor__formulario {
			width: 30rem;
			margin: 0 auto;

		}
		.formulario {
			height: 20rem;
			width:  100%;
			margin: 0 auto;
			font-size: 1.8rem;
			display:grid;
			grid-template-rows: 1fr 1fr;
			

		}
		.formulario__datos {
			display: grid;
			grid-template-columns: 1fr 2fr;
			background-color:#E5E0DC;
			padding: 1rem;
			border-radius: 1rem;
		}
		.formulario__label {
			font-size: 18px;
			margin: 2rem 0;
			text-align: center;
			
		}
		.formulario__input {
			margin: 2rem 2rem 2rem 0rem;

		}
		.ingresar {
			margin-top: 1.5rem;
			display: flex;
			justify-content: right;
			padding: 0;
			height: fit-content;
			
			
		}



		/** Footer **/
		.contenedorFooter {
			margin-top: 40px;
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

<template>
    <div class="contenedorTotal">
	<header class="contenedorHeader">
		<img class="contenedorHeader__imgLogo" src="../images/Logo.png" alt="">
		<div class="contenedorHeader__banner">
			<div class="contenedorHeader__filtro">
				
				<nav class="contenedorHeader__navegacion">
					<router-link to="/">Inicio</router-link>
					
				</nav>
	
				<h1>Universidad de las Tecnologias TIC</h1>
			</div>

		</div>
	</header>
	
	<section>
		<h3 class="titulo">Login</h3>
		<div class="contenedor__formulario">
			<form class="formulario" @submit="procesarDatos" action="#">
				<div class="formulario__datos">
					<label class="formulario__label" for="cedulaUsuario">C.C. Usuario</label>
					<input class="formulario__input" type="text" placeholder="Entra tu cédula" name="cedulaUsuario" id="cedulaUsuario" v-model="cedula" required>
					<label class="formulario__label" for="EntradaContraseña">Contraseña</label>
					<input class="formulario__input" type="password" placeholder="Password" v-model="password" required>
				</div>
				<div class="ingresar">
					<input type="submit" value="Ingresar" >	
				</div>
			</form>
		</div>
       

		
	</section>
	
	<footer>
		<!-- <img src="images/Banner.png" alt="Pie de pagina"> -->
		<div class="contenedorFooter">
			<div class="contenedorFooter__banner">
				<nav class="navegacion-footer">
					<router-link to="/">Inicio</router-link>
					
				</nav>
			</div>
		</div>
	</footer>
	
</div>
</template>

<script>
import LoginService from "@/services/login.js"
export default {

	mounted(){
        // ******** esto se hacia con los servicios ********
		//this.listaUsuarios = LoginService.obtenerTodos();
		
    },
    data(){
        return {
            cedula:'',
            password: '',
			listaUsuarios: [],		
        };			
    },
    
    methods:{
        procesarDatos(){

			LoginService.validar(this.cedula, this.password).then(
				(respuesta)=>{
					
					if (respuesta.data.id) {
						
						this.$router.push({name:"Informacion"});

					}else{

						alert("Verifique Usuario y Password otravez");

					}
				}
			);

			// ******** esto se hacia con los servicios ********

            // let validar = false;

			
            // for(const i of this.listaUsuarios) {

			// 	console.log(i);
					
            //     if (i.cc === this.cedula && i.pass === this.password) {  
            //         validar = true; 
            //     }
            // };    
            // if (validar === true) {
            //     alert('Cedula y password validos');
			// 	this.$router.push({name:"Informacion"});
            // }else{
            //     alert('la cedula o el password no coinciden');
            // }
        }
    }
}
</script>







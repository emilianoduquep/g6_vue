<style scoped>
	html {
	  font-family: 'Poppins', sans-serif;
	  font-size: 16px;
	  line-height: 1.2;
	}

	body {
	  margin: 0px;
	  padding: 0px;
	  font-size: 1rem;
	  font-weight: 400;
	  color: #FFFFFF;
	  text-align: left;
	  width: 1024px;
	  height: auto;
	}

	h1 {
		font-size: 2.5rem;
	}

	h2 {
		font-size: 2.03rem;
	}

	h3 {
		font-size: 1.5rem;
	}

	h5 {
		font-size: 1.3rem;
		margin: 0;
		font-weight: 700;
	}

	header {
		position: relative;	
		width: 100%;
		height: 205px;
	}

		header img {
			display: inline-block;
			width: 20%;
			height: 100%;
		}

		header div {
			display: inline-block;		
			width: 79.55%; /*Colocarle 80% genera que no haya suficiente espacio en linea como para que ambos elementos se mantengan al tiempo en la misma, sino que el segundo (banner), salte a la linea de abajo*/
			height: 100%;
			color: #FFFFFF;
			background-image: url(../images/Banner.png);
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
		}

			header h1 {
				position: absolute;
				margin: 0;
				top: 70%;
				left: 30%;
				text-align: right;
			}

			header nav {
				position: absolute;
				left: 78%;
				font-weight: 400;
			}
			
				header nav ul li {
					display: inline;
				}
				
					header nav ul li a:hover {								
						text-decoration: none;
						text-shadow:
							0 0 5px #fff,
							0 0 7px #fff,
							0 0 13px #fff;
					}
				
				header nav a:link {				
					color: #FFFFFF;
					text-decoration: none;
				}
				
				header nav a:visited {				
					color: #FFFFFF;
					text-decoration: none;
				}
				
	.mainWrapper {
		position: relative;/*Para posicionar <section> y <aside> con absolute; A raiz de un error, aun incomprendido, con la propiedad relative, errores descritos como el traslado de las cajas <aside> y <section> generando espacios blancos*/
		height: 700px;
		width: 100%;
	}

		aside {
			position: absolute;
			width: 28.22%;
			height: 100%;
			background-color: #C4C4C4;
		}

			aside h2 {
				position: relative;
				background-color: #E5E0DC;
				color: #000000;
				margin: 0;
				padding: 35px 0 15px;
				text-align: center;		
			}		
			
			aside h3 {
				position: relative;
				border-bottom: 1px solid #000;
				margin: 0;
				padding: 15px 0 0 10px;
				text-align: left;
			}
			
				aside h3 a:link {				
					color: #142727;
					text-decoration: none;
				}
					
				aside h3 a:visited {
					color: #142727;
					text-decoration: none;
				}

		section {
			position: absolute;
			left: 28.22%;
			width: 71.78%;
			height: 100%;
			background-color: #FFFFFF;
		}

			section h2 {
				margin: 0;
				text-align: center;
				color: #02AB9D;
				padding: 60px 0 15px;
			}		

			#infPerWrapper {
				background-color: #E5E0DC;
				border-radius: 10px;
				color: #000000;
				width: 80%;
				padding: 40px 5%;
				margin: 0 5%;
			}
			
				.infPerRow {
					width: 100%;
					height: 3.5rem;		
					display: block;
					position: relative;
				}
					
					.infPerRow p{/*Para mostrar la informacion*/
						margin: 0;
						padding: 0 0 0 1%;
						color: gray;
						font-size: 0.8rem;
						position: absolute;
						top: 55%;
					}
					
					/*
					.infPerRow input{Para mostrar la informacion
						margin: 0;
						padding: 1% 0 0 1%;					
						font-size: 0.8rem;
						position: absolute;
						top: 44.5%;
						color: black;
						background-color: #F4F9F7;
						text-align: left;
						border-color: rgba(0, 0, 0, 0.0);
						border-radius: 2.5px;					
					}
					
						.infPerRow input:focus {
							box-shadow: 1.5px 2.5px 1px #474747, -40px -40px 0px rgba(206,89,55,0);
							outline-color: #206A64;						
						}*/
				
					#entradaNombre {			
						float: left;
						width: 26.1%;
						height: 100%;
						margin: 0 4% 0 0;			
					}
					
					#entradaApellidos {
						float: left;
						width: 26.1%;
						height: 100%;
						margin: 0 4% 0 0;			
					}
					
					#documento {
						float: left;
						width: 27%;
						height: 100%;
						margin: 0 4% 0 0;			
					}
					
						#datWrapperTD {
							width: 18%;
							height: 1.5rem;
							background-color: #FFFFFF;
							border-radius: 5px;
							display: inline-block;
						}
						
							#datWrapperTD span {
								margin: 0;
								padding: 0 0 0 1%;
								color: gray;
								font-size: 0.8rem;
							}
					
						#datWrapperND {
							width: 78%;
							height: 1.5rem;
							background-color: #FFFFFF;
							border-radius: 5px;				
							display: inline-block;				
						}
						
							#datWrapperND span {
								margin: 0;
								padding: 0 0 0 1%;
								color: gray;
								font-size: 0.8rem;
							}
					
					#fechaNacimiento {
						float: left;
						width: 41.6%;
						height: 100%;
						margin: 0 4% 0 0;			
					}
					
					#edad {
						float: left;
						width: 10%;
						height: 100%;
						margin: 0 4% 0 0;			
					}
					
					#sexo {
						float: left;
						width: 14.3%;
						height: 100%;
						margin: 0 4% 0 0;			
					}
					
					#estado {
						float: left;
						width: 14.3%;
						height: 100%;
						margin: 0 4% 0 0;			
					}
					
					#direccion {
						float: left;
						width: 40%;
						height: 100%;
						margin: 0 4% 0 0;			
					}
					
					#municipio {
						float: left;
						width: 22%;
						height: 100%;
						margin: 0 4% 0 0;			
					}
					
					#barrio {
						float: left;
						width: 22%;
						height: 100%;
						margin: 0 4% 0 0;			
					}
					
					#telefono {
						float: left;
						width: 18.7%;
						height: 100%;
						margin: 0 4% 0 0;			
					}
					
					#entradaEmail {
						float: left;
						width: 33.5%;
						height: 100%;
						margin: 0 4% 0 0;			
					}
					
					#programa {
						float: left;
						width: 20%;
						height: 100%;
						margin: 0 4% 0 0;			
					}
					
					#semestre {
						float: left;
						width: 11%;
						height: 100%;
						margin: 0 4% 0 0;			
					}
					
						.datWrapper {
							width: 100%;
							height: 1.5rem;
							background-color: #FFFFFF;
							border-radius: 5px;
						}
						
							.datWrapper span {
								margin: 0;
								padding: 0 0 0 1%;
								color: gray;
								font-size: 0.8rem;								
							}
			
			.proInfo {
				text-align: center;
				color: #02AB9D;
				font-weight: 700;
				font-size: 1rem;
				margin: 60px 42.5% 20px;
				width: 15%;
				height: 25px;
				border-radius: 2.5px;			
			}

	footer {
		width: 100%;
		height: 110px;
		background-image: url(../images/Banner.png);
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}
</style>

<template>
	<header>
		<img src="images\Logo.png" alt="">
		<div>
			<!--<img src="images\Banner.png" alt="">-->
			<h1>Universidad de las Tecnologias TIC</h1>
			<nav>				
				<ul><!--Lista de vinculos de navegacion rapida a lo largo de la pagina-->
					<li><a href="contacto.html">Contactenos</a> | </li>
					<li><a href="index.html">Log out</a></li>
				</ul>				
			</nav>
		</div>	
	</header>
	
	<div class="mainWrapper">
		<aside>
			<h2>Menú</h2>
			<h3><a href="informacionPersonal.html">Información Personal</a></h3>
			<h3><a href="registrarCursos">Registrar Cursos</a></h3>
			<h3><a href="verCursos">Ver Calificaciones</a></h3>
		</aside>
		
		<section>
			<h2>Información General</h2>
			<form>
				<div id="infPerWrapper">
					<div class="infPerRow">
						<div id="entradaNombre">
							<h5>Nombre(s)</h5>
							<div class="datWrapper">
								<span>{{listaUsuarios[cedula].nombres}}</span>
							</div>
						</div>
						
						<div id="entradaApellidos">
							<h5>Apellidos</h5>
							<div class="datWrapper">
								<span>{{listaUsuarios[cedula].apellidos}}</span>
							</div>
						</div>
												
						<div id="documento">
							<h5>Documento</h5>
							<div id="datWrapperTD">
								<span>{{listaUsuarios[cedula].tdocumento}}</span>
							</div>
							<div id="datWrapperND">
								<span>{{listaUsuarios[cedula].documento}}</span>
							</div>
						</div>
					</div>
					
					<div class="infPerRow">
						<div id="fechaNacimiento">
							<h5>Fecha de Nacimiento</h5>
							<div class="datWrapper">
								<span>{{listaUsuarios[cedula].fechaNacimiento}}</span>
							</div>
						</div>
						
						<div id="edad">
							<h5>Edad</h5>
							<div class="datWrapper">
								<span>{{listaUsuarios[cedula].edad}}</span>
							</div>
						</div>
												
						<div id="sexo">
							<h5>Sexo</h5>
							<div class="datWrapper">
								<span>{{listaUsuarios[cedula].sexo}}</span>
							</div>
						</div>
						
						<div id="estado">
							<h5>Estado</h5>
							<div class="datWrapper">
								<span>{{listaUsuarios[cedula].estado}}</span>
							</div>
						</div>
					</div>
					
					<div class="infPerRow">
						<div id="direccion">
							<h5>Dirección</h5>
							<div class="datWrapper">
								<span>{{listaUsuarios[cedula].direccion}}</span>
							</div>
						</div>
						
						<div id="municipio">
							<h5>Municipio</h5>
							<div class="datWrapper">
								<span>{{listaUsuarios[cedula].municipio}}</span>
							</div>
						</div>
												
						<div id="barrio">
							<h5>Barrio</h5>
							<div class="datWrapper">
								<span>{{listaUsuarios[cedula].barrio}}</span>
							</div>
						</div>
					</div>
					
					<div class="infPerRow">
						<div id="telefono">
							<h5>Telefono</h5>
							<div class="datWrapper">
								<span>{{listaUsuarios[cedula].telefono}}</span>
							</div>
						</div>
						
						<div id="entradaEmail">
							<h5>Email</h5>
							<div class="datWrapper">
								<span>{{listaUsuarios[cedula].email}}</span>
							</div>
						</div>
												
						<div id="programa">
							<h5>Programa</h5>
							<div class="datWrapper">
								<span>{{listaUsuarios[cedula].programa}}</span>
							</div>
						</div>
						
						<div id="semestre">
							<h5>Sem</h5>
							<div class="datWrapper">
								<span>{{listaUsuarios[cedula].semestre}}</span>
							</div>
						</div>						
					</div>
				</div>
				
			</form>
		</section>
	</div>
	
	<footer>
	</footer>
</template>

<script>
export default {

	mounted(){
		
    },
    data(){
        return {
            cedula:'1241654276',//Variable a la espera de la comunicacion entre paginas
			listaUsuarios: {//Variable a la espera de la comunicacion entre paginas
				'1241654276':{'nombres':'Ana Milena', 'apellidos':'Guzman Arrieta', 'tdocumento':'CC', 'documento':'1241654276', 'fechaNacimiento':'08/09/1995', 'edad':26, 'sexo':'Femenino', 'estado':'Activo', 'direccion':'Dg. 21 ##49-112', 'municipio':'Cartagena', 'barrio':'Alto Bosque', 'telefono':'3147821341', 'email':'Ana.Guzman@MTic.edu.co', 'programa':'Ing. Industrial', 'semestre':3},
			}
        };			
    },

    methods:{

    }
}
</script>







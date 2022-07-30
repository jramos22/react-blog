import React, { Component } from 'react';
import Logo from '../assets/images/logo.svg';
class Header extends Component {
	render() {
		return (
			<>
				<header id="header">
					<div className="center">
						{/* Logo */}
						<div id="logo">
							<img
								src={Logo}
								className="app-logo"
								alt="Logotipo"
							/>
							<span id="brand">
								<strong>Blog</strong>React
							</span>
						</div>
						{/* Menu */}
						<nav id="menu" className="clearfix">
							<ul>
								<li>
									<a href="index.html">Inicio</a>
								</li>
								<li>
									<a href="blog.html">Blog</a>
								</li>
								<li>
									<a href="formulario.html">Formulario</a>
								</li>
								<li>
									<a href="#">Pagina 1</a>
								</li>
								<li>
									<a href="#">Pagina 2</a>
								</li>
							</ul>
						</nav>
						{/* Limpiar lo flotado--> 
            <!--<div class="clearfix"></div>-->*/}
					</div>
				</header>
			</>
		);
	}
}
export default Header;

import React, { Component } from 'react';

class Sidebar extends Component {
	render() {
		return (
			<>
				<aside id="sidebar" className="clearfix">
					<div id="nav-blog" className="sidebar-item">
						<h3>Puedes hacer esto</h3>
						<a href="#" className="btn btn-success">
							Crear Articulo
						</a>
					</div>

					<div id="search" className="sidebar-item">
						<h3>buscador</h3>
						<p>Encuentra el articulo que buscabas</p>
						<form>
							<input type="text" name="search" />
							<input
								type="submit"
								name="submit"
								value="Buscar"
								className="btn"
							/>
						</form>
					</div>
				</aside>
			</>
		);
	}
}
export default Sidebar;

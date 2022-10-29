import React,{Component} from "react";

class Sidebar extends Component{
    render(){
        return(
            <aside id="sidebar" >
                <div id="nav-blog" class="sidebar-item">
                    <h3>Complemente su compra </h3>
                    <a href="#" class="btn btn-success">Crear articulo</a>
                </div>

                <div id="search" class="sidebar-item">
                    <h3>Buscador</h3>
                    <p>Encuentra el articulo que buscas</p>

                    <from> 
                        <input type="text" name="search"></input>
                        <input type="submit" name="submit" value="Buscar" class="btn"></input>
                    </from>   
                </div>
            </aside>
        );
    }
}

export default Sidebar;
import './menu.css';

    //const menuStyle = {
    //    backgroundColor: '#333',
    //    padding: '10px'
    //}

const Menu = () => {
 

    return ( //todo lo que este dentro de estos parentesis se va a renderizar//
        <div className="menu">
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Acerca de</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Contacto</a></li> 
            </ul>
        </div>
    )
}

export default Menu; 
import { NavLink } from "react-router-dom";
// Los componentes NavLink se utilizan en React Router para crear enlaces de navegación que automáticamente aplicarán una clase cuando estén activos (es decir, cuando la ruta actual coincida con la ruta definida en el enlace).

const Navbar = () => {
  //Aqui agregamos los estilos a los nombres de las paginas aqui es donde ponemos una linea debajo a un espacio de 4
  const activeStyle = 'underline underline-offset-4'
  
  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light">
      {/* Navegación izquierda */}
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink 
          to="/"
          >Shopi</NavLink>
        </li>
        <li>
          <NavLink 
          to="/"
          className={({isActive}) =>
            isActive ? activeStyle: undefined
          }
          >All</NavLink>
        </li>
        <li>
          <NavLink 
          to="/Clothes"
          className={({isActive}) =>
            isActive ? activeStyle: undefined
          }
          >Clothes</NavLink>
        </li>
        <li>
          <NavLink 
          to="/Electronics"
          className={({isActive}) =>
          isActive ? activeStyle: undefined
          }
          >Electronics</NavLink>
        </li>
        <li>
          <NavLink 
          to="/Furniture"
          className={({isActive}) =>
          isActive ? activeStyle: undefined
          }>Furniture</NavLink>
        </li>
        <li>
          <NavLink 
            to="/Toys"
            className={({isActive}) =>
          isActive ? activeStyle: undefined
          }>Toys
        </NavLink>
        </li>
        <li>
          <NavLink 
          to="/Others"
          className={({isActive}) =>
          isActive ? activeStyle: undefined
          }>Others</NavLink>
        </li>
      </ul>

      {/* Navegación derecha */}
      <ul className="flex items-center gap-3">
        <li className='text-black/60'>
          Drend 🦇
        </li>
        <li>
          <NavLink 
          to="/my-orders"
          className={({isActive}) =>
            isActive ? activeStyle: undefined
          }>My Orders</NavLink>
        </li>
        <li>
          <NavLink 
          to="/my-account"
          className={({isActive}) =>
            isActive ? activeStyle: undefined
          }>My Account</NavLink>
        </li>
        <li>
          <NavLink 
          to="/"
          className={({isActive}) =>
            isActive ? activeStyle: undefined
          }>Sign In</NavLink>
        </li>
        <li>🚛0</li>
      </ul>
    </nav>
  );
};
export default Navbar;

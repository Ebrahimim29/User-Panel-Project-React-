import {NavLink} from "react-router";

const SidebarItem = ({to,children}) => {

    return (
      <li>
        <NavLink 
        to={to} 
        className={({isActive}) => `block hover:bg-black-100 p-2 rounded w-full h-full 
        ${isActive ? "bg-red-400" : ""}`}
        >
          {children}
        </NavLink>
      </li>
    );
  }

  export default SidebarItem;
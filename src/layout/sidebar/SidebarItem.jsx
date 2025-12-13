import {NavLink} from "react-router";

const SidebarItem = ({to,children}) => {

    return (
      <li>
        <NavLink 
        to={to} 
        className={({isActive}) => `block hover:bg-amber-200 dark:hover:bg-gray-700 dark:text-white p-2 rounded w-80% h-full 
        ${isActive ? "bg-red-400 dark:bg-gray-800" : ""}`}
        >
          {children}
        </NavLink>
      </li>
    );
  }

  export default SidebarItem;
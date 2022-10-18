import { NavLink } from "react-router-dom";
import { protectedLinks, publicLinks } from "./links";

export default function Nav() {
  return (
    <nav className="flex justify-between items-center text-lg m-auto max-w-6xl">
      <div className="flex justify-between items-center capitalize space-x-4 w-fit">
        {protectedLinks.map((link) => {
          const { id, name, path } = link;
          return (
            <NavLink
              key={id}
              to={path}
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              {name}
            </NavLink>
          );
        })}
      </div>
      <div className="flex justify-between items-center capitalize space-x-4">
        {publicLinks.map((link) => {
          const { id, name, path } = link;
          return (
            <NavLink
              key={id}
              to={path}
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              {name}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}

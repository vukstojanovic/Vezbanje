import { NavLink } from "react-router-dom";
import { protectedLinks, publicLinks } from "./links";
import useDeleteAccessTokenMutation from "../../pages/Auth/api/logoutUser";
import useMyDataQuery from "../../pages/Auth/api/getMyData";
import { useAuth } from "../../providers/authProvider";

export default function Nav() {
  const deleteAccessTokenMutation = useDeleteAccessTokenMutation();
  const { data, isError, isLoading } = useMyDataQuery();
  const isLogged = !isError && !isLoading;
  // const { user, logout } = useAuth();

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
        {!isLogged ? (
          publicLinks.map((link) => {
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
          })
        ) : (
          <span
            className="cursor-pointer"
            onClick={deleteAccessTokenMutation.mutate}
          >
            Logout
          </span>
        )}
      </div>
    </nav>
  );
}

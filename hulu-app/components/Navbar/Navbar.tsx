import requestObject from "../../utils/requests";

export default function Navbar() {
  return (
    <nav className="flex justify-between m-5 overflow-x-auto overflow-y-hidden whitespace-nowrap">
      {Object.entries(requestObject).map(([fetchName, { title, url }]) => {
        return (
          <span className="cursor-pointer text-2xl mx-5 hover:text-white hover:scale-125 duration-100 last:pr-5">
            {title}
          </span>
        );
      })}
    </nav>
  );
}

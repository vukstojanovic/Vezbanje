import Link from "next/link";

export default function Nav() {
  const links = [
    {
      title: "Home",
      route: "/",
    },
    {
      title: "Public",
      route: "/public",
    },
    {
      title: "Private",
      route: "/private",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        border: "2px solid black",
        background: "gold",
      }}
    >
      {links.map((link) => {
        const { title, route } = link;
        return (
          <Link href={route}>
            <span
              style={{
                margin: "8px",
                fontWeight: "bold",
                color: "black",
                cursor: "pointer",
              }}
            >
              {title}
            </span>
          </Link>
        );
      })}
    </div>
  );
}

import Nav from "../Nav/Nav";

export default function Layout({ children }) {
  return (
    <div className="min-h-[100vh] flex flex-col">
      <header className="bg-gold py-3 px-12">
        <Nav />
      </header>
      <main className="flex-1 p-8">
        <div className="m-auto max-w-6xl">{children}</div>
      </main>
    </div>
  );
}

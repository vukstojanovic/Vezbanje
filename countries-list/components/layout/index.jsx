import Header from "../header";
import Footer from "../footer";

function Layout({ children }) {
  return (
    <div className="container">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;

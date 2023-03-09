import Navigation from "components/Navigation/Navigation";
import Footer from "components/Footer/Footer";

const MainTemplate = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default MainTemplate;

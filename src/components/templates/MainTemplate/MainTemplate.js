import Navigation from "components/organisms/Navigation/Navigation";
import Footer from "components/organisms/Footer/Footer";

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

import Navigation from "components/Header/Navigation";

const MainTemplate = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};

export default MainTemplate;

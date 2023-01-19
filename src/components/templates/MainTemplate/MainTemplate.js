import Navigation from "components/Navigation/Navigation";

const MainTemplate = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};

export default MainTemplate;

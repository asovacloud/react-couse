const Header = ({ title }) => {
  return (
    <div id="header">
      <div className="header-logo">
        <img src="./investment-calculator-logo.png" alt="Logo" />
      </div>
      <h1>{title}</h1>
    </div>
  );
};

export default Header;

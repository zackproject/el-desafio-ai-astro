
export const NavbarComponent = (props) => {
  const { children } = props;
  return (
    <nav style={{ display: "flex", gap: "10px", justifyContent: "space-between" }}>
      <div>
        <a href="/" title="Volver a la página principal inicio">
          <img src="./home.png" height="40" width="40" alt="Inicio" />
        </a>
      </div>
      {/* <slot /> */}
      {children}
    </nav>
  );
};
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-section">
        <div className="logo-circle">
          <i className="fa-solid fa-building-columns"></i>
        </div>

        <h2>MySaveMate</h2>
      </div>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Savings</a>
        <a href="#">Goals</a>
        <a href="#">Accounts</a>
      </div>

      <div className="nav-right">
        <i className="fa-regular fa-bell"></i>
        <div className="profile-circle">
  <i className="fa-solid fa-user"></i>
</div>
      </div>
    </nav>
  );
}

export default Navbar;
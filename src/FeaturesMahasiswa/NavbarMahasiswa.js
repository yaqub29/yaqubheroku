function Navbar() {
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
        <div className="container-fluid ">
          <h1 className="text-right">
            FAKULTAS TEKNIK APP
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar;
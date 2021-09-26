import React from 'react';

const Header = () => {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <span className="navbar-brand">Hire Speaker</span>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                  <li className="nav-item">
                    <span className="nav-link active" aria-current="page">
                      Home
                    </span>
                  </li>

                  <li className="nav-item">
                    <span className="nav-link">Contact Us</span>
                  </li>
                  
                  <li className="nav-item">
                    <span className="nav-link">Privacy Policy</span>
                  </li>

                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
};

export default Header;
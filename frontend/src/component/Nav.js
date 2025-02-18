import React from "react";
import { Link } from "react-router-dom";
import ThreeD from "../assets/Frame (1).png";
import Credit from "../assets/Frame (2).png";
import "./Nav.css";

function Nav() {
  return (
    <nav
      className="navbar navbar-dark py-2 px-3 fixed"
      style={{ background: "#0d131f", borderBottom: "1px solid #E5E7EB" }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img
            src={ThreeD}
            alt="Logo"
            width="20"
            height="20"
            style={{
              filter:
                "invert(42%) sepia(82%) saturate(529%) hue-rotate(295deg) brightness(92%) contrast(88%)",
            }}
          />
        </Link>

        {/* Connect Wallet Button */}
        <button
          className="btn rounded-pill d-flex align-items-center border-0 text-white"
          style={{
            fontSize: "15px",
            background: "linear-gradient(90deg, #EC4899 0%, #8B5CF6 100%)",
          }}
          type="button"
        >
          <img
            src={Credit}
            alt="Wallet Icon"
            width="20"
            height="20"
            className="me-2"
            style={{ filter: "invert(1)" }}
          />
          Connect Wallet
        </button>
      </div>
    </nav>
  );
}

export default Nav;

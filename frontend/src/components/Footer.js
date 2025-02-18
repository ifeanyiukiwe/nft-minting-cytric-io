import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#0d131f",
        color: "#fff",
        textAlign: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        // marginTop: "30px",
      }}
    >
      <p style={{ margin: "0", fontSize: "14px" }}>
        All Rights Reserved <span>&#169;</span> 2025 &nbsp;{" "}
        <span style={{ fontWeight: "bold" }}>Ethereum Experience</span> &nbsp;
        Cytric
      </p>
    </footer>
  );
};

export default Footer;

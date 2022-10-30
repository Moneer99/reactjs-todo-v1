import React from "react";

function Footer() {
  return (
    <footer>
      <p style={footerStyle}>
        This app made by{" "}
        <a href="https://moneer99.github.io/moneer_Resume/">Moneer Salmeen</a>
      </p>
    </footer>
  );
}

const footerStyle = {
  textAlign: "center",
  marginTop: "3rem",
  fontSize: "0.9rem",
  color: "#999999",
};

export default Footer;

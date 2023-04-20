import { year } from "../../utils/data";

import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <p>
          Copyright © <strong>{year}</strong> All rights reserved
          <span style={{ color: "#22A39F" }}>|</span> This Protofolio is made
          with <span style={{ color: "#22A39F" }}>❤ </span>by Mohamed
        </p>
      </div>
    </footer>
  );
};

export default Footer;

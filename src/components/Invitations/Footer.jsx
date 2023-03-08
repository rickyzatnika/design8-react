import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex items-center border-t border-white bg-black justify-center w-full h-full py-4 antialiased text-sm text-zinc-300">
      <Link to="https://webhouse.webqodes.com" target="_blank">
        PoweredBy : WebHouse_Invitation
      </Link>
    </div>
  );
};

export default Footer;

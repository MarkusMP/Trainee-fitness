import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FooterPayload } from "types";

const Footer = ({
  data: { copyright, email, number },
}: {
  data: FooterPayload;
}) => {
  return (
    <footer className="border-t sm:flex text-center justify-around py-8 items-center text-gray border-gray">
      <div>
        <p>{copyright && copyright}</p>
      </div>
      <div className="flex flex-col ">
        {email && (
          <p className="flex items-center justify-center pb-2">
            <AiOutlineMail className="text-primary" size={18} />
            <span className="pl-2">{email && email}</span>
          </p>
        )}
        {number && (
          <p className="flex items-center flex-start sm:justify-start justify-center pt-2">
            <FaPhoneAlt className="text-primary" size={18} />
            <span className="pl-2">{number && number}</span>
          </p>
        )}
      </div>
    </footer>
  );
};

export default Footer;

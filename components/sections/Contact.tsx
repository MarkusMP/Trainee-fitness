import React from "react";
import { contactPayload } from "types";
import { MdPlace } from "react-icons/md";

const Contact = ({
  btnText,
  locationName,
  locationUrl,
  title,
  titleTwo,
}: contactPayload) => {
  return (
    <section id="contact" className="py-20 w-full">
      <div className="px-6 flex flex-col md:flex-row justify-center mx-auto container">
        <div style={{ maxWidth: "30rem" }} className="m-auto md:m-0 grow">
          <h2 className="text-4xl font-bold pt-2 pb-4">{title && title}</h2>
          <form className="flex flex-col">
            <input
              className="border border-gray placeholder-p my-3 p-4"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
            />
            <input
              type="email"
              className="border border-gray placeholder-p my-3 p-4"
              name="email"
              id="email"
              placeholder="Email"
            />
            <textarea
              name="message"
              className="border border-gray placeholder-p my-3 p-4"
              id="messsage"
              placeholder="Message"
            />
            <button className="w-full bg-dark text-white py-4 mt-2">
              {btnText && btnText}
            </button>
          </form>
        </div>
        <div
          className="md:ml-24 pt-6 md:pt-0 grow m-auto md:m-0 "
          style={{ maxWidth: "28rem" }}
        >
          <div>
            <h2 className="text-4xl font-bold pt-2 pb-4">
              {titleTwo && titleTwo}
            </h2>
            <p className="flex text-lg text-p pb-10">
              <MdPlace className="text-primary" size={28} />{" "}
              {locationName && locationName}
            </p>
          </div>
          {locationUrl && (
            <div className="pt-8 border-t-2 border-gray">
              <iframe
                src={locationUrl}
                style={{ maxWidth: "450px" }}
                className="w-full h-full"
                frameBorder="0"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;

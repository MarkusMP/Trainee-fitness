import ImageBox from "components/shared/ImageBox";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { AboutItem, AboutPayload } from "types";

const About = ({ description, list, title }: AboutPayload) => {
  return (
    <section id="about" className="py-20 bg-aboutBg">
      <div className="px-6 container lg:flex justify-center items-center mx-auto">
        <div style={{ maxWidth: "26rem" }} className="pt-2 md:m-auto lg:m-1">
          <h2 className="text-4xl font-bold pb-6">{title && title}</h2>
          <p className="text-p text-lg pb-8">{description && description}</p>
        </div>
        <div className="md:flex md:justify-center">
          {list &&
            list.map((trainer: AboutItem) => (
              <div
                className="drop-shadow-lg py-6 md:px-6 md:w-80"
                key={trainer._key}
              >
                <ImageBox
                  image={trainer.image}
                  alt={trainer.image.alt}
                  classesWrapper="aspect-[1/1] h-4/2 relative "
                  width={600}
                  height={600}
                />

                <div className="flex justify-between py-6 px-6 bg-white h-28">
                  <div>
                    <h3 className="text-3xl font-bold">{trainer.name}</h3>
                    <p>{trainer.description}</p>
                  </div>
                  <div>
                    {trainer.social &&
                      trainer.social.map((item: any) => (
                        <li className="nav-item lg:ml-2 m-auto" key={item._key}>
                          <a
                            href={`${item?.url}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={
                              (item?.media === "facebook" && "facebook") ||
                              (item?.media === "instagram" && "instagram") ||
                              (item?.media === "twitter" && "twitter") ||
                              (item?.media === "linkedin" && "linkedin") ||
                              ((item?.media === "youtube" &&
                                "youtube") as string)
                            }
                            className="px-1 py-1 flex items-center text-base uppercase text-base leading-snug text-p hover:text-primary transition-all"
                          >
                            {item?.media === "facebook" && <FaFacebook />}
                            {item?.media === "instagram" && <FaInstagram />}
                            {item?.media === "twitter" && <FaTwitter />}
                          </a>
                        </li>
                      ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default About;

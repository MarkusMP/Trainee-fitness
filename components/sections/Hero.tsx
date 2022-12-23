import ImageBox from "components/shared/ImageBox";
import Link from "next/link";
import React from "react";
import { HeroPayload } from "types";

const Hero = ({
  btnText,
  btnTextTwo,
  description,
  image,
  title,
  linkTwo,
  link,
}: HeroPayload) => {
  return (
    <section
      id="hero"
      className="flex justify-center items-center relative min-h-screen w-full overflow-hidden "
    >
      <ImageBox
        image={image}
        alt={image.alt}
        classesWrapper="aspect-[16/9] w-full absolute h-full z-[1]"
        priority={true}
        isFill={true}
      />

      <div className="flex z-[2] flex-col justify-center items-center min-h-screen w-full bg-dark bg-opacity-80">
        <div className="container mx-auto px-6 flex justify-center">
          <div className="max-w-xl">
            <p className=" text-center text-lg sm:text-2xl text-gray">
              {description && description}
            </p>
            <h1 className="text-center py-6 text-4xl sm:text-5xl text-white font-bold drop-shadow-lg uppercase">
              {title && title}
            </h1>
            <div className="text-center pt-6 flex flex-col sm:flex-row justify-center">
              {btnText && link.slug && link.slug.startsWith("/#") ? (
                <a
                  href={`${link.slug}`}
                  className="text-white mx-3 hover:text-primary transition-all uppercase py-4"
                >
                  {btnText}
                </a>
              ) : (
                <Link
                  href={`${link.slug}`}
                  className="text-white mx-3 hover:text-primary transition-all uppercase py-4"
                >
                  {btnText}
                </Link>
              )}

              {btnTextTwo && linkTwo.slug && linkTwo.slug.startsWith("/#") ? (
                <a
                  href={`${linkTwo.slug}`}
                  className="mx-auto sm:mx-3 max-w-fit text-primary border border-primary px-6 py-4 hover:bg-white hover:border-transparent uppercase transition-all"
                >
                  {btnTextTwo}
                </a>
              ) : (
                <Link
                  href={`${linkTwo.slug}`}
                  className="mx-auto sm:mx-3 max-w-fit text-primary border border-primary px-6 py-4 hover:bg-white hover:border-transparent uppercase transition-all"
                >
                  {btnTextTwo}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

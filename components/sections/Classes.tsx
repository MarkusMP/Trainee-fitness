import ImageBox from "components/shared/ImageBox";
import React from "react";
import { ClassesItem, classesPayload } from "types";

const Classes = ({ description, list, title }: classesPayload) => {
  return (
    <section id="classes" className="py-20 px-6 mx-auto container">
      <div className="text-center pt-2">
        <h3 className="text-gray text-2xl">{description && description}</h3>
        <h2 className="text-4xl font-bold pt-2">{title && title}</h2>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
          {list &&
            list.map((classEl: ClassesItem) => (
              <div
                className="drop-shadow-lg py-6 m-auto w-full"
                style={{ maxWidth: "22rem" }}
                key={classEl._key}
              >
                <ImageBox
                  image={classEl.image}
                  alt={classEl.image.alt}
                  classesWrapper="aspect-[1/1] h-4/2 relative object-contain"
                  width={600}
                  height={600}
                />
                <div
                  className="bg-white py-6 px-6"
                  style={{ minHeight: "11rem" }}
                >
                  <div className="flex justify-between relative">
                    <div className="text">
                      <h3 className="text-3xl font-bold">{classEl.title}</h3>
                      <span>{classEl.subTitle && classEl.subTitle}</span>
                    </div>
                    <div className="bg-primary flex items-center text-white p-4 right-0 rounded-full absolute ">
                      <span className="font-bold ">{classEl.price}</span>
                    </div>
                  </div>
                  <p className="pt-4">{classEl.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;

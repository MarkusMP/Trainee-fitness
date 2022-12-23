"use client";
import Modal from "components/shared/Modal";
import React, { useState } from "react";
import { FeatureItem, FeaturePayload } from "types";

const Feature = ({
  btnText,
  description,
  list,
  title,
  titleTwo,
}: FeaturePayload) => {
  const [showModal, setShowModal] = useState(false);

  const setModal = (boolean: boolean) => {
    setShowModal(boolean);
  };

  return (
    <section id="feature" className="bg-dark text-white pt-6 flex flex-col ">
      <div className="py-20 flex justify-center flex-col md:flex-row mx-auto">
        <div className="px-6 container md:max-w-lg">
          <h2 className="text-4xl font-bold pb-6">{title && title}</h2>
          <p className="text-xl pb-8 text-2xl">{description && description}</p>
          <button
            className="rounded uppercase bg-primary w-full py-4 hover:bg-white hover:text-primary transition-all"
            onClick={() => setShowModal(true)}
          >
            {btnText && btnText}
          </button>
        </div>
        <div className="px-6 container md:border-link border-l-2 pt-6 md:pt-0 border-transparent w-fit ">
          <h2 className="text-4xl font-bold pb-6">{titleTwo && titleTwo}</h2>
          <div className="flex flex-col">
            {list &&
              list.map((time: FeatureItem) =>
                !time.description ? (
                  <strong className="pb-4 pr-4" key={time._key}>
                    {time.title}
                  </strong>
                ) : (
                  <div key={time._key} className="pb-2 pr-4">
                    <strong>{time.title}</strong>
                    <p className="text-p">{time.description}</p>
                  </div>
                )
              )}
          </div>
        </div>
      </div>
      <Modal setShowModal={setModal} showModal={showModal} />
    </section>
  );
};

export default Feature;

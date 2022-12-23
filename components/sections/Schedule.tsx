import React from "react";
import { ScheduleList, ScheduleListItem, SchedulePayload } from "types";

const Schedule = ({ description, list, title }: SchedulePayload) => {
  return (
    <section id="schedule" className="bg-dark text-white py-20">
      <div className="px-6 container mx-auto">
        <div className="text-center pt-2">
          <h3 className="text-2xl text-gray">{description && description}</h3>
          <h2 className="text-4xl pt-2 text-bold">{title && title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container m-auto ">
          {list &&
            list.map((item: ScheduleList) => (
              <div
                className="w-full pt-6 mx-auto"
                style={{ maxWidth: "10rem" }}
                key={item._key}
              >
                <h2 className="text-2xl font-bold pb-2">
                  {item.title && item.title}
                </h2>
                {item.list ? (
                  item.list.map((el: ScheduleListItem) => (
                    <div className="border-t pr-2 pt-2 pb-2" key={el._key}>
                      <p className="text-lg">{el.title && el.title}</p>
                      <p className="text-gray">
                        {el.description && el.description}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="border-t pr-2 pt-2 pb-2">
                    <p className="text-gray">No schedule for the day.</p>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;

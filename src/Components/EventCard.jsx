import React from "react";
import { Link } from "react-router-dom";

export default function EventCard({ id, date, location, heading, img }) {
  const { month, year } = date;
  return (
    <>
    <Link to={`/events/${id}`} >
      <div className="flex items-center p-11 align-center justify-center ">
        <div className=" shadow-2xl flex justify-between w-[600px] rounded-xl">
          <div className="p-4 flex flex-col align-center w-[250px] justify-center">
            <h3 className="font-bold text-2xl m-4">{heading}</h3>
            <p className="my-6 font-semibold text-lg">{location}</p>
            <p className="font-semibold text-lg">
              <span className="mt-5">{date.month}</span>
              <span className="ml-1 mt-5"> {date.year}</span>
            </p>
          </div>
          <div className="flex align-center justify-end p-9">
            <img className="rounded-md h-64" src={img} />
          </div>
        </div>
      </div>
    </Link>
    </>
  );
}

import React, { useEffect, useState } from "react";
import Event from "./Event";

const EventSchedule = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("../../../public/eventsSchedule.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div className="bg-[#0F2441] py-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-blue-600 mb-8 text-center">
          Program Events Schedule
        </h2>
        <div>
          {events.map((event) => (
            <Event key={event.id} event={event}></Event>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventSchedule;

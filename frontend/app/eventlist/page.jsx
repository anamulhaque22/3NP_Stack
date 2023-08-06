import { useEffect, useState } from "react";

const EventList = () => {
  const [eventList, setEventList] = useState([]);
  useEffect(() => {
    const fetchEventList = async () => {
      try {
        const result = await axios.get("http://localhost:4000/event");
        setEventList(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEventList();
  }, []);
  return (
    <div>
      <h1>Event list page</h1>
    </div>
  );
};

export default EventList;

import React, { useState, useEffect, useRef } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "axios";
import "./Calender.css";

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventTitle, setEventTitle] = useState("");
  const [eventStartTime, setEventStartTime] = useState("");
  const [eventEndTime, setEventEndTime] = useState("");
  const [selectEvent, setSelectEvent] = useState(null);
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const modalRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authHeader = localStorage.getItem('authHeader'); // Retrieve auth header
        const response = await axios.get(
          "https://cmti-edge.online/smddc/calendar.php",
          {
            headers: {
              'Authorization': authHeader,
            },
          }
        );
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchData();
  }, []);

  const handleSelectSlot = (slotInfo) => {
    setShowModal(true);
    setSelectedDate(slotInfo.start);
    setSelectEvent(null);
  };

  const handleSelectedEvent = (event) => {
    setShowModal(true);
    setSelectEvent(event);
    setEventTitle(event.title);
    setSelectedDate(event.startDateTime);
  };

  const saveEvent = async () => {
    if (eventTitle.trim() && selectedDate && eventStartTime && eventEndTime) {
      try {
        const authHeader = localStorage.getItem('authHeader'); // Retrieve auth header
        const startDateTime = moment(selectedDate)
          .set({
            hour: moment(eventStartTime, "HH:mm").get("hour"),
            minute: moment(eventStartTime, "HH:mm").get("minute"),
          })
          .format("YYYY-MM-DDTHH:mm");

        const endDateTime = moment(selectedDate)
          .set({
            hour: moment(eventEndTime, "HH:mm").get("hour"),
            minute: moment(eventEndTime, "HH:mm").get("minute"),
          })
          .format("YYYY-MM-DDTHH:mm");

        const newEvent = {
          title: eventTitle,
          startDateTime: startDateTime,
          endDateTime: endDateTime,
        };

        if (selectEvent) {
          // Update existing event
          newEvent.id = selectEvent.id;
          await axios.put(
            `https://cmti-edge.online/smddc/calendar.php`,
            newEvent,
            {
              headers: {
                'Authorization': authHeader,
              },
            }
          );
        } else {
          // Create new event
          await axios.post(
            "https://cmti-edge.online/smddc/calendar.php",
            newEvent,
            {
              headers: {
                'Authorization': authHeader,
              },
            }
          );
        }

        const response = await axios.get(
          "https://cmti-edge.online/smddc/calendar.php",
          {
            headers: {
              'Authorization': authHeader,
            },
          }
        );
        setEvents(response.data);
        setShowModal(false);
        setEventTitle("");
        setSelectEvent(null);
        setEventStartTime("");
        setEventEndTime("");
      } catch (error) {
        if (error.response && error.response.status === 403) {
          setErrorMessage("You don't have access to modify the Calendar. Ask permission from the supervisor.");
        } else {
          console.error("Error saving event:", error);
        }
      }
    }
  };

  const deleteEvent = async () => {
    if (selectEvent) {
      try {
        const authHeader = localStorage.getItem('authHeader'); // Retrieve auth header
        await axios.delete(
          `https://cmti-edge.online/smddc/calendar.php?id=${selectEvent.id}`,
          {
            headers: {
              'Authorization': authHeader,
            },
          }
        );

        const response = await axios.get(
          "https://cmti-edge.online/smddc/calendar.php",
          {
            headers: {
              'Authorization': authHeader,
            },
          }
        );
        setEvents(response.data);
        setShowModal(false);
        setEventTitle("");
        setEventStartTime("");
        setEventEndTime("");
        setSelectEvent(null);
      } catch (error) {
        if (error.response && error.response.status === 403) {
          setErrorMessage("You don't have access to modify the Calendar. Ask permission from the supervisor.");
        } else {
          console.error("Error deleting event:", error);
        }
      }
    }
  };

  const eventStyleGetter = (event) => {
    let style = {
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      color: "black",
      borderRadius: "25px",
      border: "none",
      height: "45px", // Set custom height
      width: "80%",   // Set custom width
      marginTop: "-22px"
    };
    if (event.title === "Meeting") {
      style.backgroundColor = "#f44336";
    } else if (event.title === "Presentation") {
      style.backgroundColor = "#2196f3";
    } else if (event.title === "Training") {
      style.backgroundColor = "#4caf50";
    } else {
      style.backgroundColor = "#f2cc8f";
    }
    return {
      style,
    };
  };


  // Function to determine cell wrapper style based on events
  const dateCellWrapper = ({ children, date, events }) => {
    const eventForDate = events.find(
      (event) =>
        moment(event.startDateTime).isSame(date, "day") ||
        moment(event.endDateTime).isSame(date, "day") ||
        (moment(event.startDateTime).isBefore(date, "day") &&
          moment(event.endDateTime).isAfter(date, "day"))
    );

    if (eventForDate) {
      return React.cloneElement(children, {
        className: `${children.props.className} has-event`,
      });
    }

    return children;
  };

  return (
    <div className="calendar-body">
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
      <div className="calender_box">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="startDateTime"
          endAccessor="endDateTime"
          selectable={true}
          onSelectSlot={handleSelectSlot}
          onSelectEvent={handleSelectedEvent}
          eventPropGetter={eventStyleGetter}
          dateCellWrapper={dateCellWrapper}
        />

        {showModal && (
          <div className="modal">
            <div className="modal-dialog" ref={modalRef}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    {selectEvent ? "Edit Event" : "Add Event"}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => {
                      setShowModal(false);
                      setEventTitle("");
                      setEventStartTime("");
                      setEventEndTime("");
                      setSelectEvent(null);
                    }}
                  ></button>
                </div>
                <div className="modal-body">
                  <label htmlFor="eventTitle" className="form-label">
                    Event Title:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="eventTitle"
                    value={eventTitle}
                    onChange={(e) => setEventTitle(e.target.value)}
                  />
                  <label htmlFor="eventStartTime" className="form-label">
                    Event Start Time:
                  </label>
                  <input
                    type="time"
                    className="form-control"
                    id="eventStartTime"
                    value={eventStartTime}
                    onChange={(e) => setEventStartTime(e.target.value)}
                  />
                  <label htmlFor="eventEndTime" className="form-label">
                    Event End Time:
                  </label>
                  <input
                    type="time"
                    className="form-control"
                    id="eventEndTime"
                    value={eventEndTime}
                    onChange={(e) => setEventEndTime(e.target.value)}
                  />
                </div>
                <div className="modal-footer">
                  {selectEvent && (
                    <button
                      type="button"
                      className="btn btn-danger me-2"
                      onClick={deleteEvent}
                    >
                      Delete Event
                    </button>
                  )}
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={saveEvent}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarComponent;

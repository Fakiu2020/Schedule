import Calendar from "react-calendar";

import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import PersonAdd from "@mui/icons-material/PersonAdd";
import EditCalendar from "@mui/icons-material/EditCalendar";
import "./Home.css";
import { Link } from "react-router-dom";
function Home() {
  const appointments = [
    {
      id: 1,
      patientName: "Julian Gonzales",
      apptObservation:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Adipisci, animi quam",
      date: new Date(2024, 4, 18),
    },
    {
      id: 2,
      patientName: "Jonatan Perez",
      apptObservation:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Adipisci, animi quam",
      date: new Date(2024, 4, 13),
    },
    {
      id: 3,
      patientName: "Carolina Brieff",
      apptObservation:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Adipisci, animi quam",
      date: new Date(2024, 4, 8),
    },
    {
      id: 4,
      patientName: "Facundo Mierez",
      apptObservation: "",
      date: new Date(2024, 4, 28),
    },
  ];

  const [date, onChangeCalendar] = useState(new Date());
  const [apptFiltered, setAppFiltered] = useState(appointments);

  const handleCalenadarChanged = (selectedDate) => {
    onChangeCalendar(selectedDate);
    const appts = appointments.filter(
      (element) =>
        element.date.getDate() === selectedDate.getDate() &&
        element.date.getMonth() === selectedDate.getMonth() &&
        element.date.getFullYear() === selectedDate.getFullYear()
    );
    console.log(appts);

    setAppFiltered(appts);
  };

  const setClass = (date) => {
    const dateobj = appointments.find((x) => {
      return (
        date.getDay() === new Date(x.date).getDay() &&
        date.getMonth() === new Date(x.date).getMonth() &&
        date.getDate() === new Date(x.date).getDate()
      );
    });
    return dateobj ? "has-appt" : "";
  };

  return (
    <>
      <div className="row">
        <div className="col-2">
          <div className="card home-header">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <span>Patient</span>
                </div>
                <div className="col text-end">
                  <Link to="/patient-add" style={{ color: "inherit" }}>
                    <PersonAdd />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="card home-header">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <span>Turnos</span>
                </div>
                <div className="col text-end">
                  <Link to="/appointment-add" style={{ color: "inherit" }}>
                    <EditCalendar />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-lg-9 col-sm-12">
          <ol className="list-group">
            <li className="list-group-item title-calendar  p-4">Mis Turnos</li>
            {apptFiltered && apptFiltered.length > 0 ? (
              <>
                {apptFiltered.map((element) => (
                  <li
                    key={element.id}
                    className="list-group-item d-flex justify-content-between align-items-center p-4"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold patient-name">
                        {element.patientName}
                      </div>
                      <span className="patient-observation">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Adipisci, animi quam ...
                      </span>
                    </div>
                    <span className="badge text-bg-primary rounded-pill">
                      18-19pm
                      <QueryBuilderIcon />
                    </span>
                  </li>
                ))}
              </>
            ) : (
              <li className="list-group-item text-center">
                No se encontraron resultados
              </li>
            )}
          </ol>
        </div>
        <div className="col-lg-3 col-sm-12">
          <Calendar
            onChange={handleCalenadarChanged}
            tileClassName={({ date }) => setClass(date)}
            value={date}
          />
        </div>
      </div>
    </>
  );
}

export default Home;

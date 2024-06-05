import "./App.css";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Routes, Route, Link } from "react-router-dom";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import CalendarMonth from "@mui/icons-material/CalendarMonth";
import WalletRoundedIcon from "@mui/icons-material/WalletRounded";
import EditCalendar from "@mui/icons-material/EditCalendar";
import CalendarViewDay from "@mui/icons-material/CalendarViewDay";


import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import PersonSearch from "@mui/icons-material/PersonSearch";
import OtherHouses from "@mui/icons-material/OtherHouses";
import CoPresent from "@mui/icons-material/CoPresent";


import { useState } from "react";
import Home from "./components/Home";
import PatientList from "./components/Patients/PatientList";
import "bootstrap/dist/css/bootstrap.min.css";
import AppointmentCreate from "./components/appointments/AppointmentCreate";
import PatientCreate from "./components/Patients/PatieentCreate";

function App() {
  const [isCollapsed, setCollapsible] = useState(false);

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar  collapsed={isCollapsed}>
        <Menu>
          <MenuItem
            onClick={() => {
              setCollapsible(!isCollapsed);
            }}
            className=""
            icon={<MenuRoundedIcon />}
          >
            <span> Administración</span>
          </MenuItem>
          <MenuItem
            icon={<OtherHouses />}
            component={<Link to="/" className="link" />}
          >
            {" "}
            Home{" "}
          </MenuItem>

          <MenuItem
            icon={<PersonSearch />}
            component={<Link to="patient-list" className="link" />}
          >
            {" "}
            Pacientes{" "}
          </MenuItem>
          <SubMenu label="Agenda" icon={<CoPresent />}>
            <MenuItem icon={<CalendarViewDay />} component={<Link to="appointment-add" className="link" />}> Citas </MenuItem>
            <MenuItem icon={<EditCalendar />} component={<Link to="appointment-add" className="link" />}>Nueva Cita</MenuItem>
            <MenuItem icon={<CalendarMonth />}>Calendario</MenuItem>
          </SubMenu>

          <MenuItem icon={<LogoutRoundedIcon />}> Logout </MenuItem>
        </Menu>
      </Sidebar>
     
        <div className="row m-3"  style={{ flex: 1 }}>
          <div className="col">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="patient-list" element={<PatientList />} />
              <Route path="appointment-add" element={<AppointmentCreate />} />
              <Route path="patient-add" element={<PatientCreate />} />
            </Routes>
          </div>
        </div>
      
    </div>
  );
}

export default App;

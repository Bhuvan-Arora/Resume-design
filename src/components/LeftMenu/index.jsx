import React from "react";
import "./leftmenu.css";
import ICON_Star from "../../assets/icons/ICON_Star.svg";
import ICON_Notes from "../../assets/icons/ICON_Notes.svg";
import ICON_Search from "../../assets/icons/ICON_Search.svg";
import ICON_Settings from "../../assets/icons/ICON_Settings.svg";
import ICON_Plus from "../../assets/icons/ICON_Plus.svg";
import ICON_Clock from "../../assets/icons/ICON_Clock.svg";
import ICON_Drawer from "../../assets/icons/ICON_Drawer.svg";
import ICON_Lock from "../../assets/icons/ICON_Lock.svg";
import ICON_Logo from "../../assets/icons/ICON_Logo.svg";
import ICON_Profile from "../../assets/icons/ICON_Profile.jpg";

// Menu Item Arr
const menuItems = [
  {
    id: 1,
    label: "My Templates",
    icon: ICON_Notes,
    className: "menu-item",
  },
  {
    id: 2,
    label: "Search",
    icon: ICON_Search,
    className: "menu-item",
  },
  {
    id: 3,
    label: "Software Engineer",
    icon: ICON_Star,
    className: "sub-menu-item",
  },
  {
    id: 4,
    label: "Computer Hardware Engineer",
    icon: ICON_Star,
    className: "sub-menu-item",
  },
  {
    id: 5,
    label: "Network Engineer",
    icon: ICON_Star,
    className: "sub-menu-item",
  },
  {
    id: 6,
    label: "Technical Support",
    icon: ICON_Star,
    className: "sub-menu-item",
  },
  {
    id: 7,
    label: "Network Administrator",
    icon: ICON_Star,
    className: "sub-menu-item",
  },
  {
    id: 8,
    label: "Management",
    icon: ICON_Star,
    className: "sub-menu-item",
  },
  {
    id: 9,
    label: "Data Analysis",
    icon: ICON_Star,
    className: "sub-menu-item",
  },
  {
    id: 10,
    label: "Computer Technician",
    icon: ICON_Star,
    className: "sub-menu-item",
  },
  {
    id: 11,
    label: "Past Search 1",
    icon: ICON_Clock,
    className: "sub-menu-item",
  },
  {
    id: 12,
    label: "Past Search 2",
    icon: ICON_Clock,
    className: "sub-menu-item",
  },
  {
    id: 13,
    label: "Computer Imformation",
    icon: ICON_Clock,
    className: "sub-menu-item",
  },
  {
    id: 14,
    label: "Database Administrator",
    icon: ICON_Clock,
    className: "sub-menu-item",
  },
  {
    id: 15,
    label: "Computer Security",
    icon: ICON_Clock,
    className: "sub-menu-item",
  },
  {
    id: 16,
    label: "Computer System Analyst",
    icon: ICON_Clock,
    className: "sub-menu-item",
  },
  {
    id: 17,
    label: "My Boards",
    icon: ICON_Drawer,
    className: "menu-item",
  },
  {
    id: 18,
    label: "Board 1",
    icon: ICON_Lock,
    className: "sub-menu-item",
  },
  {
    id: 19,
    label: "Board 2",
    icon: ICON_Lock,
    className: "sub-menu-item",
  },
  {
    id: 20,
    label: "Board 3",
    icon: ICON_Lock,
    className: "sub-menu-item",
  },
  {
    id: 21,
    label: "Board Agent 1",
    icon: ICON_Lock,
    className: "sub-menu-item",
  },
  {
    id: 22,
    label: "Board Agent 2",
    icon: ICON_Lock,
    className: "sub-menu-item",
  },
  {
    id: 23,
    label: "Board Agent 3",
    icon: ICON_Lock,
    className: "sub-menu-item",
  },
];

const Leftmenu = () => {
  return (
    <div className="left-menu">
      {/* Logo Start*/}
      <div className="logo-container">
        <img src={ICON_Logo} alt="" />
        <div className="logo-label">Resumizeme</div>
      </div>
      {/* Logo End*/}

      {/* Left Menu Items Start */}
      <div className="left-menu-items-container">
        {menuItems.map((menu) => (
          <div key={menu?.id} className="left-menu-items">
            <img src={menu.icon} alt="" className="menu-icons" />{" "}
            <span className={menu?.className}>{menu.label}</span>
            {menu.id === 17 && (
              <img src={ICON_Plus} alt="" className="expand-icon" />
            )}
          </div>
        ))}
      </div>
      {/* Left Menu Items End */}

      {/* Left Menu Footer Start */}
      <div className="footer-contaier">
        <div className="user-section">
          <img src={ICON_Profile} alt="" className="footer-icon" />
          <span className="footer-label">Carla</span>
        </div>
        <div className="icon-container">
          <img src={ICON_Settings} alt="" className="settings-icon" />
        </div>
      </div>
      {/* Left Menu Footer End */}
    </div>
  );
};

export default Leftmenu;

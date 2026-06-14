import React from "react";
import "./styles.css";
import { Menu } from "lucide-react";
import { useState } from "react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={isOpen ? "sidebar open" : "sidebar"} data-testid="sidebar">
      <button
        className="toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        data-testid="btn-toggle"
      >
        <Menu data-testid="icon-menu" />
      </button>
      {isOpen && (
        <nav className="nav-menu" data-testid="nav-menu">
          <ul className="nav-list">
            <li className="nav-item" data-testid="nav-item-home">
              Home
            </li>
            <li className="nav-item" data-testid="nav-item-about">
              About
            </li>
            <li className="nav-item" data-testid="nav-item-services">
              Services
            </li>
            <li className="nav-item" data-testid="nav-item-contact">
              Contact
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Sidebar;

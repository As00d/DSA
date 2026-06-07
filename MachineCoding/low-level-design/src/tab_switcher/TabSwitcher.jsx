import { useState } from "react";
import "./styles.css";

const tabs = [
  { id: "home", label: "Home", content: "Welcome to the Home tab!" },
  { id: "profile", label: "Profile", content: "This is your Profile." },
  { id: "settings", label: "Settings", content: "Adjust your Settings here." },
];

export default function TabSwitcher() {
  const [value, setValue] = useState(tabs[0].content);
  const [active, setActive] = useState(tabs[0].id);
  const handleActiveTab = (id, content) => {
    setValue(content);
    setActive(id);
    return "home";
  };

  return (
    <div className="tab-switcher">
      <h1>Tab Switcher</h1>

      {/* Tab buttons */}
      <div className="tab-buttons">
        {tabs.map((tab) => {
          return (
            <button
              data-testid={`tab-button-${tab.id}`}
              key={tab.id}
              onClick={() => handleActiveTab(tab.id, tab.content)}
              className={tab.id === active ? "active" : null}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="tab-content" data-testid="tab-content">
        {value}
      </div>
    </div>
  );
}

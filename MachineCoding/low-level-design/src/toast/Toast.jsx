import { useState } from "react";
import "./styles.css";
const Toast = () => {
  const [toasts, setToasts] = useState([]);
  const handleToastNotification = (color, alert) => {
    setToasts([...toasts, { color: color, alert: alert, id: new Date() }]);
  };
  const handleClose = (color, alert, id) => {
    setToasts(toasts.filter((toasts) => toasts.id !== id));
  };
  return (
    <>
      <div className="container">
        <button
          className="btn"
          onClick={() =>
            handleToastNotification("#5DFDCB", "I am an success alert")
          }
        >
          Success Toast
        </button>
        <button
          className="btn"
          onClick={() =>
            handleToastNotification("orange", "I am an warning alert")
          }
        >
          Warning Toast
        </button>
        <button
          className="btn"
          onClick={() =>
            handleToastNotification("#90D7FF", "I am an info alert")
          }
        >
          Info Toast
        </button>
        <button
          className="btn"
          onClick={() =>
            handleToastNotification("#EE4266", "I am an error alert")
          }
        >
          Error Toast
        </button>
      </div>
      <div className="toast-container">
        {toasts.map((toast) => {
          const { color, alert, id } = toast;
          return (
            <div className="toast" style={{ background: `${color}` }}>
              {alert}
              <span onClick={() => handleClose(color, alert, id)}>X</span>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Toast;

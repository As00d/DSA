import { useState, useRef, useEffect } from "react";
import "./styles.css";

const initialNotifications = [
  {
    id: 1,
    title: "New Message",
    message: "You have a new message from John",
    timestamp: "2 minutes ago",
    isRead: false,
  },
  {
    id: 2,
    title: "Order Update",
    message: "Your order #12345 has been shipped",
    timestamp: "1 hour ago",
    isRead: false,
  },
  {
    id: 3,
    title: "Reminder",
    message: "Don't forget about your meeting at 3 PM",
    timestamp: "3 hours ago",
    isRead: true,
  },
  {
    id: 4,
    title: "System Alert",
    message: "Scheduled maintenance tonight at 2 AM",
    timestamp: "5 hours ago",
    isRead: false,
  },
  {
    id: 5,
    title: "Welcome",
    message: "Welcome to our platform! Get started with these tips",
    timestamp: "1 day ago",
    isRead: true,
  },
  {
    id: 6,
    title: "Payment Received",
    message: "Payment of $99.99 has been received",
    timestamp: "2 days ago",
    isRead: true,
  },
];

const NotificationBell = () => {
  const notificationRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  const [notificationList, setNotificationList] =
    useState(initialNotifications);

  const unreadCount = notificationList.filter((notif) => !notif.isRead).length;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNotification = () => {
    setIsVisible((prev) => !prev);
  };

  const handleMarkMessageRead = (id) => {
    setNotificationList((prevNotifications) =>
      prevNotifications.map((notif) =>
        notif.id === id ? { ...notif, isRead: true } : notif
      )
    );
  };

  const handleMessageRead = () => {
    setNotificationList((prevNotifications) =>
      prevNotifications.map((notif) => ({
        ...notif,
        isRead: true,
      }))
    );
  };

  return (
    <main className="notification-container" ref={notificationRef} role="main">
      <h1>Notification Bell</h1>

      <p className="subtitle">Click the bell to see your notifications</p>

      <div className="bell-wrapper" onClick={handleNotification}>
        <button
          className="bell-button"
          data-testid="notification-bell"
          aria-label="Toggle notifications"
        >
          <span>🔔</span>
        </button>

        {unreadCount > 0 && (
          <p className="notification-badge" data-testid="notification-badge">
            {unreadCount}
          </p>
        )}
      </div>

      <div className="stats">
        <p>Total notifications: {notificationList.length}</p>
        <p>Unread notifications: {unreadCount}</p>
      </div>

      {isVisible &&
        (notificationList.length > 0 ? (
          <div
            className="notification-dropdown"
            data-testid="notification-dropdown"
          >
            <div className="dropdown-header">
              <h3>Notifications</h3>

              {unreadCount > 0 && (
                <button className="mark-all-button" onClick={handleMessageRead}>
                  Mark all as read
                </button>
              )}
            </div>

            <div className="notification-list">
              {notificationList.map((notif) => (
                <div
                  key={notif.id}
                  data-testid="notification-item"
                  className={
                    notif.isRead
                      ? "notification-item read"
                      : "notification-item unread"
                  }
                  onClick={() => handleMarkMessageRead(notif.id)}
                >
                  <div className="notification-content">
                    <p className="notification-title">{notif.title}</p>

                    <p className="notification-message">{notif.message}</p>

                    <p className="notification-timestamp">{notif.timestamp}</p>
                  </div>

                  {!notif.isRead && <div className="unread-indicator" />}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="empty-state">
            <p>No Notifications</p>
          </div>
        ))}
    </main>
  );
};

export default NotificationBell;

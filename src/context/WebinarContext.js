import { createContext, useState, useEffect } from "react";

export const WebinarContext = createContext();

export const WebinarProvider = ({ children }) => {
  const [webinars, setWebinars] = useState(() => {
    const saved = localStorage.getItem("webinars");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("webinars", JSON.stringify(webinars));
  }, [webinars]);

  // ✅ Add Webinar
  const addWebinar = (webinar) => {
    setWebinars((prev) => [
      ...prev,
      {
        ...webinar,
        registrations: [],
        resource: [],
        isLive: false,
        isClosed: false,
      },
    ]);
  };

  // ✅ Register User (Prevent Duplicate)
  const registerUser = (webinarId, userName) => {
    setWebinars((prev) =>
      prev.map((w) => {
        if (w.id !== webinarId) return w;

        // Prevent duplicate registration
        if (w.registrations.includes(userName)) {
          return w;
        }

        return {
          ...w,
          registrations: [...w.registrations, userName],
        };
      })
    );
  };

  // ✅ Unregister User
  const unregisterUser = (webinarId, userName) => {
    setWebinars((prev) =>
      prev.map((w) =>
        w.id === webinarId
          ? {
              ...w,
              registrations: w.registrations.filter(
                (name) => name !== userName
              ),
            }
          : w
      )
    );
  };

  // ✅ Add Resource (Max 3)
  const addResource = (webinarId, link) => {
    setWebinars((prev) =>
      prev.map((w) => {
        if (w.id !== webinarId) return w;
        if (w.resource.length >= 3) return w;

        return {
          ...w,
          resource: [...w.resource, link],
        };
      })
    );
  };

  // ✅ Delete Resource
  const deleteResource = (webinarId, index) => {
    setWebinars((prev) =>
      prev.map((w) =>
        w.id === webinarId
          ? {
              ...w,
              resource: w.resource.filter((_, i) => i !== index),
            }
          : w
      )
    );
  };

  // ✅ Toggle Live
  const toggleLive = (webinarId) => {
    setWebinars((prev) =>
      prev.map((w) =>
        w.id === webinarId
          ? {
              ...w,
              isLive: !w.isLive,
              isClosed: w.isLive ? true : false,
            }
          : w
      )
    );
  };

  // ✅ Delete Webinar
  const deleteWebinar = (id) => {
    setWebinars((prev) =>
      prev.filter((w) => w.id !== id)
    );
  };

  return (
    <WebinarContext.Provider
      value={{
        webinars,
        addWebinar,
        registerUser,
        unregisterUser,
        addResource,
        deleteResource,
        toggleLive,
        deleteWebinar,
      }}
    >
      {children}
    </WebinarContext.Provider>
  );
};
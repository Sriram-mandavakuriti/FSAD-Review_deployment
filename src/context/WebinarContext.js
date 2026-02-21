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

  const addWebinar = (webinar) => {
    setWebinars((prev) => [
      ...prev,
      {
        ...webinar,
        registrations: [],
        resource: [],
        isLive: false,
      },
    ]);
  };

  const registerUser = (webinarId, userName) => {
    setWebinars((prev) =>
      prev.map((w) =>
        w.id === webinarId
          ? {
              ...w,
              registrations: [...(w.registrations || []), userName],
            }
          : w
      )
    );
  };

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

  const toggleLive = (webinarId) => {
    setWebinars((prev) =>
      prev.map((w) =>
        w.id === webinarId
          ? { ...w, isLive: !w.isLive }
          : w
      )
    );
  };

  const deleteWebinar = (id) => {
    setWebinars((prev) => prev.filter((w) => w.id !== id));
  };

  return (
    <WebinarContext.Provider
      value={{
        webinars,
        addWebinar,
        registerUser,
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

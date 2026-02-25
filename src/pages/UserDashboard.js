import { useContext, useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import Sidebar from "../components/Sidebar";
import { WebinarContext } from "../context/WebinarContext";

const UserDashboard = () => {
  const { webinars, registerUser, unregisterUser } =
    useContext(WebinarContext);

  const [selectedId, setSelectedId] = useState(null);
  const [name, setName] = useState("");

  const handleRegister = () => {
    if (name.trim() === "") return;

    registerUser(selectedId, name);
    toast.success("Successfully Registered!");
    setSelectedId(null);
  };

  const handleUnregister = (webinarId) => {
    unregisterUser(webinarId, name);
    toast.success("Unregistered Successfully");
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Sidebar role="user" />

      <div className="flex-1 p-10">
        <h1 className="text-4xl font-bold mb-8">
          User Dashboard
        </h1>

        {webinars.map((webinar) => {
          const isRegistered =
            webinar.registrations.includes(name);

          return (
            <motion.div
              key={webinar.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 mb-6 rounded-2xl shadow-lg"
            >
              <h2 className="text-xl font-bold">
                {webinar.title}
              </h2>
              <p className="text-gray-600">
                Date: {webinar.date}
              </p>

              {/* Registration Section */}
              <div className="mt-3">
                {isRegistered ? (
                  <div className="flex gap-3 items-center">
                    <span className="text-green-600 font-semibold">
                      Registered ✔
                    </span>

                    <button
                      onClick={() =>
                        handleUnregister(webinar.id)
                      }
                      className="bg-red-600 text-white px-4 py-1 rounded"
                    >
                      Unregister
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() =>
                      setSelectedId(webinar.id)
                    }
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-lg"
                  >
                    Register
                  </button>
                )}
              </div>

              {/* Join Link */}
              {webinar.isLive && (
                <div className="mt-3">
                  <a
                    href={webinar.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 font-medium"
                  >
                    Join Live
                  </a>
                </div>
              )}

              {webinar.isClosed && (
                <p className="mt-3 text-red-600 font-semibold">
                  Webinar Closed
                </p>
              )}

              {/* Resources */}
              {webinar.resource.length > 0 && (
                <div className="mt-3">
                  {webinar.resource.map((res, index) => (
                    <a
                      key={index}
                      href={res}
                      target="_blank"
                      rel="noreferrer"
                      className="block text-green-600"
                    >
                      Resource {index + 1}
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          );
        })}

        {/* Modal */}
        {selectedId && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
              <h2 className="text-xl font-bold mb-4">
                Enter Your Name
              </h2>

              <input
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                className="w-full border p-2 rounded mb-4"
                placeholder="Your Name"
              />

              <div className="flex justify-end gap-3">
                <button
                  onClick={() =>
                    setSelectedId(null)
                  }
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>

                <button
                  onClick={handleRegister}
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import Sidebar from "../components/Sidebar";
import { WebinarContext } from "../context/WebinarContext";

const UserDashboard = () => {
  const { webinars, registerUser } = useContext(WebinarContext);

  const [selectedId, setSelectedId] = useState(null);
  const [name, setName] = useState("");

  const handleRegister = () => {
    if (name.trim() === "") return;

    registerUser(selectedId, name);
    toast.success("Successfully Registered!");
    setName("");
    setSelectedId(null);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Sidebar role="user" />

      <div className="flex-1 p-10">
        <h1 className="text-4xl font-bold mb-8">
          User Dashboard
        </h1>

        {webinars.length === 0 ? (
          <p>No webinars available.</p>
        ) : (
          webinars.map((webinar) => (
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

              <button
                onClick={() => setSelectedId(webinar.id)}
                className="mt-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-lg shadow hover:scale-105 transition"
              >
                Register
              </button>

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

              {/* Multiple Resources Display */}
              {Array.isArray(webinar.resource) &&
                webinar.resource.length > 0 && (
                  <div className="mt-3">
                    <p className="font-semibold mb-1">
                      Resources:
                    </p>
                    {webinar.resource.map((res, index) => (
                      <a
                        key={index}
                        href={res}
                        target="_blank"
                        rel="noreferrer"
                        className="block text-green-600 hover:underline"
                      >
                        📂 Resource {index + 1}
                      </a>
                    ))}
                  </div>
                )}
            </motion.div>
          ))
        )}

        {/* Modal */}
        {selectedId && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="bg-white p-8 rounded-2xl shadow-xl w-96"
            >
              <h2 className="text-xl font-bold mb-4">
                Enter Your Name
              </h2>

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border p-2 rounded mb-4"
                placeholder="Your Name"
              />

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setSelectedId(null)}
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
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;

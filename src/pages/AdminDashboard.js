import { useContext, useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import Sidebar from "../components/Sidebar";
import { WebinarContext } from "../context/WebinarContext";

const AdminDashboard = () => {
  const {
    webinars,
    deleteWebinar,
    deleteResource,
    toggleLive,
  } = useContext(WebinarContext);

  const [search, setSearch] = useState("");
  const [selectedWebinar, setSelectedWebinar] =
    useState(null);

  const filteredWebinars = webinars.filter((w) =>
    w.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalRegistrations = webinars.reduce(
    (sum, w) => sum + (w.registrations?.length || 0),
    0
  );

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-100 to-indigo-100">
      <Sidebar role="admin" />

      <div className="flex-1 p-10">
        <h1 className="text-4xl font-bold mb-8">
          Admin Dashboard
        </h1>

        {/* 🔎 Search */}
        <input
          type="text"
          placeholder="Search Webinar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-6 p-3 border rounded-xl shadow"
        />

        {/* 📊 Stats */}
        <div className="grid grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h2>Total Webinars</h2>
            <p className="text-3xl font-bold text-indigo-600">
              {webinars.length}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h2>Total Registrations</h2>
            <p className="text-3xl font-bold text-green-600">
              {totalRegistrations}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h2>Status</h2>
            <p className="text-3xl font-bold text-purple-600">
              Active
            </p>
          </div>
        </div>

        {/* Webinar Cards */}
        {filteredWebinars.map((webinar) => (
          <motion.div
            key={webinar.id}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 mb-6 rounded-2xl shadow-lg"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">
                {webinar.title}
              </h2>

              <span
                className={`px-3 py-1 rounded-full text-xs ${
                  webinar.isLive
                    ? "bg-red-600 text-white"
                    : "bg-indigo-100 text-indigo-600"
                }`}
              >
                {webinar.isLive ? "LIVE" : "Scheduled"}
              </span>
            </div>

            <p className="text-gray-600">
              Date: {webinar.date}
            </p>

            <p className="mt-2 font-semibold">
              Registrations:{" "}
              {webinar.registrations?.length || 0}
            </p>

            {/* 🎥 Live Control */}
            <button
              onClick={() => toggleLive(webinar.id)}
              className="mt-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-1 rounded"
            >
              {webinar.isLive
                ? "End Live"
                : "Start Live"}
            </button>

            {/* 📂 Resources */}
            <div className="mt-4">
              <h3 className="font-semibold mb-2">
                Resources ({webinar.resource.length}/3)
              </h3>

              {webinar.resource.length > 0 ? (
                webinar.resource.map((res, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center mb-2"
                  >
                    <a
                      href={res}
                      target="_blank"
                      rel="noreferrer"
                      className="text-green-600 hover:underline"
                    >
                      Resource {index + 1}
                    </a>

                    <button
                      onClick={() =>
                        deleteResource(
                          webinar.id,
                          index
                        )
                      }
                      className="text-red-500"
                    >
                      ❌
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-gray-400">
                  No resources
                </p>
              )}
            </div>

            <div className="mt-4 flex gap-3">
              <button
                onClick={() =>
                  setSelectedWebinar(webinar)
                }
                className="bg-blue-600 text-white px-4 py-1 rounded"
              >
                View Members
              </button>

              <button
                onClick={() => {
                  deleteWebinar(webinar.id);
                  toast.success("Deleted");
                }}
                className="bg-red-600 text-white px-4 py-1 rounded"
              >
                Delete Webinar
              </button>
            </div>
          </motion.div>
        ))}

        {/* 👥 Members Modal */}
        {selectedWebinar && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
              <h2 className="text-xl font-bold mb-4">
                Registered Members
              </h2>

              {selectedWebinar.registrations.length >
              0 ? (
                <ul className="list-disc ml-5">
                  {selectedWebinar.registrations.map(
                    (user, index) => (
                      <li key={index}>{user}</li>
                    )
                  )}
                </ul>
              ) : (
                <p>No registrations yet.</p>
              )}

              <button
                onClick={() =>
                  setSelectedWebinar(null)
                }
                className="mt-4 bg-gray-400 text-white px-4 py-1 rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;

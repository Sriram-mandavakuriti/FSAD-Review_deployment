import { useState, useContext } from "react";
import Sidebar from "../components/Sidebar";
import { WebinarContext } from "../context/WebinarContext";

const CreateWebinar = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [link, setLink] = useState("");
  const [success, setSuccess] = useState(false);

  const { webinars, addWebinar } = useContext(WebinarContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newWebinar = {
      id: Date.now(),
      title,
      date,
      link,
    };

    addWebinar(newWebinar);

    setSuccess(true);
    setTitle("");
    setDate("");
    setLink("");

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar role="admin" />

      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-6 text-green-700">
          Create Webinar
        </h1>

        {success && (
          <div className="bg-green-100 text-green-700 p-3 rounded mb-4">
            Webinar created successfully ✔
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow mb-8"
        >
          <input
            type="text"
            placeholder="Webinar Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-2 mb-4 rounded"
            required
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border p-2 mb-4 rounded"
            required
          />

          <input
            type="text"
            placeholder="Live Link (Zoom/YouTube)"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="w-full border p-2 mb-4 rounded"
            required
          />

          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Add Webinar
          </button>
        </form>

        <div>
          <h2 className="text-xl font-semibold mb-4">Created Webinars</h2>

          {webinars.length === 0 ? (
            <p className="text-gray-500">No webinars created yet.</p>
          ) : (
            webinars.map((webinar) => (
              <div
                key={webinar.id}
                className="bg-white p-4 mb-4 rounded shadow"
              >
                <h3 className="font-bold">{webinar.title}</h3>
                <p>Date: {webinar.date}</p>
                <a
                  href={webinar.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600"
                >
                  Join Live
                </a>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateWebinar;
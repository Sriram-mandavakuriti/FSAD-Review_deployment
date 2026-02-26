import { useState, useContext } from "react";
import Sidebar from "../components/Sidebar";
import { WebinarContext } from "../context/WebinarContext";

const UploadResource = () => {
  const { webinars, addResource } = useContext(WebinarContext);
  const [selectedId, setSelectedId] = useState("");
  const [link, setLink] = useState("");
  const [success, setSuccess] = useState(false);

  const selectedWebinar = webinars.find(
    (w) => w.id === Number(selectedId)
  );

  const resourceCount = selectedWebinar?.resource?.length || 0;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedId) return;

    if (resourceCount >= 3) {
      alert("Maximum 3 resources allowed per webinar.");
      return;
    }

    addResource(Number(selectedId), link);

    setSuccess(true);
    setLink("");

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar role="admin" />

      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold text-green-700 mb-6">
          Upload Resource
        </h1>

        {success && (
          <div className="bg-green-100 text-green-700 p-3 rounded mb-4">
            Resource uploaded successfully ✔
          </div>
        )}

        {webinars.length === 0 ? (
          <p>No webinars available.</p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded shadow"
          >
            <select
              value={selectedId}
              className="w-full border p-2 mb-4 rounded"
              onChange={(e) => setSelectedId(e.target.value)}
              required
            >
              <option value="">Select Webinar</option>
              {webinars.map((w) => (
                <option key={w.id} value={w.id}>
                  {w.title}
                </option>
              ))}
            </select>

            {selectedId && (
              <p className="text-sm text-gray-600 mb-3">
                Resources Uploaded: {resourceCount} / 3
              </p>
            )}

            <input
              type="text"
              placeholder="Resource Link (PDF / Recording)"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="w-full border p-2 mb-4 rounded"
              required
            />

            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              Upload
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default UploadResource;
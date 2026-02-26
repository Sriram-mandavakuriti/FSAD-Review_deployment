import { Link, useNavigate } from "react-router-dom";

const Sidebar = ({ role }) => {
  const navigate = useNavigate();

  return (
    <div className="w-64 bg-gradient-to-b from-blue-700 to-indigo-800 text-white min-h-screen p-6 flex flex-col justify-between shadow-2xl">
      <div>
        <h2 className="text-2xl font-bold mb-10 tracking-wide">
          🚀 WebEdu
        </h2>

        {role === "admin" ? (
          <>
            <Link to="/admin" className="block mb-4 hover:text-gray-200">
              📊 Dashboard
            </Link>
            <Link to="/create-webinar" className="block mb-4 hover:text-gray-200">
              ➕ Create Webinar
            </Link>
            <Link to="/upload-resource" className="block mb-4 hover:text-gray-200">
              📂 Upload Resources
            </Link>
          </>
        ) : (
          <>
            <Link to="/user" className="block mb-4 hover:text-gray-200">
              📊 Dashboard
            </Link>
          </>
        )}
      </div>

      <button
        onClick={() => navigate("/")}
        className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-semibold"
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
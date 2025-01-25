import { Link } from "react-router-dom";
import "./App.css";

function AppBar() {
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <Link
        to="/about"
        className="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Sujal Neupane
        </span>
      </Link>

      <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <Link to="/about" className="block p-3 rounded hover:bg-gray-100">
              About
            </Link>
          </li>
          <li>
            <Link
              to="/viewProjects"
              className="block p-3 rounded hover:bg-gray-100"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="block p-3 rounded hover:bg-gray-100">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AppBar;

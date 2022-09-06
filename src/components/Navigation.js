import { Link } from "react-router-dom";
import logo from "../assets/gallery.png";

export default function Navigation() {
  return (
    <nav className="bg-slate-100 shadow-md">
      <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center">
        <div className="flex justify-center items-center gap-2">
          <div>
            <Link to="/">
              <img className="h-10" src={logo} alt="Learn with Sumit" />
            </Link>
          </div>
          <div>
            <p className="font-bold cursor-pointer">
              <Link to="/">
                <i>Video Gallery</i>
              </Link>
            </p>
          </div>
        </div>
        <Link
          to="/videos/add"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
        >
          + Add Video
        </Link>
      </div>
    </nav>
  );
}

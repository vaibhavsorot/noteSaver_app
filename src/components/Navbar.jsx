import { NavbarData } from "../data/Navbar";
import { NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle"; // ✅ Make sure this exists

const Navbar = () => {
  return (
    <div className="w-full h-[60px] px-6 flex justify-between items-center bg-gray-800">
      {/* Left: Navigation Links */}
      <div className="flex gap-x-5">
        {NavbarData.map((link, idx) => (
          <NavLink
            key={idx}
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-semibold text-xl"
                : "text-white font-medium text-xl"
            }
          >
            {link.title}
          </NavLink>
        ))}
      </div>

      {/* Right: Dark Mode Toggle */}
      <DarkModeToggle />
    </div>
  );
};

export default Navbar;

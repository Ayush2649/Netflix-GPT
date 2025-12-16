import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useState, useRef, useEffect } from "react";
import { removeUser } from "../utils/userSlice";
import { LOGO, USER } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); // ✅ detect route
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const isBrowsePage = location.pathname === "/browse"; // ✅ check page

  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const handleSignOut = async () => {
    await signOut(auth);
    dispatch(removeUser());
    navigate("/");
  };

  // ✅ Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div
        className="flex items-center justify-between
                   px-6 md:px-14 py-4
                   bg-gradient-to-b from-black/90 to-black/10"
      >
        {/* Logo */}
        <img
          className="w-48 cursor-pointer"
          src={LOGO}
          alt="Netflix"
          onClick={() => navigate(user ? "/browse" : "/")}
        />

        {/* Right Section */}
        {user && isBrowsePage ? (
          <div className="relative" ref={menuRef}>
            {/* Avatar */}
            <img
              src={USER}
              alt="User"
              className="w-9 h-9 rounded cursor-pointer"
              onClick={() => setShowMenu((prev) => !prev)}
            />

            {/* Dropdown */}
            {showMenu && (
              <div
                className="absolute right-0 mt-2
                           bg-black border border-gray-700
                           text-white rounded shadow-lg w-52"
              >
                <div className="px-4 py-3 border-b border-gray-700">
                  <p className="text-sm font-medium">
                    {user.displayName || "Netflix User"}
                  </p>
                  <p className="text-xs text-gray-400 truncate">
                    {user.email}
                  </p>
                </div>

                <button
                  onClick={handleSignOut}
                  className="block w-full text-left
                             px-4 py-2 text-sm
                             hover:bg-gray-800"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate("/signin")}
            className="bg-red-600 text-white text-sm font-medium
                       px-3.5 py-1.5 rounded
                       hover:bg-red-700 transition"
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;

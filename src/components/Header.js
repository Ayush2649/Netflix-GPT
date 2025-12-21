import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useState, useRef, useEffect } from "react";
import { removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";
import { setLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); // ✅ detect route
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const isBrowsePage = location.pathname === "/browse"; // ✅ check page

  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const showGptSearch = useSelector((state) => state.gpt.showGptSearch);

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

  const handleGptSeachClick = () => {
    dispatch(toggleGptSearch());
  };

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    dispatch(setLanguage(selectedLanguage));
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div
        className="
    flex items-center justify-between
    px-4 md:px-10
    py-3 md:py-4
    bg-gradient-to-b from-black/90 via-black/40 to-transparent
  "
      >
        {/* Logo */}
        <img
          className="w-28 md:w-40 lg:w-48 cursor-pointer"
          src={LOGO}
          alt="Netflix"
          onClick={() => navigate(user ? "/browse" : "/")}
        />

        {/* Right Section */}
        {user && isBrowsePage ? (
          <div
            ref={menuRef}
            className="relative flex items-center gap-2 md:gap-4"
          >
            {/* Language Selector (only when GPT Search ON) */}
            {showGptSearch && (
              <select
                className="
                p-2 bg-black text-white
                border border-gray-600
                rounded text-sm
              "
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}

            {/* GPT Search Button */}
            <button
              className="
              px-3 md:px-4 py-1.5 md:py-2
              text-xs md:text-sm font-semibold
              text-white bg-black/40
              rounded hover:bg-black
              transition
            "
              onClick={handleGptSeachClick}
            >
              {showGptSearch ? "Home" : "GPT Search"}
            </button>

            {/* Avatar */}
            <img
              src={USER}
              alt="User"
              className="w-8 h-8 md:w-9 md:h-9 rounded cursor-pointer"
              onClick={() => setShowMenu((prev) => !prev)}
            />

            {/* Dropdown */}
            {showMenu && (
              <div
                className="
                absolute right-0 top-10
                bg-black border border-gray-700
                text-white rounded shadow-lg
                w-48
              "
              >
                <div className="px-4 py-3 border-b border-gray-700">
                  <p className="text-sm font-medium">
                    {user.displayName || "Netflix User"}
                  </p>
                  <p className="text-xs text-gray-400 truncate">{user.email}</p>
                </div>

                <button
                  onClick={handleSignOut}
                  className="
                  block w-full text-left
                  px-4 py-2 text-sm
                  hover:bg-gray-800
                "
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate("/signin")}
            className="
            bg-red-600 text-white
            text-xs md:text-sm font-medium
            px-3 md:px-4 py-1.5 md:py-2
            rounded hover:bg-red-700
            transition
          "
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;

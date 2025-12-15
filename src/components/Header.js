import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { removeUser } from "../utils/userSlice";
import { useState, useRef, useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const handleSignOut = async () => {
    await signOut(auth);
    dispatch(removeUser());
    navigate("/");
  };

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
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
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix"
          onClick={() => navigate(user ? "/browse" : "/")}
        />

        {/* Right Section */}
        {!user ? (
          <button
            onClick={() => navigate("/signin")}
            className="bg-red-600 text-white text-sm font-medium
                       px-3.5 py-1.5 rounded
                       hover:bg-red-700 transition"
          >
            Sign In
          </button>
        ) : (
          <div className="relative" ref={menuRef}>
            {/* Avatar */}
            <img
              src="https://occ-0-7769-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABUMx6z-7bB7tyN-OZXt6i8BXuZHN5EWBr7MQy7ilhubrpI2yOofVtT-QmoO6VJt7I1ewosmuQa29BGFfOOVcJxdKx1sT-co.png?r=201"
              alt="User"
              className="w-9 h-9 rounded cursor-pointer"
              onClick={() => setShowMenu((prev) => !prev)}
            />

            {/* Dropdown */}
            {showMenu && (
              <div
                className="absolute right-0 mt-2
                           bg-black border text-white border-gray-700
                           rounded shadow-lg w-52"
              >
                <div className="px-4 py-3 border-b border-gray-700">
                  <p className="text-sm font-medium text-white">
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
        )}
      </div>
    </div>
  );
};

export default Header;

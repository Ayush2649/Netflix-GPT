import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* subtle header fade */}
      <div
        className="flex items-center justify-between
                      px-6 md:px-14 py-4
                      bg-gradient-to-b from-black/90 to-black/10"
      >
        {/* Logo */}
        <img
          className="w-48"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix"
          onClick={() => navigate("/")}
        />

        {/* Sign In */}
        <button
          onClick={() => navigate("/signin")}
          className="bg-red-600 text-white text-sm font-medium
                     px-3.5 py-1.5
                     rounded
                     hover:bg-red-700
                     transition"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Header;

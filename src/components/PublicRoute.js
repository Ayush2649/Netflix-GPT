import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const user = useSelector((store) => store.user);
  const location = useLocation();

  // ✅ Logged-in users can ONLY be on /browse
  if (user && location.pathname !== "/browse") {
    return <Navigate to="/browse" replace />;
  }

  return children;
};

export default PublicRoute;

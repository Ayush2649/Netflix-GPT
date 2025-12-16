import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Browse from "./Browse";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

const Body = () => {
  return (
    <>
      <Header />

      <Routes>
        {/* ❌ Logged-in users CANNOT access "/" */}
        <Route
          path="/"
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        />

        {/* ❌ Logged-in users CANNOT access "/signin" */}
        <Route
          path="/signin"
          element={
            <PublicRoute>
              <SignIn />
            </PublicRoute>
          }
        />

        {/* ❌ Logged-out users CANNOT access "/browse" */}
        <Route
          path="/browse"
          element={
            <ProtectedRoute>
              <Browse />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default Body;

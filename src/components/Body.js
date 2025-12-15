import React from "react";
import SignUp from "./SignUp";
import Browse from "./Browse";
import SignIn from "./SignIn";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
    const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <SignUp />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) { 
        const {uid, email, displayName} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName}));
      } else {
        dispatch(removeUser()); 
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;

import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import appStore from "./utils/appStore";
import Body from "./components/Body";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./utils/userSlice";

const AppWrapper = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
      } else {
        dispatch(removeUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return <Body />;
};

function App() {
  return (
    <Provider store={appStore}>
      <AppWrapper />
    </Provider>
  );
}

export default App;

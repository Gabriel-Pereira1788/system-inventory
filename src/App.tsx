import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Router from "./routes/Router";
import defaultTheme from "./styles/themes/default";
import { GlobalStyle } from "./styles/globalStyles";
import { useAppDispatch } from "./store/store";
import { authUser } from "./store/User/User.store";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import { dataStructureUser } from "./utils/dataStructureUser";

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useAppDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const dataUser = dataStructureUser(user);
        dispatch(authUser(dataUser));
      }
    });
  }, []);
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;


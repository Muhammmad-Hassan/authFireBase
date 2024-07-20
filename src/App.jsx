import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Private from "./pages/Private";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [ user, setUser ] = useState(null);
  const [ isFetching, setIsFetching ] = useState(true);

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        setIsFetching(false);
        return;
      }
      setUser(null);
      setIsFetching(false);
    });
    return () => unsubcribe();
  }, []);
if(isFetching){
  return <h2>Loading....</h2>
}
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route
          path="/private"
          element={
            <ProtectedRoutes user={user}>
              <Private />
            </ProtectedRoutes>
          }
        />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

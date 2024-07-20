import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";

function Private() {
  const handleSignout = () => {
    signOut(auth)
      .then(() => alert("signed out successfully!"))
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>Private Page</h1>
      <button onClick={handleSignout}>SignOut</button>
    </div>
  );
}

export default Private;

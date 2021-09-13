import React, { useContext } from 'react'
import { UserContext } from "../context/UserContext";
import { useHistory } from "react-router-dom";

function Profile() {
  const history = useHistory();

  const { user, setUser } = useContext(UserContext);

  // useEffect(() => {
  //   if(user) history.push("/");
  // }, [user])


  const handleLogout = async () => {
    const res = await fetch("/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
    await res;
    setUser(null);
    history.push("/login");
  }



  return (
    <div>
        <button onClick={handleLogout}>LOG OUT</button>
    </div>
  )
}

export default Profile
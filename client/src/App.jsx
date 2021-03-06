import React, { useState, useEffect, useMemo } from 'react'
import './CSS/style.min.css'
import { UserContext } from "./context/UserContext";
import { NavContext } from "./context/NavContext";
import { useHistory, useLocation } from "react-router-dom";
import Loading from './components/Loading'
import { isMobile } from './utils/isMobile';
import Routes from './components/Routes'
import RoutesAnimation from './components/RoutesAnimation'
import ElectronConfig from './ElectronConfig';

const setRoutes = (user) => {
  return isMobile() ? (
    <RoutesAnimation user={user}></RoutesAnimation>
  ) : (
    <Routes user={user}></Routes>
  )
}

function App() {

  const [nav, setNav] = useState({path: "/", direction: 0, state: null});
  const history = useHistory();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [initialLoad, setInitialLoad] = useState(false);

  const navValue = useMemo(() => ({ nav, setNav }), [nav, setNav]);
  const useValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  useEffect(() => {
    setInitialLoad(true);
    getUser();
  }, [])

  const getUser = async () => {
    const res = await fetch("/api/user");
    const getUser = await res.json();
    setUser(getUser);
    setIsLoading(false);
  }

  // Back arrow for MobileHeader
  useEffect(() => {
    if(!initialLoad) return;

    if(nav.path === "/go-back") {
      history.goBack();
    } else {
      history.push({pathname: nav.path});
    }
  }, [nav])


  const isElectron = navigator.userAgent.includes("Electron");

  return (
    <NavContext.Provider value={navValue}>
      <UserContext.Provider value={useValue}>
        { isElectron && <ElectronConfig /> }
        {!isLoading ? (
          setRoutes(user)
        ) : ( 
          <Loading />
        )}
      </UserContext.Provider>
    </NavContext.Provider>
  )
}

export default App

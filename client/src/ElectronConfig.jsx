import { useState, useEffect, useContext } from "react";
import { UserContext } from "./context/UserContext";


export default function ElectronConfig() {

  const { user, setUser } = useContext(UserContext);

  const [wishlist, setWishlist] = useState([]);

  // Not needed in Vite, but in CRA
  const require = window.require;

  // Use ipcRenderer + remote that can connect to Electron
  // methods only available on the Node side otherwise
  const { ipcRenderer } = require('electron');
  const remote = require('@electron/remote');

  // Use dialog via remote
  const { dialog } = remote;

  // Use the fs and paths modules from node
  const fs = require('fs');
  const path = require('path');

  // State variables
  const [menuChoice, setMenuChoice] = useState('');

  useEffect(() => {
    user && setWishlist(user.wishlist);
  }, [user])

  const importWishlist = async (wishlist) => {
    const url = window.location.origin.replace("3000", "4000")

    const res = await fetch(`${url}/api/import-wishlist?userId=${user._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({wishlist})
    })
    const data = await res.json(res);

    setUser({
      ...user,
      wishlist: data.wishlist
    })
  }


  useEffect(() => {
    // On mount of the component
    // add an event listener listening to the Electron main process
    // and the event sent from the main process called menuChoice
    ipcRenderer.on('menuChoice', (ipcEvent, choice) => {
      const fileExt = "txt"

      if (choice === 'Save wishlist') {
        let filePath = dialog.showSaveDialogSync({
          properties: ['createDirectory']
        });

        if (filePath) {
          // Add extension if missing
          if (
            filePath.slice(-fileExt.length - 1) !==
            '.' + fileExt
          ) {
            filePath += '.' + fileExt;
          }

          fs.writeFileSync(
            filePath,
            JSON.stringify({ wishlist }, null, '  '),
            'utf-8'
          );
        }

      }
      if (choice === 'Import wishlist') {
        let filePaths = dialog.showOpenDialogSync({
          properties: ['openFile'],
          options: { filters: { extensions: ['.wishlist'] } }
        });
        if (filePaths) {
          const json = fs.readFileSync(filePaths[0], 'utf-8');
          const data = JSON.parse(json);
          importWishlist(data.wishlist);
        }
      }
      setMenuChoice(choice);
    });

    // Return a function to run un unmount of the component
    // that will remove the ipcRenderer-listener
    return () => ipcRenderer.removeAllListeners('menuChoice');
  }, [wishlist]);

  return null
}
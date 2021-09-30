export const isElectron = () => {
  return navigator.userAgent.includes("Electron") ? true : false;
}
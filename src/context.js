import { createContext, useContext, useState } from 'react';

const AppContent = createContext();

const AppProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const closeSidebar = () => {
    setSidebar(false);
  };
  return (
    <AppContent.Provider value={{ sidebar, closeSidebar, setSidebar }}>
      {children}
    </AppContent.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContent);
};

export default AppProvider;

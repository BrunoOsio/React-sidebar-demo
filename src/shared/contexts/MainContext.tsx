import { createContext, useState } from "react";

type MainContextData = {
  showMenu: boolean;
  handleToggleMenu: () => void;
};

type MainContextProviderProps = {
  children: React.ReactNode;
};

export const MainContext = createContext({} as MainContextData);

export const MainContextProvider = ({ children }: MainContextProviderProps) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <MainContext.Provider
      value={{
        handleToggleMenu,
        showMenu,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

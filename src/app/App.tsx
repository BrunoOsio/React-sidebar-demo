import { Menu, Navbar } from "../shared/components";
import { MainContextProvider } from "../shared/contexts";
import { GlobalStyle } from "../shared/globals";

const App = () => {

  return (
    <MainContextProvider>
      <GlobalStyle />

      <Navbar />
      <Menu />
    </MainContextProvider>
  );
};

export default App;

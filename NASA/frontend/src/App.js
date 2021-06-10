import { BrowserRouter as Router } from "react-router-dom";
import { Arwes, ThemeProvider, SoundsProvider, createTheme } from "arwes";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { theme, resources, sounds } from "./settings";
import Launch from "./pages/Launch";

const App = () => {
  return (
    <ThemeProvider theme={createTheme(theme)}>
      <SoundsProvider sounds={createTheme(sounds)}>
        <Arwes
          animate
          background={resources.background.large}
          pattern={resources.pattern}
        >
          {(anim) => (
            <Router>
              <Header />
              <Launch />
              <Footer />
            </Router>
          )}
        </Arwes>
      </SoundsProvider>
    </ThemeProvider>
  );
};

export default App;

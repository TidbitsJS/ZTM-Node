import { Arwes, ThemeProvider, SoundsProvider, createTheme } from "arwes";
import Footer from "./components/Footer";

import { theme, resources, sounds } from "./settings";

const App = () => {
  return (
    <ThemeProvider theme={createTheme(theme)}>
      <SoundsProvider sounds={createTheme(sounds)}>
        <Arwes
          animate
          background={resources.background.large}
          pattern={resources.pattern}
        >
          {(anim) => <Footer />}
        </Arwes>
      </SoundsProvider>
    </ThemeProvider>
  );
};

export default App;

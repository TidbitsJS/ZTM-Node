import { ThemeProvider } from "arwes";
import createTheme from "arwes/lib/tools/createTheme";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ThemeProvider theme={createTheme()}>
      <Footer />
    </ThemeProvider>
  );
};

export default App;

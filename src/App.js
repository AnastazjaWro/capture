//Global Style
import GlobalStyle from "./components/GlobalStyle";
// import Pages
import AboutUs  from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import Nav from './components/Nav';
import MovieDetail from "./components/MovieDetails";
import { AnimatePresence } from "framer-motion";
import ScrollTop from "./components/ScrollTop";

import { Switch, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <ScrollTop />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path='/work/:id'>
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;

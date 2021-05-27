import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import NoMatch from "./pages/NoMatch"
import Contact from "./pages/Contact"
import TopNav from "./components/TopNav"
import Footer from "./components/Footer"

const App = () => {
  return (
      <Router>
          <TopNav />
          <Container>
            <Switch>
              <Route exact path="/" component={Contact} />
              <Route render={NoMatch} />
            </Switch>
          </Container>
          <Footer />
      </Router>
  );
};

export default App;

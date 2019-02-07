import React, { Component } from 'react';
import Layout from "./components/Layout/Layout";
import {Route, Switch} from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "reactstrap";
import Home from "./components/Home/Home";
import Admin from "./components/Admin/Admin";

class App extends Component {
  render() {
    return (
        <Layout>
          <Container>
              <Switch>
                  {/*<Route path={"/"}  exact component={Home}/>*/}
                  <Route path="/pages/:name"  exact component={Home}/>
                  <Route path="/admin" exact component={Admin}/>
              </Switch>
          </Container>
        </Layout>
    );
  }
}

export default App;

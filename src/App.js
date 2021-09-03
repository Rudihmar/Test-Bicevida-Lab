import  React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Init from "./components/Init";
import NotFound from "./components/NotFound";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Init" component={Init} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

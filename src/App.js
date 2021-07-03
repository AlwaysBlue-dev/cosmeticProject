import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from "react-router";
import Home from "./My Components/Home";
import Shop from "./My Components/Shop";
import Perfumes from "./My Components/Perfumes";
import Nailpolish from "./My Components/Nailpolish";
import Lipsticks from "./My Components/Lipsticks";
import Brands from "./My Components/Brands";
import Mycart from "./My Components/Mycart";
import Description from "./My Components/Description";
import Navbar from "./My Components/Navbar";
import Footer from "./My Components/Footer";

const App = () => {
  
return(
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/perfumes" component={Perfumes} />
        <Route exact path="/nailpolish" component={Nailpolish} />
        <Route exact path="/lipsticks" component={Lipsticks} />
        <Route exact path="/description" component={Description} />
        <Route exact path="/brands" component={Brands} />
        <Route exact path="/mycart" component={Mycart} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
);
};

export default App;

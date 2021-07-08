
import './App.css';
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Search from "./pages/search";
import Home from "./pages/home";
import ContactUs from "./pages/contact-us";
import AboutUs from "./pages/about";
const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
  },
}));

function BootstrapTooltip(props) {
  const classes = useStylesBootstrap();

  return <Tooltip arrow classes={classes} {...props} />;
}

function App() {
  return (
    <div className="App">
      <Router>
    <div style={{marginTop:"50px"}}>
      <BootstrapTooltip title="open home page" >
        <Button color="secondary" href="/home">Home</Button>
      </BootstrapTooltip>

      <BootstrapTooltip title="open about us page" href="/about">
        <Button>about us</Button>
      </BootstrapTooltip>

      <BootstrapTooltip title="open search page"href="/search">
        <Button>search</Button>
      </BootstrapTooltip>

      <BootstrapTooltip title="open contact us page page"href="/contact-us">
        <Button>contact us</Button>
      </BootstrapTooltip>
      {/* <Typography variant="h1" component="h2" gutterBottom>
        h1. Heading
      </Typography> */}
    </div>
    <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/contact-us">
            <ContactUs/>
          </Route>
          <Route path="/">
        <Typography variant="h2" component="h2" gutterBottom style={{marginTop:"100px"}}>
        Click any of the above buttons 
          </Typography> 
          <Typography variant="h7" component="h2" gutterBottom style={{marginTop:"100px"}}>
            _and try to hover any of them 
          </Typography> 
          <Typography variant="h7" component="h2" gutterBottom style={{marginTop:"10px"}}>
            ~Hanan (; 
          </Typography> 

          </Route>
        </Switch>
    </Router>

    </div>
  );
}

export default App;

import React from "react";
import "./create-react-app/App.css";
import { Grid } from "@material-ui/core";
import Header from "./Components/Header";
import Content from "./Components/Content";

function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header/>
      </Grid>
      <Grid item container>
        <Grid item xs={0} sm={2}/>
        <Grid item xs={12} sm={8}>
          <Content/>
        </Grid>
        <Grid item xs={0} sm={2}/>
      </Grid>
    </Grid>
  );
}

export default App;

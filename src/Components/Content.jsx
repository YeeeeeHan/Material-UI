import React from "react";
import CoffeCard from "./CoffeCard";
import Grid from "@material-ui/core/Grid";
import coffeMakerList from'../constants';

const Content = () => {
  const getCoffeMakerCard = (coffeMakerObj) => {
      return(
          <Grid item xs={12} sm={6} md={4}>
              <CoffeCard {...coffeMakerObj} />
          </Grid>
      )
  }

  return (
    <Grid container spacing={4}>
        {coffeMakerList.map(getCoffeMakerCard)}

    </Grid>
  );
};

export default Content;

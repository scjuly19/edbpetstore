import React from 'react'
import { Grid } from "@mui/material";
import AddPetActionContainer from '../../components/AddPetActionContainer/AddPetActionContainer'
import PetListingTable from '../../components/PetListingTable/PetListingTable';

export const HomePage=()=> {
  return (
    <Grid container wrap="nowrap" rowSpacing={3} padding={4} direction={"column"}>
      <Grid item xs={12}>
        <AddPetActionContainer/>
      </Grid>
      <Grid item>
        <PetListingTable />
      </Grid>
    </Grid>
  )
}

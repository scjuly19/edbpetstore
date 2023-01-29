import React from "react";
import Button from "@mui/material/Button";
import PetsIcon from "@mui/icons-material/Pets";
import "../../App.css";
import { useNavigate } from "react-router-dom";

const AddPetActionContainer = () => {
  const navigate = useNavigate();

  return (
    <div className="horizontal-row-container">
      <h1>Pets in Store</h1>
      <Button
        variant="contained"
        endIcon={<PetsIcon />}
        onClick={() => navigate("/pets/add")}
      >
        Add New Pet
      </Button>
    </div>
  );
};
export default React.memo(AddPetActionContainer);

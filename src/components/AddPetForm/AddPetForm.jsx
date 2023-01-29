import * as React from "react";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MenuItem from "@mui/material/MenuItem";
import { AddPetValidationSchema } from "./utils";
import { useDataContext } from "../../context/dataContext";
import { actionTypes } from "../../context/actionTypes";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";

const PetTypes = [
  {
    value: "Dog",
    label: "Dog",
  },
  {
    value: "Cat",
    label: "Cat",
  },
  {
    value: "Horse",
    label: "Horse",
  },
  {
    value: "Bird",
    label: "Bird",
  },
];
export const AddPetForm: React.FC = () => {
  const { state, dispatch } = useDataContext();
  const navigate = useNavigate();
  const goToHomePage = () => navigate("/");

  const formik = useFormik({
    initialValues: {
      name: "",
      type: "",
      breed: "",
      age: "",
      description: "",
    },
    validationSchema: AddPetValidationSchema,
    onSubmit: (values) => {
      const id = Math.floor(Math.random() * 100) + "abcdef";
      const { name, type, breed, age, description } = values;
      const itemToAdd = {
        id,
        name,
        type,
        breed,
        age,
        description,
      };
      dispatch({ type: actionTypes.initiateRequest });
      dispatch({ type: actionTypes.addDataItem, payload: itemToAdd });
      setTimeout(() => {
        dispatch({ type: actionTypes.requestSuccess });
        goToHomePage();
      }, 1000);
    },
  });
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <Button
        startIcon={<ArrowBackIosIcon />}
        onClick={goToHomePage}
        style={{ position: "absolute", left: 0, top: 0 }}
      >
        Go Back
      </Button>
      <h1 style={{ textAlign: "center" }}>Add a new pet to the store</h1>
      <form>
        <div>
          <TextField
            id="name"
            label="Name"
            fullWidth
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </div>
        <div>
          <TextField
            id="type"
            select
            label="Select type of pet"
            fullWidth
            placeholder="Select"
            name="type"
            value={formik.values.type}
            onChange={formik.handleChange}
            error={formik.touched.type && Boolean(formik.errors.type)}
            helperText={formik.touched.type && formik.errors.type}
          >
            {PetTypes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Enter breed of pet"
            fullWidth
            name="breed"
            value={formik.values.breed}
            onChange={formik.handleChange}
            error={formik.touched.breed && Boolean(formik.errors.breed)}
            helperText={formik.touched.breed && formik.errors.breed}
          />
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Enter the age of your pet (in years)"
            fullWidth
            type="number"
            name="age"
            value={formik.values.age}
            onChange={formik.handleChange}
            error={formik.touched.age && Boolean(formik.errors.age)}
            helperText={formik.touched.age && formik.errors.age}
          />
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Tell us something interesting about your pet"
            fullWidth
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <Button variant="outlined">Cancel</Button>
          <LoadingButton
            variant="contained"
            style={{ marginLeft: 10 }}
            type="submit"
            onClick={formik.handleSubmit}
            loading={state.loading}
          >
            Submit
          </LoadingButton>
        </div>
      </form>
    </Box>
  );
};

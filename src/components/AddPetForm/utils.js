import * as Yup from "yup";

const requiredErrorMessage = "This is required";

export const AddPetValidationSchema= () =>
  Yup.object({
    name: Yup.string('Enter the name of pet').required(requiredErrorMessage),
    breed: Yup.string().required(requiredErrorMessage),
    type: Yup.string().required(requiredErrorMessage),
    age: Yup.number().moreThan(0).required(requiredErrorMessage),
    description: Yup.string().required(requiredErrorMessage),
  });

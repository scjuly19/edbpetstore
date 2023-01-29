import { endPoints } from "./endPoints";
import axios from "axios";

export const fetchPetData = async () => {
  const response = await axios.get(endPoints.GET_PET_DATA);
  return response.data;
};

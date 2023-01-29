import React, { createContext, useContext, useReducer, useEffect } from "react";
import { fetchPetData } from "../network/dataRequests";
import { actionTypes } from "./actionTypes";
import { DataReducer } from "./dataReducer";

export const INITIAL_STATE = {
  data: [],
  loading: false,
};

const DataContext = createContext();
const useDataContext = () => useContext(DataContext);

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, INITIAL_STATE);
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: actionTypes.initiateRequest });
        const data = await fetchPetData();
        dispatch({ type: actionTypes.setData, payload: data });
      } catch (err) {
        dispatch({ type: actionTypes.requestFailure, payload: err });
      }
    };
    fetchData();
  }, []);
  const ProviderValue = { state, dispatch };
  return (
    <DataContext.Provider value={ProviderValue}>
      {children}
    </DataContext.Provider>
  );
};

export { useDataContext, DataProvider };

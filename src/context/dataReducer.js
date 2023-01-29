import { actionTypes } from "./actionTypes";

export const DataReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.initiateRequest:
      return { ...state, loading: true };
    case actionTypes.requestSuccess:
      return { ...state, loading: false };
    case actionTypes.requestFailure:
      return { ...state, loading: false, error: action.payload };
    case actionTypes.setData:
      return { ...state, data: action.payload, loading: false };
    case actionTypes.addDataItem:
      return { ...state, data: [action.payload, ...state.data] };
  }
};

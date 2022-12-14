import ACTION_KEYS from "../../constants/action-keys";
import { RegisterService } from "../../services/RegisterService";
import * as Loader from "./LoaderActions";
const RegisterRequest = () => {
  return {
    type: ACTION_KEYS.REGISTER_REQUEST,
    payload: null,
  };
};

export const RegisterRequestAsync = (data) => {
  return (dispatch) => {
    dispatch(Loader.showLoader(""));
    dispatch(RegisterRequest());
    RegisterService(dispatch, data);
  };
};

export const RegisterSuccess = (data) => {
  return {
    type: ACTION_KEYS.REGISTER_SUCCESS,
    payload: data,
  };
};

export const RegisterError = (data) => {
  return {
    type: ACTION_KEYS.REGISTER_ERROR,
    payload: { error: data },
  };
};

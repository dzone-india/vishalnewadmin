import {
  RegisterSuccess,
  RegisterError,
} from "../redux/actions/RegisterAction";
import ApiClient from "../api-client";
import API_ENDPOINTS from "../constants/api-endpoints";
import * as Snackbar from "../redux/actions/snackbarActions";
import * as Loader from "../redux/actions/LoaderActions";
export const RegisterService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      API_ENDPOINTS.REGISTER_ENDPOINT,
      data,
      null,
      null,
      false
    );
    dispatch(RegisterSuccess(result));
    dispatch(Snackbar.showSuccessSnackbar(result.message));
    let token = result.tempAuthenticationLink.split("=");
    window.location.href = "/verification?token=" + token[1];
  } catch (error) {
    dispatch(RegisterError(error));
    dispatch(
      Snackbar.showFailSnackbar(
        error.response.data?.error?.error?.details[0]?.message
      )
    );
  }
  dispatch(Loader.hideLoader(""));
};

//Include Both Helper File with needed methods


import { getFirebaseBackend } from '../../helpers/firebase_helper';
import { loginSuccess, logoutUserSuccess, apiError, reset_login_flag } from './reducer';
import { postFakeLogin, postJwtLogin } from '../../helpers/fakebackend_helper';
import { toast } from 'react-toastify';


export const loginUser = (user: any, history: any) => async (dispatch: any) => {   
  try {
    let response:any;

    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      let fireBaseBackend = getFirebaseBackend();
      response = fireBaseBackend.loginUser(
        user.email,
        user.password
      );
      
    } else if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
      response = postJwtLogin({
        email: user.email,
        password: user.password
      });
    } else if (process.env.REACT_APP_DEFAULTAUTH) {        
        response = postFakeLogin({
            email: user.email,
            password: user.password,
        });   

    }

    var data = await response;
    if (data) {
      if (process.env.REACT_APP_DEFAULTAUTH === "fake") {
        var finallogin: any = JSON.stringify(data);
        sessionStorage.setItem("authUser", finallogin);
        finallogin = JSON.parse(finallogin);
        data = finallogin.data;
        if ((finallogin.status === "success") || (finallogin.username && finallogin.password)) {
          dispatch(loginSuccess(data));
          history("/dashboard");
        } else {
          history("/login");
          dispatch(apiError(finallogin));
        }
      } else {
        var finallogin: any = JSON.stringify(data);
        sessionStorage.setItem("authUser", finallogin);
        dispatch(loginSuccess(data));
        history("/dashboard");
      }
    }
  } catch (error) {
    dispatch(apiError(error));
    toast.error("Invalid Email or Password")
  }
};

export const logoutUser = () => async (dispatch: any) => {
  try {
    localStorage.removeItem("authUser");
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      let fireBaseBackend = getFirebaseBackend();
      const response = fireBaseBackend.logout;
      dispatch(logoutUserSuccess(response));
    } else {
      dispatch(logoutUserSuccess(true));
    }

  } catch (error) {
    dispatch(apiError(error));
  }
};

export const socialLogin = (type: any, history: any) => async (dispatch: any) => {
  try {
    let response;

    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const fireBaseBackend = getFirebaseBackend();
      response = fireBaseBackend.socialLoginUser(type);
      
    }
    //  else {
    //   response = postSocialLogin(data);
    // }

    const socialdata = await response;
    if (socialdata) {
      localStorage.setItem("authUser", JSON.stringify(socialdata));
      dispatch(loginSuccess(socialdata));
      history('/dashboard');
    }

  } catch (error) {
    dispatch(apiError(error));
  }
};

export const resetLoginFlag = () => async (dispatch: any) => {
  try {
    const response = dispatch(reset_login_flag());
    return response;
  } catch (error) {
    dispatch(apiError(error));
  }
};
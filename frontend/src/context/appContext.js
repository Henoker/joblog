import React from "react";
import { useReducer, useContext } from "react";
import axios from 'axios';

import {
     DISPLAY_ALERT, 
     CLEAR_ALERT,
     REGISTER_USER_BEGIN,
     REGISTER_USER_SUCCESS,
     REGISTER_USER_ERROR,
    } 
    from "./actions";

const initialState = {
    isLoading:false,
    showAlert:false,
    alertText:'',
    alertType:'',
    user:null,
    userLocation: '',
    jobLocation:'',
    
}


const AppContext = React.createContext()

const reducer = (state, action) => {
    switch (action.type) {
      case DISPLAY_ALERT:
        return {
          ...state,
          showAlert: true,
          alertText: action.payload.text,
          alertType: action.payload.type,
        };
      case CLEAR_ALERT:
        return {
          ...state,
          showAlert: false,
          alertText: '',
          alertType: '',
        };
      case REGISTER_USER_BEGIN:
        return {
          ...state,
          isLoading: true,
        };
      case REGISTER_USER_SUCCESS:
        return {
          ...state,
          isLoading: false,
          user: action.payload.user,
          userLocation: action.payload.location,
        };
      case REGISTER_USER_ERROR:
        return {
          ...state,
          isLoading: false,
          showAlert: true,
          alertText: action.payload.msg,
          alertType: 'error',
        };
      default:
        return state;
    }
  };
  

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const displayAlert = () => {
        dispatch({ type: DISPLAY_ALERT})
        clearAlert()
    }

    const clearAlert = () => {
        setTimeout(()=>{
            dispatch({ type: CLEAR_ALERT})
        }, 3000 )
        
    }


    const registerUser = async (currentUser) => {
        dispatch({ type: REGISTER_USER_BEGIN });
      
        try {
          const response = await axios.post('http://localhost:8000/api/v1/dj-rest-auth/registration/', currentUser);
          console.log(response);
          const { user, token, location } = response.data;
          dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: { user, token, location },
          });
      
          // Display success alert
          displayAlert({
            text: 'Registration successful',
            type: 'success',
          });
      
        } catch (error) {
          console.log(error);
          dispatch({
            type: REGISTER_USER_ERROR,
            payload: { msg: error.response.data.msg },
          });
      
          // Display error alert
          displayAlert({
            text: 'Error registering user',
            type: 'error',
          });
        }
      
        clearAlert();
      };
    return <AppContext.Provider value={{...state, displayAlert, clearAlert, registerUser, dispatch}}>
        {children}
    </AppContext.Provider>
}



const useAppContext = () => {
    return useContext(AppContext)
}

export {AppProvider, initialState, useAppContext}
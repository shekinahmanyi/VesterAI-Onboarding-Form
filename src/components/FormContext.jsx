// FormContext.js

import React, { createContext, useReducer, useContext } from 'react';

const FormContext = createContext();

const initialState = {
  // Initial Data
  startupName: '',
  Website: '',
  Information:'',
  technology:'',
  selectedCountry:'',
  selectedDate:null,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
};

const FormProvider = ({ children }) => {
  const [formData, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={{ formData, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
};

export { FormProvider, useForm };

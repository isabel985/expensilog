import React, { createContext, useReducer } from 'react';
import { user, statements } from '../../utils/data';
// import ReportsList from '../../components/ReportComponents/ReportsList';

let ReportContext = createContext();

const initialState = {
  selectedFilters: [],
  statements,
  user,
  newForm: false,
  name: null,
  formId: null,
  formMode: false,
  statementSelected: {},
}

let reducer = (state, action) => {
  switch (action.type) {
    case "filter":
      console.log('inside reducer filter action');
      return { ...state, selectedFilters: [...state.selectedFilters, action.payload] };
    case "statementSelected":
      return { ...state, formMode: true, statementSelected: statements.find((statement) => statement.id === action.payload) }
    default:
      return { ...state };
  }
}

let ContextProvider = (props) => {
  let [state, dispatch] = useReducer(reducer, initialState);
  let value = { state, dispatch };

  return (
    <ReportContext.Provider value={value}>
      {props.children}
    </ReportContext.Provider>
  )
}

// let ContextConsumer = ReportContext.Consumer

export { ReportContext, ContextProvider };
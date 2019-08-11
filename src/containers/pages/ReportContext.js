import React, { createContext, useReducer } from 'react';
import { user, statements } from '../../utils/data';
// import ReportsList from '../../components/ReportComponents/ReportsList';

let ReportContext = createContext();

const initialState = {
  selectedFilters: ['open', 'processing', 'approved', 'reimbursed', 'closed'],
  selectedStatements: statements,
  statements,
  user,
  newForm: false,
  name: null,
  formId: null,
  formMode: false,
  statementSelected: {},
}

let populateSelectedStatements = (state) => {
  // grab selectedFilters and statements from state
  let { selectedFilters, statements } = state;

  let newSelectedStatements = [];

  selectedFilters.forEach((aFilter) => {
    statements.forEach((aStatement) => {
      if (aStatement.status === aFilter) {
        newSelectedStatements.push(aStatement);
      }
    })
  })
  return newSelectedStatements;
}

let reducer = (state, action) => {
  switch (action.type) {
    case "filter":
      let newSelectedFilters = [];

      // if action.payload is in selectedFilters then we want to remove 
      if (state.selectedFilters.includes(action.payload)) {
        // filter over selectedFilters and make sure it is not equal to action.payload
        newSelectedFilters = state.selectedFilters.filter(aFilter => action.payload !== aFilter)
      } else {
        // adding action.payload to newSelectedFilters
        newSelectedFilters = [...state.selectedFilters, action.payload]
      }

      let newState = { ...state, selectedFilters: newSelectedFilters };
      let newSelectedStatements = populateSelectedStatements(newState);

      // make newSelectedFilters the state for selectedFilters
      return { ...state, selectedFilters: newSelectedFilters, selectedStatements: newSelectedStatements }

    case "statementSelected":
      return { ...state, formMode: true, statementSelected: statements.find((statement) => statement.id === action.payload) }
    case "newReport":
      let statementSelected = {
        id: Math.floor(Math.random() * 9999999),
        name: null,
        status: 'open',
        amount: 0,
        from: user.name,
        to: user.supervisor.name,
        date: null,
      }
      return { ...state, formMode: true, statementSelected }
    case "cancelReport":
      return { ...state, formMode: false }
    case "dateChange":
      // grab the statementSelected into a new var then change the value of that new var
      let newStatementSelected = state.statementSelected;
      newStatementSelected.date = action.payload;
      return { ...state, statementSelected: newStatementSelected }
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
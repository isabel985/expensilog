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
  expenses: [
    { id: '123', merchant: "Google Services", service: "AdWords", cost: 79.50, reimbursable: true, assignedStatus: "assigned", statementId: "123" },
    { id: '456', merchant: "AWS", service: "Hosting", cost: 350.00, reimbursable: true, assignedStatus: "assigned", statementId: "456" },
    { id: '789', merchant: "Apple", service: "Equipment", cost: 2567.89, reimbursable: false, assignedStatus: "assigned", statementId: "789" },
    { id: '135', merchant: "Slack", service: "Instant Messaging", cost: 50.00, reimbursable: true, assignedStatus: "unassigned", statementId: "" },
    { id: '680', merchant: "Hertz", service: "Travel", cost: 239.45, reimbursable: false, assignedStatus: "unassigned", statementId: "" },
    { id: '678', merchant: "Hertz", service: "Travel", cost: 239.45, reimbursable: false, assignedStatus: "unassigned", statementId: "" },
    { id: '985', merchant: "Hertz", service: "Travel", cost: 239.45, reimbursable: false, assignedStatus: "unassigned", statementId: "" },
    { id: '222', merchant: "Hertz", service: "Travel", cost: 239.45, reimbursable: false, assignedStatus: "unassigned", statementId: "" },
    { id: '501', merchant: "Hertz", service: "Travel", cost: 239.45, reimbursable: false, assignedStatus: "unassigned", statementId: "" },
  ]
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
export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ID': {
      return { ...state, id: action.value };
    }
    case 'SET_NAME': {
      return { ...state, name: action.value };
    }
    case 'SET_DESCRIPTION': {
      return { ...state, name: action.value };
    }
    case 'SET_COMPLETED': {
      return { ...state, completed: action.value };
    }
    case 'RESET': {
      return initialState;
    }
    default:
      return state;
  }
};

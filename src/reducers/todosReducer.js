export const todosReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return { ...state, id: action.value };
    }
    case 'GET_TODO_ID': {
      return { ...state, id: action.value };
    }
    case 'UPDATE_TODO_ID': {
      return { ...state, id: action.value };
    }
    case 'REMOVE_TODO_ID': {
      return { ...state, id: action.value };
    }
    default:
      return state;
  }
};

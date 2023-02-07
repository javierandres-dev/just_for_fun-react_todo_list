export const initialTodo = {
  id: '',
  name: '',
  description: '',
  status: 'to do',
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ID': {
      console.log('todoReducer SET_ID...');
      return { ...state, id: action.value };
    }
    case 'SET_NAME': {
      console.log('todoReducer SET_NAME...');
      return { ...state, name: action.value };
    }
    case 'SET_DESCRIPTION': {
      console.log('todoReducer SET_DESCRIPTION...');
      return { ...state, description: action.value };
    }
    case 'SET_STATUS': {
      console.log('todoReducer SET_STATUS...');
      return { ...state, status: action.value };
    }
    case 'RESET': {
      console.log('todoReducer RESET...');
      return initialTodo;
    }
    default:
      console.log('todoReducer DEFAULT...');
      return state;
  }
};

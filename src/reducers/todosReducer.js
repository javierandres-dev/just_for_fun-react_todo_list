export const initialTodos = [];

export const todosReducer = (state, action) => {
  console.log(action.value);
  switch (action.type) {
    case 'ADD_TODO': {
      console.log('todosReducer ADD_TODO...');
      return [...state, action.value];
    }
    case 'GET_TODO_ID': {
      console.log('todosReducer GET_TODO_ID...');
      return state;
    }
    case 'UPDATE_TODO_ID': {
      console.log('todosReducer UPDATE_TODO_ID...');
      return state;
    }
    case 'REMOVE_TODO_ID': {
      console.log('todosReducer REMOVE_TODO_ID...');
      return state;
    }
    case 'REMOVE_TODOS': {
      console.log('todosReducer REMOVE_TODOS...');
      return initialTodos;
    }
    default:
      console.log('todosReducer DEFAULT...');
      return state;
  }
};

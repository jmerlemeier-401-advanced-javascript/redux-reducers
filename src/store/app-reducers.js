const actions = {};

let initialState = { name: 'John' };

//===============================================
//listens for 
export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'NAME_CHANGE':
      return { name: payload || Math.random() };

    case 'NAME_RESET':
      return initialState;

    default:
      return state;
  }
};

//sent out
actions.nameChanger = payload => {
  return {
    type: 'NAME_CHANGE',
    payload: payload,
  };
};

//action creators
actions.resetName = payload => {
  return {
    type: 'NAME_RESET',
    payload
  }
}


export {actions};
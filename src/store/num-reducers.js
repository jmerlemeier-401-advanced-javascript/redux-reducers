const numactions = {};

let initialState = { number: 8008 };


export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'CHANGE':
      return { number: payload || Math.random() };

    case 'RESET':
      return initialState;

    default:
      return state;
  }
};

numactions.numChanger = payload => {
  return {
    type: 'CHANGE',
    payload: payload,
  };
};

//action creators
numactions.resetNum = payload => {
  return {
    type: 'RESET',
    payload
  }
}


export {numactions};
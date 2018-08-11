function saveAnswer(state = '', action) {
  switch (action.type) {
    case 'SAVE_ANSWER':
      return action.answer;
    default:
      return state;
  }
}

function answers(state = {}, action) {
  if (typeof action.number !== 'undefined') {
    return Object.assign({}, state, { [action.number]: saveAnswer(state[action.number], action) });
  }
  return state;
}

export default answers;

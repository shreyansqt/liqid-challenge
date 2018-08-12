/* eslint-disable import/prefer-default-export */

export function saveAnswer(number, answer) {
  return {
    type: 'SAVE_ANSWER',
    number,
    answer,
  };
}

export function resetAnswers() {
  return {
    type: 'RESET_ANSWERS',
  };
}

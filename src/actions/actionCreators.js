/* eslint-disable import/prefer-default-export */

// save answer
export function saveAnswer(number, answer) {
  return {
    type: 'SAVE_ANSWER',
    number,
    answer,
  };
}

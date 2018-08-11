const questions = [
  {
    number: 1,
    text: 'What is your name?',
    type: 'text',
    placeholder: 'For eg. John Doe',
  },
  {
    number: 2,
    text: 'What is your age?',
    type: 'number',
    placeholder: 'For eg. 22',
  },
  {
    number: 3,
    text: 'What is your gender?',
    type: 'radio',
    options: {
      male: 'Male',
      female: 'Female',
      other: 'Other',
    },
  },
  {
    number: 4,
    text: 'Where are you from?',
    type: 'select',
    options: {
      IN: 'India',
      DE: 'Germany',
      US: 'United States',
    },
    placeholder: 'Select Country',
  },
];

export default questions;

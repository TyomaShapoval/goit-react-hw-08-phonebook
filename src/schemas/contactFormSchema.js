import * as yup from 'yup';

const nameRegex = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const numberRegex =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

export const contactFormSchema = yup.object().shape({
    name: yup
      .string()
      .trim()
      .max(64)
      .required('Name is required')
      .matches(nameRegex, {
        message:
          "Invalid name. Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan.",
      }),
  
    number: yup
      .string()
      .trim()
      .required('Number is required')
      .min(5)
      .matches(numberRegex, {
        message:
          'Invalid number. Phone number must be digits and can contain spaces, dashes, parentheses and can start with +.',
      }),
  });
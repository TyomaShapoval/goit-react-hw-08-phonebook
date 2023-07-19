import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { contactFormSchema } from 'schemas';
import {
  useAddContactMutation,
  useFetchContactsQuery,
} from 'services/contactsApi';
import {
  StyledLabel,
  StyledForm,
  StyledInput,
  StyledButton,
} from './ContactForm.styled';

function ContactForm() {
  const { data: contacts } = useFetchContactsQuery();
  const [addContact] = useAddContactMutation();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    formState,
  } = useForm({
    defaultValues: {
      name: '',
      number: '',
    },
    resolver: yupResolver(contactFormSchema),
    mode: 'onTouched',
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState.isSubmitSuccessful, reset]);

  const addNewContact = async data => {
    const normalizedName = data.name.toLowerCase();

    if (contacts.find(item => item.name.toLowerCase() === normalizedName)) {
      return toast.info(`${data.name} is already in contacts!`);
    }
    try {
      await addContact(data);
      toast.info('New contact has been added in your phone book');
    } catch (error) {
      toast.error('Something has happened, new contact was not added');
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(addNewContact)}>
      <StyledLabel>
        Name
        <StyledInput
          type="text"
          placeholder="Enter a contact name"
          autoComplete="off"
          {...register('name')}
        />
        {errors.name && <div>{errors.name?.message}</div>}
      </StyledLabel>

      <StyledLabel>
        Number
        <StyledInput
          type="tel"
          placeholder="Enter a contact number"
          autoComplete="off"
          {...register('number')}
        />
        {errors.number && <div>{errors.number?.message}</div>}
      </StyledLabel>

      <StyledButton type="submit">Send</StyledButton>
    </StyledForm>
  );
}

export default ContactForm;
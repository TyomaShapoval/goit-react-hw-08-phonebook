import { useFetchContactsQuery } from 'services/contactsApi';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Message from 'components/Message';
import ContactForm from 'components/ContactForm';
import { ToastWrapper } from 'components/ToastContainer/ToastContainer';

import {
  Container,
  SectionsContainer,
  Section,
  SectionTitle,
} from './Contacts.styled';

function Contacts() {
   const {
    data: contacts,   
  } = useFetchContactsQuery();

  const totalContacts = () => {
    if (!contacts) {
      return 0;
    }
    return contacts.length;
  };

  return (
    <Container>
      <SectionsContainer>
        <Section>
          <SectionTitle>Add contact</SectionTitle>
          <ContactForm />
        </Section>
        <Section>
          <SectionTitle>Contacts</SectionTitle>{' '}
          {totalContacts !== 0 ? (
            <>
              <Filter />
              <ContactList />
            </>
          ) : (
            <Message message="There are no contacts in your Phonebook. Please add your first contact!" />
          )}
        </Section>
      </SectionsContainer>
      <ToastWrapper />
    </Container>
  );
}
export default Contacts;
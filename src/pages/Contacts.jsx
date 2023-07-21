import ContactForm from '../components/ContactForm/ContactForm ';
import { ContactsList } from '../components/ContactsList/ContactsList';
import { Filter } from '../components/Filter/Filter';

const ContactsPage = () => {
  return (
    <div style={{ display: "flex", alignItems: 'start', justifyContent: "space-evenly", paddingTop: "40px" }}>
      <ContactForm />
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Filter />
        <ContactsList />
      </div>
    </div>
  );
};
export default ContactsPage;

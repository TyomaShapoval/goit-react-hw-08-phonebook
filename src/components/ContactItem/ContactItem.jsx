import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useDeleteContactMutation } from 'services/contactsApi';
import { ListItem, StyledButton, ContactInfo } from './ContactItem.styled';

function ContactItem({ id, name, number }) {

  const [deleteContact] = useDeleteContactMutation(); 

   const removeContact = async (contactId, contactName) => {
    try {
      await deleteContact(contactId);
      toast.info(
        `"${contactName}" has been deleted from your phone book`
      );
    } catch (error) {     
      toast.error(
        `Something has happened, "${contactName}" was not deleted`
      );
    }
  };

  return (
    <ListItem>
      <ContactInfo>
        {name}: {number}
      </ContactInfo>
      <StyledButton type="button" onClick={() => removeContact(id, name)}>
        Delete
      </StyledButton>
    </ListItem>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
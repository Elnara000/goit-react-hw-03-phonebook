import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';

export default function ContactList({ contacts, onClick }) {
  return (
    <ul>
      {contacts.map((contact, id) => (
        <ContactListItem
          key={nanoid()}
          name={contact.name}
          number={contact.number}
          onClick={onClick}
          id={id}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.number,
    })
  ),
  onClick: PropTypes.func,
};

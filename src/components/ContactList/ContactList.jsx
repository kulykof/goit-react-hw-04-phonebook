import css from './contactList.module.css';
import ContactItem from './ContactItem';
import { PropTypes } from 'prop-types';

const ContactList = ({ contacts, onRemove }) => {
  return (
    <ul className={css.container}>
      {contacts.map(({ id, name, number }, index) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          idx={id}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onRemove: PropTypes.func.isRequired,
};
export default ContactList;

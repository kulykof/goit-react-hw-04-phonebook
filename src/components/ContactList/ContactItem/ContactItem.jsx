import css from './contactItem.module.css';
import { PropTypes } from 'prop-types';

const ContactItem = ({ idx, name, number, onRemove }) => {
  return (
    <li className={css.item}>
      <p>
        {name}: {number}
      </p>
      <button
        type="button"
        className={css.button}
        onClick={() => {
          onRemove(idx);
        }}
      >
        Remove
      </button>
    </li>
  );
};
ContactItem.propTypes = {
  idx: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};
export default ContactItem;

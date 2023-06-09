import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

export default function ContactListItem({ name, number, onClick, id }) {
  return (
    <li>
      <p className={css.text}>{name}</p>
      <p className={css.text}>{number}</p>
      <button className={css.btn} type="button" onClick={() => onClick(id)}>
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
  onClick: PropTypes.func,
  id: PropTypes.number,
};

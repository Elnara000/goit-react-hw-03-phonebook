import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <div className={css.container}>
    <label className={css.label}>
      Filter <input type="text" value={value} onChange={onChange} />
    </label>
  </div>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

import PropTypes from 'prop-types';
import { Label, Input } from './ContactFilter.styled';

export const ContactFilter = ({ value, onChange }) => (
    <Label>
        Find contacts by name
        <Input
            onChange={onChange}
            value={value}
            type="text"
            name="filter"
            title="Find contacts by name"
            />
    </Label>
);

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

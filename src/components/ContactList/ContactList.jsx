import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

export const ContactList = ({ options, onDeleteContact }) => {
    return (
      <List>
        {options.map(({ id, name, number }) => 
            <ContactItem
                key={id}
                id={id}
                name={name}
                number={number}
                del={onDeleteContact}
            />)}
        </List>
    )
}

ContactList.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
}

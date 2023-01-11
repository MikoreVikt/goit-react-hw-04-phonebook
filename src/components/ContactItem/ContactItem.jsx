import PropTypes from 'prop-types';
import { Li, P, Btn } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, del}) => 
        <Li>
            <P>{name}: {number}</P>
            <Btn onClick={() => del(id)}>Delete</Btn>
        </Li>

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    del: PropTypes.func.isRequired,
}

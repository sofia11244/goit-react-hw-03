import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem.jsx';

const ContactList = ({ data }) => {
    return (
        <ul>
            {data.map(({ id, name, number }) => (
                <ContactListItem key={id} id={id} name={name} number={number} />
            ))}
        </ul>
    );
};

ContactList.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
};

export default ContactList;